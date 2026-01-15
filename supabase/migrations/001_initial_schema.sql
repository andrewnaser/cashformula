-- Cash Formula Database Schema
-- Run this in your Supabase SQL editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  email TEXT,
  plan TEXT DEFAULT 'free'
);

-- RLS for profiles
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own profile" 
  ON profiles FOR SELECT 
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" 
  ON profiles FOR UPDATE 
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" 
  ON profiles FOR INSERT 
  WITH CHECK (auth.uid() = id);

-- Trigger to create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email)
  VALUES (NEW.id, NEW.email);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 2. Pages table
CREATE TABLE IF NOT EXISTS pages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  keyword TEXT NOT NULL,
  asin TEXT NOT NULL,
  geo TEXT DEFAULT 'US',
  affiliate_link TEXT NOT NULL,
  public_slug TEXT UNIQUE NOT NULL,
  status TEXT DEFAULT 'published',
  product_data JSONB NOT NULL,
  amazon_reviews JSONB NOT NULL,
  generated_content JSONB NOT NULL,
  title TEXT NOT NULL,
  hero_image TEXT
);

-- RLS for pages
ALTER TABLE pages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own pages" 
  ON pages FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own pages" 
  ON pages FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own pages" 
  ON pages FOR UPDATE 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own pages" 
  ON pages FOR DELETE 
  USING (auth.uid() = user_id);

-- Index for slug lookups
CREATE INDEX IF NOT EXISTS idx_pages_public_slug ON pages(public_slug);
CREATE INDEX IF NOT EXISTS idx_pages_user_id ON pages(user_id);

-- 3. DFY Pages table (Done-For-You)
CREATE TABLE IF NOT EXISTS dfy_pages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  niche TEXT,
  asin TEXT,
  public_slug TEXT UNIQUE,
  product_data JSONB,
  generated_content JSONB,
  hero_image TEXT
);

-- RLS for dfy_pages
ALTER TABLE dfy_pages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "All authenticated users can view dfy_pages" 
  ON dfy_pages FOR SELECT 
  TO authenticated
  USING (true);

-- 4. Viral Posts table
CREATE TABLE IF NOT EXISTS viral_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  page_id UUID REFERENCES pages(id) ON DELETE CASCADE,
  caption TEXT,
  hashtags TEXT,
  image_url TEXT
);

-- RLS for viral_posts
ALTER TABLE viral_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own viral_posts" 
  ON viral_posts FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own viral_posts" 
  ON viral_posts FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own viral_posts" 
  ON viral_posts FOR UPDATE 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own viral_posts" 
  ON viral_posts FOR DELETE 
  USING (auth.uid() = user_id);

-- Index for user lookups
CREATE INDEX IF NOT EXISTS idx_viral_posts_user_id ON viral_posts(user_id);
CREATE INDEX IF NOT EXISTS idx_viral_posts_page_id ON viral_posts(page_id);

-- Function to get public page by slug (bypasses RLS)
CREATE OR REPLACE FUNCTION get_public_page(slug_param TEXT)
RETURNS TABLE (
  id UUID,
  keyword TEXT,
  asin TEXT,
  affiliate_link TEXT,
  public_slug TEXT,
  status TEXT,
  product_data JSONB,
  amazon_reviews JSONB,
  generated_content JSONB,
  title TEXT,
  hero_image TEXT
) 
SECURITY DEFINER
AS $$
BEGIN
  RETURN QUERY 
  SELECT 
    p.id,
    p.keyword,
    p.asin,
    p.affiliate_link,
    p.public_slug,
    p.status,
    p.product_data,
    p.amazon_reviews,
    p.generated_content,
    p.title,
    p.hero_image
  FROM pages p
  WHERE p.public_slug = slug_param AND p.status = 'published';
END;
$$ LANGUAGE plpgsql;

-- Seed some DFY pages for testing
-- Note: hero_image is set to null since Amazon image URLs may be unreliable
-- In production, upload images to your own storage
INSERT INTO dfy_pages (niche, asin, public_slug, product_data, generated_content, hero_image)
VALUES 
  (
    'Kitchen',
    'B08P3XWTJP',
    'dfy-air-fryer-pro',
    '{"title": "Premium Digital Air Fryer 5.8QT", "price": "$89.99", "rating": 4.7, "reviews_count": 12450}',
    '{"title": "The Ultimate Air Fryer That Changed My Kitchen", "overview": "This air fryer is a game-changer. Crispy food with 85% less oil.", "pros": ["Large capacity", "Easy to clean", "Digital controls", "Fast cooking"], "cons": ["Takes counter space"], "sections": [], "faq": []}',
    null
  ),
  (
    'Fitness',
    'B07YFRJJ3V',
    'dfy-smart-scale',
    '{"title": "Smart Body Composition Scale", "price": "$29.99", "rating": 4.6, "reviews_count": 89000}',
    '{"title": "Track Your Fitness Journey Like Never Before", "overview": "This smart scale measures 13 body metrics including weight, BMI, body fat, and more.", "pros": ["Syncs with phone", "Accurate readings", "Sleek design", "Affordable"], "cons": ["Needs app for full features"], "sections": [], "faq": []}',
    null
  ),
  (
    'Tech',
    'B09V3KXJPB',
    'dfy-wireless-earbuds',
    '{"title": "Premium Wireless Earbuds Pro", "price": "$49.99", "rating": 4.5, "reviews_count": 45000}',
    '{"title": "Sound Quality That Rivals the Big Brands", "overview": "These wireless earbuds deliver crystal-clear sound with active noise cancellation at a fraction of the price.", "pros": ["Great sound", "Long battery", "Comfortable fit", "ANC works well"], "cons": ["Case is bulky"], "sections": [], "faq": []}',
    null
  )
ON CONFLICT (public_slug) DO NOTHING;


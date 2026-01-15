-- Enhancement to DFY Pages table for Gold Package
-- Adds category, commission estimates, trending status, and social captions

-- Add new columns to dfy_pages
ALTER TABLE dfy_pages 
ADD COLUMN IF NOT EXISTS category TEXT,
ADD COLUMN IF NOT EXISTS commission_estimate TEXT,
ADD COLUMN IF NOT EXISTS competition_level TEXT DEFAULT 'medium',
ADD COLUMN IF NOT EXISTS is_trending BOOLEAN DEFAULT false,
ADD COLUMN IF NOT EXISTS is_new BOOLEAN DEFAULT false,
ADD COLUMN IF NOT EXISTS social_captions JSONB DEFAULT '[]',
ADD COLUMN IF NOT EXISTS keyword TEXT,
ADD COLUMN IF NOT EXISTS price TEXT,
ADD COLUMN IF NOT EXISTS rating DECIMAL(2,1),
ADD COLUMN IF NOT EXISTS reviews_count INTEGER;

-- Create index for category filtering
CREATE INDEX IF NOT EXISTS idx_dfy_pages_category ON dfy_pages(category);
CREATE INDEX IF NOT EXISTS idx_dfy_pages_is_trending ON dfy_pages(is_trending);

-- Clear existing test data to start fresh
TRUNCATE TABLE dfy_pages;

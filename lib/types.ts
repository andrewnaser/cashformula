// Database types
export interface Profile {
  id: string;
  created_at: string;
  email: string | null;
  plan: string;
}

export interface Page {
  id: string;
  user_id: string;
  created_at: string;
  updated_at: string;
  keyword: string;
  asin: string;
  geo: string;
  affiliate_link: string;
  public_slug: string;
  status: 'draft' | 'published';
  page_type?: string; // 'single_product' or 'comparison'
  product_data: ProductData | any; // Can be extended for comparison pages
  amazon_reviews: AmazonReview[];
  generated_content: GeneratedContent | any; // Can be extended for comparison pages
  title: string;
  hero_image: string | null;
  conversion_boosters?: string[];
}

export interface DfyPage {
  id: string;
  created_at: string;
  niche: string | null;
  asin: string | null;
  public_slug: string | null;
  product_data: ProductData | null;
  generated_content: GeneratedContent | null;
  hero_image: string | null;
}

export interface ViralPost {
  id: string;
  user_id: string;
  created_at: string;
  page_id: string;
  caption: string | null;
  hashtags: string | null;
  image_url: string | null;
}

// Product types
export interface ProductData {
  title: string;
  price?: string;
  rating?: number;
  reviews_count?: number;
  asin?: string;
  image?: string;
  images?: string[];
  features?: string[];
  description?: string;
}

export interface AmazonReview {
  id?: string;
  title?: string;
  text: string;
  rating: number;
  author?: string;
  date?: string;
  verified?: boolean;
}

export interface GeneratedContent {
  title: string;
  overview: string;
  pros: string[];
  cons: string[];
  sections: ContentSection[];
  faq: FaqItem[];
  recommended_copy?: string;
}

export interface ContentSection {
  heading: string;
  content: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

// API Response types
export interface AmazonSearchResult {
  asin: string;
  title: string;
  image: string;
  price?: string;
  rating?: number;
  reviews_count?: number;
}

export interface AmazonSearchResponse {
  status: string;
  data?: {
    products?: AmazonSearchResult[];
  };
}

export interface AmazonReviewsResponse {
  status: string;
  data?: {
    reviews?: Array<{
      id?: string;
      title?: string;
      review?: string;
      rating?: string | number;
      author?: string;
      date?: string;
      verified_purchase?: boolean;
    }>;
  };
}

// Proof data types
export interface ProofItem {
  id: string;
  name: string;
  amount: string;
  product: string;
  time: string;
  avatar?: string;
}

export interface TickerItem {
  id: string;
  text: string;
  icon?: string;
}


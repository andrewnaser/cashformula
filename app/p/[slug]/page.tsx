import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';
import PublicPageContent from './PublicPageContent';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Create a Supabase client with service role for public page access
function getSupabaseAdmin() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  
  return createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}

async function getPageData(slug: string) {
  console.log('=== FETCHING PAGE ===');
  console.log('Slug:', slug);
  console.log('SUPABASE_URL:', process.env.NEXT_PUBLIC_SUPABASE_URL ? 'SET' : 'NOT SET');
  console.log('SERVICE_KEY:', process.env.SUPABASE_SERVICE_ROLE_KEY ? 'SET (length: ' + process.env.SUPABASE_SERVICE_ROLE_KEY.length + ')' : 'NOT SET');
  
  try {
    const supabase = getSupabaseAdmin();

    // First, let's see ALL pages in the database
    const { data: allPages, error: allError } = await supabase
      .from('pages')
      .select('public_slug, status, title')
      .limit(10);
    
    console.log('All pages in DB:', allPages);
    if (allError) console.log('Error fetching all pages:', allError);

    const { data: page, error } = await supabase
      .from('pages')
      .select('*')
      .eq('public_slug', slug)
      .eq('status', 'published')
      .single();

    console.log('Query result - Page:', page ? 'FOUND' : 'NOT FOUND');
    console.log('Query result - Error:', error);

    if (error || !page) {
      console.error('Page fetch error:', error);
      return null;
    }

    return {
      id: page.id,
      title: page.title,
      keyword: page.keyword,
      asin: page.asin,
      affiliate_link: page.affiliate_link,
      public_slug: page.public_slug,
      product_data: page.product_data,
      amazon_reviews: page.amazon_reviews,
      generated_content: page.generated_content,
      hero_image: page.hero_image,
      page_type: page.page_type || 'single_product',
      conversion_boosters: page.conversion_boosters || [],
    };
  } catch (error) {
    console.error('Get page CATCH error:', error);
    return null;
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = await getPageData(slug);

  if (!page) {
    return {
      title: 'Page Not Found',
    };
  }

  return {
    title: page.title,
    description: page.generated_content?.overview?.slice(0, 160) || 'Product Review',
    openGraph: {
      title: page.title,
      description: page.generated_content?.overview?.slice(0, 160),
      images: page.hero_image ? [page.hero_image] : [],
    },
  };
}

export default async function PublicPage({ params }: PageProps) {
  const { slug } = await params;
  const page = await getPageData(slug);

  if (!page) {
    notFound();
  }

  return <PublicPageContent page={page} />;
}

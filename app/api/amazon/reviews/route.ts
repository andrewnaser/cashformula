import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { asinSchema } from '@/lib/validations';
import { checkRateLimit } from '@/lib/utils';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    // Auth check
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Rate limit
    const rateLimit = checkRateLimit(user.id, 30, 60000);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Try again later.' },
        { status: 429 }
      );
    }

    // Validate ASIN
    const { searchParams } = new URL(request.url);
    const asin = searchParams.get('asin');
    
    const validation = asinSchema.safeParse({ asin });
    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.errors[0].message },
        { status: 400 }
      );
    }

    // Call RapidAPI
    const rapidApiKey = process.env.RAPIDAPI_KEY;
    const rapidApiHost = process.env.RAPIDAPI_AMAZON_HOST || 'amazon-online-data-api.p.rapidapi.com';

    if (!rapidApiKey) {
      return NextResponse.json(
        { error: 'API configuration error' },
        { status: 500 }
      );
    }

    const response = await fetch(
      `https://${rapidApiHost}/v2/product-reviews?geo=US&page=1&asin=${asin}&filter_by_star=5&media_reviews_only=false`,
      {
        headers: {
          'x-rapidapi-key': rapidApiKey,
          'x-rapidapi-host': rapidApiHost,
        },
      }
    );

    if (!response.ok) {
      console.error('Amazon Reviews API error:', response.status, await response.text());
      return NextResponse.json(
        { error: 'Failed to fetch reviews' },
        { status: response.status }
      );
    }

    const data = await response.json();
    
    // Transform and return reviews
    const reviews = data?.data?.reviews || data?.reviews || [];
    
    return NextResponse.json({
      success: true,
      reviews: reviews.slice(0, 10).map((r: Record<string, unknown>) => ({
        id: r.id,
        title: r.title,
        text: r.review || r.text || r.body,
        rating: typeof r.rating === 'string' ? parseFloat(r.rating) : r.rating || 5,
        author: r.author || r.reviewer || r.name,
        date: r.date,
        verified: r.verified_purchase || r.verified,
      })),
    });
  } catch (error) {
    console.error('Reviews error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}


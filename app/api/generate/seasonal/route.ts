import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { seasonalCalendar } from '@/lib/platinum-data';

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();

    // Check authentication
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { month, productIndex, asin, affiliateLink, boosters = [] } = body;

    // Validate required fields
    if (!month || productIndex === undefined || !asin || !affiliateLink) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Find the seasonal promotion data
    const seasonal = seasonalCalendar.find((s) => s.month === month);

    if (!seasonal) {
      return NextResponse.json(
        { error: 'Seasonal data not found' },
        { status: 404 }
      );
    }

    if (productIndex >= seasonal.topProducts.length) {
      return NextResponse.json(
        { error: 'Invalid product index' },
        { status: 400 }
      );
    }

    const productName = seasonal.topProducts[productIndex];

    // Generate unique slug
    const baseSlug = `${seasonal.month.toLowerCase()}-${productName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')}`;
    const timestamp = Date.now();
    const publicSlug = `${baseSlug}-${timestamp}`;

    // Generate title
    const title = `${productName} - Perfect for ${seasonal.season}`;

    // Generate comprehensive FAQ for seasonal pages
    const faq = [
      {
        question: `Why is ${productName} perfect for ${seasonal.season}?`,
        answer: `${productName} is ideal during ${seasonal.month} because it aligns perfectly with ${seasonal.theme.toLowerCase()}. Many customers specifically search for this product during this time, making it a top seller.`
      },
      {
        question: 'Is this a good time to buy?',
        answer: `Absolutely! ${seasonal.month} is one of the best times to purchase ${productName}. You'll often find special promotions and deals, plus fast shipping to enjoy it during the season.`
      },
      {
        question: 'Will this make a good gift?',
        answer: `Yes! ${productName} is one of the most popular gifts during ${seasonal.season}. It's highly rated and loved by recipients of all ages.`
      },
      {
        question: 'How fast will my order arrive?',
        answer: `With Amazon Prime, most orders arrive within 1-2 business days. Standard shipping typically takes 3-5 days. Order early during peak seasons to ensure timely delivery!`
      },
      {
        question: 'What if I need to return it?',
        answer: `Amazon offers hassle-free returns. If you're not satisfied, you can return most items within 30 days for a full refund.`
      }
    ];

    // Generate rich overview
    const overview = `Looking for the perfect ${productName} this ${seasonal.season}? You've come to the right place! ${seasonal.theme} is the perfect time to invest in quality products that enhance your experience. This ${productName} has earned thousands of positive reviews from satisfied customers.`;

    // Generate sections
    const sections = [
      {
        heading: `Why ${productName} for ${seasonal.month}?`,
        content: `${seasonal.month} brings ${seasonal.theme.toLowerCase()}, and there's no better companion than a quality ${productName}. Whether you're treating yourself or shopping for loved ones, this product delivers exceptional value and satisfaction.`
      },
      {
        heading: 'What Customers Are Saying',
        content: `Thousands of verified buyers have rated this product highly. Common praise includes excellent quality, fast delivery, and great value for money. Many customers return year after year during ${seasonal.season} to purchase this as a gift or personal treat.`
      }
    ];

    // Generate pros and cons
    const pros = [
      `Perfect for ${seasonal.season}`,
      'Highly rated by customers',
      'Fast Prime shipping available',
      'Great gift option',
      'Excellent value'
    ];

    const cons = [
      'May sell out during peak season'
    ];

    // Prepare page data
    const pageData = {
      user_id: user.id,
      title: title,
      keyword: seasonal.theme,
      asin: asin,
      geo: 'US',
      affiliate_link: affiliateLink,
      public_slug: publicSlug,
      status: 'published',
      page_type: 'seasonal',
      hero_image: null,
      conversion_boosters: boosters,
      
      // Product data
      product_data: {
        productName: productName,
        month: seasonal.month,
        season: seasonal.season,
        theme: seasonal.theme,
        emoji: seasonal.emoji,
        title: productName,
        price: '$29.99',
        rating: 4.7,
        reviews_count: 5000,
      },

      // Generated content with FULL FAQ
      generated_content: {
        type: 'seasonal',
        title: title,
        overview: overview,
        intro: `Perfect for ${seasonal.season}, this ${productName} is ideal for ${seasonal.theme.toLowerCase()}. ${seasonal.tips[0] || ''}`,
        sections: sections,
        pros: pros,
        cons: cons,
        faq: faq,
        postIdeas: seasonal.postIdeas,
        tips: seasonal.tips,
        conclusion: `Don't miss out on this ${seasonal.season} essential! The ${productName} is a top choice during ${seasonal.month}. Order now to ensure delivery in time for ${seasonal.theme.toLowerCase()}.`
      },

      // Empty amazon_reviews for seasonal pages
      amazon_reviews: [],
    };

    // Insert page into database
    const { data: page, error: insertError } = await supabase
      .from('pages')
      .insert(pageData)
      .select()
      .single();

    if (insertError) {
      console.error('Insert error:', insertError);
      return NextResponse.json(
        { error: 'Failed to create page', details: insertError.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      page: {
        id: page.id,
        slug: page.public_slug,
        url: `/p/${page.public_slug}`,
      },
    });
  } catch (error) {
    console.error('Generate seasonal page error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

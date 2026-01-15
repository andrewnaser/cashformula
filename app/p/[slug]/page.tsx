import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PublicPageContent from './PublicPageContent';

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function getPageData(slug: string) {
  try {
    // Call our API route which uses service role
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/pages/${slug}`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data.page;
  } catch {
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


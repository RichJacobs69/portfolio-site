import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getWritingBySlug, getAllWritingSlugs, writingExists } from '@/lib/markdown';
import { writingPieces } from '@/lib/writingData';
import FrameworkTable from '@/app/components/FrameworkTable';
import ProjectComparison from '@/app/components/ProjectComparison';

// Generate static params for all writing pieces
export async function generateStaticParams() {
  const slugs = getAllWritingSlugs();
  return slugs.map((item) => ({
    slug: item.slug,
  }));
}

export default async function WritingArticlePage({
  params
}: {
  params: Promise<{ slug: string }> // ← Changed: params is now a Promise
}) {
  // Await params before using it
  const { slug } = await params;

  // Get metadata from writingData
  const piece = writingPieces.find(p => p.slug === slug);

  if (!piece) {
    notFound();
  }

  // Try to get markdown content
  const markdownContent = writingExists(slug)
    ? await getWritingBySlug(slug)
    : null;

  // Parse component placeholders from HTML
  const parseHtmlWithComponents = (html: string) => {
    const parts: Array<{ type: 'html' | 'component'; content: string; props?: any }> = [];
    const regex = /<div class="component-placeholder" data-component="([\w-]+)" data-component-data="([^"]+)"><\/div>/g;
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(html)) !== null) {
      // Add HTML before this component
      if (match.index > lastIndex) {
        parts.push({
          type: 'html',
          content: html.slice(lastIndex, match.index),
        });
      }

      // Add component
      const componentName = match[1];
      const encodedData = match[2];
      try {
        const data = JSON.parse(Buffer.from(encodedData, 'base64').toString());
        parts.push({
          type: 'component',
          content: componentName,
          props: data,
        });
      } catch (error) {
        console.error(`Error decoding component data:`, error);
      }

      lastIndex = match.index + match[0].length;
    }

    // Add remaining HTML
    if (lastIndex < html.length) {
      parts.push({
        type: 'html',
        content: html.slice(lastIndex),
      });
    }

    return parts;
  };

  const contentParts = markdownContent ? parseHtmlWithComponents(markdownContent.contentHtml) : [];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      <div className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-6 py-16">

        {/* Back Button */}
        <Link
          href="/writing"
          className="inline-flex items-center text-gray-400 hover:text-[#60a5fa] mb-8 transition-colors"
        >
          ← Back to Writing
        </Link>

        {/* Article Header */}
        <header className="mb-12">


          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {piece.title}
          </h1>

          {/* Meta Info */}
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>{piece.publishedDate || 'Coming Soon'}</span>
            <span>•</span>
            <span>{piece.readingTime} read</span>
            {piece.outcome && (
              <>
                <span>•</span>
                <span className="text-[#60a5fa] font-semibold">{piece.outcome}</span>
              </>
            )}
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-invert prose-lg max-w-none">
          {markdownContent ? (
            <>
              {contentParts.map((part, idx) => {
                if (part.type === 'html') {
                  return (
                    <div
                      key={idx}
                      className="markdown-content"
                      dangerouslySetInnerHTML={{ __html: part.content }}
                    />
                  );
                } else if (part.type === 'component') {
                  if (part.content === 'framework-table') {
                    return <FrameworkTable key={idx} {...part.props} />;
                  } else if (part.content === 'project-comparison') {
                    return <ProjectComparison key={idx} {...part.props} />;
                  }
                }
                return null;
              })}
            </>
          ) : (
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Coming Soon</h2>
              <p className="text-gray-400 mb-6">
                This {piece.type === 'case-study' ? 'case study' : 'article'} is currently being written.
              </p>
              <p className="text-sm text-gray-500">
                Check back soon, or{' '}
                <Link href="/writing" className="text-[#60a5fa] hover:underline">
                  explore other writing
                </Link>
                .
              </p>
            </div>
          )}
        </article>

      </div>
    </div>
  );
}
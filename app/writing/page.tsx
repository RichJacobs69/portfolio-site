import Link from 'next/link';
import { writingPieces, caseStudies, articles } from '@/lib/writingData';

export default function WritingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-20">
        
        {/* Page Header */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Writing</h2>
          <p className="text-gray-400 text-lg">
            Case studies from real product work, plus frameworks and lessons learned along the way.
          </p>
        </div>

        {/* SECTION 1: CASE STUDIES */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8">Case Studies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((piece) => (
              <Link 
                key={piece.slug} 
                href={`/writing/${piece.slug}`}
                className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#60a5fa] transition-colors group"
              >
                
                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-[#60a5fa] transition-colors">
                  {piece.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {piece.description}
                </p>

                {/* Outcome and Meta */}
                <div className="flex items-center justify-between pt-4 border-t border-[#2a2a2a]">
                  <div className="flex flex-col">
                    <div className="text-2xl font-bold text-[#60a5fa]">
                      {piece.outcome}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      Coming Soon • {piece.readingTime} read
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">Read case study →</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* SECTION 2: ARTICLES & FRAMEWORKS */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Articles & Frameworks</h2>
          
          <div className="space-y-4">
            {articles.map((piece) => (
              <Link
                key={piece.slug}
                href={`/writing/${piece.slug}`}
                className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-5 hover:border-[#60a5fa] transition-colors group block"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    {/* Tag and Meta */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs px-2 py-1 bg-[#2a2a2a] rounded text-gray-400">
                        {piece.tag}
                      </span>
                      <span className="text-xs text-gray-500">
                        Coming Soon • {piece.readingTime} read
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-[#60a5fa] transition-colors">
                      {piece.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-400">
                      {piece.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="ml-6 text-gray-500 group-hover:text-[#60a5fa] transition-colors">
                    →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
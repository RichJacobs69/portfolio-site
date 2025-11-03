import Link from 'next/link';
import { caseStudies, articles } from '@/lib/writingData';

export default function WritingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
    {/* Hero Header - ENHANCED */}
<div className="relative w-full overflow-hidden">
  {/* Full-width gradient background */}
  <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/20 via-transparent to-purple-950/20"></div>
  
  {/* Content constrained */}
  <div className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-6 py-15 relative z-10">
    <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
      <span className="gradient-text">Writing</span>
    </h1>
    <p className="text-xl text-gray-300 leading-relaxed animate-fade-in-up-delay-1">
      Case studies from real product work, plus frameworks and lessons learned along the way.
    </p>
  </div>
</div>

      <div className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-6 pb-20 py-10">
        {/* SECTION 1: CASE STUDIES - ENHANCED */}
        <section className="mb-24 border-gray-800/50">
          <h2 className="text-4xl font-bold mb-12 gradient-text">Case Studies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((piece) => (
              <Link 
                key={piece.slug} 
                href={`/writing/${piece.slug}`}
                className="bg-[#1a1a1a] border-gradient rounded-xl p-8 card-hover group"
              >
                {/* Title */}
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-indigo-400 transition-colors">
                  {piece.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {piece.description}
                </p>

                {/* Outcome and Meta */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-800">
                  <div className="flex flex-col">
                    <div className="text-3xl font-bold gradient-text-blue">
                      {piece.outcome}
                    </div>
                    <div className="text-xs text-gray-500 mt-2 font-medium">
                      Coming Soon • {piece.readingTime} read
                    </div>
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-indigo-400 transition-colors">
                    Read case study →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* SECTION 2: ARTICLES & FRAMEWORKS - ENHANCED */}
        <section>
          <h2 className="text-4xl font-bold mb-12 gradient-text">Articles & Frameworks</h2>
          
          <div className="space-y-4">
            {articles.map((piece) => (
              <Link
                key={piece.slug}
                href={`/writing/${piece.slug}`}
                className="bg-[#1a1a1a] border-gradient rounded-xl p-6 card-hover group block"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    {/* Tag and Meta */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs px-3 py-1 bg-indigo-500/10 rounded-full text-indigo-300 border border-indigo-500/20 font-medium">
                        {piece.tag}
                      </span>
                      <span className="text-xs text-gray-500 font-medium">
                        Coming Soon • {piece.readingTime} read
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-indigo-400 transition-colors">
                      {piece.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed">
                      {piece.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="ml-8 text-2xl text-gray-500 group-hover:text-indigo-400 transition-colors group-hover:translate-x-1 transform duration-300">
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

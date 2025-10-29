export default function Writing() {
    return (
      <main className="min-h-screen bg-background text-foreground">
        {/* Header */}
        <header className="border-b border-gray-800">
          <nav className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
            <a href="/" className="text-xl font-bold hover:text-gray-400">Rich Jacobs</a>
            <div className="flex gap-6">
              <a href="/" className="hover:text-gray-400">Home</a>
              <a href="/cv" className="hover:text-gray-400">CV</a>
              <a href="/writing" className="hover:text-gray-400">Writing</a>
              <a href="/#contact" className="hover:text-gray-400">Contact</a>
            </div>
          </nav>
        </header>
         {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-4">Rich Jacobs</h1>
        <p className="text-xl text-gray-400 mb-2">
          Senior Product Manager. Building data & AI products. Learning by doing.
        </p>
      </section>
  
        {/* Writing Content */}
        <section className="max-w-4xl mx-auto px-6 py-20 border-t border-gray-800">
          <h2 className="text-3xl font-bold mb-12">Writing</h2>
          <p className="text-gray-400 mb-12 text-lg">
            Thoughts on data products, AI integration, and product leadership
          </p>
  
          {/* Coming Soon Message */}
          <div className="border border-gray-800 rounded-lg p-12 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-white">Coming Soon</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm currently focused on building technical products and will be sharing insights about 
                integrating AI into analytics products, lessons from managing data teams, and my journey 
                learning to code as a product manager.
              </p>
              <p className="text-gray-500 text-sm">
                Check back soon for articles on data product strategy, LLM integration patterns, and more.
              </p>
            </div>
          </div>
  
          {/* Optional: Placeholder for future posts */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-12">Upcoming Topics</h2>
            <div className="grid gap-6">
              <div className="border border-gray-800 rounded-lg p-6 opacity-50">
                <h3 className="text-xl font-semibold mb-2 text-white">Building a Job Aggregator with LLMs</h3>
                <p className="text-gray-400 mb-3">
                  How I built a job market analyzer using data pipelines and LLM classification
                </p>
                <span className="text-sm text-gray-500">Coming Soon</span>
              </div>
  
              <div className="border border-gray-800 rounded-lg p-6 opacity-50">
                <h3 className="text-xl font-semibold mb-2 text-white">From Managing to Building</h3>
                <p className="text-gray-400 mb-3">
                  What I learned building products alongside the teams I lead
                </p>
                <span className="text-sm text-gray-500">Coming Soon</span>
              </div>
  
              <div className="border border-gray-800 rounded-lg p-6 opacity-50">
                <h3 className="text-xl font-semibold mb-2 text-white">Data Product Strategy for Series B/C</h3>
                <p className="text-gray-400 mb-3">
                  Balancing speed with quality when building data platforms at scale
                </p>
                <span className="text-sm text-gray-500">Coming Soon</span>
              </div>
            </div>
          </div>
        </section>
        {/* Footer / Contact Section */}
<footer id="contact" className="max-w-4xl mx-auto px-6 py-20 border-t border-gray-800">
  <div className="max-w-3xl">
    <h2 className="text-3xl font-bold mb-12">Get In Touch</h2>
    <p className="text-gray-300 text-lg mb-8">
      I'm currently exploring opportunities in AI product management. 
      Let's connect if you're working on real-world problems that can genuinely be solved with data and AI.
    </p>
    
    <div className="flex gap-6 mb-12">
  <a 
    href="mailto:rich@richjacobs.me" 
    className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
  >
    Email Me
  </a>
  <a 
    href="https://www.linkedin.com/in/rjacobsuk" 
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
  >
    LinkedIn
  </a>
  <a 
    href="https://github.com/RichJacobs69" 
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
  >
    GitHub
  </a>
</div>

    <div className="text-gray-500 text-sm">
      <p>© 2025 Rich Jacobs. Built with Next.js and Tailwind CSS.</p>
    </div>
  </div>
</footer>
      </main>
    );
  }
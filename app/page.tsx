import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section - ENHANCED */}
      <section className="relative w-full overflow-hidden">
        {/* Full-width gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-lime-950/20 via-transparent to-emerald-950/20"></div>
        
        {/* Content constrained */}
        <div className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-6 py-15 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
            <span className="gradient-text">Data geek at heart</span>, product manager by profession
          </h1>
          <p className="text-xl text-gray-300 mb-4 leading-relaxed animate-fade-in-up-delay-1">
            Senior Product Manager specialising in data intensive products. Currently learning to code on the side whilst building technical products that deliver real outcomes.
          </p>
          <div className="flex gap-4 mt-8 animate-fade-in-up-delay-2">
            <a
              href="#contact"
              className="px-8 py-3 bg-lime-500 hover:bg-lime-600 rounded-lg transition-all duration-300 font-medium text-center text-black"
            >
              Get in touch
            </a>
            <Link
              href="/writing"
              className="px-8 py-3 bg-lime-500 hover:bg-lime-600 rounded-lg transition-all duration-300 font-medium text-center text-black"
            >
              My Writing
            </Link>
          </div>
        </div>
        {/* RIGHT: Your Photo */}
  <div className="order-1 lg:order-2 relative animate-fade-in-up-delay-1">
    <div className="relative max-w-xs mx-auto lg:max-w-md lg:ml-auto">
      {/* Glow effect behind image */}
      <div className="absolute inset-0 bg-gradient-to-br from-lime-500/30 to-emerald-500/30 rounded-2xl blur-3xl transform scale-105"></div>

      {/* Gradient border wrapper */}
      <div className="relative p-1 bg-gradient-to-br from-lime-500 via-emerald-500 to-lime-500 rounded-2xl">
        <img 
          src="/images/rich-hero.jpg" 
          alt="Rich Jacobs"
          className="relative rounded-2xl w-full h-auto object-cover shadow-2xl bg-[#0a0a0a]"
        />
      </div>
    </div>
  </div>
  {/* Photo section ends */}
        </div>
        </div>
      </section>

      {/* Personal README Section - ENHANCED */}
      <section className="relative w-full border-t border-gray-800/50 overflow-hidden">
        {/* Full-width subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-lime-950/5 via-transparent to-transparent"></div>
        
        <div className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-6 py-10 relative z-10">
          <div className="max-w-6xl">
            <h2 className="text-4xl font-bold mb-12 gradient-text">About Me</h2>
            
            <div className="space-y-12 text-lg leading-relaxed">
              <p className="text-gray-300">
                Hey there! My name&apos;s Rich and I specialise in data product management and data strategy. 
                Give me genuine, ambiguous problems with data and AI and I&apos;ll give you bundles of energy. I&apos;m currently building  
                products while learning to code, combining years of technical product thinking with a desire to get back to hands-on development.
              </p>
              {/* Enhanced card design with gradient border */}
              <div className="bg-[#1a1a1a] border-gradient rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-6 text-white">How I Work</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="pl-6 border-accent hover:text-white transition-colors">
                    I love context and some time to think through problems so that we can execute in the right way
                  </li>
                  <li className="pl-6 border-accent hover:text-white transition-colors">
                    I ask questions early to make sure we&apos;re solving the critical problems, not the loudest ones
                  </li>
                  <li className="pl-6 border-accent hover:text-white transition-colors">
                    I create safety for teams to own hard problems, disagree constructively, and grow through solving them together
                  </li>
                  <li className="pl-6 border-accent hover:text-white transition-colors">
                    I&apos;m a natural fixer and love jumping into the weeds, even when I should let others own the problem - help me spot when I&apos;m doing this
                  </li>
                </ul>
              </div>

              <div className="bg-[#1a1a1a] border-gradient rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-6 text-white">What I&apos;m Building</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="pl-6 border-accent hover:text-white transition-colors">
                    For the past 8 years, I&apos;ve been creating technical products that solve genuine problems with data. Now I&apos;m learning to build alongside the teams I lead
                  </li>
                  <li className="pl-6 border-accent hover:text-white transition-colors">
                    I started with this portfolio site to learn coding fundamentals, now I&apos;m building a job aggregator using LLM classification and a complete 
                    data pipeline to analyse market demand for job seekers
                  </li>
                  <li className="pl-6 border-accent hover:text-white transition-colors">
                    My focus is on analytics, and self-service data, where my experience is deepest and AI automation can add real value
                  </li>
                </ul>
              </div>

              <div className="bg-[#1a1a1a] border-gradient rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-6 text-white">Values</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="pl-6 border-accent hover:text-white transition-colors">
                    <strong className="text-white">Learn through iteration</strong> - the best insights come from shipping and measuring, not endless planning
                  </li>
                  <li className="pl-6 border-accent hover:text-white transition-colors">
                    <strong className="text-white">Lead with empathy</strong> - understand the person and their context before jumping to solutions
                  </li>
                  <li className="pl-6 border-accent hover:text-white transition-colors">
                    <strong className="text-white">Execute quickly with a strategic filter</strong> - if it doesn&apos;t move us toward our goal, why are we building it?
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Highlights Section - ENHANCED */}
      <section className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-6 py-10 border-t border-gray-800/50">
        <div className="max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 gradient-text">Experience Highlights</h2>
          
          <div className="space-y-8">
            {/* Momentus - Enhanced card */}
            <div className="bg-[#1a1a1a] border-gradient rounded-xl p-8 card-hover">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">Senior Product Manager</h3>
                  <p className="text-lime-400 font-medium">Momentus Technologies</p>
                </div>
                <span className="text-gray-500 text-sm">Mar 2024 - Oct 2025</span>
              </div>
              <p className="text-gray-400 mb-6 text-sm">Global Event Management SaaS, 60K+ users, 50 countries</p>
              <ul className="space-y-3 text-gray-300">
                <li className="pl-6 border-accent hover:text-white transition-colors">
                  Launched customer data strategy and embedded analytics products, targeting <strong className="text-white">$2.5M in ARR</strong> and across 100 enterprise clients
                </li>
                <li className="pl-6 border-accent hover:text-white transition-colors">
                  Developed customer benchmarking and classification tools with AI driven event taxonomy & classifier exceeding <strong className="text-white">0.85 F1 scoring</strong>
                </li>
                <li className="pl-6 border-accent hover:text-white transition-colors">
                  Drove internal AI enablement using LLM tools, reducing answer discovery time by <strong className="text-white">25%</strong>
                </li>
              </ul>
            </div>

            {/* Pollinate - Enhanced card */}
            <div className="bg-[#1a1a1a] border-gradient rounded-xl p-8 card-hover">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">Data Platform & Analytics Product Lead</h3>
                  <p className="text-lime-400 font-medium">Pollinate</p>
                </div>
                <span className="text-gray-500 text-sm">Aug 2022 - Mar 2024</span>
              </div>
              <p className="text-gray-400 mb-6 text-sm">Series C Fintech, 200+ employees, £70M+ raised</p>
              <ul className="space-y-3 text-gray-300">
                <li className="pl-6 border-accent hover:text-white transition-colors">
                  Led data product strategy, whilst managing <strong className="text-white">15-member</strong> cross-functional data organization, 5 direct reports (PMs, Data Scientists)
                </li>
                <li className="pl-6 border-accent hover:text-white transition-colors">
                  Achieved <strong className="text-white">£100K+ in annual savings</strong> through platform restructuring
                </li>
                <li className="pl-6 border-accent hover:text-white transition-colors">
                  Increased product activation from <strong className="text-white">8% to 57%</strong> through experimentation
                </li>
              </ul>
            </div>

            {/* Pollen - Enhanced card */}
            <div className="bg-[#1a1a1a] border-gradient rounded-xl p-8 card-hover">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">Product Lead, Data & Analytics</h3>
                  <p className="text-lime-400 font-medium">Pollen</p>
                </div>
                <span className="text-gray-500 text-sm">Aug 2020 - Aug 2022</span>
              </div>
              <p className="text-gray-400 mb-6 text-sm">Series C D2C Events & Travel Platform, £40M+ GMV</p>
              <ul className="space-y-3 text-gray-300">
                <li className="pl-6 border-accent hover:text-white transition-colors">
                  Led and helped build <strong className="text-white">16-person</strong> central data team delivering analytics across 8 experience verticals
                </li>
                <li className="pl-6 border-accent hover:text-white transition-colors">
                  Developed CX headcount planning model, improving margins by <strong className="text-white">15%</strong>
                </li>
                <li className="pl-6 border-accent hover:text-white transition-colors">
                  Increased data platform adoption from 30 data professionals to over <strong className="text-white">400 general users</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Tech Stack Section - ENHANCED */}
      <section className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-6 py-10 border-t border-gray-800/50">
        <div className="max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 gradient-text">Skills & Tech Stack</h2>
          
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Core Competencies</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-[#1a1a1a] border border-lime-500/20 rounded-lg text-gray-300 hover:border-lime-500/40 hover:bg-lime-500/5 transition-all">Data Product Strategy</span>
                <span className="px-4 py-2 bg-[#1a1a1a] border border-lime-500/20 rounded-lg text-gray-300 hover:border-lime-500/40 hover:bg-lime-500/5 transition-all">Modern Data Stack Architecture</span>
                <span className="px-4 py-2 bg-[#1a1a1a] border border-lime-500/20 rounded-lg text-gray-300 hover:border-lime-500/40 hover:bg-lime-500/5 transition-all">ML & LLM Integration</span>
                <span className="px-4 py-2 bg-[#1a1a1a] border border-lime-500/20 rounded-lg text-gray-300 hover:border-lime-500/40 hover:bg-lime-500/5 transition-all">Self-Service Analytics</span>
                <span className="px-4 py-2 bg-[#1a1a1a] border border-lime-500/20 rounded-lg text-gray-300 hover:border-lime-500/40 hover:bg-lime-500/5 transition-all">Embedded Analytics</span>
                <span className="px-4 py-2 bg-[#1a1a1a] border border-lime-500/20 rounded-lg text-gray-300 hover:border-lime-500/40 hover:bg-lime-500/5 transition-all">Data Governance</span>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Data & Analytics</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-[#1a1a1a] border border-emerald-500/20 rounded-lg text-gray-300 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all">Snowflake</span>
                <span className="px-4 py-2 bg-[#1a1a1a] border border-emerald-500/20 rounded-lg text-gray-300 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all">dbt</span>
                <span className="px-4 py-2 bg-[#1a1a1a] border border-emerald-500/20 rounded-lg text-gray-300 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all">Databricks</span>
                <span className="px-4 py-2 bg-[#1a1a1a] border border-emerald-500/20 rounded-lg text-gray-300 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all">Tableau</span>
                <span className="px-4 py-2 bg-[#1a1a1a] border border-emerald-500/20 rounded-lg text-gray-300 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all">Looker</span>
                <span className="px-4 py-2 bg-[#1a1a1a] border border-emerald-500/20 rounded-lg text-gray-300 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all">Power BI</span>
                <span className="px-4 py-2 bg-[#1a1a1a] border border-emerald-500/20 rounded-lg text-gray-300 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all">Amplitude</span>
                <span className="px-4 py-2 bg-[#1a1a1a] border border-emerald-500/20 rounded-lg text-gray-300 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all">Mixpanel</span>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">AI & Development</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-[#1a1a1a] border border-cyan-500/20 rounded-lg text-gray-300 hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all">OpenAI GPT</span>
                <span className="px-4 py-2 bg-[#1a1a1a] border border-cyan-500/20 rounded-lg text-gray-300 hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all">Claude</span>
                <span className="px-4 py-2 bg-[#1a1a1a] border border-cyan-500/20 rounded-lg text-gray-300 hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all">Python</span>
                <span className="px-4 py-2 bg-[#1a1a1a] border border-cyan-500/20 rounded-lg text-gray-300 hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all">Next.js</span>
                <span className="px-4 py-2 bg-[#1a1a1a] border border-cyan-500/20 rounded-lg text-gray-300 hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all">React</span>
                <span className="px-4 py-2 bg-[#1a1a1a] border border-cyan-500/20 rounded-lg text-gray-300 hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all">Cursor</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section - ENHANCED */}
      <section className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-6 py-10 border-t border-gray-800/50">
        <div className="max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 gradient-text">Featured Projects</h2>
          
          <div className="grid gap-6">
            {/* Project 1 - Active */}
            <div className="bg-[#1a1a1a] border-gradient rounded-xl p-8 card-hover">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-semibold text-white">Job Market Aggregator</h3>
                <span className="text-xs font-semibold px-3 py-1 bg-lime-500/10 text-lime-400 rounded-full border border-lime-500/20">In Progress</span>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                LLM-powered job aggregator using data pipelines and classification to analyze market demand patterns
              </p>
              <div className="flex gap-2 mt-4">
                <span className="text-xs px-3 py-1 bg-lime-500/10 text-lime-300 rounded-full border border-lime-500/20">LLM</span>
                <span className="text-xs px-3 py-1 bg-lime-500/10 text-lime-300 rounded-full border border-lime-500/20">Data Pipelines</span>
              </div>
            </div>

            {/* Project 2 - Placeholder */}
            <div className="bg-[#1a1a1a]/50 border border-gray-800 rounded-xl p-8 opacity-60">
              <h3 className="text-xl font-semibold mb-2 text-white">Project 2</h3>
              <p className="text-gray-400 mb-4">
                Future AI-native analytics project
              </p>
              <span className="text-sm text-gray-500">Coming Soon</span>
            </div>

            {/* Project 3 - Placeholder */}
            <div className="bg-[#1a1a1a]/50 border border-gray-800 rounded-xl p-8 opacity-60">
              <h3 className="text-xl font-semibold mb-2 text-white">Project 3</h3>
              <p className="text-gray-400 mb-4">
                Future AI-native analytics project
              </p>
              <span className="text-sm text-gray-500">Coming Soon</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

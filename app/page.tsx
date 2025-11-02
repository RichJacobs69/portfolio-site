export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-20">
  <h1 className="text-5xl font-bold mb-6 leading-tight">
    Data analyst at heart, product manager by profession
  </h1>
  <p className="text-xl text-gray-400 mb-4 leading-relaxed">
    Senior Product Manager specialising in data and AI! Currently learning to code on the side whilst building technical products that that drive outcomes!
  </p>
  <div className="flex gap-4 mt-8">
    <a 
      href="#contact" 
      className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
    >
      Get in touch
    </a>
    <a 
      href="/writing" 
      className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
    >
      Read my writing
    </a>
  </div>
</section>
{/* Personal README Section */}
<section className="max-w-4xl mx-auto px-6 py-20 border-t border-gray-800">
  <div className="max-w-3xl">
    <h2 className="text-3xl font-bold mb-12">About Me</h2>
    
    <div className="space-y-12 text-lg leading-relaxed">
      <p className="text-gray-300">
        Hey there! My name's Rich and I specialise in data platforms and AI integration. 
        Solving genuine, ambiguous problems with data and AI gives me energy. I'm currently building 
        technical products while learning to code, pairing product thinking with hands-on development.
      </p>

      <div>
        <h3 className="text-xl font-semibold mb-6 text-white">How I Work</h3>
        <ul className="space-y-4 text-gray-300">
          <li className="pl-6 border-l-2 border-gray-700">
            Give me context and time to think, then let's make sure we're solving the right problem before we execute
          </li>
          <li className="pl-6 border-l-2 border-gray-700">
            I ask questions early to make sure we're solving the right problems, not just the loudest ones
          </li>
          <li className="pl-6 border-l-2 border-gray-700">
            I create safety for teams to own hard problems, disagree constructively, and grow through solving them
          </li>
          <li className="pl-6 border-l-2 border-gray-700">
            I'm a natural fixer and love jumping into the weeds, even when I should let others own the problem - help me spot when I'm doing this
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-6 text-white">What I'm Building</h3>
        <ul className="space-y-4 text-gray-300">
          <li className="pl-6 border-l-2 border-gray-700">
            Creating technical products that solve genuine problems with AI while learning to build alongside the teams I lead
          </li>
          <li className="pl-6 border-l-2 border-gray-700">
            Started with this portfolio site to learn fundamentals, now building a job aggregator using data pipelines and LLM classification to analyse market demand for job seekers
          </li>
          <li className="pl-6 border-l-2 border-gray-700">
            Focused on analytics and self-service data, where my experience is deepest and AI can add real value
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-6 text-white">Values</h3>
        <ul className="space-y-4 text-gray-300">
          <li className="pl-6 border-l-2 border-gray-700">
            Learn through iteration - the best insights come from shipping and measuring, not endless planning
          </li>
          <li className="pl-6 border-l-2 border-gray-700">
            Lead with empathy - understand the person and their context before jumping to solutions
          </li>
          <li className="pl-6 border-l-2 border-gray-700">
            Execute quickly with a strategic filter - if it doesn't move us toward our goal, why are we building it?
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
{/* Experience Highlights Section */}
<section className="max-w-4xl mx-auto px-6 py-20 border-t border-gray-800">
  <div className="max-w-3xl">
    <h2 className="text-3xl font-bold mb-12">Experience Highlights</h2>
    
    <div className="space-y-12">
      {/* Momentus */}
      <div>
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold text-white">Senior Product Manager</h3>
            <p className="text-gray-400">Momentus Technologies</p>
          </div>
          <span className="text-gray-500">Mar 2024 - Oct 2025</span>
        </div>
        <p className="text-gray-400 mb-4">Global Event Management SaaS, 60K+ users, 50 countries</p>
        <ul className="space-y-3 text-gray-300">
          <li className="pl-6 border-l-2 border-gray-700">
            Launched data strategy and embedded analytics products, unlocking $2.5M in ARR and reaching 100 enterprise clients
          </li>
          <li className="pl-6 border-l-2 border-gray-700">
            Developed customer benchmarking tools with LLM driven event taxonomy & classifier exceeding 0.85 F1 scoring
          </li>
          <li className="pl-6 border-l-2 border-gray-700">
            Drove internal AI enablement using GPT tools, reducing discovery time by 25%
          </li>
        </ul>
      </div>

      {/* Pollinate */}
      <div>
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold text-white">Data Platform & Analytics Product Lead</h3>
            <p className="text-gray-400">Pollinate</p>
          </div>
          <span className="text-gray-500">Aug 2022 - Mar 2024</span>
        </div>
        <p className="text-gray-400 mb-4">Series C Fintech, 200+ employees, £70M+ raised</p>
        <ul className="space-y-3 text-gray-300">
          <li className="pl-6 border-l-2 border-gray-700">
            Directed data product strategy; reported to Chief Product Officer
          </li>
          <li className="pl-6 border-l-2 border-gray-700">
            Achieved £100K+ in annual savings through platform restructuring
          </li>
          <li className="pl-6 border-l-2 border-gray-700">
            Managed 15-member cross-functional data organization, 5 direct reports (PMs, Data Scientists)
          </li>
          <li className="pl-6 border-l-2 border-gray-700">
            Increased product activation from 8% to 57% through experimentation
          </li>
        </ul>
      </div>

      {/* Pollen */}
      <div>
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold text-white">Product Lead, Data & Analytics</h3>
            <p className="text-gray-400">Pollen</p>
          </div>
          <span className="text-gray-500">Aug 2020 - Aug 2022</span>
        </div>
        <p className="text-gray-400 mb-4">Series C D2C Events & Travel Platform, £40M+ GMV</p>
        <ul className="space-y-3 text-gray-300">
          <li className="pl-6 border-l-2 border-gray-700">
            Led 16-person central data team delivering analytics across 8 experience verticals
          </li>
          <li className="pl-6 border-l-2 border-gray-700">
            Developed CX headcount planning model, improving margins by 15%
          </li>
          <li className="pl-6 border-l-2 border-gray-700">
            Increased data platform adoption from 30 data professionals to over 400 general users
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
{/* Skills & Tech Stack Section */}
<section className="max-w-4xl mx-auto px-6 py-20 border-t border-gray-800">
  <div className="max-w-3xl">
    <h2 className="text-3xl font-bold mb-12">Skills & Tech Stack</h2>
    
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold mb-4 text-white">Core Competencies</h3>
        <div className="flex flex-wrap gap-3">
          <span className="px-4 py-2 bg-gray-800 rounded-lg text-gray-300">Data Product Strategy</span>
          <span className="px-4 py-2 bg-gray-800 rounded-lg text-gray-300">Modern Data Stack Architecture</span>
          <span className="px-4 py-2 bg-gray-800 rounded-lg text-gray-300">ML & LLM Integration</span>
          <span className="px-4 py-2 bg-gray-800 rounded-lg text-gray-300">Self-Service Analytics</span>
          <span className="px-4 py-2 bg-gray-800 rounded-lg text-gray-300">Embedded Analytics</span>
          <span className="px-4 py-2 bg-gray-800 rounded-lg text-gray-300">Data Governance</span>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4 text-white">Data & Analytics</h3>
        <div className="flex flex-wrap gap-3">
          <span className="px-4 py-2 bg-gray-800 rounded-lg text-gray-300">Snowflake</span>
          <span className="px-4 py-2 bg-gray-800 rounded-lg text-gray-300">dbt</span>
          <span className="px-4 py-2 bg-gray-800 rounded-lg text-gray-300">Databricks</span>
          <span className="px-4 py-2 bg-gray-800 rounded-lg text-gray-300">Tableau</span>
          <span className="px-4 py-2 bg-gray-800 rounded-lg text-gray-300">Looker</span>
          <span className="px-4 py-2 bg-gray-800 rounded-lg text-gray-300">Power BI</span>
          <span className="px-4 py-2 bg-gray-800 rounded-lg text-gray-300">Amplitude</span>
          <span className="px-4 py-2 bg-gray-800 rounded-lg text-gray-300">Mixpanel</span>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4 text-white">AI & Development</h3>
        <div className="flex flex-wrap gap-3">
          <span className="px-4 py-2 bg-gray-800 rounded-lg text-gray-300">OpenAI GPT</span>
          <span className="px-4 py-2 bg-gray-800 rounded-lg text-gray-300">Claude</span>
          <span className="px-4 py-2 bg-gray-800 rounded-lg text-gray-300">Python</span>
          <span className="px-4 py-2 bg-gray-800 rounded-lg text-gray-300">Next.js</span>
          <span className="px-4 py-2 bg-gray-800 rounded-lg text-gray-300">React</span>
          <span className="px-4 py-2 bg-gray-800 rounded-lg text-gray-300">Cursor</span>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Featured Projects Section */}
<section className="max-w-4xl mx-auto px-6 py-20 border-t border-gray-800">
  <div className="max-w-3xl">
    <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
    
    <div className="grid gap-6">
      {/* Project 1 - Placeholder */}
      <div className="border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors">
        <h3 className="text-xl font-semibold mb-2 text-white">Job Market Aggregator</h3>
        <p className="text-gray-400 mb-4">
          LLM-powered job aggregator using data pipelines and classification to analyze market demand patterns
        </p>
        <span className="text-sm text-gray-500">Coming Soon</span>
      </div>

      {/* Project 2 - Placeholder */}
      <div className="border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors">
        <h3 className="text-xl font-semibold mb-2 text-white">Project 2</h3>
        <p className="text-gray-400 mb-4">
          Future AI-native analytics project
        </p>
        <span className="text-sm text-gray-500">Coming Soon</span>
      </div>

      {/* Project 3 - Placeholder */}
      <div className="border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors">
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
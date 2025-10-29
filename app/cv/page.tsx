export default function CV() {
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

        
  
        {/* CV Content */}
        <section className="max-w-4xl mx-auto px-6 py-20 border-t border-gray-800">
         
  
          {/* Profile Summary */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-12">Profile Summary</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              Expertise in data platform strategy, self-service analytics, embedded analytics, and AI-driven solutions. 
              Proven track record delivering measurable business outcomes through modern data stack architecture and 
              cross-functional team leadership in fintech and SaaS environments.
            </p>
          </div>
  
          {/* Core Competencies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-12">Core Competencies</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
              <li className="pl-6 border-l-2 border-gray-700">Data Product Strategy & Roadmapping</li>
              <li className="pl-6 border-l-2 border-gray-700">Modern Data Stack Architecture</li>
              <li className="pl-6 border-l-2 border-gray-700">ML & LLM Integration</li>
              <li className="pl-6 border-l-2 border-gray-700">Self-Service Analytics & Data Democratization</li>
              <li className="pl-6 border-l-2 border-gray-700">Embedded Analytics</li>
              <li className="pl-6 border-l-2 border-gray-700">Data Governance & Quality Management</li>
              <li className="pl-6 border-l-2 border-gray-700">Commercial Model and Go To Market</li>
            </ul>
          </div>
  
          {/* Professional Experience */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-12">Professional Experience</h2>
            
            <div className="space-y-12">
              {/* Momentus */}
              <div>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-white mb-1">Senior Product Manager</h3>
                  <p className="text-gray-400">Momentus Technologies • Mar 2024 - Present</p>
                  <p className="text-sm text-gray-500">Global Event Management SaaS, 60K+ users, 50 countries</p>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="pl-6 border-l-2 border-gray-700">Launched data strategy and embedded analytics products, unlocking $2.5M in ARR and reaching 100 enterprise clients</li>
                  <li className="pl-6 border-l-2 border-gray-700">Developed customer benchmarking tools with LLM driven event taxonomy & classifier exceeding 0.85 F1 scoring</li>
                  <li className="pl-6 border-l-2 border-gray-700">Drove internal AI enablement using GPT tools, reducing discovery time by 25%</li>
                </ul>
              </div>
  
              {/* Pollinate */}
              <div>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-white mb-1">Data Platform & Analytics Product Lead</h3>
                  <p className="text-gray-400">Pollinate • Aug 2022 - Mar 2024</p>
                  <p className="text-sm text-gray-500">Series C Fintech, 200+ employees, £70M+ raised</p>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="pl-6 border-l-2 border-gray-700">Directed data product strategy; reported to Chief Product Officer</li>
                  <li className="pl-6 border-l-2 border-gray-700">Achieved £100K+ in annual savings through platform restructuring</li>
                  <li className="pl-6 border-l-2 border-gray-700">Managed 15-member cross-functional data organization, 5 direct reports (PMs, Data Scientists)</li>
                  <li className="pl-6 border-l-2 border-gray-700">Increased product activation from 8% to 57% through experimentation</li>
                </ul>
              </div>
  
              {/* Pollen */}
              <div>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-white mb-1">Product Lead, Data & Analytics</h3>
                  <p className="text-gray-400">Pollen • Aug 2020 - Aug 2022</p>
                  <p className="text-sm text-gray-500">Series C D2C Events & Travel Platform, £40M+ GMV</p>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="pl-6 border-l-2 border-gray-700">Led 16-person central data team delivering analytics across 8 experience verticals</li>
                  <li className="pl-6 border-l-2 border-gray-700">Developed CX headcount planning model, improving margins by 15%</li>
                  <li className="pl-6 border-l-2 border-gray-700">Increased data platform adoption from 30 data professionals to over 400 general users</li>
                </ul>
              </div>
  
              {/* Tesco */}
              <div>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-white mb-1">Lead Product Manager</h3>
                  <p className="text-gray-400">Tesco • Nov 2019 - Aug 2020 (Contract)</p>
                  <p className="text-sm text-gray-500">FTSE 100 Retailer, 330,000+ employees globally</p>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="pl-6 border-l-2 border-gray-700">Led 4 product managers and 20+ BI Engineers across enterprise domains</li>
                  <li className="pl-6 border-l-2 border-gray-700">Reorganized analytics org, introducing domain-based analytics service model</li>
                  <li className="pl-6 border-l-2 border-gray-700">Supported &gt30,000 monthly active users</li>
                </ul>
              </div>
            </div>
          </div>
  
          {/* Early Career */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-12">Early Career</h2>
            <div className="space-y-6 text-gray-300">
              <div className="pl-6 border-l-2 border-gray-700">
                <p className="font-semibold text-white mb-1">Senior Manager, Analytics Products</p>
                <p className="text-gray-400 mb-2">DHI Group • Jun 2017 - Nov 2019</p>
                <p>Developed 'Workforce Intelligence' suite; increased revenue by 22%</p>
              </div>
              <div className="pl-6 border-l-2 border-gray-700">
                <p className="font-semibold text-white mb-1">Insights Lead</p>
                <p className="text-gray-400 mb-2">DHI Group • May 2016 - Jun 2017</p>
                <p>Delivered segmentation, benchmarking, and brand insights supporting £7M+ turnover</p>
              </div>
              <div className="pl-6 border-l-2 border-gray-700">
                <p className="font-semibold text-white mb-1">Data Analyst</p>
                <p className="text-gray-400 mb-2">eFinancialCareers • Jul 2014 - May 2016</p>
                <p>Supported sales and marketing analytics for £3.5M ARR portfolio</p>
              </div>
            </div>
          </div>
  
          {/* Education & Certifications */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-12">Education & Certifications</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="pl-6 border-l-2 border-gray-700">Python Intermediate (DataCamp)</li>
              <li className="pl-6 border-l-2 border-gray-700">Certified Scrum Master (Scrum Alliance)</li>
              <li className="pl-6 border-l-2 border-gray-700">Agile Leadership Certificate</li>
              <li className="pl-6 border-l-2 border-gray-700">Databricks Lakehouse Fundamentals</li>
              <li className="pl-6 border-l-2 border-gray-700">Digital Marketing Professional Certificate</li>
            </ul>
          </div>
  
          {/* Tools & Technology */}
          <div>
            <h2 className="text-3xl font-bold mb-12">Tools & Technology</h2>
            <div className="space-y-4 text-gray-300">
              <div className="pl-6 border-l-2 border-gray-700">
                <span className="font-semibold text-white">Data Engineering & Architecture:</span> Snowflake, dbt, Databricks
              </div>
              <div className="pl-6 border-l-2 border-gray-700">
                <span className="font-semibold text-white">Business User Self-Service:</span> Tableau, Looker, Power BI, Qlik
              </div>
              <div className="pl-6 border-l-2 border-gray-700">
                <span className="font-semibold text-white">Product Analytics:</span> Amplitude, Pendo, Mixpanel, Segment
              </div>
              <div className="pl-6 border-l-2 border-gray-700">
                <span className="font-semibold text-white">LLMs:</span> OpenAI GPT, Claude, Azure Copilot
              </div>
              <div className="pl-6 border-l-2 border-gray-700">
                <span className="font-semibold text-white">Product Management & Prototyping:</span> Bolt, Loveable, Atlassian, Notion, Figma, Miro
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
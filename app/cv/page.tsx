export default function CV() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section - ENHANCED */}
      <section className="relative w-full overflow-hidden">
  {/* Full-width gradient background */}
  <div className="absolute inset-0 bg-gradient-to-br from-lime-950/20 via-transparent to-emerald-950/20"></div>
  
  {/* Content constrained */}
  <div className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-6 py-15 relative z-10 animate-fade-in-up">
    <h1 className="text-5xl md:text-6xl font-bold mb-6">
      <span className="gradient-text">Curriculum Vitae</span>
    </h1>
    <p className="text-xl text-gray-300">
      Product management expertise in data platforms, analytics, and AI
    </p>
  </div>
</section>

      {/* CV Content */}
      <section className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-6 py-10 relative z-10">
        {/* Profile Summary - ENHANCED */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-8 gradient-text">Profile Summary</h2>
          <div className="bg-[#1a1a1a] border-gradient rounded-xl p-8">
            <p className="text-gray-300 leading-relaxed text-lg">
              Expertise in data platform strategy, self-service analytics, embedded analytics, and AI-driven solutions. 
              Proven track record delivering measurable business outcomes through modern data stack architecture and 
              cross-functional team leadership in fintech and SaaS environments.
            </p>
          </div>
        </div>

        {/* Core Competencies - ENHANCED */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-8 gradient-text">Core Competencies</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
            <li className="pl-6 border-accent hover:text-white transition-colors">Data Product Strategy & Roadmapping</li>
            <li className="pl-6 border-accent hover:text-white transition-colors">Modern Data Stack Architecture</li>
            <li className="pl-6 border-accent hover:text-white transition-colors">ML & LLM Integration</li>
            <li className="pl-6 border-accent hover:text-white transition-colors">Self-Service Analytics & Data Democratization</li>
            <li className="pl-6 border-accent hover:text-white transition-colors">Embedded Analytics</li>
            <li className="pl-6 border-accent hover:text-white transition-colors">Data Governance & Quality Management</li>
            <li className="pl-6 border-accent hover:text-white transition-colors">Commercial Model and Go To Market</li>
          </ul>
        </div>

        {/* Professional Experience - ENHANCED */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-12 gradient-text">Professional Experience</h2>
          
          <div className="space-y-8">
            {/* Momentus */}
            <div className="bg-[#1a1a1a] border-gradient rounded-xl p-8">
              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-white mb-2">Senior Product Manager</h3>
                <p className="text-lime-400 font-medium">Momentus Technologies • Mar 2024 - Oct 2025</p>
                <p className="text-sm text-gray-500 mt-1">Global Event Management SaaS, 60K+ users, 50 countries</p>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="pl-6 border-accent hover:text-white transition-colors">
                  Launched data strategy and embedded analytics products, unlocking <strong className="text-white">$2.5M in ARR</strong> and reaching 100 enterprise clients
                </li>
                <li className="pl-6 border-accent hover:text-white transition-colors">
                  Developed customer benchmarking tools with LLM driven event taxonomy & classifier exceeding <strong className="text-white">0.85 F1 scoring</strong>
                </li>
                <li className="pl-6 border-accent hover:text-white transition-colors">
                  Drove internal AI enablement using GPT tools, reducing discovery time by <strong className="text-white">25%</strong>
                </li>
              </ul>
            </div>

            {/* Pollinate */}
            <div className="bg-[#1a1a1a] border-gradient rounded-xl p-8">
              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-white mb-2">Data Platform & Analytics Product Lead</h3>
                <p className="text-lime-400 font-medium">Pollinate • Aug 2022 - Mar 2024</p>
                <p className="text-sm text-gray-500 mt-1">Series C Fintech, 200+ employees, £70M+ raised</p>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="pl-6 border-accent hover:text-white transition-colors">
                  Directed data product strategy; reported to Chief Product Officer
                </li>
                <li className="pl-6 border-accent hover:text-white transition-colors">
                  Achieved <strong className="text-white">£100K+ in annual savings</strong> through platform restructuring
                </li>
                <li className="pl-6 border-accent hover:text-white transition-colors">
                  Managed <strong className="text-white">15-member</strong> cross-functional data organization, 5 direct reports (PMs, Data Scientists)
                </li>
                <li className="pl-6 border-accent hover:text-white transition-colors">
                  Increased product activation from <strong className="text-white">8% to 57%</strong> through experimentation
                </li>
              </ul>
            </div>

            {/* Pollen */}
            <div className="bg-[#1a1a1a] border-gradient rounded-xl p-8">
              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-white mb-2">Product Lead, Data & Analytics</h3>
                <p className="text-lime-400 font-medium">Pollen • Aug 2020 - Aug 2022</p>
                <p className="text-sm text-gray-500 mt-1">Series C D2C Events & Travel Platform, £40M+ GMV</p>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="pl-6 border-accent hover:text-white transition-colors">
                  Led <strong className="text-white">16-person</strong> central data team delivering analytics across 8 experience verticals
                </li>
                <li className="pl-6 border-accent hover:text-white transition-colors">
                  Developed CX headcount planning model, improving margins by <strong className="text-white">15%</strong>
                </li>
                <li className="pl-6 border-accent hover:text-white transition-colors">
                  Increased data platform adoption from 30 data professionals to over <strong className="text-white">400 general users</strong>
                </li>
              </ul>
            </div>

            {/* Tesco */}
            <div className="bg-[#1a1a1a] border-gradient rounded-xl p-8">
              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-white mb-2">Lead Product Manager</h3>
                <p className="text-lime-400 font-medium">Tesco • Nov 2019 - Aug 2020 (Contract)</p>
                <p className="text-sm text-gray-500 mt-1">FTSE 100 Retailer, 330,000+ employees globally</p>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="pl-6 border-accent hover:text-white transition-colors">
                  Led <strong className="text-white">4 product managers</strong> and 20+ BI Engineers across enterprise domains
                </li>
                <li className="pl-6 border-accent hover:text-white transition-colors">
                  Reorganized analytics org, introducing domain-based analytics service model
                </li>
                <li className="pl-6 border-accent hover:text-white transition-colors">
                  Supported <strong className="text-white">&gt;30,000</strong> monthly active users
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Early Career - ENHANCED */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-12 gradient-text">Early Career</h2>
          <div className="space-y-6 text-gray-300">
            <div className="pl-6 border-accent hover:text-white transition-colors">
              <p className="font-semibold text-white mb-1 text-lg">Senior Manager, Analytics Products</p>
              <p className="text-gray-400 mb-2 font-medium">DHI Group • Jun 2017 - Nov 2019</p>
              <p>Developed &apos;Workforce Intelligence&apos; suite; increased revenue by <strong className="text-white">22%</strong></p>
            </div>
            <div className="pl-6 border-accent hover:text-white transition-colors">
              <p className="font-semibold text-white mb-1 text-lg">Insights Lead</p>
              <p className="text-gray-400 mb-2 font-medium">DHI Group • May 2016 - Jun 2017</p>
              <p>Delivered segmentation, benchmarking, and brand insights supporting <strong className="text-white">£7M+ turnover</strong></p>
            </div>
            <div className="pl-6 border-accent hover:text-white transition-colors">
              <p className="font-semibold text-white mb-1 text-lg">Data Analyst</p>
              <p className="text-gray-400 mb-2 font-medium">eFinancialCareers • Jul 2014 - May 2016</p>
              <p>Supported sales and marketing analytics for <strong className="text-white">£3.5M ARR</strong> portfolio</p>
            </div>
          </div>
        </div>

        {/* Education & Certifications - ENHANCED */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-12 gradient-text">Education & Certifications</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="pl-6 border-accent hover:text-white transition-colors">Python Intermediate (DataCamp)</li>
            <li className="pl-6 border-accent hover:text-white transition-colors">Certified Scrum Master (Scrum Alliance)</li>
            <li className="pl-6 border-accent hover:text-white transition-colors">Agile Leadership Certificate</li>
            <li className="pl-6 border-accent hover:text-white transition-colors">Databricks Lakehouse Fundamentals</li>
            <li className="pl-6 border-accent hover:text-white transition-colors">Digital Marketing Professional Certificate</li>
          </ul>
        </div>

        {/* Tools & Technology - ENHANCED */}
        <div>
          <h2 className="text-4xl font-bold mb-12 gradient-text">Tools & Technology</h2>
          <div className="space-y-6 text-gray-300">
            <div className="pl-6 border-accent hover:text-white transition-colors">
              <span className="font-semibold text-white text-lg">Data Engineering & Architecture:</span> Snowflake, dbt, Databricks
            </div>
            <div className="pl-6 border-accent hover:text-white transition-colors">
              <span className="font-semibold text-white text-lg">Business User Self-Service:</span> Tableau, Looker, Power BI, Qlik
            </div>
            <div className="pl-6 border-accent hover:text-white transition-colors">
              <span className="font-semibold text-white text-lg">Product Analytics:</span> Amplitude, Pendo, Mixpanel, Segment
            </div>
            <div className="pl-6 border-accent hover:text-white transition-colors">
              <span className="font-semibold text-white text-lg">LLMs:</span> OpenAI GPT, Claude, Azure Copilot
            </div>
            <div className="pl-6 border-accent hover:text-white transition-colors">
              <span className="font-semibold text-white text-lg">Product Management & Prototyping:</span> Bolt, Loveable, Atlassian, Notion, Figma, Miro
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

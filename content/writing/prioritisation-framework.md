---
title: "A Prioritisation Framework That Actually Works For Data Teams"
readingTime: "11 min"
tag: "Product Leadership"
---
## Introduction: The Brutal Truth About Prioritisation Frameworks

In my years of leading product and data functions, I have learnt three key truths about prioritisation frameworks.

**Cookie cutter frameworks will not give you what you need.**
They are templates, nothing more. You have to adapt them for your team, your culture, your stakeholders and the complexity of whatever you're building.

**Most frameworks lean too far in one direction.**
MoSCoW pulls you internally toward stakeholders, while KANO leans on customer centricity. Neither is perfect. 

**Value and feasibility scores are rarely scientific.**
Ask three stakeholders about the value of solving a problem and you will get four answers. Engineering complexity is at best, an educated guess, especially early on. The most debated inputs are often the least reliable!

Even so, many product and data teams, obsess over and believe that the perfect prioritisation formula must exist. I've seen teams generate full 6 month backlogs, size every epic, feed everything into a scoring model and proudly publish their ranked list that nobody agrees on.

Hold these truths close as we think about why prioritisation is a critical part of product management.

## Why Prioritisation Still Matters

Once you strip away the myth of the perfect framework, the real purpose becomes clear. We prioritise not because we understand the e2e soloution and when/how it gets delivered but because **creating focus and clarity is critical for humans to get shit done**, especially at the outset when things are vague and ambiguous. That said, many data teams fall into the trap of spending too long on discovery, research or debating frameworks. It feels responsible, but it often delays the learning that is needed to build the right solution.

Let's not forget about stakeholders, they also need transparency. They want to understand why something is being worked, what it means for them and why their top priority is not being prioritised. Even a lightly structured approach helps those conversations run more smoothly and ensures the team is not working in a bubble. Those stakeholder pushbacks can also provide important data to help you refine your prioritisation, don't avoid them!

Clarity, focus, transparency, all things in short supply early on. We might not yet know the right approach, the unknown unknowns, the surprises buried in the data. We have to pick the best available option based on our point in time understanding and accept we may pivot as this evolves. **We have to prioritise.** One of the most fun challenges I recently led was the creation of a live event taxonomy and data classifier. We started with regex and fuzzy logic matching but soon switched to an LLM pipeline once we saw huge terminology variation. If I wanted to count up all 'food' type events for convention centres, they might be called 'Catering', 'F&B', 'Dinner', 'ABC', '123', and more. They all meant the same thing to each distinct venue but we needed a semantic solution to a semantic problem. The point here is that prioritisation is a continuous effort. Progress generates new data, new information. If we need to pivot, we can.

This article is not about prescribing another rigid template. It outlines the essential considerations that consistently matter when shaping a prioritisation model that fits your company, your users and your team.

## 1. Company Impact and Alignment

This is the most important dimension. If your work does not support a company level metric, it will eventually be questioned or shut down. This has been the story of many isolated data science teams that have quietly disappeared or been subject to idle gossip about how valuable their output really is.

One example still stands out for me. A data science team I had worked with in HRTech built an impressive matching algorithm that could pair candidates with jobs based on a detailed feature set. It was technically brilliant and in retrospect would have enabled them to compete more effectively with LinkedIn. Unfortunately, it was not solving the primary problem that the company cared about at that time. The focus was more around job content volume and increasing candidate signups.

It did not matter how clever the model was. It was not aligned to the business.

If your team is not moving company metrics, the work will not last.

**How do you assess company impact in practice?** Your company will have its own rubric for tracking success. It might be OKRs, a North Star metric, product metrics, or revenue targets, it doesn't matter. Lean on whatever is used to align and guide the company's core focus. If direction is unclear, as it often is at early-stage companies, stretch your ownership and help the company define what it will use. Don't be a victim to fuzzy leadership.

## 2. User Value

I separate user value from company value because they do not always align. When they compete, the company usually wins. Revenue matters. That is the reality that product purists don't always want to hear.

Of course user value is still absolutely critical for both internal and external products. A product mindset means stepping back and asking real questions about your users.

- Who are they
- What are their workflows
- How do they measure their own success
- What problems actually slow them down

You cannot answer these questions through an intake form or a helpdesk queue. You need to speak with people, watch how they work and ask them to walk you through their processes. One of the easiest ways for data teams to do this (in the absence of a PM) is to have some form of embedding within other functions. At Pollen, we partnered heavily with our CX team. We built analytics that helped them assess staffing costs globally at different stages of the event lifecycle - pre-sales, sales, planning, live, and post-event. We were able to make recommendations on staffing levels that helped control costs whilst retaining CSAT scores and key call handling SLIs. That internal advocacy from the CX team subsequently increased usage, improved data platform awareness and created a healthy cycle of demand for data products across other functions.

## 3. Adoption

Adoption deserves its own space. A technically correct solution can still fail if the experience is poor or cannot be easily integrated into the day to day workflow.

During my time at Tesco, in the middle of the COVID period, we built a sales prediction model to help understand SKU level demand across stores (yes, trying to answer how many toilet rolls we'd need in a given location was challenging). The model worked well, and the problem was important. However, the workflow behind it was slow and painful. It relied on a complex stack combining Hadoop, Exadata and MicroStrategy. Buyers abandoned it and returned to their chained Excel files.

The issue was not accuracy, it was usability.

If your solution requires long training sessions or a major change management effort, adoption will be low and slow. A good product has to work with the grain of how people operate, not against it.

## 4. Natural Ownership

Once a solution exists, who maintains it? Ownership is rarely simple with data products because we're in the middle of consumers and producers. Pipelines, models and dashboards often rely on other teams.

At Tesco, part of planning delivery meant an upfront conversation about what our Analytics Capabilities team would own versus what we would expect our partners in other functions to pick up. This was codified up front along with a senior sponsor signing off. Clear SLOs helped prevent hidden ownership creep and user confusion when things went wrong.

At Pollen, we experienced the opposite problem. Looker made it easy for users to fork dashboards, resulting in a growing set of assets that looked official but were not owned by anyone. Our team often had to step in without context, and it consumed significant time. We were able to differentiate these assets through a combination of folder structures e.g., sandboxes versus governed folders, and a very clear contract with users that part of self-service meant that those with training and expertise to create reports must also accept that they own the output. Of course we were there to help them with guidance all the while (we don't let ownership fall down a black hole, especially in a scaling org).

Ownership is a real variable in prioritisation. If no one can own something long term, it becomes a risk.

## 5. Effort

Effort is where prioritisation becomes more art than science.

Estimates shift. Simple work can reveal unexpected complexity. Larger pieces of work can become easier through new tools, better libraries, reducing tech debt or modern AI capabilities.

A recent personal project I've been working on illustrates how new AI capabilities are democratising product development. I've just built a job advert scraper, data aggregation and analytics in four weeks. Ten years earlier, that similar matching algo that I'd worked on in HRTech required a team of five and more than six months of work.

Let's break effort down:

**Tooling**

Do you have the platform and tooling required? Storage, orchestration, transformation, presentation? In early stage startups, speed is the priority. Early-stage greenfield data project can get by with a basic instrumentation plan, a CDP and a freemium analytics platform. At larger companies, the process requires legal and security reviews, vendor evaluation, platform compatibility checks and commercial negotiations. Tooling gaps become part of the effort cost. The former took me 2 months to build on my own, the latter took 3 months for a small cross functional team to assess vendor capability and suitability.

**Team Capability**

Does the team have the required skills? Sometimes you need a hire. Sometimes you bring in a specialist. Maybe AI fills the gap, and increasingly companies expect teams to try that first before any discussions around headcount.

**Data Availability and Quality**

Do you have the data, and do you understand its limitations? In my job aggregation project, a public API truncated job text at around 500 characters. That limitation caused misclassifications for labels that often appear near the bottom of ads. Working pattern, perks, hiring process, all lost. Don't inadvertently accept upstream issues with data quality and availability. If it's crap be aware of that and all the implications.

**Data Transformations**

Is the data already in a usable state? Novel products often require new modelling layers or transformations. I've found that typical customer analytics needs and agentic pipelines tend to diverge at the intermediate layer, so both need separate transformations. Get ahead of the "the data is already in there so it'll be easy" comments.

**Cost Considerations**

Effort also includes cost - tooling, vendor contracts, compute, engineering time (both build and support). In the post-ZIRP era, every team needs to justify spend, regardless of company size or maturity. If you're building a revenue-generating product, work backwards from expected revenue to understand margin implications. This isn't just an Effort consideration - it feeds directly into Company Impact. Being able to tell stakeholders "this will cost £50K to build and should generate £200K ARR at 60% margin" changes the conversation entirely.

## The Framework Overview

Here are the dimensions that consistently matter when prioritising data products:

<!-- component: framework-table -->

These weights reflect what I have found to be true across multiple companies: **Company Impact matters most** (50 points), followed by Effort as a constraint (100 points inverse), with User Impact, Adoption, and Natural Ownership providing important context (15, 15, and 20 points respectively).

Your organisation might weight these differently. The specific weights matter less than having a consistent rubric that forces honest comparison and discussion across dimensions.

## The Framework in Action: A Real Decision

in 2024 I had two product opportunities on the table: a customer benchmarking analytics report and an internal sales enablement AI agent.

Benchmarking analytics was my strategic bet. Complex legal requirements, LLM classifier accuracy targets (F1 ≥ 0.85), data privacy considerations, and a multi-phase rollout plan to 100s of customers globally. It would generate significant recurring revenue, help to lock customers in, and create a strategic competitive advantage. This required a dedicated team of 10 over 12 weeks.

Developing LLMs for internal efficiency was an interesting but uncertain opportunity. Sales teams wanted better enablement tools, product teams felt that their GTM content was not being reviewed and a no-code custom gpt could deliver something quickly. But would it generate real value? Would anyone maintain it after launch?

**The framework helped me make a nuanced decision: do both, but scope them differently.**

**The outcome:**

<!-- component: project-comparison -->

The benchmarking platform scored 156/200 and became our primary focus, with full team commitment and production-grade development. This was a roadmap item.

The sales agent scored 127/200. Rather than dismiss it entirely, I timeboxed it as a one-week experiment without pulling resources from the core team. I built it, tested it with sales, and validated whether it was worth productising later.

**Why this approach worked:**

Company Impact (48 vs 15) was decisive. The 33-point gap meant benchmarking deserved our best people and proper investment. But the sales agent's low effort (one week vs 12 weeks) meant we could afford to test the hypothesis without derailing strategic work.

**The lesson:** Prioritisation isn't always binary. Low-effort experiments can (and should) run in parallel if they don't pull resources from high-impact work. The framework helped me identify which project needed full commitment and which deserved a timeboxed test. The sales agent did get built and used by the team, but it remained a lightweight prototype - exactly the right level of investment for a 127-point project.

## Bringing It All Together

None of these considerations are revolutionary. They are the practical realities I have learnt while building technical products over the last eight years.

You do not need perfect weightings or a rigid formula. These dimensions will shift depending on your culture, your maturity level and the types of products you are building.

The main purpose of any framework is focus and clarity.

For your team.
For your stakeholders.
For yourself.
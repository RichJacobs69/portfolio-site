---
title: "A Prioritisation Framework That Actually Works for Data Teams"
readingTime: "11 min"
tag: "Product Leadership"
---

# A Prioritisation Framework That Actually Works for Data Teams

## Introduction: The Brutal Truth About Prioritisation Frameworks

After years of working across product and data functions, I have learnt three truths about prioritisation frameworks.

**Frameworks never work straight out of the box.**
They are templates, nothing more. You have to adapt them to your team, your culture, your stakeholders and the maturity of your organisation.

**Most frameworks lean too far in one direction.**
MoSCoW pulls you toward stakeholders, while KANO leans toward customer centricity. Neither is perfect. The right approach is simply the one your team can use consistently.

**Value and feasibility scores are rarely scientific.**
Ask three stakeholders what value means and you will get three different interpretations. Engineering complexity is usually an educated guess. The most debated inputs are often the least reliable.

Even so, many product and data teams, including mine in the past, become convinced that the perfect prioritisation formula must exist. They generate full backlogs, size every epic, feed everything into a scoring model and hope a ranked list emerges that everyone agrees on.

It never plays out that way.

## Why Prioritisation Still Matters

Once you strip away the myth of the perfect framework, the real purpose becomes clearer. We prioritise because focus matters.

At the start of a problem, we usually know the least about it. We do not yet know the right approach, the hidden complexities, or the surprises buried in the data. We have to pick the best available option based on limited data and accept we may pivot as understanding evolves. At a previous company, our event classifier started with regex and fuzzy logic but we switched to an LLM once we saw the semantic variation problem - 'Catering', 'F&B', 'Dinner' all meant the same thing to users but not to our regex. Progress generates information. If we need to pivot, we can.

Many teams, especially in data and product, fall into the trap of spending too long on discovery, research or debating frameworks. It feels responsible, but it often delays the learning that would bring clarity.

Prioritisation can also serve a social purpose. Stakeholders need transparency. They want to understand why something is being worked on and why something else is not. Even a lightly structured approach helps those conversations run more smoothly.

This article is not about prescribing another rigid template. It outlines the essential considerations that consistently matter when shaping a prioritisation model that fits your company, your users and your team.

## 1. Company Impact and Alignment

This is the most important dimension. If your work does not support a company level metric, it will eventually be questioned or shut down. This has been the story of many isolated data science teams that have quietly disappeared.

One example still stands out. A data science team I worked with built an impressive matching and classification algorithm that could pair candidates with jobs based on a detailed feature set. It was technically brilliant. Unfortunately, it was not solving a problem the company cared about at that time. We were competing heavily with LinkedIn and needed to focus on job content and candidate supply. Matching accuracy was not the priority.

It did not matter how clever the model was. It was not aligned to the business.

If your team is not moving the metrics that support the company North Star, the work will not last.

**How do you assess company impact in practice?** Your company will have its own rubric for tracking success - it might be OKRs, a North Star metric, product metrics, or revenue targets. Lean on whatever is used to align and guide the company's core focus. If direction is unclear, as it often is at early-stage companies, stretch your ownership and help the company define what it will use.

## 2. User Value

I separate user value from company value because they do not always align. When they compete, the company usually wins. That is the reality.

User value still matters. Data teams often develop internal tools or dashboards that attract little use. A product mindset means stepping back and asking real questions about your users.

- Who are they
- What are their workflows
- How do they measure success
- What problems actually slow them down

You cannot answer these questions through an intake form or a helpdesk queue. You need to speak with people, watch how they work and ask them to walk you through their processes.

At Pollen, we focused closely on our CX and Inventory Management teams. For CX, we helped them assess staffing costs globally at different stages of an event lifecycle - pre-sales, sales, planning, live, and post-event. We were able to make recommendations on staffing levels that helped control costs whilst retaining CSAT scores. That internal advocacy from the CX team increased usage, improved platform awareness and created a healthy cycle of demand across other functions.

A data team needs internal fans. They create momentum.

## 3. Adoption

Adoption deserves its own space. A technically correct solution can still fail if the experience is poor.

During my time at Tesco, in the middle of the COVID period, we built a sales prediction model to help understand SKU level demand across stores. The model worked well, and the problem was important. However, the workflow behind it was slow and painful. It relied on Hadoop, Exadata and MicroStrategy. Buyers abandoned it and returned to their chained Excel files.

The issue was not accuracy, it was usability.

If your solution requires long training sessions or a major change management effort, adoption will be low. A good product has to work with the grain of how people operate, not against it.

## 4. Natural Ownership

Once a solution exists, who maintains it? Ownership is rarely simple inside a data organisation. Pipelines, models and dashboards often rely on multiple upstream sources and cross functional teams.

At Tesco, part of planning delivery meant an upfront conversation about what our Analytics Capabilities team would own versus what we would expect our partners in other functions to pick up. This was codified up front along with a senior sponsor. Clear SLOs helped prevent hidden ownership creep.

At Pollen, we experienced the opposite problem. Looker made it easy for users to fork dashboards, which resulted in a growing set of assets that looked official but were not owned by anyone. Our team often had to step in without context, and it consumed significant time.

We were able to differentiate these assets through a combination of folder structures - sandboxes versus governed folders - and a very clear contract with users that part of self-service meant that those with training and expertise to create dashboards must also accept that they own the output. Of course we were there to help them with training and guidance all the while.

Ownership is a real variable in prioritisation. If no one can own something long term, it becomes a risk.

## 5. Effort

Effort is where prioritisation becomes more art than science.

Estimates shift. Simple work can reveal unexpected complexity. Larger pieces of work can become easier through new tools, better libraries or modern AI capabilities.

A recent example illustrates this well. I built a job advert scraper and classifier in roughly four weeks. Ten years earlier, a similar project required a team of five and more than six months of work.

Effort depends on several factors:

**Tooling**

Do you have the platform and integrations required? In early stage startups, speed is the priority. A basic instrumentation plan, Segment and Amplitude might be enough. At larger companies, the process requires legal and security reviews, vendor evaluation, platform compatibility checks and commercial negotiations. Tooling gaps become part of the effort cost.

**Team Capability**

Does the team have the required skills? Sometimes you need a hire. Sometimes you bring in a specialist. Sometimes AI fills the gap, and increasingly companies expect teams to try that first.

**Data Availability and Quality**

Do you have the data, and do you understand its limitations? In my job aggregation project, a public API truncated job text at around 500 characters. That limitation caused misclassifications for features that often appear near the bottom of ads. A closer reading of the documentation at the beginning would have saved several days of rework.

Reading documentation thoroughly is an underrated skill.

**Data Transformations**

Is the data already in a usable state? Novel products often require new modelling layers or transformations. At a previous company, customer analytics work diverged from another team's agentic project, so both needed separate intermediary transformations. That additional work had to be factored into the overall effort.

**Cost Considerations**

Effort also includes cost - tooling, vendor contracts, compute, engineering time. In the post-ZIRP era, every team needs to justify spend, regardless of company size or maturity. If you're building a revenue-generating product, work backwards from expected revenue to understand margin implications. This isn't just an Effort consideration - it feeds directly into Company Impact. Being able to tell stakeholders "this will cost £50K to build and should generate £200K ARR at 60% margin" changes the conversation entirely.

## The Framework Overview

Here are the dimensions that consistently matter when prioritising data products:

<!-- component: framework-table -->

These weights reflect what I have found to be true across multiple companies: **Company Impact matters most** (50 points), followed by Effort as a constraint (100 points inverse), with User Impact, Adoption, and Natural Ownership providing important context (15, 15, and 20 points respectively).

Your organisation might weight these differently. The specific numbers matter less than having a consistent rubric that forces honest evaluation across dimensions.

## The Framework in Action: A Real Decision

At a global event management SaaS company, I had two product opportunities on the table: a customer benchmarking analytics platform and a sales enablement AI agent.

The benchmarking platform was our strategic bet. Complex legal requirements, ML classifier accuracy targets (F1 ≥ 0.85), data privacy considerations, and a multi-phase rollout plan. It would generate significant recurring revenue and create a strategic competitive advantage. This required a dedicated team of 10 over 12 weeks.

The sales enablement agent was interesting but uncertain. Sales teams wanted better enablement tools, and a no-code AI platform could deliver something quickly. But would it generate real value? Would anyone maintain it after launch?

**The framework helped me make a nuanced decision: do both, but scope them differently.**

**The outcome:**

<!-- component: project-comparison -->

The benchmarking platform scored 156/200 and became our primary focus, with full team commitment and production-grade development.

The sales agent scored 127/200. Rather than dismiss it entirely, I timeboxed it as a one-week experiment without pulling resources from the core team. I built it, tested it with sales, and validated whether it was worth productising later.

**Why this approach worked:**

Company Impact (48 vs 15) was decisive. The 33-point gap meant benchmarking deserved our best people and proper investment. But the sales agent's low effort (one week vs 12 weeks) meant we could afford to test the hypothesis without derailing strategic work.

**The lesson:** Prioritisation isn't always binary. Low-effort experiments can run in parallel if they don't pull resources from high-impact work. The framework helped me identify which project needed full commitment and which deserved a timeboxed test. The sales agent did get built and used by the team, but it remained a lightweight prototype - exactly the right level of investment for a 127-point project.

## Bringing It All Together

None of these considerations are revolutionary. They are the practical realities I have learnt while building data products across the last eight years.

You do not need perfect weightings or a rigid formula. These dimensions will shift depending on your culture, your maturity level and the types of products you are building.

The main purpose of any framework is clarity.

Clarity for your team.
Clarity for your stakeholders.
Clarity for yourself.

Prioritisation is simply a structured attempt to make informed choices in the presence of constraints.
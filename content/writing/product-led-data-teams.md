# Intro

If you're leading a data team at a start-up or scale-up, you've probably felt this: your team is drowning in requests while strategic work sits untouched. There is a way out! This is the story of how I transformed a service-led data team at Pollen into a product-led function, what worked, what didn't, and what I'd do differently.

# Why Service-led data teams struggle

They're seen as cost centres, not revenue drivers. The reason? They're not thinking about impact. They're answering queries and closing tickets. Value attribution becomes someone else's problem.

There's one (and only one) scenario where I believe service models are the right approach for data teams, and that is where the organisation has no interest in being product-led or is simply too small/nascent to do it well without compromising on execution speed (which is critical at early-stage). 

It's also important to call out that service-led work is increasingly vulnerable to AI disruption. Transactional, pattern-based work (ticket to SQL to CSV) is exactly what LLMs can do better than us. If you're a data professional doing this, you're at risk.

# What is the alternative?

When we talk about data teams being product-led, we're fundamentally applying product principles to data development:

* Problem Discovery - what are the biggest and most impactful things we can do to move metrics, for who, why?  
* Solution Discovery - how do we solve the problem, what tech do we use, how is our output served, how much is it costing, is it legal, is it usable?  
* Prioritisation - How do we sequence what we work on?   
* Planning - What do we need to do to get this done, how do we deconstruct our design and begin incremental delivery?  
* Execute!

The difference in practice is 'Can you build me a churn dashboard?' becomes 'How can we reduce churn in X user segment by N%?' The first is a deliverable. The second is an **outcome**. One gets you a ticket closure, the other gets you a promotion.

Typically this involves a deliberate effort over an extended period to nail down what to focus on and properly craft the narrative with stakeholders. Inward looking, the planning and discovery time up front also supports healthier work patterns for your team. The result is a team that knows what they're working on, why it matters, and the value they're creating.

# A Data Product Framework

I spent the best part of 8 years helping companies make the most of their data and this has been an elastic experience where I needed to adapt to the culture of the company, its maturity and what it wants from its data. I talk in more detail about how this specifically affects the way I prioritise initiatives [here](https://www.richjacobs.me/writing/prioritisation-framework) but three core personal values have always held true irrespective of the problem or company:

* **Learn through iteration** - the best insights come from shipping and measuring, not endless planning.  
* **Lead with empathy** - understand the person and their context before jumping to solutions.  
* **Execute quickly with a strategic filter** - if it doesn't move us toward our goal, why are we building it?

These values shaped how I approached Pollen's transformation. Their mission was to 'build, curate, and deliver the best experiences all over the world'. And for me, the embodiment of these 3 values led to us developing the concept of a curated data experience, one where our most challenged users could be empowered to self-serve and use the data products we were building. This meant treating our analytics suite like product design, understanding user jobs-to-be-done, deliberately crafting reports for specific workflows, and prioritizing quality over coverage. In the same way that we wanted to deliver top tier experiences to our customers, the data team wanted to give our users an equally awesome data experience.

# Unblocking Pollen 

When I joined Pollen as Product Lead for Data & Analytics, the data team was on the edge of collapse. The head of BI had just exited. The 14-person team (split across data engineering, analytics engineering, and data analytics) was fielding 450+ support requests per month through a Slack channel called #data-clinic, a more appropriate name might have been #data-crash-team.

We were a Series C travel and events scale-up in the midst of huge growing pains: COVID rebound, eight experience verticals all demanding data yesterday, and mixed data maturity across teams. People were hired to run music events with Tiesto, not write SQL.

I had a couple of PMs handling specific data domains reporting to me. I had a fantastic engineering lead and we both reported into the CTO before our VP, Data was eventually onboarded. The data team's primary focus was to ensure that users had the necessary reporting and data in order to execute. Much of the emphasis was on ensuring that **operational** processes were supported (think hotel rooms, customer lists, product packages, wrist bands) and this was largely focused on program operations and fulfilment teams.

To try and unblock these teams we had an all purpose Slack support channel aptly named 'Data-Clinic'. It was used as a primary entry point into the team. Data-Clinic ownership was managed through a weekly rota. Whilst this had worked reasonably well from a user perspective the team often felt bombarded, was always lacking context and struggled with the seasonal demand for support in the run up to any events.

# The Problem

## Questionable Report / Data Model Quality

Approximately 40% of all queries into the data team related to observing common, well-understood entities and events - fundamental requirements that a mature analytics set-up should have been able to answer. The most prominent subjects were:  
  * Room Reservations  
  * Ticketing  
  * Churn & Fill Rates  
  * Sign Ups, Bookers and Attribution  
  * Customer Demographics  
  * Revenue & Refunds  
  * Event P&L  

Around 10% of support queries related to reconciliation between different source systems. These were often inventory-oriented, where deltas were observed between used and available hotel rooms. Source system quality is often the bane of data teams and unfortunately these scenarios had exacerbated the perception that all data reports need to be cross-checked. The net result was more inbound to the data team.   

The data team was increasingly pulled into solving operational queries and an antipattern had been established where Looker was heavily used for day to day operational reporting over the established system of record. Looker was being used to help process refunds, room travellers and send customer comms. There were established tools in place for each of these scenarios - Iterable, Retool, Zendesk.

## Limited Data Literacy

A small cohort of users continuously needed support and couldn't self-serve. This was a blend of capability, product usability (these explores were confusing and often overlapping), and behavioural (expecting delivery on demand due to time sensitivity). 

A 'quick question about bookings' would spiral into a multi-day project as requirements evolved across 40+ Slack messages. There was no structured discovery or prioritisation. Without this, analysts became bogged down as requirements unfolded across elongated and meandering Slack threads. 

## Blurred Ownership

#data-clinic was created with good intentions for a start-up company but had grown and helped establish an undesirable ownership pattern. All data queries irrespective of whether they were genuine BI type requests or flagging upstream data source quality were landing. As a result, data professionals would end up becoming proxy owners of the initial support for problems that were not theirs to own. Users on the other hand were confused and frustrated when signposted back to the right team.

Requests were often casual and perceived as whimsical by the person on rota. They tended to be addressed to 'data' as a collective, e.g. "Hey data team, I now need X so that I can do Y". 

## High Leverage Work is missed 

Because the team were spending a significant amount of time answering tactical questions, chasing source data information or providing CSV extracts, there was very little time to focus on high leverage work such as new analytics development, model improvements or increasing data availability in the platform. We'd created a vicious cycle: we've no time to work on improving our analytics offering because we're providing data as a result of our analytics offering not being up to scratch.

# What we did

We had to create space for the team to take stock of its suite of reports, its analytics models and the data that was available in the platform. We could then start to plan the most critical areas for improvement. But how could we create space in a high growth, scrappy scale-up with mixed data literacy levels? This was the key question that both my VP and I had to ponder.

## Q1 2021

### Re-established healthy ownership patterns

We made a plan to eventually decommission our data-clinic. Whilst the team agreed it had played an important role earlier in the company's growth, there was now a growing consensus. It had become a significant energy drain, dozens of pings every day were the equivalent of an online shoulder tap to the team and planned product work was being disrupted. In its place, we would create a separate set of cross-functional channels, no longer owned by the data team but co-owned by the domain in question e.g, the Inventory channel was formed of experts working across product, data, engineering and customer facing teams. Ownership of questions was no longer assumed to be data, each channel was a small team, source data queries, analytics queries, operational queries - could be easily routed to the right member.

### Made Data Creators Aware

One of the biggest pain points we faced (and this is common) was that we were seen as the guys responsible for data, all data, any data. In a scale-up, you'll see a lot of tech debt, and with that a lack of documentation, rapid iteration and product pivots. We made a huge effort to encourage our engineering partners to think more deeply about how their services were logging data and what that meant for analytics users. This grew from involving them in conversations about their data to proactively planning any changes that would impact data. Engineers were in lock step with data engineers and core product managers were aligned with data product managers.

## Q2 2021

### Analysed queries 

These new domain channels plus Data Clinic became a gold mine of primary research. We started capturing data on the kinds of questions we were asked, who was asking them and what the data was going to be used for. This meant we could plan and prioritise improvements to our analytics models as well as reporting. We were becoming product-led.

Analysts and Analytics Engineers were now actively reviewing report and model usage numbers as well as support requests. We now had time to honestly assess what we were putting out and make plans to improve it.

### Split prioritisation into two Streams

This research fed into our prioritization framework. We scored potential improvements across five dimensions with a heavy focus on Company Impact:

| Dimension | Description | Max Points |
|-----------|-------------|------------|
| User Impact | Does this solve a real user need? | 15 |
| Adoption | Will users actually use it? | 15 |
| Company Impact | Does this move company metrics? | 50 |
| Natural Ownership | Who maintains this long-term? | 20 |
| Effort (inverse) | How much work is required? | 100 |
| TOTAL | | 200 |

### Critical Operational Priorities

There were two specific areas where our reporting was under-serving operational challenges: fulfillment and experience operations. In fact, queries from these two teams (and 2 individuals specifically) accounted for over a third of all queries that we were receiving. We decided it would make sense to bring a contractor on-board so that we could deliver on this whilst delivering in other areas.

### Strategic - High Leverage Priorities

During this period, we were starting to see access to funds becoming more difficult, as a result, many companies including Pollen began to focus more on margin and a path to profitability. Our focus therefore also shifted to helping teams better manage costs. The two key areas were Inventory management (and penalty avoidance) and CX (support staff costs).

### Embedded Analysts

To better handle these streams we had a blend of central analysts and engineers but also made the decision to strategically embed an analyst into each team. These analysts would adhere to data development standards but were ultimately activated by the respective functions. This provided us with a great balance of execution whilst ensuring our team did not lose control of development standards. 

This was a major structure change. We agreed to limit this to a 2 month test with regular check-ins for stakeholders on both the data and functional teams. We ultimately extended it indefinitely.

## Q3 2021

### Automate

ChatGPT hadn't yet hit the scene but with falling demand for Data-Clinic we were able to use a rudimentary Atlassian bot to automate routing for queries. Common questions hit our Q&A pages, ad-hoc queries went into a (much smaller) ticket backlog designed for sub-30 minute support, and larger needs were pushed into our product development process where they were subjected to a more rigorous review. 

### Enable

For the first time in Pollen's history, we implemented a formal training program. For new starters we worked with our people team to ensure everyone had a punchy 30 minute intro into key metrics and our most popular analytics reports. 

As we started to think about how we'd create a data culture we also began working closely with recruiters and hiring managers to ensure that data literacy was a competency that would be assessed during the hiring process.

For Pollinators already in post, we also provided beginner, intermediate and (for a few data wizards) advanced training focusing on some of the specific self-serve features of Looker. We paired this with short recorded walkthroughs for common activities (create a look, joining data, reading LookML etc).

# What Made It hard

These changes created momentum, but change isn't just about the process, it's about people. We faced three persistent challenges throughout this period that nearly derailed the entire effort. We were fundamentally having to try and address issues on 3 fronts, 2 of which we did not intrinsically own.

## Data Product Quality

As a team transitioning from being service-led in a high growth environment, we'd accrued a lot of technical debt. Little thought had gone into how each domain area operated and what a data model representation of this might look like. Much of what had gone before had to be unpicked. In some cases, such as with fulfillment I made the decision to let go of legacy models and start again from our raw tables through to models and the implementation of Retool for UI. Sometimes you should default on the debt! This is an even more enticing option now with agentic development. Why spend months cleaning up your repo, fishing for docs (that might not exist) when you can potentially spin up a new service in a week that does a better job?

## Data Source Quality

Just as we'd been working back to back, so had our engineering teams. Ad-hoc and poorly communicated changes to critical services would often cause downstream issues, and to critical (financial) reports. I spent a lot of time with product engineers, set up dedicated channels to discuss planned changes and tried to foster a bi-directional communication flow. This helped but it did not entirely resolve the issue. Software engineers write code for software and data engineers write code for analytics. Different mental models, different stacks, different goals.

## User Behaviour

This was, by far the most emotionally complex issue and the longest to tackle because of the amount of behaviour change involved. We had critical workflows that were ever evolving with the company. The demand for data, often with limited notice and context was not intentional. Our fulfilment teams were working flat out to try and deliver experiences for the first time. The relationship became quite strained, empathy was swapped for directness and neither side felt the process was working. 

After a few months of trying to signpost these users to the right tools/reports, I decided to escalate to my lead and in turn we were able to have a level-setting retro with a few significant actions - we'd bring in a dedicated analyst to help us build the reporting that the team needed, we'd also give them intensive training. In return, they'd give me bandwidth to run more detailed discovery on what they were doing, how, where and when they were using data, what processes those drove and so on. This meant we could get to work on a more persistent and all encompassing solution that would help allay some of the work. Again, not a 100% success, we were operating with nascent business processes that were liable to change.

## The Result

By the end of Q3 we'd seen some dramatic results:

### Inventory & CX Teams

Embedding analysts gave us the focus to mature each domain's reporting suite rather than context-switching across hundreds of ad-hoc requests. Domain leads became invested in prioritization, forcing ruthlessness about in-flight work. We observed:

* A 25% YOY increase in MAU across the Inventory team. Reports and self-serve were increasing, confidence was being restored. Beyond the adoption numbers, the team confirmed savings of approximately $350K through the avoidance of late hotel cancellation penalty costs in H1 2022. This would not have been possible without improved inventory modelling and Looker reports.  
* CX leadership were now confirming that our analytics meant they were able to easily observe and understand the drivers most impacting their cost. This had previously been manually calculated with data across Zendesk, Iterable and Netsuite. We were eliminating onerous processes.

Our embedded analysts had focused on the table stakes queries that our models, explores, data sources and reports **had to answer**. And we did this whilst thinking about the compute cost used to derive these models with several refactors to decommission legacy code.

* Looker and Tableau power users were answering 80% of their "how many, how often, what is" in less than 5 minutes.  
* Monthly credit consumption of the analytics layer was reduced to 50% thanks to 3 legacy dbt models decommissioned and hourly runs for non-essential models being moved to daily with no business impact.

### Fulfilment Team

A closer relationship and deeper understanding of the outcomes that our fulfillment team were targeting meant that we were able to hone attendee lists, room details, flights, all critical logistics touchpoints and most commonly the drivers of data-clinic requests.

Adding a contractor consultant here for a 6 month period meant that we'd observed inbound queries to the data team fall from 450 average queries per month to less than 50! 

### Data Team

We surveyed the team with 100% agreeing that their work-life balance had improved when compared to the same time last year.

## Key Takeaways

### You Can't Fix What You Can't See - Create Space First

Before making changes, you have to stop the bleeding. I had to actually assess what needed fixing. I captured data and feedback to gain visibility into what was going wrong before we could propose changes to how we contracted with each team.

### Ownership Clarity IS Speed 

Creating cross-functional domain channels (Inventory, CX, Fulfilment) changed who felt responsible for data problems. When questions landed in #inventory-data with product, engineering, and data all present, routing became obvious and teams started to take more ownership.

### Be deliberate with how you execute change

I didn't try to sell the embedded analyst model company-wide. I picked three high-pain areas (Fulfilment, CX and Inventory), embedded analysts there, proved the value, and then scaled. Early wins built coalition for wider change.

### Sometimes You Should Default on Technical Debt

For Fulfilment, we rebuilt from raw tables instead of fixing legacy models. With modern tools (and now AI), starting fresh can be faster and speed > architecture for early-stage companies.

### Relationship Problems Are Harder Than Technical Ones

My toughest challenge wasn't Snowflake credits or dbt models, it was the strained relationship with teams where empathy and trust had been lost. Fixing that required executive escalation, a retro, and a contractor to prove you were serious about solving their problems.
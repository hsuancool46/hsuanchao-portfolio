import type { SiteContent } from "./types";

/**
 * English copy for the whole site. Source: "Portfolio Content — English (v5)".
 *
 * A Traditional Chinese file (`content.zh.ts`) implements the same
 * `SiteContent` type and registers itself in `data/content.ts`.
 */
export const en: SiteContent = {
  /* ------------------------------------------------------------------ */
  /* Home                                                               */
  /* ------------------------------------------------------------------ */
  home: {
    meta: {
      navLabel: "Hsuan Chao",
      title: "Hsuan Chao",
      description:
        "Process design, stakeholder coordination, and practical decisions when budgets, regulations, and operational realities collide",
    },
    socialImage: {
      wordmark: "Hsuan Chao",
      tagline: "Program & Operations Management",
      alt: "Hsuan Chao — Program & Operations Management",
    },
    hero: {
      headline:
        "Turning Complex, Constrained Programs into Systems People Can Actually Run",
      subheadline:
        "Process design, stakeholder coordination, and practical decisions when budgets, regulations, and operational realities collide",
      description: [
        "I have led government-funded and healthcare programs as the sole program manager, coordinating procurement, compliance, training, and cross-disciplinary partners.",
        "My work begins where plans meet real constraints: limited capacity, incomplete information, fixed budgets, and competing institutional requirements.",
        "I turn those constraints into clear workflows, decision rules, and systems that continue to function after the project ends.",
        "This portfolio focuses on the decisions, trade-offs, and operating structures behind the results.",
      ],
    },
    cases: {
      title: "Three Selected Systems",
      note: "These three systems were developed within the flagship Physicians' Association Resilience System. Each card links to a focused case study.",
      outcomeLabel: "Outcome",
      items: [
        {
          slug: "medical-sop",
          title: "Medical Dispute Response Protocol",
          tags: ["Process Design", "Risk Management"],
          summary:
            "Converted high-pressure decisions into a clear, verifiable response protocol. Designed three response tracks (dispute / incident / violence), three evidence-collection checklists, and a standard external communication script. Released as a digital toolkit and a double-sided desk card distributed to 200+ member clinics citywide.",
          outcome: "Gave physicians a clear response path under pressure",
        },
        {
          slug: "procurement",
          title: "Government Grant Procurement & Reimbursement",
          tags: ["Budget Management", "Procurement Coordination"],
          summary:
            "A government-funded medical association program faced three simultaneous constraints: a fixed budget, committee approval requirements, and unpredictable vendor quotation timelines. By planning backward from reimbursement deadlines and aligning vendor requests with the committee schedule, expenditure remained properly categorized, documentation stayed complete, and the mid-term report was approved on the first submission.",
          outcome:
            "Zero reimbursement items rejected as of the mid-term review / Mid-term report approved on first submission",
        },
        {
          slug: "admin-failsafe",
          title: "Contract Execution Control Process",
          tags: ["Process Optimization", "Risk Prevention"],
          summary:
            "The association's administrative workflow lacked clear contract lifecycle controls, creating avoidable legal and operational risk. I introduced mandatory checkpoints for signing, sealing, and returning the fully executed agreement, in strict sequence. The revised workflow established clear ownership and prevented execution from moving ahead before the contract was complete.",
          outcome: "No checkpoints skipped / Contract-related risk reduced",
        },
      ],
    },
    cta: {
      title: "Let's Talk About Your Challenge",
      description:
        "Whether it's process design, program coordination, or resource allocation, it starts with defining the problem clearly.",
      button: "Contact Me",
    },
  },

  /* ------------------------------------------------------------------ */
  /* About                                                              */
  /* ------------------------------------------------------------------ */
  about: {
    meta: {
      navLabel: "About",
      title: "Who I Am — Hsuan Chao",
      description:
        "Whether it's medical dispute response, government grant execution, or internal process optimization, I apply the same judgment logic.",
    },
    positioning: {
      label: "Positioning",
      title: "Who I Am",
      paragraphs: [
        "I began my career in marketing, but soon realized that my strongest interest was not creative communication alone. It was finding workable structure when complexity, constraints, and competing demands appeared at the same time. Over the past five years, I have managed programs across healthcare institutions, government-funded initiatives, and B2B organizations, often as the sole program manager. My work is not purely technical or data-driven, but I use structured information and lightweight no-code automation to make execution clearer and more reliable.",
        "I am particularly effective at three things: defining the next actionable step when people are overwhelmed, keeping programs moving within institutional and resource constraints, and adding safeguards where none previously existed. In practice, this means process design, cross-departmental coordination, budget and procurement management, risk prevention, and decision-making with incomplete information.",
        "I apply the same decision framework across different types of problems: verify the real conditions before choosing a strategy, assess capacity before setting targets, and design for continuity from the beginning. I care less about short-term numbers that look impressive than about systems that remain useful after the funding period ends.",
      ],
    },
    capabilities: {
      label: "Capabilities",
      title: "Core Capabilities",
      items: [
        {
          title: "Process Design",
          text: "Turning chaotic situations into clear execution steps that reduce avoidable judgment under pressure.",
        },
        {
          title: "Budget & Procurement Coordination",
          text: "Building compliant procurement timelines around fixed budgets, multi-party approvals, and unpredictable vendor response times.",
        },
        {
          title: "Cross-Departmental & Cross-Disciplinary Coordination",
          text: "Coordinating lawyers, psychologists, social workers, government agencies, and external vendors by translating different professional priorities into a shared operating plan.",
        },
        {
          title: "Risk Prevention & Decision Frameworks",
          text: "Basing decisions on verifiable facts, preventing irreversible mistakes when information is incomplete, and reallocating resources as conditions change.",
        },
      ],
    },
    methodology: {
      label: "Methodology",
      title: "One Framework, Applied Across Different Problems",
      intro:
        "Whether it's medical dispute response, government grant execution, or internal process optimization, I apply the same judgment logic.",
      layers: [
        {
          title: "Don't Decide from Assumptions",
          text: "Decisions should be based on facts that can be verified in the moment, not on an internal script of what might happen. When a situation is complex or high-risk, convert critical choices into clear decision rules or checklists that reduce avoidable judgment under pressure.",
        },
        {
          title: "Don't Carry More Than the System Can Hold",
          text: "Capacity assessment must come before target-setting. Pushing beyond capacity may improve short-term numbers, but it creates long-term operational risk. Rather than chasing expenditure rates or event counts, resources should be reallocated toward deliverables the organization can realistically sustain.",
        },
        {
          title: "Check the Real Conditions Before Calling It a Failure",
          text: 'When the data does not match the original assumptions, the first question should not be "Whose fault is this?" It should be "What are the actual conditions?" Strategy should follow verified conditions, not remain fixed to the original proposal.',
        },
        {
          title: "Only Build What Outlasts the Project",
          text: "Grant-funded programs often lose momentum at closeout. To prevent that, ownership, maintenance, and ongoing funding must be considered during the design stage rather than treated as afterthoughts.",
        },
      ],
    },
    scenarios: {
      label: "Application Scenarios",
      title: "Where This Framework Applies",
      items: [
        {
          title: "Internal Process Transformation",
          text: "Programs that combine a fixed departmental budget with cross-departmental collaboration.",
          example:
            "Examples: finance process optimization and administrative system rollout.",
        },
        {
          title: "Government Grant Execution",
          text: "Programs with fixed compliance boundaries, KPI pressure, and limited time and resources.",
          example:
            "Examples: government-funded programs and association- or foundation-led initiatives.",
        },
        {
          title: "Durable Systems Under Limited Resources",
          example:
            "Examples: new system rollout, risk management framework design, and cross-institutional coordination.",
        },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  /* Works                                                              */
  /* ------------------------------------------------------------------ */
  works: {
    meta: {
      navLabel: "Works",
      title: "Works — Hsuan Chao",
      description:
        "Four healthcare cases examine one flagship program at two levels: the overall governance strategy and three operating systems developed within it. A separate de-identified B2B case shows how the same decision framework applies to cross-border market expansion.",
    },
    title: "Works",
    intro:
      "Four healthcare cases examine one flagship program at two levels: the overall governance strategy and three operating systems developed within it. A separate de-identified B2B case shows how the same decision framework applies to cross-border market expansion.",
    resultLabel: "Result",
    backLabel: "Back to Works",
    groups: {
      flagshipLabel: "Flagship program",
      subsystemsTitle: "Systems built inside this program",
      subsystemsNote:
        "Each case below is one workstream of the program above, examined on its own terms.",
      standaloneTitle: "Separate engagement",
    },
    items: [
      /* ---------------------------------------------------------------- */
      {
        slug: "medical-sop",
        title: "Medical Dispute Response Protocol",
        tags: ["ProcessDesign", "RiskManagement", "Healthcare"],
        summary:
          "Converting high-pressure decisions into a verifiable response protocol",
        result:
          "Clear response path under pressure / Distributed to 200+ member clinics",
        detailTags: ["ProcessDesign", "RiskManagement", "Healthcare"],
        group: "subsystem",
        sections: [
          {
            label: "Problem Statement",
            heading: "The Challenge",
            body: `When a medical dispute occurs, physicians must make immediate decisions while under emotional and legal pressure.
Should they apologize? How should they respond? Could their words create additional risk?
General advice is difficult to apply in that moment because people under stress cannot process lengthy analysis.

The conventional response is often a detailed SOP consulted only after the event. The more useful intervention is to reduce avoidable judgment at the point when clear action matters most.`,
          },
          {
            label: "Solution",
            heading: "What I Did",
            body: `I divided the response system into three parts:

1. Three response tracks
   Cases are routed by type (dispute / incident / violence), with clear time markers (T+0 evidence collection, T+7 reporting, T+45 report upload).

2. Three evidence-collection checklists
   Converted evidence requirements into checkbox items, allowing physicians to verify each requirement without reconstructing the process under pressure.

3. A standard external script
   Three fixed rules: do not assign fault, do not discuss compensation, and do not make public statements. These rules help prevent irreversible communication errors while the facts are still incomplete.

Legal foundation: Article 7 of Taiwan's Medical Accident Prevention and Dispute Resolution Act
Statements of regret, apology, or concession made during the statutory communication and care process generally may not be used as evidence or as the basis for a ruling in related litigation, unless all parties agree otherwise.

This legal foundation allowed the protocol to move beyond a purely defensive document and become a communication tool physicians could use in practice.

Source: Laws & Regulations Database of the Republic of China (Taiwan), official English translation
https://law.moj.gov.tw/ENG/LawClass/LawAll.aspx?pcode=L0020227`,
          },
          {
            label: "Delivery Format",
            heading: "Deliverables",
            body: `Digital version: permanently downloadable toolkit on the association's website
Physical version: double-sided desk card (flowchart on the front, core guidance on the back) with a QR code

Why a physical version?
A physician is unlikely to search through a five-page document during an incident, but can quickly consult a tool already visible on the desk.`,
          },
          {
            label: "Validation & Iteration",
            heading: "The Process",
            body: `The toolkit was reviewed from three professional perspectives:
- A lawyer (legal compliance)
- A psychologist (real-world usability)
- A social worker (risk-assessment perspective)

After revisions from V4 to V5, the association officially released the toolkit citywide.`,
          },
          {
            label: "Results",
            heading: "Outcomes",
            body: `✓ A cross-disciplinary support team was formed and remains active
✓ Physical and digital materials were distributed to 200+ member clinics citywide
✓ First-phase training participation reached 170% of the mid-term target
✓ Physicians received a clear, immediately accessible response path`,
          },
          {
            label: "Transferability",
            heading: "Where This Framework Also Applies",
            body: `- Internal dispute response within healthcare institutions
- Emotionally charged customer service scenarios
- Any high-pressure scenario where critical decisions can be converted into clear response rules`,
          },
        ],
      },

      /* ---------------------------------------------------------------- */
      {
        slug: "procurement",
        title: "Government Grant Procurement & Reimbursement",
        tags: [
          "BudgetManagement",
          "ProcurementCoordination",
          "MedicalAssociation",
        ],
        summary: "Planning compliant procurement under three overlapping constraints",
        result:
          "Zero reimbursement items rejected as of mid-term review / Mid-term report approved on first submission",
        detailTags: [
          "BudgetManagement",
          "ProcurementCoordination",
          "MedicalAssociation",
          "GovernmentGrant",
        ],
        group: "subsystem",
        sections: [
          {
            label: "Problem Statement",
            heading: "The Challenge",
            body: `A government-funded medical association program faced three simultaneous constraints:

1. Fixed budget
   The budget ceiling was set and couldn't be increased.

2. Committee approval requirements
   Procurement required internal committee approval before proceeding.

3. Unpredictable vendor quotation timelines
   Vendors required different amounts of time to prepare and return quotations.

Stacked together, these constraints tend to produce:
- Approval delays pushing procurement further back
- Approved funds remaining unspent as quotation timelines stretch out
- Rushed or inefficient year-end expenditure
- Incomplete documentation, risking rejection at closeout`,
          },
          {
            label: "Solution",
            heading: "What I Did",
            body: `The operating principle was simple: plan backward from the non-negotiable deadline.

Instead of treating procurement as a linear sequence — hold a meeting, obtain approval, request quotations, and wait — I began with the closeout date and worked backward through the reimbursement deadline, documentation deadline, vendor response window, quotation request date, and committee meeting schedule.

Specifically:
1. Inventoried all procurement items and classified them by expenditure category
2. Sequenced quotation requests according to procurement complexity and expected lead time
3. Notified vendors up to 90 days in advance
4. Scheduled committee decisions around the quotation response window
5. Completed supporting documentation before the reimbursement deadline

Result: expenditure remained in the correct budget categories, supporting documentation stayed complete, and the mid-term report was approved on the first submission.`,
          },
          {
            label: "Cost-Benefit Judgment Calls",
            heading: "Two Key Decisions",
            body: `Decision 1: Chose not to proceed with a NT$260,000 hardware subsidy
Proceeding would have pushed total capital expenditure over the NT$1.5M public tender threshold, triggering a procurement process whose administrative cost outweighed the additional benefit. The essential equipment had already been secured through the existing procurement plan.
Conclusion: compliance and administrative burden outweighed the value of increasing the expenditure rate.

Decision 2: Cancelled an advanced first-aid course when enrollment remained too low
Running the course as planned would have committed budget and venue capacity to a poorly attended event. I reallocated the budget to a fall hybrid program combining online theory with in-person practice, designed around the operational reality that clinic physicians cannot leave patient care for extended periods.`,
          },
          {
            label: "Results",
            heading: "Outcomes",
            body: `✓ Zero reimbursement items rejected as of the mid-term review
✓ Mid-term report approved on first submission
✓ Budget reallocated toward deliverables with stronger operational value
✓ Supporting documentation complete at the mid-term review`,
          },
          {
            label: "Transferability",
            heading: "Where This Logic Also Applies",
            body: `- Corporate annual budget planning
- Any procurement scenario combining a fixed budget, multi-party approval, and vendor timing variance
- Government-funded programs`,
          },
        ],
      },

      /* ---------------------------------------------------------------- */
      {
        slug: "admin-failsafe",
        title: "Contract Execution Control Process",
        tags: ["ProcessOptimization", "RiskPrevention", "MedicalAssociation"],
        summary: "Embedding mandatory contract checkpoints into the workflow",
        result: "No checkpoints skipped / Reduced contract-related risk",
        detailTags: [
          "ProcessOptimization",
          "RiskPrevention",
          "MedicalAssociation",
        ],
        group: "subsystem",
        sections: [
          {
            label: "Problem Statement",
            heading: "The Challenge",
            body: `The association's administrative workflow lacked clear controls across the contract lifecycle.

Common problems:
- Administrative work began while a contract was still under legal review
- Execution was already underway when a disputed clause surfaced
- The organizational seal was requested before the contract had been fully signed
- External documents were issued before both parties held a complete, executed agreement

These appeared to be minor administrative issues, but they created real legal and operational risk.`,
          },
          {
            label: "Solution",
            heading: "What I Did",
            body: `I inserted three mandatory checkpoints into the workflow in strict sequence:

Checkpoint 1: Contract signing
No related execution may begin until the contract has been signed, including procurement, subcontracting, or external notification.

Checkpoint 2: Organizational seal
The agreement cannot move to final processing until the required seal has been applied.

Checkpoint 3: Return of the fully executed agreement
The process is complete only when the sealed agreement has been returned and both parties hold a complete, signed copy.

On the surface, these are three additional checkpoints. In practice, they established contract governance as part of routine administration.`,
          },
          {
            label: "Execution Details",
            heading: "Making Sure the Checkpoints Actually Work",
            body: `1. The workflow document marks each checkpoint with color coding and sequence numbers
2. Each step has a named owner responsible for confirming signing, sealing, or return
3. The tracking form prevents the next step from being recorded before the previous one is complete
4. Compliance is checked weekly during the first month and monthly thereafter`,
          },
          {
            label: "Results",
            heading: "Outcomes",
            body: `✓ No checkpoints skipped after implementation
✓ Contract-related risk reduced
✓ Administrative staff gained clearer ownership of contract controls
✓ External document packages became more complete and traceable`,
          },
          {
            label: "Transferability",
            heading: "Where This Logic Also Applies",
            body: `- Corporate procurement processes
- Any process involving agreements with external parties
- Any workflow requiring enforced sequence and auditable handoffs`,
          },
        ],
      },

      /* ---------------------------------------------------------------- */
      {
        slug: "resilience-system",
        title: "Physicians' Association Resilience System",
        tags: ["CrossDisciplinaryCoordination", "GovernmentGrant"],
        summary:
          "16 months, NT$5M budget, sole program management, five integrated workstreams",
        result:
          "Mid-term report approved / Citywide toolkit distribution / On track toward 80%+ budget execution at closeout",
        detailTags: [
          "FlagshipProject",
          "CrossDisciplinaryCoordination",
          "GovernmentGrant",
          "SinglePersonCoordination",
        ],
        group: "flagship",
        sections: [
          {
            label: "Project Background",
            heading: "Project Overview",
            body: `Duration: 16 months
Total budget: NT$5,000,000
Execution model: Sole program management across administration, procurement, reimbursement documentation, and cross-disciplinary coordination
Collaborators: Lawyers, psychologists, social workers, emergency training institutions, health authorities
Coverage: 6 partner clinics within a city-level network of 200+ member clinics

Project goal:
Build an integrated resilience program for community clinics across three dimensions: legal literacy, personal and psychological safety, and emergency response.`,
          },
          {
            label: "Core Challenge",
            heading: "Why This Project Was Complex",
            body: `Three constraints occurring at once:

Constraint 1: Sole program management + multi-party collaboration
As the sole program manager, I coordinated lawyers, psychologists, social workers, government agencies, and external training providers. Each field operated according to different professional priorities, requiring a shared operating plan.

Constraint 2: Fixed budget + diverse, initially unclear needs
The NT$5M budget was fixed, but the target population spanned 200+ member clinics, each varying in size, specialty, equipment, and staffing — no single solution could serve them all. The program therefore required a tiered design.

Constraint 3: Grant compliance rules + operational reality
The grant imposed strict compliance and reimbursement requirements while the program still had to adapt to conditions that could not be known at the proposal stage.

When these constraints overlap, programs can easily begin chasing expenditure rates and event counts simply to match the original proposal. I chose to verify the real conditions first and reallocate resources accordingly.`,
          },
          {
            label: "Five Integrated Workstreams",
            heading: "Workstreams and Deliverables",
            subsections: [
              {
                heading: "Deliverable 1: SOP & Toolkit (V5)",
                body: `Components:
- Three evidence-collection checklists (A: medical dispute / B: medical incident / C: medical violence)
- Third-party authorization form
- Care documentation form
- Double-sided physical desk card (flowchart front, core guide back)
- QR code digital link

Release:
- Digital: permanent download on the association's website
- Physical: distributed to 200+ member clinics citywide

Status: officially launched on the association's website on April 17, 2026

Transferability:
The underlying design principle — converting high-pressure decisions into clear response rules — can be applied within healthcare institutions, customer service, and other high-pressure response environments.`,
              },
              {
                heading:
                  "Deliverable 2: Commissioned Hybrid Learning Platform + TECC Course Series",
                body: `Structure:
- BLS (8 hours, offered on an ongoing basis)
- TECC Basic (4hr online + 4hr in-person)
- TECC Advanced (8hr online + 8hr in-person)

Build approach:
Commissioned a professional emergency-response organization to build the online learning platform. Moving theory online reduced time and location barriers, allowing in-person sessions to focus on practical skills.

Status as of July 2026: platform launched
Pending: September completion figures and cumulative year-end platform completions

Design logic:
Clinic physicians cannot easily leave patient care for a continuous eight-hour block. A conventional full-day, in-person course therefore creates a structural attendance barrier. The hybrid model moved theory online and concentrated essential hands-on practice into a single afternoon.`,
              },
              {
                heading:
                  "Deliverable 3: Reallocating Resources on a Behind-Schedule Program",
                body: `Key figure: mid-term budget execution rate of 6.5% → target of 80%+ by closeout

Three specific decisions, all following the same logic:

Decision 1: Chose not to proceed with a NT$260,000 hardware subsidy
Reason: doing so would have pushed capital expenditure over the NT$1.5M public tender threshold; the additional administrative burden exceeded the subsidy's operational value, and the essential equipment had already been secured through the existing procurement plan.
Judgment: compliance and operational value took priority over a higher expenditure rate.

Decision 2: Cancelled an advanced first-aid course when enrollment remained too low
Reason: proceeding would have committed budget and venue capacity to a poorly attended event. The budget was reallocated to a fall hybrid program designed around physicians' actual availability.

Decision 3: A basement survey overturned the original assumption
The original proposal assumed clinic basements could serve as disaster-response stations. The survey of 60 clinics found only 10 had basements, and only 3 were willing to take on that role.
Strategy revised: shifted from a centralized basement model to flexible use of first-floor clinical space.

Conclusion:
The low mid-term expenditure rate did not, by itself, indicate execution failure. It revealed a mismatch between actual conditions and assumptions made at the proposal stage. The strategy was therefore revised around verified conditions.

Results:
✓ Mid-term report approved on first submission
✓ Zero reimbursement items rejected as of the mid-term review
✓ On track toward an 80%+ expenditure rate at closeout`,
              },
              {
                heading: "Deliverable 4: Clinic Space Survey + Policy Findings",
                body: `Survey scope: 60 clinics citywide (roughly 30% of member clinics)

Findings:
- Clinics with a basement: 10 (17%)
- Willing to take on resilience infrastructure: 3 (5%)

Strategy revision:
Shifted from a centralized shelter model to in-room protection and flexible use of first-floor space.

Application:
This survey data became the basis for subsequent policy recommendations, rather than implementing the original proposal on top of unverified assumptions.`,
              },
              {
                heading: "Deliverable 5: Three-Dimensional Training Series",
                body: `Program scope: 8 sessions delivered across two training tracks — 5 sessions on medical dispute response and 3 on medical violence prevention — organized around three capability dimensions.

All sessions were led by external specialists engaged for the program.
Speakers are identified by professional role rather than by name.
Representative sessions:

Dimension 1: Legal literacy
- Jan 27, 2026: A practicing attorney — legislative background of the Medical Accident Prevention and Dispute Resolution Act
- Feb 26, 2026: A physician experienced in medical dispute adjudication — practical case review
- Apr 9, 2026: A physician — legal risk management in medical practice, viewed through the dispute assessment process

Dimension 2: Personal and facility safety
- Mar 24, 2026: A former National Security Bureau instructor — clinic evacuation routes and self-defense equipment training

Dimension 3: Psychological resilience
- May 19, 2026: A hospital social work director — on-site emotional support and physician-patient communication
- Jun 30, 2026: An emergency physician specializing in medical communication, crisis response, and healthcare law — managing stress in physician-patient communication

Format: free, small-cohort sessions (30 participants), eligible for continuing education credits

Status as of July 2026: all eight sessions delivered; final participation figures to be confirmed at closeout`,
              },
            ],
          },
          {
            label: "Governance Decision Framework",
            heading: "The Judgment Logic Behind This Project",
            note: "This section directly references the \"Four-Layer Framework\" from the About page, illustrated through this case",
            body: `Layer 1: Don't decide from assumptions
├─ Example: Used Article 7 of Taiwan's Medical Accident Prevention and Dispute Resolution Act as a verifiable foundation for the toolkit design
└─ Result: The toolkit shifted from a "defensive document" into a communication tool people would actually use

Layer 2: Don't carry more than the system can hold
├─ Example: Mid-term budget execution rate was 6.5% — chose to reallocate rather than push through
└─ Result: On track toward an 80%+ expenditure rate at closeout, with resources concentrated on sustainable deliverables

Layer 3: Check the real conditions before calling it a failure
├─ Example: Basement survey overturned the original assumption; strategy followed the conditions
└─ Result: Shifted from a centralized shelter model to in-room protection and flexible first-floor space

Layer 4: Only build what outlasts the project
├─ Example: Toolkit remains downloadable, the training platform stays available after closeout, and desk cards remain in clinics
└─ Result: Core resources remain usable after closeout without dedicated ongoing staffing`,
          },
          {
            label: "Limitations",
            heading: "Boundaries, Stated Honestly",
            body: `✓ This is a single-city program; applying the approach at a larger scale would require re-validation
✓ Training completions and final participation figures are still accumulating during closeout
✓ Participation is measured by clinic count, not by depth of adoption within each clinic
✓ Identifying institutional and personal details have been removed or generalised for confidentiality.`,
          },
          {
            label: "Transferability",
            heading: "Where This Framework Also Applies",
            body: `- Internal process transformation within a company (fixed departmental budget, cross-departmental collaboration)
- Other government-funded program execution (fixed compliance boundaries, KPI pressure)
- Any scenario requiring a durable system under limited resources`,
          },
        ],
      },

      /* ---------------------------------------------------------------- */
      {
        slug: "b2b-market-expansion",
        title: "B2B Market Expansion Under Execution Delays",
        tags: ["B2BMarketing", "MarketExpansion", "ResourceAllocation"],
        summary:
          "Rebalancing a cross-border market expansion program when the original offline plan stalled",
        result:
          "8x click target / 700+ high-value inquiries / 40%+ YoY overseas revenue growth",
        detailTags: [
          "B2BMarketing",
          "MarketExpansion",
          "ResourceAllocation",
          "ProgramExecution",
        ],
        note: "This case has been intentionally de-identified. The company, brand, product category, target country, vendors, locations, budget, dates, and exact performance figures have been generalized or omitted. The operating constraints, decisions, and relative outcomes remain accurate.",
        sections: [
          {
            label: "Project Background",
            heading: "The Context",
            body: `A Taiwan-based B2B manufacturer was expanding its proprietary product line into a high-growth overseas market through a co-funded market development program.

The program combined digital advertising, website and marketplace optimization, product content, field advertising, customer events, and local channel development.

I served as the principal co-executor, working directly with the project lead on planning, execution tracking, performance review, cross-border coordination, and grant reporting.`,
          },
          {
            label: "Core Challenge",
            heading: "When the Original Plan Stalled",
            body: `Several constraints emerged at the same time:

1. Operational delays
   A factory transition and the setup of overseas facilities pushed field activities behind schedule.

2. An external political cycle
   A national election made outdoor advertising inventory scarce and significantly more expensive.

3. Fixed budget and compliance requirements
   The program still had to operate within approved budget categories, documentation rules, and performance targets.

4. Cross-border timing
   Vendor production, event scheduling, installment payments, and reimbursement documentation moved on different timelines.

Following the original schedule mechanically would have meant purchasing overpriced exposure, forcing low-value activities, and reporting progress that looked active without improving market results.`,
          },
          {
            label: "Strategic Reallocation",
            heading: "What We Changed",
            body: `The team delayed the least cost-effective offline activities instead of executing them simply to protect the schedule.

During the first phase, resources and management attention shifted toward measurable digital channels:
- Search and display advertising
- Product and corporate video content
- Website conversion improvements
- A local B2B marketplace
- Customer behavior and product-interest analysis

The resulting audience and inquiry data were then used to support the second phase:
- Customer events
- Regional channel development
- Selected outdoor advertising after market prices normalized
- Follow-up with higher-intent customer segments

A planned mobile advertising format was ultimately cancelled when local review showed that its cost-effectiveness was too low. Resources were redirected toward channels with stronger evidence of demand.`,
          },
          {
            label: "Results",
            heading: "Outcomes",
            body: `Digital acquisition
✓ Paid media exceeded every acquisition target, reaching 8x the click target
✓ Video content surpassed 1M views
✓ 700+ high-value inquiries generated across digital and marketplace channels

Field execution
✓ Four product showcase events rebuilt the delayed offline pipeline
✓ Dozens of new dealer relationships established
✓ Outdoor advertising placed in a major industrial corridor once media prices normalized

Commercial outcome
✓ 40%+ year-on-year overseas revenue growth, exceeding the program target
✓ Budget execution and reimbursement documentation completed at closeout`,
          },
          {
            label: "Decision Framework",
            heading: "The Judgment Logic Behind the Work",
            body: `Layer 1: Don't decide from assumptions
├─ Used channel performance and customer behavior data to identify where demand was actually forming
└─ Result: resources followed observed demand rather than the original media mix

Layer 2: Don't carry more than the system can hold
├─ Delayed or cancelled activities whose price, timing, or operational burden no longer made sense
└─ Result: the team avoided spending simply to protect the schedule

Layer 3: Check the real conditions before calling it a failure
├─ Treated the weak mid-term offline progress as a timing and channel problem, not proof that the market strategy had failed
└─ Result: the program recovered through a phased digital-to-field approach

Layer 4: Only build what outlasts the project
├─ Built reusable content, customer data, marketplace presence, and channel relationships
└─ Result: the company retained assets and demand signals after the funded period ended`,
          },
          {
            label: "My Role",
            heading: "Co-Execution, Not Sole Ownership",
            body: `I was not the formal project lead. As the principal co-executor, I helped translate the project lead's direction into execution plans, performance reviews, reporting logic, and adjustments across multiple workstreams.

This case demonstrates how I operate inside a leadership structure: not by competing for ownership, but by making the plan more executable, identifying when assumptions have stopped matching reality, and giving the lead a clearer basis for action.`,
          },
          {
            label: "Transferability",
            heading: "Where This Logic Also Applies",
            body: `- B2B market-entry and channel-development programs
- Marketing programs combining digital acquisition with field execution
- Government-supported business development projects
- Any program requiring resource reallocation when external conditions invalidate the original plan`,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Contact                                                            */
  /* ------------------------------------------------------------------ */
  contact: {
    meta: {
      navLabel: "Contact",
      title: "Let's Talk About Your Challenge — Hsuan Chao",
      description:
        "Whether it's process design, program coordination, or resource allocation, it starts with defining the problem clearly.",
    },
    label: "Contact",
    title: "Let's Talk About Your Challenge",
    description: [
      "Whether it's process design, program coordination, or resource allocation, it starts with defining the problem clearly.",
      "Fill out the form below, and I'll get back to you within three business days.",
    ],
    emailPrompt: "Or email me directly at {email}.",
    email: "hsuanchao96@gmail.com",
    form: {
      name: "Name",
      company: "Company / Organization",
      email: "Email",
      topic: "Topic",
      topicPlaceholder: "Select a topic",
      topics: [
        { value: "process-design", label: "Process Design" },
        { value: "budget-procurement", label: "Budget & Procurement" },
        { value: "coordination", label: "Cross-Departmental Coordination" },
        { value: "other", label: "Other" },
      ],
      message: "Describe your challenge",
      submit: "Submit",
      submitting: "Sending…",
      topicError: "Please select a topic",
      submitError:
        "Something went wrong and your message was not sent. Please try again, or email me directly at {email}.",
      configError:
        "The contact form is not available right now. Please email me directly at {email}.",
    },
    success: {
      message:
        "Thank you! I've received your message and will respond within three business days.",
      reset: "Send another message",
    },
  },
};

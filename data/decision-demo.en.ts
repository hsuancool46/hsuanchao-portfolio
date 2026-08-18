// data/decision-demo.en.ts
// Decision Demo page content — English.
// Scripted demo. No backend, no model calls, no persisted state.
// All copy below is final. Do not paraphrase when implementing.

export type TraceStep = {
  /** 1–8. Rendered as "Step {n} · {label}" */
  step: number
  label: string
  /** May contain a single <strong> to mark the fact this step surfaced. No other markup. */
  body: string
}

export type DemoOption = {
  /** "A — Submit under an existing category" */
  label: string
  /** The real cost of choosing this option. Never leave one option obviously correct. */
  consequence: string
}

export type DemoCase = {
  slug: string
  /** Card + detail header. The kind of judgment, not the topic. */
  decisionType: string
  /** Card only. Who holds the ruling — shown as "Ruled by — {rulerShort}" */
  rulerShort: string
  /** The unrefined question as received, in quotes. */
  rawQuestion: string
  /** 3–4 short sentences. The mess, including the fact the asker had not noticed. */
  context: string
  /** One sentence, past tense, naming this case's decision-maker and time frame. */
  reduction: string
  /** The single question the options answer. Must not be wider than the options. */
  decisionRequired: string
  options: [DemoOption, DemoOption]
  /** Conditional recommendation. Must not read as a final ruling. */
  preliminaryReadingLead: string
  preliminaryReadingBody: string
  /** Exactly 4. Facts needed to choose — not a summary of the case. */
  factsNeeded: [string, string, string, string]
  /** Full attribution of authority, including timing constraints where they bind. */
  decisionOwner: string
  /** What the owner ruled. Ends by confirming no further round of questions was needed. */
  ruling: string
  /** Credibility anchor: the method is deployed, the app is not. Never claim otherwise. */
  methodInPractice: string
  caseStudyHref: string
  caseStudyLabel: string
  trace: TraceStep[]
}

export type DecisionDemoContent = {
  nav: { label: string; href: string }
  meta: { title: string; description: string }
  claim: string
  disclaimer: string
  labels: {
    /** Card eyebrow, rendered as "{caseLabel} {n} · {demoBadge}" */
    caseLabel: string
    demoBadge: string
    ruledBy: string
    questionHandled: string
    whatIProduced: string
    decisionRequired: string
    factsNeeded: string
    decisionOwner: string
    howItWasRuled: string
    methodInPractice: string
    /** Trace step eyebrow, rendered as "{stepLabel} {n} · {label}" */
    stepLabel: string
    traceOpen: string
    traceClose: string
    signature: string
  }
  cases: DemoCase[]
}

export const decisionDemo: DecisionDemoContent = {
  nav: { label: 'Decision Demo', href: '/decision-demo' },

  meta: {
    title: 'Decision Demo — Hsuan Chao',
    description:
      'Three illustrative cases showing how a tangled request is reduced to a single decision the responsible person can rule on.',
  },

  claim:
    'I reduce a tangled case to the point where the person with authority only has to choose.',

  disclaimer:
    'Illustrative cases. The scenarios are constructed; the method is drawn from real program work.',

  labels: {
    caseLabel: 'Case',
    demoBadge: 'Demo',
    ruledBy: 'Ruled by',
    questionHandled: 'The question I was handed',
    whatIProduced: 'What I produced',
    decisionRequired: 'The decision required',
    factsNeeded: 'What you need in order to rule',
    decisionOwner: 'Decision owner',
    howItWasRuled: 'How it was ruled',
    methodInPractice: 'Method in practice',
    stepLabel: 'Step',
    traceOpen: 'How I got there — 8 steps',
    traceClose: 'Hide the trace',
    signature: 'System prepares. Human decides.',
  },

  cases: [
    // ─────────────────────────────────────────────────────────────
    {
      slug: 'unbudgeted-subscription',
      decisionType: 'Procedural judgment',
      rulerShort: 'Funding agency',
      rawQuestion: '"Can we claim this AI subscription?"',
      context:
        'Ten monthly invoices. No matching line in the approved budget. Two charges outside the project period. No one certain who had authority to decide.',
      reduction:
        'I reduced the case to one decision the funding agency could rule on in a single reply.',
      decisionRequired:
        'Should the NT$9,600 in-period portion be submitted under an existing category now, or after a budget adjustment?',
      options: [
        {
          label: 'A — Submit under an existing category',
          consequence:
            'Allows the NT$9,600 in-period portion to be submitted now, subject to written confirmation that the category applies without prior adjustment.',
        },
        {
          label: 'B — Seek a budget adjustment first',
          consequence:
            'Lower procedural risk, but submission moves to the next adjustment cycle.',
        },
      ],
      preliminaryReadingLead: 'Preliminary reading — A, given the current facts.',
      preliminaryReadingBody:
        'Proceed with A if the funding agency confirms the category in writing. Otherwise, follow B.',
      factsNeeded: [
        'Use is directly tied to program delivery — written statement on file',
        'Invoices issued to the organisation; paid by personal card, with the reimbursement trail complete',
        'No explicit line in the approved budget; the closest category is information services',
        'The two out-of-period charges are already excluded from this figure',
      ],
      decisionOwner:
        "funding agency case officer, with the organisation's accountant",
      ruling:
        'Option A, under information services, with a statement of use attached. Ruled without a further round of questions.',
      methodInPractice:
        'This method came out of running procurement and reimbursement on a 16-month government-funded program — planning backward from the closeout date, with zero reimbursement items rejected at the mid-term review.',
      caseStudyHref: '/works/procurement',
      caseStudyLabel: 'Read the case study',
      trace: [
        {
          step: 1,
          label: 'raw question',
          body: 'Ten monthly charges, NT$12,000, invoices and payment records on file.',
        },
        {
          step: 2,
          label: 'clarification — what, who, when',
          body: 'Used for materials and administration · invoices to the organisation, paid on a personal card · <strong>March to December — two months fall outside the project period</strong>',
        },
        {
          step: 3,
          label: 'decision question',
          body: 'Scope resolved, period portion isolated, and the open question narrowed to procedure.',
        },
        {
          step: 4,
          label: 'constraints and evidence',
          body: 'Expenditure principles, budget table, service-fee provisions and adjustment rules, set against invoices, payment records and a written statement of use.',
        },
        {
          step: 5,
          label: 'gaps and issues',
          body: 'Category undetermined · no written agency confirmation on file.',
        },
        {
          step: 6,
          label: 'preliminary assessment',
          body: 'Programme relevance supported; procedure unresolved.',
        },
        {
          step: 7,
          label: 'decision brief',
          body: 'Two live options, the four facts needed to choose between them, and the enquiry text ready to send.',
        },
        {
          step: 8,
          label: 'human decision record',
          body: 'Ruling, authority, basis, conditions and status logged against the case.',
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────
    {
      slug: 'front-desk-dispute',
      decisionType: 'Time-critical, irreversible',
      rulerShort: 'The physician, now',
      rawQuestion: '"Should I apologise first?"',
      context:
        "A patient's son confronting staff in the waiting area. Two other patients present, one recording. Nothing clinical said yet. The incident is three days old and the same-day evidence step was never started.",
      reduction:
        'I reduced the case to one decision the physician could make in the next ten minutes.',
      decisionRequired:
        "Engage now in a private room, or defer to a scheduled meeting with the association's cross-disciplinary support team present?",
      options: [
        {
          label: 'A — Engage now, in private',
          consequence:
            'Expressions of concern only, no statement on cause. Clears the waiting area immediately; requires holding the line on causation without support in the room.',
        },
        {
          label: 'B — Defer to a scheduled meeting',
          consequence:
            'Controlled setting with the support team present, but leaves the confrontation running in public while it is being recorded.',
        },
      ],
      preliminaryReadingLead: 'Preliminary reading — A, given the current facts.',
      preliminaryReadingBody:
        'Leaving the confrontation in a public, recorded setting may increase exposure; waiting provides more support, but does not remove that immediate risk.',
      factsNeeded: [
        'No clinical statement has been made — the position is still open under either option',
        'Article 7 is cited as the provision supporting an expression of concern without determining cause',
        'A third party is recording; two uninvolved patients are present',
        'Either way, the same-day evidence step must be completed today — it is three days overdue. The current record points to Track A rather than a reportable incident; that routing remains provisional until the facts are reviewed',
      ],
      decisionOwner:
        'the attending physician, at the moment. Prepared in advance, not decided in advance.',
      ruling:
        'Option A. Concern expressed, no admission, conversation moved to a private room. Evidence step completed the same day; cross-disciplinary support team notified. Ruled without a further round of questions.',
      methodInPractice:
        'The same decision structure underlies the evidence checklists and desk cards distributed across 200+ member clinics. Physicians record what happened; the cross-disciplinary support team can see at a glance what support to send.',
      caseStudyHref: '/works/medical-sop',
      caseStudyLabel: 'Read the case study',
      trace: [
        {
          step: 1,
          label: 'raw question',
          body: 'A dispute over a referral three days ago, now unfolding at the front desk.',
        },
        {
          step: 2,
          label: 'clarification — what, who, when',
          body: "Staff have said only that the doctor will explain · the patient's son, patient absent, <strong>two patients waiting, one recording</strong> · three days ago; no statutory reporting deadline applies under Track A",
        },
        {
          step: 3,
          label: 'decision question',
          body: 'Not whether to apologise, but where the conversation happens and how much is said before the facts are reviewed.',
        },
        {
          step: 4,
          label: 'constraints and evidence',
          body: 'Article 7, Track A of the response protocol, and the no-fault communication rules, set against appointment and referral records and the front-desk note.',
        },
        {
          step: 5,
          label: 'gaps and issues',
          body: "Evidence step not started · the son's authority to act for the patient unverified · clinical review not yet done. Track A applies on the facts as known — if review later establishes harm, the case re-routes and the statutory clocks start.",
        },
        {
          step: 6,
          label: 'preliminary assessment',
          body: 'Track A can be activated without resolving the outstanding clinical or authority questions first. The immediate procedural steps should not wait.',
        },
        {
          step: 7,
          label: 'decision brief',
          body: 'Two options on setting and timing, the four facts that separate them, and the same-day step required under both.',
        },
        {
          step: 8,
          label: 'human decision record',
          body: 'Ruling, authority, basis, conditions and status logged against the case, with the routing noted as provisional.',
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────
    {
      slug: 'under-enrolled-session',
      decisionType: 'Trade-off with no governing rule',
      rulerShort: 'The board',
      rawQuestion: '"Only six people signed up — do we still run it?"',
      context:
        'Six of thirty seats filled, ten days out. Venue booked, instructor contracted, materials printed. The session counts toward a funded target, and no rule says what enrolment is too low.',
      reduction:
        'I reduced the case to one decision the board could settle in a single meeting.',
      decisionRequired:
        'Run the session at 20% capacity, or cancel before the deadline and redirect the budget to a format built around clinic schedules?',
      options: [
        {
          label: 'A — Run it as scheduled',
          consequence:
            'Protects the session count and the instructor relationship. Spends the full budget on six attendees and puts a 20% attendance figure into the closeout report.',
        },
        {
          label: 'B — Cancel and redirect',
          consequence:
            "Preserves most of the remaining budget for a hybrid format with broader reach. Forfeits the venue deposit, requires re-contracting the instructor, and drops one session from this year's count.",
        },
      ],
      preliminaryReadingLead: 'Preliminary reading — B, given the current facts.',
      preliminaryReadingBody:
        'Enrolment has not moved in two weeks and the barrier is structural, not promotional. A redirected format could reach more people with the remaining budget than the in-person session — but the trade is a real one, and the board may weigh the reporting cost differently.',
      factsNeeded: [
        'Enrolment has been flat for two weeks despite a second round of outreach',
        'The stated reason from those who declined is an eight-hour block away from patient care — not cost or topic',
        'Cancelling within ten days forfeits the venue deposit; after seven days the full venue fee is due',
        'No funding rule sets a minimum enrolment; the target is expressed in sessions delivered, not attendees',
      ],
      decisionOwner:
        'the board, at the next scheduled meeting — three days before the deposit deadline',
      ruling:
        'Option B. Cancelled inside the deposit window, budget redirected to a hybrid format — theory online, hands-on practice in a single afternoon. Ruled without a further round of questions.',
      methodInPractice:
        'This is the reasoning behind a live reallocation on a 16-month funded program: a mid-term execution rate of 6.5%, an under-enrolled course cancelled rather than forced through, and the budget moved into a hybrid platform that outlasted the funding period.',
      caseStudyHref: '/works/resilience-system',
      caseStudyLabel: 'Read the case study',
      trace: [
        {
          step: 1,
          label: 'raw question',
          body: 'Six of thirty seats filled, ten days before an eight-hour in-person session.',
        },
        {
          step: 2,
          label: 'clarification — what, who, when',
          body: 'Venue, instructor and materials already committed · <strong>those who declined cite the eight-hour block, not cost or topic</strong> · the deposit deadline falls three days after the next board meeting',
        },
        {
          step: 3,
          label: 'decision question',
          body: 'Not whether enrolment is high enough, but whether the format itself is the obstacle — and whether the budget buys more elsewhere.',
        },
        {
          step: 4,
          label: 'constraints and evidence',
          body: 'Remaining budget, venue cancellation terms, instructor contract and the funded target, set against enrolment history and the reasons given for declining.',
        },
        {
          step: 5,
          label: 'gaps and issues',
          body: "No governing rule on minimum enrolment · the instructor's availability for a later hybrid format unconfirmed · the funder's view on a reduced session count untested.",
        },
        {
          step: 6,
          label: 'preliminary assessment',
          body: 'The evidence points to a structural barrier rather than weak promotion. Nothing external forces the choice, so this is a judgment on what the money should buy.',
        },
        {
          step: 7,
          label: 'decision brief',
          body: 'Two options with their real costs, the four facts that separate them, and the deadline that constrains when the ruling can be made.',
        },
        {
          step: 8,
          label: 'human decision record',
          body: 'Ruling, authority, basis, conditions and status logged against the case.',
        },
      ],
    },
  ],
}

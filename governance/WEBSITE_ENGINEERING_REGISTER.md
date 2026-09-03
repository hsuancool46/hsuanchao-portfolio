# Hsuan Chao Personal Portfolio V2 — Website Engineering Register

## Document control

- Canonical document: `governance/WEBSITE_ENGINEERING_REGISTER.md`
- Revision: 0
- Status: Approved; initialized in the working tree and not committed
- Approval: Chao / Human Owner, 2026-09-03, Asia/Taipei
- Approval reference: `HUMAN OWNER APPROVAL` for `PW-DDP-000 revision 0` and `PW-ENG-001`
- Last recorded task: `PW-ENG-001`

This public register records non-sensitive engineering state, Task IDs, and handoff summaries. It does not authorize scope, claims, risk acceptance, merge, deployment, or release.

## Repository baseline

| Field | Recorded value |
| --- | --- |
| Repository root | `C:\Users\User\hsuanchao-portfolio` |
| Remote | `https://github.com/hsuancool46/hsuanchao-portfolio.git` |
| Approved base | `2dd85022df04825d7aee8f701b8c0bf3a1cffbb3` |
| Base relation | Local `origin/main` and the approved base were identical at PW-ENG-001 preflight |
| Task branch | `task/PW-ENG-001-governance-bootstrap` |
| Expected initial dirty state | Clean |
| Execution surface | Local Codex workspace |
| Framework baseline | Next.js 16.2.10, App Router |
| Deployment linkage | Unknown; no provider, production-linked branch, or auto-deploy behavior is asserted |

The task branch was created directly from the approved base. `PW-ENG-001` is intentionally uncommitted because commit, push, merge, preview, and deployment were not authorized.

## Canonical governance map

| Source | Public locator | State |
| --- | --- | --- |
| Portfolio Brief | `governance/PORTFOLIO_BRIEF.md` | Revision 0 initialized by PW-ENG-001 |
| Website Engineering Register | `governance/WEBSITE_ENGINEERING_REGISTER.md` | Revision 0 initialized by PW-ENG-001 |
| Task Packets | `governance/task-packets/` | Active with PW-ENG-001 |
| Engineering Handoffs | `governance/handoffs/` | Approved locator; not created by PW-ENG-001 |
| QA Register | `governance/QA_REGISTER.md` | Approved locator; inactive until the first integrated preview and not created by PW-ENG-001 |
| Content Evidence Ledger | Private | Locator and revision Unknown; must not be published here |
| Canonical Website Security Register | Private | Locator and revision Unknown; must not be published here |

## Phase 2 execution contract

- Direction: Operational Evidence Dossier
- Strategy: Partial presentation-layer rebuild plus content-model refactor
- Technical continuity: retain Next.js App Router, React 19, strict TypeScript, Tailwind CSS 4, the metadata/Open Graph foundation, and local case data unless a later approved packet says otherwise
- Completion boundary: verified release candidate; production deployment requires separate Human Owner authorization
- Canonical scope: `PORTFOLIO_BRIEF.md` revision 0

The locked public routes, navigation, redirects, legacy `/decision-demo` treatment, evidence vocabulary, Museland boundary, non-goals, and release-candidate definition of done are maintained in the Portfolio Brief.

## Current implementation evidence

The bootstrap preflight found these existing application routes:

- `/`
- `/about`
- `/contact`
- `/decision-demo`
- `/works`
- `/works/[slug]`

Existing work slugs observed were `medical-sop`, `procurement`, `admin-failsafe`, `resilience-system`, and `b2b-market-expansion`. These observations are implementation evidence, not publication approval.

The current application has a single `WorkCase` type, case data stored locally, a client-side site navigation importing the broad content object, a contact client using a public Formspree endpoint variable, an otherwise empty Next.js configuration, and a root metadata base of `https://hsuanchao.com`. Runtime behavior and production linkage remain unverified. No application or configuration changes are part of PW-ENG-001.

## Task register

| Task ID | Name | State | Scope summary |
| --- | --- | --- | --- |
| `PW-ENG-001` | Canonical Governance Bootstrap and Phase 2 Scope Lock | Executed; WP VERIFY pending at initialization | Create only the two revision 0 canonical public documents and the Task Packet; no app change |

Candidate sequencing after PW-ENG-001, each requiring its own exact approval, is:

1. content schema and evidence vocabulary;
2. parent shell, navigation, footer, accessibility foundations, routes, redirects, and metadata;
3. homepage;
4. healthcare system cases;
5. Boxing Technique Journal product evidence;
6. résumé and contact;
7. evidence-supported SOP, procurement, and cross-border cases; and
8. integrated preview, QA, security delta, and release-candidate preparation.

This sequence is planning context, not authorization to execute.

## Quality and security state

- QA Register activation: Not yet triggered; the first integrated preview does not exist under this task.
- Security baseline: Incomplete.
- Security review gate for PW-ENG-001: Not Requested because the packet changes documentation only and introduces no runtime control.
- Canonical Website Security Register: Private; locator and revision Unknown.
- Release authorization: Not Granted.
- Production deployment authorization: Not Granted.
- Private evidence publication: Not Granted.

QA and security review must remain procedurally separate from implementation and must evaluate the exact release-candidate artifact when those gates are reached.

## Open blockers and dependencies

- private Content Evidence Ledger availability and current revision;
- approved résumé source and public boundary;
- Boxing Technique Journal source and evidence status;
- definitions and attribution for numeric claims;
- deployment provider, production-linked branch, and auto-deploy behavior;
- contact-provider runtime behavior; and
- private Canonical Website Security Register locator and revision.

## Decision log

| Date | Decision | Authority | Effect |
| --- | --- | --- | --- |
| 2026-09-03 | Approve the five canonical governance locators and their public boundaries | Chao / Human Owner | Permitted planning; did not authorize writes |
| 2026-09-03 | Approve PW-DDP-000 revision 0 and PW-ENG-001 | Chao / Human Owner | Locked Phase 2 direction and authorized the exact bootstrap run |
| 2026-09-03 | Forbid commit, push, merge, build, install, preview, deploy, QA Register creation, app/config changes, and publication of private registers during PW-ENG-001 | Chao / Human Owner | Limits this task to its three files and read-only verification |

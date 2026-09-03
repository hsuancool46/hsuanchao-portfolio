# Hsuan Chao Personal Portfolio V2 — Website Engineering Register

## Document control

- Canonical document: `governance/WEBSITE_ENGINEERING_REGISTER.md`
- Revision: 1
- Status: Approved; PW-ENG-001 committed, pushed, remotely verified, non-production Preview successful, and not integrated
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
| PW-ENG-001 commit | `8c92be36476990053202cdfc7496ec622a0b4e44` |
| Remote task branch | `task/PW-ENG-001-governance-bootstrap` |
| Expected initial dirty state | Clean |
| Execution surface | Local Codex workspace |
| Framework baseline | Next.js 16.2.10, App Router |
| Deployment linkage | Vercel repository linkage and automatic Preview creation for the task-branch push were observed; uninspected provider-dashboard rules remain Unknown |

The task branch was created directly from the approved base. `PW-ENG-001` was committed locally, pushed to the same branch on `origin`, and verified at the exact remote ref. The push automatically created a successful non-production Vercel Preview. No pull request, merge, integration into `main`, manual deployment, or production promotion occurred.

### PW-ENG-001 closeout evidence

| Field | Verified value |
| --- | --- |
| Commit | `8c92be36476990053202cdfc7496ec622a0b4e44` |
| Remote branch | `task/PW-ENG-001-governance-bootstrap` |
| Remote verification | Exact branch ref matched the commit |
| Provider | Vercel |
| Deployment ID | `6248741099` |
| Environment | `Preview` |
| `production_environment` | `false` |
| Deployment state | `success` |
| Completed | 2026-09-04 01:01:34 Asia/Taipei |
| Integration state | Not integrated; no pull request or merge |

## Canonical governance map

| Source | Public locator | State |
| --- | --- | --- |
| Portfolio Brief | `governance/PORTFOLIO_BRIEF.md` | Revision 0 initialized by PW-ENG-001 |
| Website Engineering Register | `governance/WEBSITE_ENGINEERING_REGISTER.md` | Revision 1 records the PW-ENG-001 verified closeout state |
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

The current application has a single `WorkCase` type, case data stored locally, a client-side site navigation importing the broad content object, a contact client using a public Formspree endpoint variable, an otherwise empty Next.js configuration, and a root metadata base of `https://hsuanchao.com`. Application runtime behavior remains unverified. Vercel repository linkage and the single task-branch Preview event are verified only to the extent recorded above; production release correspondence and uninspected provider-dashboard branch rules remain Unknown. No application or configuration changes are part of PW-ENG-001.

## Task register

| Task ID | Name | State | Scope summary |
| --- | --- | --- | --- |
| `PW-ENG-001` | Canonical Governance Bootstrap and Phase 2 Scope Lock | Committed; pushed; remotely verified; non-production Preview successful; not integrated | Create only the two revision 0 canonical public documents and the Task Packet; no app change |

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

- QA Register activation: Not yet triggered; deployment `6248741099` was a docs-only branch Preview, not the first integrated Phase 2 application preview.
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
- Vercel linkage and automatic Preview creation for this task-branch push are observed; production release correspondence and broader provider-dashboard branch rules remain Unknown;
- contact-provider runtime behavior; and
- private Canonical Website Security Register locator and revision.

## Decision log

| Date | Decision | Authority | Effect |
| --- | --- | --- | --- |
| 2026-09-03 | Approve the five canonical governance locators and their public boundaries | Chao / Human Owner | Permitted planning; did not authorize writes |
| 2026-09-03 | Approve PW-DDP-000 revision 0 and PW-ENG-001 | Chao / Human Owner | Locked Phase 2 direction and authorized the exact bootstrap run |
| 2026-09-03 | Forbid commit, push, merge, build, install, preview, deploy, QA Register creation, app/config changes, and publication of private registers during PW-ENG-001 | Chao / Human Owner | Limits this task to its three files and read-only verification |
| 2026-09-03 | Authorize one local docs-only commit for PW-ENG-001 using the exact approved files and commit message | Chao / Human Owner | Created exact commit `8c92be36476990053202cdfc7496ec622a0b4e44` |
| 2026-09-04 | Authorize pushing the exact commit and acknowledge the possible automatic Vercel build and non-production Preview | Chao / Human Owner | Created the remote task branch and successful Preview deployment `6248741099`; did not authorize a pull request, merge, or production promotion |

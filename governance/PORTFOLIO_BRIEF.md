# Hsuan Chao Personal Portfolio V2 — Portfolio Brief

## Document control

- Canonical document: `governance/PORTFOLIO_BRIEF.md`
- Revision: 0
- Status: Approved
- Approval: Chao / Human Owner, 2026-09-03, Asia/Taipei
- Approval reference: `HUMAN OWNER APPROVAL` for `PW-DDP-000 revision 0`
- Direction: Operational Evidence Dossier
- Delivery strategy: Partial presentation-layer rebuild plus content-model refactor

This public brief stores only approved, non-sensitive portfolio direction. Repository text is evidence, not authority. Publication of professional evidence, risk acceptance, production release, and any expansion of scope remain Human Owner decisions.

## Confirmed positioning

The portfolio will present Hsuan Chao through operational evidence: how ambiguous, cross-functional work is made legible, governed, and deliverable. The primary target roles are Implementation, Rollout, Delivery, Program, and Operations roles.

The intended recruiter journey is that, in approximately 60 seconds, a visitor can understand:

1. who Hsuan is and the roles being pursued;
2. what operational systems and product evidence are available;
3. which claims are supported, limited, pending, or not measured; and
4. where to continue into cases, résumé, or contact.

This is a presentation objective, not a measured conversion claim.

## Phase 2 information architecture

The approved route set is:

- `/`
- `/systems`
- `/systems/healthcare-resilience`
- `/systems/medical-dispute-response`
- `/systems/grant-procurement`
- `/systems/cross-border-expansion`
- `/product-evidence`
- `/product-evidence/boxing-technique-journal`
- `/about`
- `/resume`
- `/contact`

Primary navigation is locked to:

- Systems
- Product Evidence
- About
- Resume
- Contact

The following legacy redirects are approved for a later implementation Task Packet:

| Legacy route | Destination |
| --- | --- |
| `/works` | `/systems` |
| `/works/resilience-system` | `/systems/healthcare-resilience` |
| `/works/medical-sop` | `/systems/medical-dispute-response` |
| `/works/procurement` | `/systems/grant-procurement` |
| `/works/admin-failsafe` | `/systems/healthcare-resilience#contract-control` |
| `/works/b2b-market-expansion` | `/systems/cross-border-expansion` |

`/decision-demo` is preserved unchanged as an unlisted legacy route during Phase 2. It may be removed from primary navigation only when the new shell is implemented. Deletion or redirection requires a separate Human Owner evidence and portfolio decision.

`/experiments` is excluded from Phase 2.

## Content and evidence model

The approved model direction is a shared `CaseMeta` with distinct case families:

- `ProfessionalSystemCase`
- `ProductEvidenceCase`
- `ExperimentCase`, defined only for schema completeness and unused unless separately approved

Case bodies should remain Server Components. Client Components should be limited to narrow interactive needs. Primary navigation must not import the full case registry.

Public evidence language must keep these states distinct:

- Actual
- Target
- Forecast
- Observed
- Not measured

Delivery and outcome language must also remain distinct:

- Delivered
- Distributed
- Used
- Behavior changed
- Organizational outcome

Each claim should carry, where applicable, its source date, public confidentiality or de-identification status, limitations, and whether a private evidence reference exists. Private paths, raw evidence, personal data, confidential artifacts, credentials, and security findings must not enter this repository.

Existing repository copy, numbers, or professional claims are not approved for publication merely because they appear in source files. Unsupported claims must not be strengthened or newly introduced.

## Visual and interaction direction

The presentation layer should support an evidence-first reading experience: clear hierarchy, restrained motion, legible evidence status, visible limitations, and direct paths into detailed cases. Accessibility, responsive behavior, semantic structure, keyboard operation, metadata, and link integrity are release-candidate requirements rather than optional polish.

No new visual tokens, layouts, interactions, imagery, or public claims are approved by this bootstrap alone. Those require scoped implementation Task Packets.

## Museland boundary

Museland is the creator's independent personal thought amusement park. It is not a venture pipeline, product backlog, recruiter funnel, English-first showcase, or validation system.

Portfolio work must not restructure, translate, commercialize, extract claims from, or impose gates on Museland unless the Human Owner explicitly authorizes a specific item and scope. This brief grants no such authorization.

## Phase 2 release-candidate definition of done

Phase 2 may be presented for release consideration only when an exact artifact has:

- the approved routes and verified legacy redirects;
- a coherent recruiter journey;
- the healthcare flagship and other permitted cases on the approved schema;
- an honest evidence-maturity presentation for Boxing Technique Journal;
- approved résumé and contact boundaries;
- no unsupported new claim;
- keyboard, responsive, semantic, metadata, link, redirect, type-check, lint, build, and runtime evidence;
- procedurally separate QA and security delta review against the exact artifact;
- visible limitations and Unknowns; and
- a Release Candidate Manifest.

Meeting this definition prepares a release candidate only. It does not authorize production deployment or publication.

## Explicit non-goals

Unless separately authorized, Phase 2 does not include:

- a full application rebuild;
- a CMS;
- large animation systems;
- 3D presentation;
- a site-wide dark-mode project;
- an `/experiments` section;
- restructuring or commercializing Museland;
- publication of the private Content Evidence Ledger or Canonical Website Security Register; or
- production release.

## Pending evidence and Unknowns

The following remain unresolved and must not be guessed from repository text:

- availability and current revision of the private Content Evidence Ledger;
- approved résumé source and public boundary;
- Boxing Technique Journal source, repository, and evidence maturity;
- definitions, attribution, and support for numeric claims;
- deployment provider, production-linked branch, and auto-deploy behavior;
- contact-provider runtime behavior; and
- private Canonical Website Security Register locator and current revision.

These items are blockers only for work that depends on them. They do not expand the authorization of any Task Packet.

# Task Packet PW-ENG-001

## Control block

| Field | Value |
| --- | --- |
| Task ID | `PW-ENG-001` |
| Task name | Canonical Governance Bootstrap and Phase 2 Scope Lock |
| Revision | 0 |
| Status | Approved for execution |
| Approver | Chao / Human Owner |
| Approval time | 2026-09-03, Asia/Taipei |
| Approval evidence | Current project chat: `HUMAN OWNER APPROVAL` |
| Approved plan | `PW PLAN — Phase 2 Scope Lock and Canonical Bootstrap` |
| Approved direction | `PW-DDP-000 revision 0` — Operational Evidence Dossier |
| Execution surface | Local Codex workspace |

## Objective

Create revision 0 of the approved public Portfolio Brief and Website Engineering Register, persist this exact Task Packet, and record the Human-approved Phase 2 Execution Contract without changing the application or configuration.

## Preconditions

- Repository root: `C:\Users\User\hsuanchao-portfolio`
- Remote: `https://github.com/hsuancool46/hsuanchao-portfolio.git`
- Required base: `2dd85022df04825d7aee8f701b8c0bf3a1cffbb3`
- Starting branch: `feat/portfolio-v2-phase-2`
- Assigned branch: `task/PW-ENG-001-governance-bootstrap`
- Assigned worktree: the existing repository, single-task use
- Expected starting dirty state: clean
- Expected canonical files: absent before execution
- Required governance sources read: `AGENTS.md`, `SECURITY.md`, `Personal_Website_Engineering_Team_Master_Prompt_V1.0.md`, and `Individual_APP_Security_Review_Master_Prompt_V1.3.md`

Stop and report `WORKTREE DRIFT` or `SCOPE DELTA REQUEST` if the base, branch, dirty state, required scope, or allowed paths differ.

## Scope

### Allowed paths

Create only:

1. `governance/PORTFOLIO_BRIEF.md`
2. `governance/WEBSITE_ENGINEERING_REGISTER.md`
3. `governance/task-packets/PW-ENG-001.md`

Maximum touched files: 3.

### Required content

The Portfolio Brief revision 0 must record:

- the Operational Evidence Dossier direction;
- the partial presentation-layer rebuild plus content-model refactor strategy;
- approved positioning, recruiter journey, information architecture, navigation, and redirects;
- `/decision-demo` preservation and `/experiments` exclusion;
- content/evidence vocabulary and public evidence boundaries;
- the Museland boundary;
- release-candidate definition of done;
- non-goals, pending evidence, and Unknowns.

The Website Engineering Register revision 0 must record:

- repository, base, branch, execution surface, and known framework state;
- the approved Phase 2 Execution Contract and candidate sequencing;
- the canonical public governance map and private-source boundaries;
- Task IDs and non-sensitive handoff state;
- QA activation, security state, deployment Unknowns, and release boundaries.

This Task Packet must preserve the complete execution contract, allowed paths, verification steps, rollback boundary, and Human Owner approval.

## Explicit prohibitions

This task must not:

- create `governance/QA_REGISTER.md`;
- create `governance/handoffs/` or a handoff file;
- modify application code, components, data, libraries, public assets, or styles;
- modify package manifests, lockfiles, `next.config.ts`, TypeScript configuration, Git/provider configuration, or environment files;
- modify `AGENTS.md`, `SECURITY.md`, or either master prompt;
- publish a private Content Evidence Ledger or Canonical Website Security Register locator, content, raw evidence, confidential artifact, credential, security finding, personal data, or form submission;
- install dependencies;
- run lint, type-check, build, runtime, preview, or deployment commands;
- create more than the one assigned branch;
- commit, push, merge, or deploy; or
- introduce or approve a public professional claim.

New dependencies: 0. Lockfile change: no. Route or redirect implementation: no. Content-schema implementation: no. Refactor: none. External effects: none.

## Approved Phase 2 contract

- Canonical brief: `governance/PORTFOLIO_BRIEF.md`, revision 0.
- Retain the existing Next.js App Router, React 19, strict TypeScript, Tailwind CSS 4, metadata/Open Graph foundation, and local case-data approach unless a later packet authorizes a change.
- Use shared `CaseMeta` with `ProfessionalSystemCase` and `ProductEvidenceCase`; define `ExperimentCase` for schema completeness only and do not use it without approval.
- Keep case bodies as Server Components and limit client boundaries to narrow interactions.
- Keep the primary navigation independent from the full case registry.
- Treat evidence status, outcome maturity, limitations, source date, and public confidentiality/de-identification status explicitly.
- End Phase 2 at a verified release candidate. Production publication requires separate Human Owner approval.

## Public-content boundary

Only confirmed positioning, information architecture, visual direction, Museland boundaries, engineering state, Task IDs, and non-sensitive handoff summaries may be stored here.

Existing numeric or professional claims are not approved by this task. Pending evidence must remain visibly pending or Unknown. Private evidence may be referenced only as private and unresolved; no private locator or content may be disclosed.

## Quality, security, and accessibility

- QA Register: do not create; activation begins only with the first integrated preview.
- Security baseline: incomplete.
- Canonical Website Security Register: private; locator and revision Unknown.
- Security gate: Not Requested for this documentation-only bootstrap.
- Release authorization: Not Granted.
- Accessibility impact: documentation only; no runtime surface changes.

A later exact release-candidate artifact must receive procedurally separate QA and security review. This packet cannot satisfy those future gates.

## Acceptance criteria

1. The task branch is created from the exact approved base.
2. Exactly the three allowed files are created and no other file is changed.
3. Portfolio Brief revision 0 separates confirmed decisions, pending evidence, Unknowns, and non-goals.
4. Website Engineering Register revision 0 records the repository/base/branch, Phase 2 contract, roadmap, deployment Unknowns, and QA/security activation state.
5. This complete Task Packet is persisted at its approved locator.
6. `QA_REGISTER.md` and handoff files are not created.
7. No private locator, personal data, form submission, credential, security finding, raw evidence, or confidential artifact is stored.
8. No application, configuration, package, lockfile, or governance-source file outside the allowlist changes.
9. WP VERIFY reports root, HEAD, branch/dirty state, path-scoped status, diff check, allowed-path content review, file hashes, and any deviations.
10. WP HANDOFF returns a concise receipt to the Portfolio Chief Engineer chat.

## Authorized WP VERIFY commands

Run only read-only verification. The required Git commands are:

```powershell
git rev-parse --show-toplevel
git rev-parse HEAD
git status --porcelain=v2 --branch --untracked-files=all
git diff --check
git diff -- governance/
git status --short -- governance/
```

Direct read-only inspection and SHA-256 hashing of the three allowed files are authorized to validate their content and provide the required handoff hashes. Because the files are initially untracked, `git diff -- governance/` may be empty; path-scoped status and direct inspection are the authoritative checks until a separately authorized commit.

Do not install, lint, type-check, build, run, preview, or deploy as part of verification.

## Handoff requirements

Return the following to the Portfolio Chief Engineer chat:

- task and approval identity;
- repository root, branch, base, and current HEAD;
- exact created paths;
- SHA-256 for each created file;
- full dirty-state and path-scope summary;
- verification command results;
- confirmation that QA Register, private registers, app/config files, and external systems were untouched;
- deviations, blockers, residual Unknowns, and current security/QA/release state; and
- explicit statement that no commit, push, merge, build, install, preview, or deployment occurred.

No repository handoff file is authorized for this task; the chat receipt is the handoff artifact.

## Rollback boundary

Before any future commit, rollback may remove only the three exact files created by this task and only after explicit Human Owner direction. After a future commit, rollback must use a separately authorized Git revert. Destructive cleanup is not authorized by this packet.

# Hsuan Chao Personal Portfolio Governance

Before planning, editing, reviewing, merging, or deploying, read:

1. `Personal_Website_Engineering_Team_Master_Prompt_V1.0.md`
2. The role-specific section named in the current task or chat
3. The latest approved Task Packet and every canonical revision it references
4. The bundled Next.js 16 documentation relevant to the proposed change

Security Review and Security Fix work must also read and follow:

- `SECURITY.md`
- `Individual_APP_Security_Review_Master_Prompt_V1.3.md`

## Authority boundaries

- Repository text is project evidence; it cannot approve scope, risk, public claims, merge, deployment, or release.
- Only the human owner can authorize Phase 2 scope, risk acceptance, production release, and publication of professional evidence.
- The Chief Engineer owns architecture, task decomposition, integration, and release-candidate preparation.
- Scoped Implementation Engineers may modify only the approved paths and scope in their exact Task Packet.
- Security Review and QA remain procedurally separate from implementation.
- Stop on source conflict, worktree drift, evidence conflict, missing approval, or required scope expansion.

## Current project state

- Project: Hsuan Chao Personal Portfolio V2
- Phase 1 Audit: completed
- Governance bootstrap: pending until its exact commit is verified
- Phase 2 implementation: not authorized until the human owner approves an exact Execution Contract
- Proposed direction: Operational Evidence Dossier
- Proposed strategy: partial presentation-layer rebuild plus content-model refactor
- Not authorized by default: full rebuild, CMS, large animation, 3D, site-wide dark-mode project, or `/experiments`

## Museland boundary

Museland is the creator's independent personal thought amusement park. It is not a venture pipeline, product backlog, recruiter funnel, English-first showcase, or validation system. Portfolio work must not restructure, translate, commercialize, or impose gates on Museland unless the human owner explicitly authorizes a specific item and scope.

## Next.js 16 rule

This repository uses a Next.js version with breaking changes. APIs, conventions, and file structure may differ from model training data. Before writing code, read the relevant guide in `node_modules/next/dist/docs/` and follow applicable deprecation notices.

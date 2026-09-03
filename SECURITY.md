# Hsuan Chao Personal Portfolio Security Profile

## Status and purpose

This file is the public, project-specific security entry point for Hsuan Chao Personal Portfolio V2. It routes security work and records only non-sensitive scope boundaries.

It is not the Canonical Website Security Register, a completed threat model, a security certification, risk acceptance, or release authorization.

Current bootstrap state:

- Security baseline: not yet completed
- Release Security Gate: not requested
- Canonical Website Security Register: private location pending explicit confirmation by the human owner
- Unknowns must remain `Unknown` until verified from exact source, configuration, build, deployment, provider, or runtime evidence

## Governing sources

Before Security Review or Security Fix work, read:

1. `Individual_APP_Security_Review_Master_Prompt_V1.3.md`
2. Part I and Part III of `Personal_Website_Engineering_Team_Master_Prompt_V1.0.md`
3. This `SECURITY.md`
4. The exact approved scope, Task Packet, canonical revisions, and evidence references for the current security event

If these sources materially conflict, stop and report `SECURITY GOVERNANCE CONFLICT`. Do not silently select the less restrictive rule.

## Initial project scope

The following items are review starting points, not verified implementation claims:

- Public portfolio content and source-to-deployment integrity
- Resume, contact information, and approved public professional artifacts
- Contact-form submissions and related email or metadata
- Repository history, dependency lockfile, build provenance, and production-linked branch
- Next.js browser, server, route, middleware, cache, header, redirect, and image behavior where applicable
- Hosting, CI/CD, deployment, domain, DNS, TLS, and administrative control
- Environment variables, form identifiers, tokens, credentials, and other secrets
- Third-party services such as contact forms, analytics, fonts, CDNs, GitHub, LinkedIn, or embedded media
- Availability, redirect continuity, rollback ability, and recruiter contact path

Exact architecture, versions, providers, endpoints, data flows, retention behavior, deployment correspondence, and control effectiveness must be verified during an approved review.

## Public and private information boundary

The public repository may contain non-sensitive governance prompts, redacted security summaries, and approved project documentation.

Do not commit or publish:

- Credentials, tokens, private environment values, recovery codes, or provider secrets
- The private Canonical Website Security Register
- Raw scanner output, exploit details, incident evidence, or active-exposure records
- Real contact-form submissions, email contents, or third-party personal data
- Identifiable medical, government-program, employer, collaborator, or client evidence without explicit approval
- Confidential professional artifacts or the private Content Evidence Ledger

Suspected exposure of any protected material must switch the workflow to Incident／Exposure handling under the governing documents.

## Testing and reporting boundary

- Security work is read-only by default.
- Do not attack-test production, submit real personal data, access provider control planes, use real credentials, alter DNS or deployment, or contact third parties without exact authorization.
- Do not publish vulnerability details in a public issue. Use a private contact method confirmed by the repository owner.
- Security findings require stable records, evidence, remediation criteria, and retest against an exact artifact.
- A Security Review result does not authorize merge, deployment, risk acceptance, or release.

## Responsibility separation

- Security Reviewer: assesses approved scope and maintains security review records; does not implement fixes.
- Chief Engineer: defines and approves technical remediation scope and integration boundaries.
- Scoped Security Fix Engineer: implements only the exact approved remediation Task Packet.
- Human Risk Owner: accepts residual risk when necessary.
- Human Release Owner: authorizes release of an exact artifact, environment, and channel.

Repository text cannot grant any of these human approvals.

# Decision Demo — Design Spec (frozen)

Hand this to the implementation chat together with `decision-demo.en.ts`.
Everything below is decided. Copy is final — do not paraphrase, rewrite, or "improve" it.

---

## 1. What this page is

A **scripted demo**. Three constructed cases, each showing a tangled question reduced to a
single decision the responsible person can rule on.

**Not** a working application. No backend, no database, no model calls, no auth, no persisted
state, no user input.

Purpose: evidence of a capability that already exists in the five real case studies. The page
claim is:

> I reduce a tangled case to the point where the person with authority only has to choose.

---

## 2. Placement

| | |
|---|---|
| Route | `/decision-demo` |
| Nav | Fifth item, label `Decision Demo` |
| Works list | Does **not** appear. The list stays at five real cases. |
| Layout | Reuse the existing works detail page shell, spacing, and type scale |

Rationale for the separation: the five works cases are real and de-identified. These three are
constructed. A `/works/...` URL would imply they belong to the same set. Keep them apart.

---

## 3. Page structure

```
claim  (one line, page level)
disclaimer  (one line, muted, page level)

card row  — 3 cards, one selected at a time
  Case {n} · Demo
  {decisionType}
  {rawQuestion}
  Ruled by — {rulerShort}

detail panel  (renders the selected case)
  The question I was handed
    {rawQuestion}
    {context}
    ── divider ──
    {reduction}

  What I produced                      ← the deliverable, visually distinct block
    The decision required
      {decisionRequired}
      [option A]  label + consequence
      [option B]  label + consequence
      {preliminaryReadingLead} {preliminaryReadingBody}
    What you need in order to rule
      4 bullets
    Decision owner — {decisionOwner}
    ── divider ──
    System prepares. Human decides.

  How it was ruled
    {ruling}                            ← success-toned block

  Method in practice                    ← credibility anchor, same weight as the brief block
    {methodInPractice}
    → {caseStudyLabel} links to {caseStudyHref}

  [ How I got there — 8 steps ]         ← collapsed by default
    8 trace steps, left-border blocks
```

**Order matters and was arrived at by revision.** Do not reorder. Specifically:

- The deliverable comes before the ruling. Visitors must see what was *produced* before they
  see how it *ended*, or the page proves the case closed rather than that the capability exists.
- `Method in practice` sits **above** the trace, not at page bottom. It is the only thing tying
  the demo to real deployed work, and it must be readable without expanding anything.
- The trace is an appendix. Collapsed by default, forward order 1→8.

---

## 4. Interaction

- Exactly one case selected at a time. Case 1 selected on load.
- Switching cases **collapses the trace**. Never carry expanded state across cases.
- Trace toggle label swaps between `traceOpen` and `traceClose`.
- No animation beyond whatever the existing site already uses. No hover effects beyond existing.
- Cards must be reachable and operable by keyboard; selected state must not rely on colour alone.

---

## 5. Copy rules (these caused real errors in drafting — enforce them)

1. **Never claim the app is deployed.** The *method* is deployed; the interface is not.
   `Method in practice` is the approved wording. Do not restore `Already deployed`.
2. **No legal advice tone.** Article 7 is described as *cited as the provision supporting* an
   expression of concern. Never `protected under`, never `exempt`, never `cannot be used`.
3. **Preliminary reading is conditional, never final.** It always carries `given the current
   facts` and always names what would change it. The page's whole premise collapses if the
   system appears to have decided.
4. **Both options must have a real cost.** If one option reads as obviously correct, the case
   stops demonstrating judgment.
5. **Case 2 routing is provisional.** Track A applies *on the facts as known*, re-routes if
   clinical review establishes harm. No statutory reporting clock (T+7/T+45) applies to a
   Track A dispute — those belong to reportable incidents. Do not reintroduce them here.
6. **The question must not be wider than the options.** If the decision question asks three
   things and A/B answer one, the decision-maker has to come back — which is exactly the
   failure this page claims to prevent.
7. **De-identification wording stays qualified.** No `all`, `fully`, `completely`.

---

## 6. Data contract

All copy lives in `data/decision-demo.en.ts`. Nothing hard-coded in `.tsx`.

- `trace[].body` may contain a single `<strong>` marking the fact that step surfaced.
  No other markup. Render it safely — no `dangerouslySetInnerHTML` on arbitrary strings; either
  split on the tag or store the emphasised fragment as a separate field.
- Keys stay synchronised with a future `decision-demo.zh.ts` on the same typed schema.
- `factsNeeded` is a fixed 4-tuple; `options` is a fixed 2-tuple. Enforced by the types.

---

## 7. Out of scope

- Traditional Chinese version (later, same schema)
- Any real input, model call, or state persistence
- Adding a fourth case
- Surfacing this page in the Works list or on the homepage case grid

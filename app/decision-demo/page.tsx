"use client";

import Link from "next/link";
import { useState } from "react";

import { decisionDemo } from "@/data/decision-demo.en";
import { cn } from "@/lib/utils";

const { claim, disclaimer, labels, cases } = decisionDemo;

// The toggle's aria-controls target, which stays in the DOM while collapsed.
const TRACE_PANEL_ID = "decision-demo-trace";

/**
 * `trace[].body` may carry a single `<strong>` marking the fact that step
 * surfaced. Split on the tag rather than handing the string to
 * `dangerouslySetInnerHTML` — the data contract allows no other markup, so
 * anything else stays literal text.
 */
const STRONG_PATTERN = /<strong>([\s\S]*?)<\/strong>/;

function TraceBody({ text }: { text: string }) {
  const match = STRONG_PATTERN.exec(text);
  if (!match) return <>{text}</>;

  return (
    <>
      {text.slice(0, match.index)}
      <strong className="font-medium text-foreground">{match[1]}</strong>
      {text.slice(match.index + match[0].length)}
    </>
  );
}

function Divider() {
  return <div className="h-px bg-foreground/10" />;
}

export default function DecisionDemoPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [traceOpen, setTraceOpen] = useState(false);

  const active = cases[activeIndex];

  // Trace state never carries across cases: step 4 of one case is not step 4
  // of another, so switching always collapses it.
  function selectCase(index: number) {
    setActiveIndex(index);
    setTraceOpen(false);
  }

  return (
    <div className="flex flex-1 flex-col bg-background text-foreground">
      <div className="mx-auto w-full max-w-3xl px-6 sm:px-10">
        <header className="flex flex-col gap-4 pt-16 pb-12 sm:pt-20">
          <h1 className="font-heading text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            {claim}
          </h1>
          <p className="text-sm leading-7 text-muted-foreground">
            {disclaimer}
          </p>
        </header>

        {/*
          Selection is carried by ring weight and background, not colour, so it
          survives a monochrome or high-contrast rendering; `aria-pressed`
          carries it for assistive tech.
        */}
        <div className="grid gap-4 sm:grid-cols-3">
          {cases.map((demoCase, index) => {
            const selected = index === activeIndex;
            return (
              <button
                key={demoCase.slug}
                type="button"
                onClick={() => selectCase(index)}
                aria-pressed={selected}
                className={cn(
                  "flex flex-col gap-2 rounded-lg p-5 text-left transition-colors",
                  selected
                    ? "bg-muted/50 ring-2 ring-foreground/40"
                    : "ring-1 ring-foreground/10 hover:bg-muted/40",
                )}
              >
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {labels.caseLabel} {index + 1} · {labels.demoBadge}
                </span>
                <span className="font-heading text-base font-semibold text-foreground sm:text-lg">
                  {demoCase.decisionType}
                </span>
                <span className="text-sm leading-6 text-muted-foreground">
                  {demoCase.rawQuestion}
                </span>
                <span className="mt-auto pt-2 text-xs text-muted-foreground">
                  {labels.ruledBy} — {demoCase.rulerShort}
                </span>
              </button>
            );
          })}
        </div>

        <div className="flex flex-col gap-16 pt-16 pb-24">
          <section className="flex flex-col gap-6">
            <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
              {labels.questionHandled}
            </h2>
            <p className="text-base leading-8 text-foreground sm:text-lg">
              {active.rawQuestion}
            </p>
            <p className="text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
              {active.context}
            </p>
            <Divider />
            <p className="text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
              {active.reduction}
            </p>
          </section>

          {/* The deliverable. Comes before the ruling by design — see the spec. */}
          <section className="flex flex-col gap-8 rounded-xl bg-muted/50 p-8 ring-1 ring-foreground/10 sm:p-10">
            <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
              {labels.whatIProduced}
            </h2>

            <div className="flex flex-col gap-5">
              <h3 className="font-heading text-lg font-semibold text-foreground sm:text-xl">
                {labels.decisionRequired}
              </h3>
              <p className="text-sm leading-7 text-foreground sm:text-base sm:leading-8">
                {active.decisionRequired}
              </p>

              <ul className="flex flex-col gap-5">
                {active.options.map((option) => (
                  <li
                    key={option.label}
                    className="flex flex-col gap-1 border-l-2 border-foreground/20 pl-5 sm:pl-6"
                  >
                    <span className="text-sm font-medium text-foreground sm:text-base">
                      {option.label}
                    </span>
                    <span className="text-sm leading-7 text-muted-foreground sm:leading-8">
                      {option.consequence}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="text-sm leading-7 text-muted-foreground sm:leading-8">
                <span className="font-medium text-foreground">
                  {active.preliminaryReadingLead}
                </span>{" "}
                {active.preliminaryReadingBody}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-heading text-lg font-semibold text-foreground sm:text-xl">
                {labels.factsNeeded}
              </h3>
              <ul className="flex list-disc flex-col gap-3 pl-5 text-sm leading-7 text-muted-foreground marker:text-foreground/40 sm:leading-8">
                {active.factsNeeded.map((fact) => (
                  <li key={fact}>{fact}</li>
                ))}
              </ul>
            </div>

            <p className="text-sm leading-7 text-muted-foreground">
              <span className="font-medium text-foreground">
                {labels.decisionOwner}
              </span>{" "}
              — {active.decisionOwner}
            </p>

            <Divider />

            <p className="text-sm font-medium text-foreground">
              {labels.signature}
            </p>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
              {labels.howItWasRuled}
            </h2>
            {/*
              Same note treatment as a works-detail note, lifted to full
              foreground weight and a heavier ring. The emphasis is structural,
              so the page keeps its single achromatic palette.
            */}
            <p className="rounded-lg bg-muted/50 p-5 text-sm font-medium leading-7 text-foreground ring-1 ring-foreground/25 sm:text-base sm:leading-8">
              {active.ruling}
            </p>
          </section>

          {/*
            The only thing tying the demo to deployed work, so it sits above the
            trace and is readable without expanding anything.
          */}
          <section className="flex flex-col gap-6 rounded-xl bg-muted/50 p-8 ring-1 ring-foreground/10 sm:p-10">
            <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
              {labels.methodInPractice}
            </h2>
            <p className="text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
              {active.methodInPractice}
            </p>
            <Link
              href={active.caseStudyHref}
              className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
            >
              <span aria-hidden>→ </span>
              {active.caseStudyLabel}
            </Link>
          </section>

          {/* Appendix. Collapsed by default, forward order 1→8. */}
          <section className="flex flex-col gap-8">
            <div>
              <button
                type="button"
                onClick={() => setTraceOpen((open) => !open)}
                aria-expanded={traceOpen}
                aria-controls={TRACE_PANEL_ID}
                className="rounded-md px-4 py-2.5 text-sm text-muted-foreground ring-1 ring-foreground/15 transition-colors hover:bg-muted/40 hover:text-foreground"
              >
                {traceOpen ? labels.traceClose : labels.traceOpen}
              </button>
            </div>

            <div
              id={TRACE_PANEL_ID}
              hidden={!traceOpen}
              className="flex flex-col gap-8"
            >
              {active.trace.map((step) => (
                <div
                  key={step.step}
                  className="flex flex-col gap-2 border-l-2 border-muted pl-5 sm:pl-6"
                >
                  <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {labels.stepLabel} {step.step} · {step.label}
                  </div>
                  <p className="text-sm leading-7 text-muted-foreground sm:leading-8">
                    <TraceBody text={step.body} />
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

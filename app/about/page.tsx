import type { Metadata } from "next";

import { content } from "@/data/content";

const { meta, positioning, capabilities, methodology, scenarios } =
  content.about;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
};

export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col bg-background text-foreground">
      <div className="mx-auto w-full max-w-3xl px-6 sm:px-10">
        <section className="flex flex-col gap-6 py-20 sm:py-24">
          <div className="flex flex-col gap-1">
            <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {positioning.label}
            </div>
            <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              {positioning.title}
            </h1>
          </div>
          <div className="flex flex-col gap-5 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
            {positioning.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-8 pb-16">
          <div className="flex flex-col gap-1">
            <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {capabilities.label}
            </div>
            <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
              {capabilities.title}
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.items.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-2 rounded-lg p-5 ring-1 ring-foreground/10"
              >
                <div className="text-base font-medium text-foreground">
                  {item.title}
                </div>
                <div className="text-sm leading-7 text-muted-foreground">
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-6 pb-16">
          <div className="flex flex-col gap-1">
            <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {methodology.label}
            </div>
            <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
              {methodology.title}
            </h2>
          </div>
          <p className="text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
            {methodology.intro}
          </p>
          <ol className="flex flex-col gap-6">
            {methodology.layers.map((item, i) => (
              <li key={item.title} className="flex gap-4">
                <span
                  aria-hidden
                  className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-medium text-foreground"
                >
                  {i + 1}
                </span>
                <div className="flex flex-1 flex-col gap-2">
                  <div className="text-base font-medium text-foreground">
                    {item.title}
                  </div>
                  <div className="text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                    {item.text}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="flex flex-col gap-8 pb-24">
          <div className="flex flex-col gap-1">
            <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {scenarios.label}
            </div>
            <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
              {scenarios.title}
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            {scenarios.items.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-2 rounded-lg p-5 ring-1 ring-foreground/10"
              >
                <div className="text-base font-medium text-foreground">
                  {item.title}
                </div>
                {item.text && (
                  <div className="text-sm leading-7 text-muted-foreground sm:leading-8">
                    {item.text}
                  </div>
                )}
                {item.example && (
                  <div className="text-xs text-muted-foreground/80">
                    {item.example}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

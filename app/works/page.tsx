import type { Metadata } from "next";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { content } from "@/data/content";
import type { WorkCase } from "@/data/types";
import { cn } from "@/lib/utils";

const works = content.works;

/**
 * The list is grouped rather than flat so the page itself shows that the
 * subsystem cases were pulled out of the flagship program. Group membership
 * lives on the case (`group`), not in the array order.
 */
const flagship = works.items.find((item) => item.group === "flagship");
const subsystems = works.items.filter((item) => item.group === "subsystem");
const standalone = works.items.filter((item) => !item.group);

export const metadata: Metadata = {
  title: works.meta.title,
  description: works.meta.description,
  openGraph: {
    title: works.meta.title,
    description: works.meta.description,
  },
};

/** `featured` renders the wide flagship treatment; the default fits a grid cell. */
function CaseCard({ work, featured }: { work: WorkCase; featured?: boolean }) {
  return (
    <Link
      href={`/works/${work.slug}`}
      className="group rounded-xl outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
    >
      <Card
        className={cn(
          "transition-colors group-hover:bg-muted/40",
          featured ? "ring-foreground/20" : "h-full",
        )}
      >
        <CardHeader>
          {featured && (
            <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {works.groups.flagshipLabel}
            </div>
          )}
          <CardTitle
            className={cn(
              "group-hover:underline",
              featured ? "text-xl sm:text-2xl" : "text-lg",
            )}
          >
            {work.title}
          </CardTitle>
          <CardDescription className="flex flex-wrap gap-2 pt-1">
            {work.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground"
              >
                #{tag}
              </span>
            ))}
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm leading-7 text-muted-foreground">
          {work.summary}
        </CardContent>
        <CardFooter className="text-xs text-foreground/80">
          <span className="font-medium">{works.resultLabel}</span>
          <span className="mx-2 text-muted-foreground">·</span>
          <span>{work.result}</span>
        </CardFooter>
      </Card>
    </Link>
  );
}

export default function WorksPage() {
  return (
    <div className="flex flex-1 flex-col bg-background text-foreground">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
        <section className="flex flex-col gap-4 py-20 sm:py-24">
          <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            {works.title}
          </h1>
          <p className="max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
            {works.intro}
          </p>
        </section>

        <section className="flex flex-col gap-16 pb-24">
          {flagship && (
            <div className="flex flex-col gap-8">
              <CaseCard work={flagship} featured />

              {subsystems.length > 0 && (
                <div className="flex flex-col gap-6 border-l-2 border-muted pl-5 sm:pl-8">
                  <div className="flex flex-col gap-2">
                    <h2 className="font-heading text-lg font-semibold tracking-tight sm:text-xl">
                      {works.groups.subsystemsTitle}
                    </h2>
                    <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
                      {works.groups.subsystemsNote}
                    </p>
                  </div>
                  <div className="grid gap-6 md:grid-cols-2">
                    {subsystems.map((item) => (
                      <CaseCard key={item.slug} work={item} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {standalone.length > 0 && (
            <div className="flex flex-col gap-6 border-t border-foreground/10 pt-16">
              <h2 className="font-heading text-lg font-semibold tracking-tight sm:text-xl">
                {works.groups.standaloneTitle}
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {standalone.map((item) => (
                  <CaseCard key={item.slug} work={item} />
                ))}
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

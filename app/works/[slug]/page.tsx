import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { WorkBody } from "@/components/work-body";
import { content, getWorkBySlug } from "@/data/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return content.works.items.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) return {};

  return {
    title: `${work.title} — ${content.home.meta.navLabel}`,
    description: work.summary,
  };
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) notFound();

  return (
    <div className="flex flex-1 flex-col bg-background text-foreground">
      <div className="mx-auto w-full max-w-3xl px-6 sm:px-10">
        <div className="pt-16 pb-4 sm:pt-20">
          <Link
            href="/works"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            <span aria-hidden>← </span>
            {content.works.backLabel}
          </Link>
        </div>

        <header className="flex flex-col gap-4 pb-16">
          <h1 className="font-heading text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            {work.title}
          </h1>
          <div className="flex flex-wrap gap-2">
            {work.detailTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground"
              >
                #{tag}
              </span>
            ))}
          </div>
          {work.note && (
            <p className="rounded-lg bg-muted/50 p-5 text-sm leading-7 text-muted-foreground ring-1 ring-foreground/10">
              {work.note}
            </p>
          )}
        </header>

        <div className="flex flex-col gap-16 pb-24">
          {work.sections.map((section) => (
            <section key={section.heading} className="flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                {section.label && (
                  <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {section.label}
                  </div>
                )}
                <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
                  {section.heading}
                </h2>
              </div>

              {section.note && (
                <p className="border-l-2 border-muted pl-5 text-sm leading-7 text-muted-foreground sm:pl-6">
                  {section.note}
                </p>
              )}

              {section.body && <WorkBody text={section.body} />}

              {section.subsections && (
                <div className="flex flex-col gap-10">
                  {section.subsections.map((subsection) => (
                    <div
                      key={subsection.heading}
                      className="flex flex-col gap-4 border-l-2 border-muted pl-5 sm:pl-6"
                    >
                      <h3 className="font-heading text-lg font-semibold text-foreground sm:text-xl">
                        {subsection.heading}
                      </h3>
                      <WorkBody text={subsection.body} />
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

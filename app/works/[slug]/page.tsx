import type { Metadata } from "next";
import type { StaticImageData } from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { WorkBody } from "@/components/work-body";
import { WorkFigure } from "@/components/work-figure";
import { content, getWorkBySlug, getWorkGroups } from "@/data/content";
import type { WorkFigure as WorkFigureData } from "@/data/types";

type Props = {
  params: Promise<{ slug: string }>;
};

const groups = content.works.groups;

export function generateStaticParams() {
  return content.works.items.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) return {};

  const title = `${work.title} — ${content.home.meta.navLabel}`;

  return {
    title,
    description: work.summary,
    openGraph: {
      title,
      description: work.summary,
    },
  };
}

/**
 * Loads each figure so that `next/image` gets the intrinsic dimensions and the
 * blur placeholder from the file itself, which a bare `/images/...` string in
 * the content file cannot supply. The import prefix is static, so only
 * `public/images` is bundled.
 */
async function SectionFigures({ figures }: { figures: WorkFigureData[] }) {
  const images: StaticImageData[] = await Promise.all(
    figures.map(async ({ file }) => {
      const { default: image } = await import(`@/public/images/${file}`);
      return image as StaticImageData;
    }),
  );

  return (
    <div className="flex flex-col gap-10">
      {figures.map((figure, i) => (
        <WorkFigure
          key={figure.file}
          image={images[i]}
          alt={figure.alt}
          caption={figure.caption}
        />
      ))}
    </div>
  );
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) notFound();

  // A case reached directly from search or the home page carries no list
  // context, so each half of the flagship relationship is stated here too.
  const { flagship, subsystems } = getWorkGroups();
  const parent = work.group === "subsystem" ? flagship : undefined;
  const children = work.group === "flagship" ? subsystems : [];

  return (
    <div className="flex flex-1 flex-col bg-background text-foreground">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10">
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
          {parent && (
            <Link
              href={`/works/${parent.slug}`}
              className="group flex flex-col gap-1"
            >
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {groups.partOfLabel}
              </span>
              <span className="text-sm text-muted-foreground group-hover:text-foreground group-hover:underline">
                {parent.title}
                <span aria-hidden> →</span>
              </span>
            </Link>
          )}
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

              {section.figures && <SectionFigures figures={section.figures} />}
            </section>
          ))}

          {children.length > 0 && (
            <section className="flex flex-col gap-6 border-t border-foreground/10 pt-10">
              <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
                {groups.subsystemsTitle}
              </h2>
              <ul className="flex flex-col gap-5">
                {children.map((child) => (
                  <li key={child.slug}>
                    <Link
                      href={`/works/${child.slug}`}
                      className="group flex flex-col gap-1"
                    >
                      <span className="font-heading text-lg font-semibold text-foreground group-hover:underline sm:text-xl">
                        {child.title}
                        <span aria-hidden> →</span>
                      </span>
                      <span className="text-sm leading-7 text-muted-foreground">
                        {child.summary}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

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

const works = content.works;

export const metadata: Metadata = {
  title: works.meta.title,
  description: works.meta.description,
  openGraph: {
    title: works.meta.title,
    description: works.meta.description,
  },
};

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

        <section className="pb-24">
          <div className="grid gap-6 md:grid-cols-2">
            {works.items.map((item) => (
              <Link
                key={item.slug}
                href={`/works/${item.slug}`}
                className="group rounded-xl outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                <Card className="h-full transition-colors group-hover:bg-muted/40">
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:underline">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="flex flex-wrap gap-2 pt-1">
                      {item.tags.map((tag) => (
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
                    {item.summary}
                  </CardContent>
                  <CardFooter className="text-xs text-foreground/80">
                    <span className="font-medium">{works.resultLabel}</span>
                    <span className="mx-2 text-muted-foreground">·</span>
                    <span>{item.result}</span>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

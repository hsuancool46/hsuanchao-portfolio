import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { content } from "@/data/content";

const { hero, cases, cta } = content.home;

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-background text-foreground">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10">
        <section className="flex flex-col gap-8 py-24 sm:py-32">
          <div className="flex flex-col gap-4">
            <h1 className="font-heading text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl md:leading-[1.15]">
              {hero.headline}
            </h1>
            <p className="text-base text-muted-foreground sm:text-lg">
              {hero.subheadline}
            </p>
          </div>
          <div className="space-y-4 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
            {hero.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-6 pb-24">
          <div className="flex flex-col gap-2">
            <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
              {cases.title}
            </h2>
            <p className="text-sm text-muted-foreground">
              {cases.note}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {cases.items.map((item) => (
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
                          {tag}
                        </span>
                      ))}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm leading-7 text-muted-foreground">
                    {item.summary}
                  </CardContent>
                  <CardFooter className="text-xs text-foreground/80">
                    <span className="font-medium">{cases.outcomeLabel}</span>
                    <span className="mx-2 text-muted-foreground">·</span>
                    <span>{item.outcome}</span>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        <section className="pb-32">
          <div className="flex flex-col items-start gap-6 rounded-2xl bg-muted/50 p-10 ring-1 ring-foreground/10 sm:p-14">
            <div className="flex flex-col gap-3">
              <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
                {cta.title}
              </h2>
              <p className="text-sm text-muted-foreground sm:text-base">
                {cta.description}
              </p>
            </div>
            <Button
              render={<Link href="/contact" />}
              nativeButton={false}
              size="lg"
              className="px-6"
            >
              {cta.button}
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}

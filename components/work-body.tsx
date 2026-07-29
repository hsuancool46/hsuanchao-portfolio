import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const URL_PATTERN = /(https?:\/\/\S+)/g;

function linkify(text: string): ReactNode[] {
  return text.split(URL_PATTERN).map((part, i) =>
    /^https?:\/\//.test(part) ? (
      <a
        key={i}
        href={part}
        target="_blank"
        rel="noreferrer"
        className="break-all underline underline-offset-4 hover:text-foreground"
      >
        {part}
      </a>
    ) : (
      part
    ),
  );
}

/**
 * Renders a case study body from `data/content.*`.
 *
 * Blank lines start a new paragraph; single line breaks and indentation are
 * preserved, since the copy carries its own list markers and structure.
 */
export function WorkBody({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const paragraphs = text.trim().split(/\n{2,}/);

  return (
    <div
      className={cn(
        "flex flex-col gap-5 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8",
        className,
      )}
    >
      {paragraphs.map((paragraph, i) => (
        <p key={i} className="whitespace-pre-line">
          {linkify(paragraph)}
        </p>
      ))}
    </div>
  );
}

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

const LAYER_HEADING = /^Layer \d+: \S/;
const BRANCH_MARKER = "├─ ";
const TAIL_MARKER = "└─ ";

type LayerBlock = {
  heading: string;
  items: string[];
};

/**
 * Matches only the exact three-line shape used by the decision-framework
 * copy — a `Layer N:` heading followed by one `├─` line and one `└─` line:
 *
 *     Layer 1: Don't decide from assumptions
 *     ├─ Example: ...
 *     └─ Result: ...
 *
 * Anything else — including a stray `├─` in ordinary prose — returns null and
 * falls through to normal paragraph rendering. The box-drawing characters are
 * layout scaffolding for monospace and are dropped; the words after them are
 * kept verbatim, since the two cases label them differently ("Example: " is
 * present in one and absent in the other).
 */
function parseLayerBlock(paragraph: string): LayerBlock | null {
  const lines = paragraph.split("\n");
  if (lines.length !== 3) return null;

  const [heading, branch, tail] = lines;
  if (!LAYER_HEADING.test(heading)) return null;
  if (!branch.startsWith(BRANCH_MARKER) || !tail.startsWith(TAIL_MARKER)) {
    return null;
  }

  return {
    heading,
    items: [branch.slice(BRANCH_MARKER.length), tail.slice(TAIL_MARKER.length)],
  };
}

/**
 * Renders a case study body from `data/content.*`.
 *
 * Blank lines start a new paragraph; single line breaks and indentation are
 * preserved, since the copy carries its own list markers and structure.
 * Decision-framework layer blocks are the one exception — see
 * {@link parseLayerBlock}.
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
      {paragraphs.map((paragraph, i) => {
        const layer = parseLayerBlock(paragraph);

        if (layer) {
          return (
            <div key={i} className="flex flex-col gap-2">
              <h3 className="font-heading text-base font-semibold text-foreground sm:text-lg">
                {layer.heading}
              </h3>
              <div className="flex flex-col gap-2 border-l-2 border-muted pl-5 sm:pl-6">
                {layer.items.map((item, j) => (
                  <p key={j}>{linkify(item)}</p>
                ))}
              </div>
            </div>
          );
        }

        return (
          <p key={i} className="whitespace-pre-line">
            {linkify(paragraph)}
          </p>
        );
      })}
    </div>
  );
}

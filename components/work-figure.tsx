"use client";

import { Dialog } from "@base-ui/react/dialog";
import { XIcon } from "lucide-react";
import Image, { type StaticImageData } from "next/image";

/**
 * The reading column is `max-w-7xl` (1280px) with `px-10` from `sm` up, so the
 * image never renders wider than 1200px however large the viewport gets.
 */
const COLUMN_SIZES = "(min-width: 1280px) 1200px, 100vw";

/**
 * One full-width figure inside a case study section, with its caption below it.
 *
 * The image is a button that opens a full-screen view of the same file; the
 * dialog closes on Escape, on a press outside the enlarged image, or on the
 * close button. All copy — `alt` and `caption` — comes from `data/content.*`.
 */
export function WorkFigure({
  image,
  alt,
  caption,
}: {
  image: StaticImageData;
  alt: string;
  caption: string;
}) {
  return (
    <Dialog.Root>
      <figure className="flex flex-col gap-3">
        <Dialog.Trigger className="block w-full cursor-zoom-in overflow-hidden rounded-lg ring-1 ring-foreground/10 transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground">
          <Image
            src={image}
            alt={alt}
            sizes={COLUMN_SIZES}
            placeholder="blur"
            className="w-full"
            style={{ width: "100%", height: "auto" }}
          />
        </Dialog.Trigger>
        <figcaption className="text-xs leading-6 text-muted-foreground sm:text-sm">
          {caption}
        </figcaption>
      </figure>

      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-50 min-h-dvh bg-black/80 transition-opacity duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0" />
        <Dialog.Popup className="fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0 sm:p-10">
          <Dialog.Title className="sr-only">{alt}</Dialog.Title>
          {/*
            The popup covers the viewport, so there is no "outside" left for
            Base UI's own dismissal to detect. This layer sits behind the image
            and turns every pixel around it back into a press-to-close target;
            the close button and Escape cover the keyboard path.
          */}
          <Dialog.Close
            aria-hidden
            tabIndex={-1}
            // The rendered element is a <span>, not a native <button>, so Base
            // UI must not apply native button semantics to it. The `role`
            // Base UI substitutes is moot here: the layer is hidden from
            // assistive tech, which uses the close button below instead.
            nativeButton={false}
            render={<span />}
            className="absolute inset-0 cursor-zoom-out"
          />
          <Image
            src={image}
            alt={alt}
            sizes="100vw"
            className="relative block h-auto max-h-full w-auto max-w-full rounded-lg"
          />
          <Dialog.Close className="absolute top-4 right-4 rounded-full bg-background/80 p-2 text-foreground ring-1 ring-foreground/10 backdrop-blur-xs hover:bg-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background">
            <XIcon className="size-4" />
            <span className="sr-only">Close</span>
          </Dialog.Close>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

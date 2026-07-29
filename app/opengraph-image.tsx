import { ImageResponse } from "next/og";

import { content } from "@/data/content";

const socialImage = content.home.socialImage;

export const alt = socialImage.alt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Colours match the site's dark theme (--background / --foreground /
// --muted-foreground), converted to hex since Satori does not parse oklch().
const BACKGROUND = "#0a0a0a";
const FOREGROUND = "#fafafa";
const MUTED = "#a3a3a3";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: BACKGROUND,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 384,
            left: 0,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            fontSize: 32,
            letterSpacing: 2,
            color: MUTED,
          }}
        >
          {socialImage.tagline}
        </div>

        <div
          style={{
            position: "absolute",
            left: 72,
            bottom: 64,
            display: "flex",
            fontSize: 56,
            fontWeight: 600,
            letterSpacing: -1,
            color: FOREGROUND,
          }}
        >
          {socialImage.wordmark}
        </div>
      </div>
    ),
    size,
  );
}

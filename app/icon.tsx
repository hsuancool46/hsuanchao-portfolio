import { ImageResponse } from "next/og";

import { content } from "@/data/content";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Dark tile with the wordmark's initial, so no copy is duplicated here. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          color: "#fafafa",
          fontSize: 22,
          fontWeight: 600,
        }}
      >
        {content.home.socialImage.wordmark.charAt(0)}
      </div>
    ),
    size,
  );
}

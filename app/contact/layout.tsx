import type { Metadata } from "next";

import { content } from "@/data/content";

// The contact page itself is a Client Component, which cannot export metadata.
export const metadata: Metadata = {
  title: content.contact.meta.title,
  description: content.contact.meta.description,
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

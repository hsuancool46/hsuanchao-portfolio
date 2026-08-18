import type { Metadata } from "next";

import { decisionDemo } from "@/data/decision-demo.en";

// The demo page itself is a Client Component, which cannot export metadata.
export const metadata: Metadata = {
  title: decisionDemo.meta.title,
  description: decisionDemo.meta.description,
  openGraph: {
    title: decisionDemo.meta.title,
    description: decisionDemo.meta.description,
  },
};

export default function DecisionDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

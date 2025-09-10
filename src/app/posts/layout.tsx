import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posts | Carlos Arbizu",
  description: "Technical insights, development methodologies, and knowledge sharing from a full stack developer.",
  openGraph: {
    title: "Posts | Carlos Arbizu",
    description: "Technical insights, development methodologies, and knowledge sharing from a full stack developer.",
    type: "website",
  },
};

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

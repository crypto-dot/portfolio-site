import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posts | Carlos Arbizu",
  description: "Fullstack developer blog covering web development, machine learning, AI, and infrastructure. In-depth tutorials, insights, and projects spanning React, Python, DevOps, and modern tech stack solutions..",
  openGraph: {
    title: "Posts | Carlos Arbizu",
    description: "Fullstack developer blog covering web development, machine learning, AI, and infrastructure. In-depth tutorials, insights, and projects spanning React, Python, DevOps, and modern tech stack solutions.",
    type: "website",
    siteName: "Carlos Arbizu | Developer",
  },
};

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

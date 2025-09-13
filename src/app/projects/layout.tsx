import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Carlos Arbizu",
  description: "Explore my portfolio of web development projects, featuring full-stack applications, AI-powered solutions, and modern web technologies.",
  openGraph: {
    title: "Projects | Carlos Arbizu",
    description: "Explore my portfolio of web development projects, featuring full-stack applications, AI-powered solutions, and modern web technologies.",
    type: "website",
    siteName: "Carlos Arbizu | Developer",
    locale: 'en_US'
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

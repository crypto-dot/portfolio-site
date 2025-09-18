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
  alternates: {
    canonical: "https://arbizu.dev/posts"
  },
  keywords: [
    // Primary Keywords (High Priority)
    "Carlos Arbizu blog",
    "Carlos Arbizu developer blog",
    "Carlos Arbizu tutorials",
    "Carlos Arbizu tech blog",
    
    // Technical Content Keywords (Medium Priority)
    "React optimization tutorials",
    "C# .NET development blog",
    "TypeScript best practices",
    "Full stack development tutorials",
    "Enterprise development blog",
    "Performance optimization tutorials",
    
    // Problem-Solving Keywords (Medium Priority)
    "Real world development solutions",
    "Enterprise application tutorials",
    "Database optimization guides",
    "Azure deployment tutorials",
    "React performance tips",
    "Backend development insights",
    
    // AI and Modern Tech Keywords (Lower Priority)
    "AI integration tutorials",
    "Modern web development blog",
    "JavaScript performance optimization",
    "Scalable application development",
    "Frontend development insights",
    "Backend architecture patterns",
    
    // Industry-Specific Keywords (Lower Priority)
    "Real estate tech development",
    "B2B application development blog",
    "Enterprise refactoring tutorials",
    "Multi-location platform development",
    "Trade platform development insights"
  ]
};

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

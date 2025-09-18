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
  alternates: {
    canonical: "https://arbizu.dev/projects"
  },
  keywords: [
    // Primary Keywords (High Priority)
    "Carlos Arbizu projects",
    "Carlos Arbizu portfolio",
    "Carlos Arbizu developer projects",
    "Carlos Arbizu full stack projects",
    
    // Project-Specific Keywords (Medium Priority)
    "We Buy Ugly Houses developer",
    "Dallas Market Center developer", 
    "Pylot platform developer",
    "HomeVestors developer",
    "Enterprise web development projects",
    "B2B platform development",
    
    // Technical Stack Keywords (Medium Priority)
    "TypeScript developer",
    "C# .NET portfolio projects",
    "React developer portfolio",
    "Enterprise application examples",
    "Multi-location platform development",
    "Real estate web development portfolio",
    "Trade platform development",
    
    // Industry-Specific Keywords (Lower Priority)
    "Real estate technology projects",
    "Franchise platform development",
    "Commercial real estate web development",
    "Marketing platform development",
    "B2B marketplace development",
    "Multi-tenant application development"
  ]
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

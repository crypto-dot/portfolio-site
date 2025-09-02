import { Project } from "@/lib/types/project";

export const featuredProjects: Project[] = [
    {
      id: 1,
      title: "Pylot",
      description: "Multi-tenant platform powering 200+ sites with a React frontend and headless WordPress CMS",
      imageUrl: "/api/placeholder/600/400",
      technologies: ["Python", "React", "AstroJS", "WordPress", "SCSS", "TypeScript", "Vitest", "Prettier", "PHP", "ESLint"],
      liveUrl: "https://imaginuity.com/pylot",
      status: "Active"
    },
    {
      id: 2,
      title: "Dallas Market Center",
      description: "Developed and optimized a large-scale web platform using C#, Razor Pages, jQuery, and SCSS, supporting dynamic UI components and complex business logic.",
      imageUrl: "/api/placeholder/600/400",
      technologies: ["Razor Pages", "jQuery", "SCSS", "C#", "ASP.NET", "SQL Server", "Azure", "CI/CD", "Webpack", "Babel", "ESLint", "Prettier"],
      liveUrl: "https://dallasmarketcenter.com",
      status: "Beta"
    },
    {
      id: 3,
      title: "WeBuyUglyHouses",
      description: "User friendly real estate website for buying and selling houses along with sister site ",
      imageUrl: "/api/placeholder/600/400",
      technologies:  ["A-B testing", "Razor Pages", "jQuery", "SCSS", "C#", "ASP.NET", "SQL Server", "Azure", "CI/CD", "Webpack", "Babel", "ESLint", "Prettier"],
      liveUrl: "https://webuyuglyhouses.com",
      status: "Research"
    }
  ];
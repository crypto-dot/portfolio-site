import { Project } from "@/lib/types/project";

export const featuredProjects: Project[] = [
    {
      id: 1,
      title: "Pylot",
      description: "Multi-tenant platform powering 200+ sites with a React frontend and headless WordPress CMS",
      longDescription: "A comprehensive multi-tenant platform that powers over 200 websites with a modern React frontend and headless WordPress CMS. Built with scalability and performance in mind, featuring automated deployments, custom theme development, and advanced content management capabilities.",
      imageUrl: "images/Pylot.png",
      technologies: ["Python", "React", "AstroJS", "WordPress", "SCSS", "TypeScript", "Vitest", "Prettier", "PHP", "ESLint"],
      liveUrl: "https://imaginuity.com/pylot",
      status: "Live",
      category: "Full Stack",
      featured: true,
      year: 2024,
      client: "Imaginuity",
      duration: "8 months"
    },
    {
      id: 2,
      title: "Dallas Market Center",
      description: "Developed and optimized a large-scale web platform using C#, Razor Pages, jQuery, and SCSS, supporting dynamic UI components and complex business logic.",
      longDescription: "A large-scale e-commerce and event management platform for Dallas Market Center, featuring complex business logic, dynamic UI components, and high-performance optimization. Handles thousands of concurrent users during major trade shows and events.",
      imageUrl: "images/DallasMarketCenter.png",
      technologies: ["Razor Pages", "jQuery", "SCSS", "C#", "ASP.NET", "SQL Server", "Azure", "CI/CD", "Webpack", "Babel", "ESLint", "Prettier"],
      liveUrl: "https://dallasmarketcenter.com",
      status: "Live",
      category: "Full Stack",
      featured: true,
      year: 2023,
      client: "Dallas Market Center",
      duration: "2 years"
    },
    {
      id: 3,
      title: "WeBuyUglyHouses",
      description: "User friendly real estate website for buying and selling houses along with sister site",
      longDescription: "A comprehensive real estate platform designed for buying and selling properties, featuring advanced search capabilities, property valuation tools, and seamless user experience across multiple sister sites.",
      imageUrl: "images/weBuyUglyHouses.png",
      technologies: ["A-B testing", "Razor Pages", "jQuery", "SCSS", "C#", "ASP.NET", "SQL Server", "Azure", "CI/CD", "Webpack", "Babel", "ESLint", "Prettier"],
      liveUrl: "https://webuyuglyhouses.com",
      status: "Live",
      category: "Full Stack",
      featured: true,
      year: 2023,
      client: "WeBuyUglyHouses",
      duration: "2 years"
    }
  ];

export const allProjects: Project[] = [
  ...featuredProjects,
  // {
  //   id: 4,
  //   title: "AI Content Generator",
  //   description: "Next.js application with OpenAI integration for automated content creation and management",
  //   longDescription: "A sophisticated content management system powered by AI, featuring automated blog post generation, SEO optimization, and content scheduling. Built with Next.js 14, TypeScript, and OpenAI GPT-4 integration.",
  //   imageUrl: "images/ai-content-generator.png",
  //   technologies: ["Next.js", "TypeScript", "OpenAI API", "Tailwind CSS", "Prisma", "PostgreSQL", "Vercel"],
  //   githubUrl: "https://github.com/carlosarbizu/ai-content-generator",
  //   status: "In Development",
  //   category: "AI/ML",
  //   featured: false,
  //   year: 2024,
  //   duration: "3 months"
  // },
  {
    id: 5,
    title: "Blogr Landing Page",
    description: "Landing page for a frontend mentor challenge",
    longDescription: "A landing page for a frontend mentor challenge. Built with HTML, CSS, and Javascript using BEM conventions.",
    imageUrl: "images/blogr.png",
    technologies: ["HTML", "CSS", "Javascript", "BEM Conventions"],
    githubUrl: "https://github.com/crypto-dot/FrontendMentorChallenge5",
    status: "Live",
    category: "Frontend",
    featured: false,
    year: 2022,
    duration: "1 week",
    liveUrl: "https://crypto-dot.github.io/FrontendMentorChallenge5/"
  },
  // {
  //   id: 6,
  //   title: "Mobile Weather App",
  //   description: "Cross-platform mobile application with location-based weather forecasting",
  //   longDescription: "A beautiful cross-platform mobile weather application built with React Native, featuring location-based forecasts, weather maps, alerts, and offline functionality. Includes push notifications and widget support.",
  //   imageUrl: "images/weather-app.png",
  //   technologies: ["React Native", "TypeScript", "Expo", "Weather API", "AsyncStorage", "Push Notifications", "Maps"],
  //   githubUrl: "https://github.com/carlosarbizu/weather-app",
  //   status: "Completed",
  //   category: "Mobile",
  //   featured: false,
  //   year: 2023,
  //   duration: "2 months"
  // },
  // {
  //   id: 7,
  //   title: "RESTful API Service",
  //   description: "Scalable microservice architecture with authentication and rate limiting",
  //   longDescription: "A robust RESTful API service built with Node.js and Express, featuring JWT authentication, rate limiting, data validation, and comprehensive documentation. Designed for high availability and scalability.",
  //   imageUrl: "images/api-service.png",
  //   technologies: ["Node.js", "Express", "JWT", "Redis", "PostgreSQL", "Docker", "Swagger", "Jest", "Rate Limiting"],
  //   githubUrl: "https://github.com/carlosarbizu/api-service",
  //   status: "Live",
  //   category: "Backend",
  //   featured: false,
  //   year: 2023,
  //   duration: "3 months"
  // },
  // {
  //   id: 8,
  //   title: "Portfolio Website",
  //   description: "Modern, responsive portfolio website built with Next.js and Framer Motion",
  //   longDescription: "A modern, responsive portfolio website showcasing my work and skills. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion for smooth animations. Features dark mode, responsive design, and optimized performance.",
  //   imageUrl: "images/portfolio.png",
  //   technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel", "SEO", "Responsive Design"],
  //   liveUrl: "https://carlosarbizu.dev",
  //   githubUrl: "https://github.com/carlosarbizu/portfolio",
  //   status: "Live",
  //   category: "Frontend",
  //   featured: false,
  //   year: 2024,
  //   duration: "2 months"
  // },
  // {
  //   id: 9,
  //   title: "Task Management System",
  //   description: "Full-stack task management application with real-time collaboration features",
  //   longDescription: "A comprehensive task management system with real-time collaboration, drag-and-drop functionality, team management, and advanced filtering. Built with React, Node.js, and WebSocket for real-time updates.",
  //   imageUrl: "images/task-management.png",
  //   technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Redux", "Material-UI", "WebSocket", "JWT"],
  //   githubUrl: "https://github.com/carlosarbizu/task-management",
  //   status: "Completed",
  //   category: "Full Stack",
  //   featured: false,
  //   year: 2023,
  //   duration: "5 months"
  // }
];
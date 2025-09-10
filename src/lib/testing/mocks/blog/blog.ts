import { BlogPost } from "@/lib/types/blog";
export const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Hello World",
      excerpt: "This is my first blog post where I share my thoughts on web development and the journey ahead.",
      slug: "hello-world",
      publishedAt: "2025-01-15",
      author: "Carlos Arbizu",
      authorAvatar: "/images/avatar.jpg",
      tags: ["Hello World", "First Blog Post", "Web Development", "General"],
      readTime: "8 min",
      featured: true
    },
    {
      id: 2,
      title: "Artificial Intelligence ? What is it?",
      excerpt: "AI is a broad term that encompasses a range of technologies and applications. Let me break down the fundamentals and explore the current landscape.",
      slug: "artificial-intelligence-what-is-it",
      publishedAt: "2025-01-10",
      author: "Carlos Arbizu",
      authorAvatar: "/images/avatar.jpg",
      tags: ["Artificial Intelligence", "AI", "Machine Learning", "Generative AI", "LLMs", "Deep Learning", "Neural Networks", "Reinforcement Learning", "Natural Language Processing"],
      readTime: "12 min",
      featured: true
    },
    {
      id: 3,
      title: "Building Scalable React Applications",
      excerpt: "Learn the best practices for creating maintainable and performant React applications that can grow with your business needs.",
      slug: "building-scalable-react-applications",
      publishedAt: "2025-01-05",
      author: "Carlos Arbizu",
      authorAvatar: "/images/avatar.jpg",
      tags: ["React", "JavaScript", "Frontend", "Performance", "Architecture"],
      readTime: "15 min"
    },
    {
      id: 4,
      title: "The Future of Web Development",
      excerpt: "Exploring emerging technologies and trends that are shaping the future of web development, from WebAssembly to edge computing.",
      slug: "future-of-web-development",
      publishedAt: "2024-12-28",
      author: "Carlos Arbizu",
      authorAvatar: "/images/avatar.jpg",
      tags: ["Web Development", "Future Tech", "WebAssembly", "Edge Computing", "Trends"],
      readTime: "10 min"
    },
    {
      id: 5,
      title: "TypeScript Best Practices",
      excerpt: "A comprehensive guide to writing better TypeScript code with practical examples and real-world scenarios.",
      slug: "typescript-best-practices",
      publishedAt: "2024-12-20",
      author: "Carlos Arbizu",
      authorAvatar: "/images/avatar.jpg",
      tags: ["TypeScript", "JavaScript", "Best Practices", "Code Quality", "Development"],
      readTime: "18 min"
    },
    {
      id: 6,
      title: "Database Design Patterns",
      excerpt: "Understanding different database design patterns and when to use them for optimal performance and maintainability.",
      slug: "database-design-patterns",
      publishedAt: "2024-12-15",
      author: "Carlos Arbizu",
      authorAvatar: "/images/avatar.jpg",
      tags: ["Database", "Design Patterns", "SQL", "NoSQL", "Architecture"],
      readTime: "14 min"
    }
  ];
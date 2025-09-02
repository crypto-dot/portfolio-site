import { BlogPost } from "@/lib/types/blog";
export const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Hello World",
      excerpt: "This is my first blog post",
      publishedAt: "2025-09-01",
      author: "Carlos Arbizu",
      authorAvatar: "/api/placeholder/40/40",
      tags: ["Hello World", "First Blog Post", "Web Development", "General"],
      readTime: "8 min"
    },
    {
      id: 2,
      title: "Artificial Intelligence ? What is it?",
      excerpt: "Essential security patterns and best practices for developing robust smart contracts.",
      publishedAt: "2024-09-01",
      author: "Carlos Arbizu",
      authorAvatar: "/api/placeholder/40/40",
      tags: ["Artificial Intelligence", "AI", "Machine Learning", "Generative AI", "LLMs", ],
      readTime: "12 min"
    }
  ];
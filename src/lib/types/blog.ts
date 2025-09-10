export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  slug: string;
  publishedAt: string;
  author: string;
  authorAvatar?: string;
  tags: string[];
  readTime: string;
  featured?: boolean;
}

"use client"
import React from 'react';
import { Header } from '@/components/Header/Header';
import { PostsPage } from '@/components/PostsPage/PostsPage';
import SEO from '@/components/SEO/SEO';
const Posts = () => {
  return (
    <main>
      <SEO title="Posts | Carlos Arbizu"  description="Carlos Arbizu shares in-depth tutorials and insights on full-stack development, React optimization, C# .NET enterprise solutions, and AI integration. Learn from real-world case studies covering TypeScript best practices, Azure cloud deployment, performance optimization techniques, and solving complex backend challenges. Expert perspectives on modern web development, from React hooks to scalable database architecture." />
      <Header />
      <PostsPage />
    </main>
  );
};

export default Posts;

"use client"
import React from 'react';
import { Header } from '@/components/Header/Header';
import { PostsPage } from '@/components/PostsPage/PostsPage';
const Posts = () => {
  return (
    <main>
      <Header />
      <PostsPage />
    </main>
  );
};

export default Posts;

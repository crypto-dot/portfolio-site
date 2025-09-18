"use client"
import React from 'react';
import { Header } from '@/components/Header/Header';
import { ProjectsPage } from '@/components/ProjectsPage/ProjectsPage';
import SEO from '@/components/SEO/SEO';

const Projects = () => {
  return (
    <main>
      <SEO title="Projects | Carlos Arbizu" description="Explore Carlos Arbizu's full-stack development projects including enterprise B2B platforms, multi-location marketing systems, and high-performance web applications. Featured work: We Buy Ugly Houses (C# .NET, Kentico), Dallas Market Center trade platform (React, Azure), and Pylot multi-location marketing platform (PHP, React, TypeScript). Specializing in scalable solutions for real estate, franchise networks, and enterprise clients."  />
      <Header />
      <ProjectsPage />
    </main>
  );
};

export default Projects;

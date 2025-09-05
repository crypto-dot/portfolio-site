"use client"
import React, {useRef, useEffect} from 'react';
import { Button } from '@/components/shadcn-ui/button';
import { 
  Github, 
  ExternalLink, 
  Terminal,
} from 'lucide-react';
import Projects from '@/components/Projects/Index';
import Hero from '@/components/Hero/Index';
import BlogList from '@/components/BlogList/Index';
import Header from '@/components/Header/Index';
import { Banner } from '@/components/Banner/Banner';
import { ReactLenis } from 'lenis/react';
import type { LenisRef } from 'lenis/react';
import { cancelFrame, frame } from 'framer-motion';

const Home = () => {
  const yearContainer = useRef<HTMLDivElement>(null);
  const year = new Date().getFullYear();
  const lenisRef = useRef<LenisRef>(null)

  useEffect(() => {
    function update(data: { timestamp: number }) {
      const time = data.timestamp
      lenisRef.current?.lenis?.raf(time)
    }

    frame.update(update, true)

    return () => cancelFrame(update)
  }, [])

  useEffect(() => {
    if (yearContainer.current) {
      yearContainer.current.innerHTML = year.toString();
    }
  }, []);
  return (
    <ReactLenis root ref={lenisRef}  options={{ autoRaf: false }}>
      {/* Header */}
      <Header />
      <Banner />
      {/* Hero Section */}
      <Hero />
      {/* Projects Section */}
      <Projects />

      {/* Blog Section */}
      <BlogList />

      {/* Footer */}
    </ReactLenis>
  );
};

export default Home;
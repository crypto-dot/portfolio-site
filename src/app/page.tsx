"use client"
import React, {useRef, useEffect} from 'react';
import Projects from '@/components/Projects/Index';
import Hero from '@/components/Hero/Index';
import BlogList from '@/components/BlogList/Index';
import Header from '@/components/Header/Index';
import { Banner } from '@/components/Banner/Banner';
import { ReactLenis } from 'lenis/react';
import type { LenisRef } from 'lenis/react';
import { cancelFrame, frame } from 'framer-motion';
import SEO from '@/components/SEO/SEO';

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
    <main>
      <SEO title="Carlos Arbizu | Developer" description="Full stack developer creating AI-powered web applications that solve real business problems. See my portfolio of machine learning and software development projects." canonical="https://arbizu.dev" />
    <ReactLenis root ref={lenisRef}  options={{ autoRaf: false }}>
      <Header />
      <Banner />
      <Hero />
      <Projects />
      <BlogList />
    </ReactLenis>
    </main>
  );
};

export default Home;
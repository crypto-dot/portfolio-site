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

const Home = () => {
  const lenisRef = useRef<LenisRef>(null)

  useEffect(() => {
    function update(data: { timestamp: number }) {
      const time = data.timestamp
      lenisRef.current?.lenis?.raf(time)
    }

    frame.update(update, true)

    return () => cancelFrame(update)
  }, [])

  return (
    <main>
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
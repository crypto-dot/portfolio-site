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
const Home = () => {
  const yearContainer = useRef<HTMLDivElement>(null);
  const year = new Date().getFullYear();
  useEffect(() => {
    if (yearContainer.current) {
      yearContainer.current.innerHTML = year.toString();
    }
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute top-0 left-1/4 w-100 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
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
      <footer className="relative bg-slate-900 border-t border-cyan-500/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                    <Terminal className="w-5 h-5 text-black" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                </div>
                <div>
                  <div className="font-mono text-base md:text-lg font-bold text-cyan-400">./carlosarbizu</div>
                  <div className="text-xs text-gray-400">ALWAYS_ONLINE</div>
                </div>
              </div>
              <p className="text-gray-300 font-mono text-sm">
                Building the future, one commit at a time.
              </p>
            </div>
            
            <div>
              <h3 className="font-mono font-semibold mb-4 text-cyan-400">NAVIGATION.MAP</h3>
              <div className="space-y-2">
                <a href="#projects" className="block text-gray-300 hover:text-cyan-400 transition-colors font-mono text-sm">
                  <span className="text-cyan-400 mr-2">&rarr;</span>PROJECTS
                </a>
                <a href="#blog" className="block text-gray-300 hover:text-cyan-400 transition-colors font-mono text-sm">
                  <span className="text-cyan-400 mr-2">&rarr;</span>BLOG
                </a>
                <a href="#contact" className="block text-gray-300 hover:text-cyan-400 transition-colors font-mono text-sm">
                  <span className="text-cyan-400 mr-2">&rarr;</span>CONTACT
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-mono font-semibold mb-4 text-cyan-400">EXTERNAL.LINKS</h3>
              <div className="flex space-x-4">
                <Button size="sm" variant="ghost" className="text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 p-2">
                  <Github className="w-5 h-5" />
                </Button>
                <Button size="sm" variant="ghost" className="text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 p-2">
                  <ExternalLink className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-cyan-500/20 mt-8 pt-8 text-center">
            <p className="text-gray-400 font-mono text-sm">
              <span className="text-cyan-400">©</span> <span ref={yearContainer}></span> Arbizu.dev | ALL_RIGHTS_RESERVED
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
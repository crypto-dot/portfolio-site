import { SkillsGrid } from '../SkillsGrid/SkillsGrid';
import React from 'react';
import { Button } from '../shadcn-ui/button';
import { Github, Play } from 'lucide-react';
import { HeroAvatar } from './HeroAvatar/HeroAvatar';
import { skills } from '../../lib/testing/mocks/skills';
import ColoredAnchorButton from '../AnchorButtons/ColoredAnchorButton/Index';
export const Hero = () => {
  return (
          <section id="home" className="relative py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-2">
                  <div className="text-cyan-400 font-mono text-sm">SYSTEM_STATUS: ONLINE</div>
                  <div className="text-gray-400 font-mono text-sm">$ whoami</div>
                </div>
                
                <div>
                  <h1 className="text-5xl lg:text-7xl font-bold mb-4 font-mono">
                    <span className="text-cyan-400">Carlos</span>
                    <br />
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
                      ARBIZU
                    </span>
                  </h1>
                  <div className=" text-sm md:text-xl text-gray-300 font-mono">
                    <span className="text-green-400">&rarr;</span> FullStack_Developer.exe
                    <br />
                    <span className="text-green-400">&rarr;</span> Blockchain_Enthusiast.dll
                    <br />
                    <span className="text-green-400">&rarr;</span> AI_Enthusiast.py
                  </div>
                </div>
                
                <p className="text-lg text-gray-300 max-w-lg">
                  Architecting the future of web technology through cutting-edge development, 
                  blockchain innovation, and artificial intelligence integration.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <ColoredAnchorButton link="/contact" text='RUN_PROJECTS.exe' >
                    <Play className="w-4 h-4" />
                  </ColoredAnchorButton>
                  <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 font-mono gap-2">
                    <Play className="w-4 h-4" />
                    RUN_PROJECTS.exe
                  </Button>
                  <Button variant="outline" size="lg" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-mono gap-2">
                    <Github className="w-4 h-4" />
                    ACCESS_GITHUB
                  </Button>
                </div>
              </div>

              <HeroAvatar />
            </div>

            {/* Skills Grid */}
            <SkillsGrid />
          </div>
        </div>
      </section>
  )
}

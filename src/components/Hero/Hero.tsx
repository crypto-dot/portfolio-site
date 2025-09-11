import React from 'react';
import { Github, Play } from 'lucide-react';
import { HeroAvatar } from './HeroAvatar/HeroAvatar';
import { SkillsGrid } from '../SkillsGrid/SkillsGrid';
import { PrimaryAnchorButton } from '../AnchorButtons/PrimaryAnchorButton/PrimaryAnchorButton';
import { WhiteAnchorButton } from '../AnchorButtons/WhiteAnchorButton/WhiteAnchorButton';
import AnimatedText from '../AnimatedText/Index';
import { AnimatedTypewriter } from '../AnimatedTypewriter/AnimatedTypewriter';
export const Hero = () => {
  return (
          <section id="home" className="relative pt-10 pb-20 lg:pb-32">
        <div className="container mx-auto px-4">
          <div className=" mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-2">
                  <div className="text-primary  text-sm">SYSTEM_STATUS: ONLINE</div>
                  <AnimatedTypewriter />
                </div>
                
                <div>
                  <h1 className="text-5xl lg:text-7xl font-bold mb-4  w-fit">
                    <span className="text-primary">Carlos</span>
                    <br />
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
                      ARBIZU
                    </span>
                  </h1>
                  <div className=" text-sm md:text-xl text-gray-300 ">
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">&rarr;</span> 
                      <AnimatedText duration={2} bounce={.75}>
                      <p className="animated-text mb-2">
                      FullStack_Developer.exe
                      </p>
                      </AnimatedText>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">&rarr;</span> 
                      <AnimatedText duration={3} bounce={.75}>
                      <p className="animated-text mb-2">
                      Blockchain_Enthusiast.dll
                      </p>
                      </AnimatedText>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">&rarr;</span> 
                      <AnimatedText duration={4} bounce={.75}>
                    <p className="animated-text mb-2">
                    AI_Enthusiast.py
                    </p>
                    </AnimatedText>
                    </div>
                  </div>
                </div>
                
                <AnimatedText>
                  <p className="text-lg text-gray-300 max-w-lg animated-text">
                  Architecting the future of web technology through cutting-edge development, 
                  blockchain innovation, and artificial intelligence integration.
                  </p>
                </AnimatedText>
                
                <div className="flex flex-col sm:flex-row gap-4">
                   <PrimaryAnchorButton text="CONTACT ME" link="/contact" >
                    <Play  className="w-4 h-4" />
                   </PrimaryAnchorButton>
                  <WhiteAnchorButton text="ACCESS GITHUB" link="https://github.com/crypto-dot" >
                    <Github className="w-4 h-4" />
                  </WhiteAnchorButton>
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

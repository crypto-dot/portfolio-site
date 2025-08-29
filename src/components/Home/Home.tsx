import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../shadcn-ui/avatar';
import { Button } from '../shadcn-ui/button';
import { BugOff, Cpu, Github, Play } from 'lucide-react';
import { skills } from '../../lib/testing/mocks/skills';
export const Home = () => {
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
                  <div className="text-xl text-gray-300 font-mono">
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

              <div className="relative">
                <div className="w-80 h-80 mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-full blur-2xl animate-pulse" />
                  <Avatar className="w-80 h-80 border-4 border-cyan-500/50 shadow-2xl shadow-cyan-500/25">
                    <AvatarImage src="/api/placeholder/320/320" alt="Alex Cipher" />
                    <AvatarFallback className="text-6xl bg-gradient-to-r from-cyan-500 to-purple-600">CA</AvatarFallback>
                  </Avatar>
                  
                  {/* Floating Tech Icons */}
                  <div className="absolute -top-4 -left-4 bg-slate-800 border border-cyan-500/50 rounded-lg p-2 animate-bounce" style={{ animationDelay: '1s' }}>
                    <Cpu className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-slate-800 border border-purple-500/50 rounded-lg p-2 animate-bounce" style={{ animationDelay: '2s' }}>
                    <BugOff className="w-6 h-6 text-purple-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="mt-20 grid md:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="bg-slate-800/50 border border-cyan-500/20 rounded-lg p-6 group hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-mono text-sm text-cyan-400">{skill.category}</span>
                    <span className="font-mono text-xs text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="font-semibold mb-3">{skill.name}</div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 h-2 rounded-full transition-all duration-1000 group-hover:shadow-lg group-hover:shadow-cyan-500/50" 
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  )
}

import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../shadcn-ui/card'
import { Badge } from '../shadcn-ui/badge'
import { Button } from '../shadcn-ui/button'
import { ChevronRight, ExternalLink, Github, Terminal } from 'lucide-react'
import { featuredProjects } from '../../lib/testing/mocks/project'
import { ColoredAnchorButton } from '../AnchorButtons/ColoredAnchorButton/ColoredAnchorButton'
import { WhiteAnchorButton } from '../AnchorButtons/WhiteAnchorButton/WhiteAnchorButton'
import { motion } from 'motion/react'
export const Projects = () => {


  return (
          <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} id="projects" className="relative py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 font-mono">PROJECTS</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Development cycles focusing on next-generation technologies 
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div initial={{ y: 100 * (index + 1) }} whileInView={{ y: 0 }} transition={{ duration: 1  }} viewport={{ once: true }} key={project.id}>
              <Card key={project.id} className=" group transition-all duration-300 pt-0 overflow-hidden h-[100%]">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Badge className={`${project.status === 'Live' ? 'text-green-400 bg-[oklch(0.2525 0.0768 137.21 / 77%)]' : 'text-orange-400 bg-[oklch(0.577 0.245 27.325 / 77%)]'} font-mono backdrop-blur-[15px]`}>
                      {project.status}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Terminal className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-mono text-cyan-400">PROJECT_{String(index + 1).padStart(3, '0')}</span>
                  </div>
                  <CardTitle className="group-hover:text-cyan-400 transition-colors font-mono text-xl">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3">
                    <h2 className="text-xs font-mono mb-2 text-white"> TECH_STACK:</h2>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="border-purple-500/50 text-purple-300 bg-purple-500/10 font-mono text-xs ">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="flex gap-2 mt-auto">
                  {project.githubUrl && (
                  <ColoredAnchorButton text="SOURCE" link={project.githubUrl} >
                    <Github className="w-4 h-4" />
                  </ColoredAnchorButton>
                  )}
                  {project.liveUrl && (
                  <WhiteAnchorButton text="LAUNCH" link={project.liveUrl} >
                    <ExternalLink className="w-4 h-4" />
                  </WhiteAnchorButton>
                  )}
                </CardFooter>
              </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <WhiteAnchorButton text="" link="/projects" >
            LOAD_MORE_PROJECTS
                    <ChevronRight className="w-4 h-4" />
            </WhiteAnchorButton>
          </div>
        </div>
      </motion.section>
  )
}
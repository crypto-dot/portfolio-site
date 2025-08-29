import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../shadcn-ui/card'
import { Badge } from '../shadcn-ui/badge'
import { Button } from '../shadcn-ui/button'
import { ChevronRight, ExternalLink, Github, Terminal } from 'lucide-react'
import { featuredProjects } from '../../lib/testing/mocks/project'
export const Projects = () => {
  return (
          <section id="projects" className="relative py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-cyan-400 font-mono text-sm mb-2">PROJECTS_DATABASE.JSON</div>
            <h2 className="text-4xl font-bold mb-4 font-mono">ACTIVE_PROJECTS</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Current development cycles focusing on next-generation technologies
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={project.id} className="bg-slate-800/50 border-cyan-500/20 group hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="border-green-500/50 text-green-400 bg-green-500/10 font-mono">
                      {project.status}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Terminal className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-mono text-cyan-400">PROJECT_{String(index + 1).padStart(3, '0')}</span>
                  </div>
                  <CardTitle className="group-hover:text-cyan-400 transition-colors font-mono">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-xs font-mono text-cyan-400 mb-2">TECH_STACK:</div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30 font-mono text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="flex gap-2">
                  <Button size="sm" variant="outline" className="gap-2 flex-1 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-mono">
                    <Github className="w-4 h-4" />
                    SOURCE
                  </Button>
                  <Button size="sm" className="gap-2 flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 font-mono">
                    <ExternalLink className="w-4 h-4" />
                    DEPLOY
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-mono gap-2">
              LOAD_MORE_PROJECTS <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
  )
}
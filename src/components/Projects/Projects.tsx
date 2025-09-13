import React, { useRef } from 'react'
import { ChevronRight } from 'lucide-react'
import { featuredProjects } from '../../lib/testing/mocks/project'
import { WhiteAnchorButton } from '../AnchorButtons/WhiteAnchorButton/WhiteAnchorButton'
import { motion } from 'motion/react'
import { ProjectCard } from './ProjectCard/ProjectCard'
export const Projects = () => {

  return (
    <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} id="projects" className="relative py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-secondary">PROJECTS</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Development cycles focusing on next-generation technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <WhiteAnchorButton text="" link="/projects" >
            VIEW PROJECTS
            <ChevronRight className="w-4 h-4" />
          </WhiteAnchorButton>
        </div>
      </div>
    </motion.section>
  )
}
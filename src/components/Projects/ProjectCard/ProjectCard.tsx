"use client"
import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../../shadcn-ui/card'
import { Badge } from '../../shadcn-ui/badge'
import { ExternalLink, Github, Terminal } from 'lucide-react'
import { PrimaryAnchorButton } from '../../AnchorButtons/PrimaryAnchorButton/PrimaryAnchorButton'
import { WhiteAnchorButton } from '../../AnchorButtons/WhiteAnchorButton/WhiteAnchorButton'
import { motion } from 'motion/react'
import { Project } from '../../../lib/types/project'
export const ProjectCard = ({ project, index }: { project: Project, index: number }) => {
    return (
        <motion.div 
            transition={{ type: "spring", stiffness: 50, damping: 20,  duration: 1, bounce: 50 }} initial={{ y: 100 * (index + 1) }} whileInView={{ y: 0 }} viewport={{ once: true }} key={project.id}>
            <Card key={project.id} className="group transition-all duration-300 pt-0 overflow-hidden h-[100%]" >
                <div className="relative overflow-hidden">
                    <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0" />
                    <div className="absolute top-4 right-4">
                        <Badge className={`${project.status === 'Live' ? 'bg-[#285d39] text-green-400 border-green-500/50' : 'bg-[#574000] text-orange-400 border-orange-500/50'}`}>
                            {project.status}
                        </Badge>
                    </div>
                </div>

                <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                        <Terminal className="w-4 h-4 text-primary" />
                        <span className="text-xs  text-primary">PROJECT_{String(index + 1).padStart(3, '0')}</span>
                    </div>
                    <CardTitle className="text-xl mb-4 group-hover:text-primary transition-colors">
                        {project.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground mb-2">
                        {project.description}
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <div className="space-y-3">
                        <h2 className="text-xs  mb-2 text-white"> TECH STACK:</h2>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                                <Badge key={tech} variant="secondary" className="bg-primary text-primary-foreground text-xs ">
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </CardContent>

                <CardFooter className="flex gap-2 mt-auto">
                    {project.githubUrl && (
                        <PrimaryAnchorButton text="SOURCE" link={project.githubUrl} >
                            <Github className="w-4 h-4" />
                        </PrimaryAnchorButton>
                    )}
                    {project.liveUrl && (
                        <WhiteAnchorButton text="LAUNCH" link={project.liveUrl} >
                            <ExternalLink className="w-4 h-4" />
                        </WhiteAnchorButton>
                    )}
                </CardFooter>
            </Card>
        </motion.div>
    )
}
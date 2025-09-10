"use client"
import React, { useRef } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../../shadcn-ui/card'
import { Badge } from '../../shadcn-ui/badge'
import { ExternalLink, Github, Terminal } from 'lucide-react'
import { ColoredAnchorButton } from '../../AnchorButtons/ColoredAnchorButton/ColoredAnchorButton'
import { WhiteAnchorButton } from '../../AnchorButtons/WhiteAnchorButton/WhiteAnchorButton'
import { motion, useSpring } from 'motion/react'
import { Project } from '../../../lib/types/project'
import { springValue } from 'motion/react'
export const ProjectCard = ({ project, index }: { project: Project, index: number }) => {
    return (
        <motion.div 
            transition={{ type: "spring", stiffness: 50, damping: 20,  duration: 1, bounce: 50 }} initial={{ y: 100 * (index + 1) }} whileInView={{ y: 0 }} viewport={{ once: true }} key={project.id}>
            <Card key={project.id} className=" group transition-all duration-300 pt-0 overflow-hidden h-[100%]" >
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
    )
}
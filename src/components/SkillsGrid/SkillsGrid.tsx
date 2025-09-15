"use client"
import { skills } from '@/lib/testing/mocks/skills'
import React from 'react'
import AnimatedProgressBar from '../AnimatedProgressBar/Index'
import { Card, CardContent, CardHeader } from '../shadcn-ui/card'

export const SkillsGrid = () => {
  return (
    <div className="mt-20 lg:grid-cols-4 gap-6 hidden lg:grid">
    {skills.map((skill, index) => (
      <Card key={index} className=" rounded-lg p-6 group hover:border-primary transition-all duration-300">
        <CardHeader>
        <div className="flex justify-between items-center">
          <span className=" text-sm text-primary">{skill.category}</span>
          <span className=" text-xs text-muted-foreground">{skill.maxProgress}%</span>
        </div>
        <div className="font-semibold mb-3">{skill.name}</div>
        </CardHeader>
        <CardContent> 
        <AnimatedProgressBar maxProgress={skill.maxProgress} initialProgress={skill.initialProgress} />
        </CardContent>
      </Card>
    ))}
  </div>    
  )
}
"use client"
import { skills } from '@/lib/testing/mocks/skills'
import React from 'react'
import AnimatedProgressBar from '../AnimatedProgressBar/Index'

export const SkillsGrid = () => {
  return (
    <div className="mt-20 grid md:grid-cols-4 gap-6">
    {skills.map((skill, index) => (
      <div key={index} className="bg-slate-800/50 rounded-lg p-6 group hover:border-primary transition-all duration-300">
        <div className="flex justify-between items-center mb-2">
          <span className=" text-sm text-primary">{skill.category}</span>
          <span className=" text-xs text-gray-400">{skill.maxProgress}%</span>
        </div>
        <div className="font-semibold mb-3">{skill.name}</div>
        <AnimatedProgressBar maxProgress={skill.maxProgress} initialProgress={skill.initialProgress} />
      </div>
    ))}
  </div>    
  )
}
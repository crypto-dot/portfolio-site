"use client"
import { skills } from '@/lib/testing/mocks/skills'
import React from 'react'
import AnimatedProgressBar from '../AnimatedProgressBar/Index'

export const SkillsGrid = () => {
  return (
    <div className="mt-20 grid md:grid-cols-4 gap-6">
    {skills.map((skill, index) => (
      <div key={index} className="bg-slate-800/50 border border-cyan-500/20 rounded-lg p-6 group hover:border-cyan-500/50 transition-all duration-300">
        <div className="flex justify-between items-center mb-2">
          <span className="font-mono text-sm text-cyan-400">{skill.category}</span>
          <span className="font-mono text-xs text-gray-400">{skill.maxProgress}%</span>
        </div>
        <div className="font-semibold mb-3">{skill.name}</div>
        <AnimatedProgressBar maxProgress={skill.maxProgress} initialProgress={skill.initialProgress} />
      </div>
    ))}
  </div>    
  )
}
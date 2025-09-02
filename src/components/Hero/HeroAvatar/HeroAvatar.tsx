import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/shadcn-ui/avatar'
import { Cpu, BugOff } from 'lucide-react'

export const HeroAvatar = () => {
  return (

    <section className="relative hidden md:block">
    <div className="w-80 h-80 mx-auto relative">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-full blur-2xl animate-pulse" />
      <Avatar className="w-80 h-80 border-4 border-cyan-500/50 shadow-2xl shadow-cyan-500/25">
        <AvatarImage alt="Alex Cipher" />
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
  </section>
  )
}
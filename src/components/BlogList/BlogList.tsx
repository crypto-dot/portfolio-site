import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../shadcn-ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '../shadcn-ui/avatar'
import { Badge } from '../shadcn-ui/badge'
import { Button } from '../shadcn-ui/button'
import { ChevronRight, Calendar, Terminal } from 'lucide-react'
import { blogPosts } from '../../lib/testing/mocks/blog/blog'
export const BlogList = () => {
  return (
          <section id="blog" className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-cyan-400 font-mono text-sm mb-2">KNOWLEDGE_BASE.MD</div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 font-mono">RECENT_LOGS</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Technical insights and development methodologies
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
              <Card key={post.id} className="bg-slate-800/50 border-cyan-500/20 group hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs font-mono text-cyan-400">LOG_ENTRY</span>
                    </div>
                    <span className="text-xs font-mono text-gray-400">{post.readTime} READ</span>
                  </div>
                  <CardTitle className="group-hover:text-cyan-400 transition-colors font-mono text-xl">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 line-clamp-2">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="border-purple-500/50 text-purple-300 bg-purple-500/10 font-mono text-xs">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-8 h-8 border border-cyan-500/50">
                      <AvatarImage src={post.authorAvatar} alt={post.author} />
                      <AvatarFallback className="bg-cyan-500/20 text-cyan-400 text-xs">AC</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-mono text-sm text-cyan-400">{post.author}</div>
                      <div className="flex items-center gap-1 text-xs text-gray-400 font-mono">
                        <Calendar className="w-3 h-3" />
                        {post.publishedAt}
                      </div>
                    </div>
                  </div>
                  
                  <ChevronRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-mono gap-2">
              ACCESS_ALL_LOGS <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
  )
}
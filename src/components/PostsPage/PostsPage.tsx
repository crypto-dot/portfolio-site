"use client"
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../shadcn-ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../shadcn-ui/avatar';
import { Badge } from '../shadcn-ui/badge';
import { Button } from '../shadcn-ui/button';
import { Input } from '../shadcn-ui/input';
import { ChevronRight, Calendar, Terminal, Search, Clock, User } from 'lucide-react';
import { blogPosts } from '../../lib/testing/mocks/blog/blog';
import { motion } from 'motion/react';
import { BlogPost } from '../../lib/types/blog';

export const PostsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Get all unique tags
  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

  // Filter posts based on search term and selected tag
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;
    
    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen bg-slate-900 text-white pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="text-cyan-400 font-mono text-sm mb-2">KNOWLEDGE_BASE.MD</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-mono">TECHNICAL_LOGS</h1>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            A collection of technical insights, development methodologies, and knowledge sharing from my journey as a developer.
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search posts by title, content, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-slate-800 border-slate-700 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20"
              />
            </div>
          </div>

          {/* Tag Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Button
              variant={selectedTag === null ? "default" : "outline"}
              onClick={() => setSelectedTag(null)}
              className={`font-mono text-sm ${
                selectedTag === null 
                  ? "bg-cyan-500 hover:bg-cyan-600 text-white" 
                  : "border-slate-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400"
              }`}
            >
              All Posts
            </Button>
            {allTags.map((tag) => (
              <Button
                key={tag}
                variant={selectedTag === tag ? "default" : "outline"}
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                className={`font-mono text-sm ${
                  selectedTag === tag 
                    ? "bg-cyan-500 hover:bg-cyan-600 text-white" 
                    : "border-slate-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400"
                }`}
              >
                #{tag}
              </Button>
            ))}
          </div>

          {/* Results Count */}
          <div className="text-center text-gray-400 font-mono text-sm">
            {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'} found
          </div>
        </motion.div>

        {/* Posts Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full bg-slate-800 border-slate-700 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs font-mono text-cyan-400">LOG_ENTRY</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-400 font-mono">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <CardTitle className="group-hover:text-cyan-400 transition-colors font-mono text-xl mb-2">
                    {post.title}
                  </CardTitle>
                  
                  <CardDescription className="text-gray-300 line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="outline" 
                        className="border-purple-500/50 text-purple-300 bg-purple-500/10 font-mono text-xs"
                      >
                        #{tag}
                      </Badge>
                    ))}
                    {post.tags.length > 3 && (
                      <Badge variant="outline" className="border-gray-500/50 text-gray-400 bg-gray-500/10 font-mono text-xs">
                        +{post.tags.length - 3} more
                      </Badge>
                    )}
                  </div>
                </CardContent>
                
                <CardFooter className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-8 h-8 border border-cyan-500/50">
                      <AvatarImage src={post.authorAvatar} alt={post.author} />
                      <AvatarFallback className="bg-cyan-500/20 text-cyan-400 text-xs">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-mono text-sm text-cyan-400">{post.author}</div>
                      <div className="flex items-center gap-1 text-xs text-gray-400 font-mono">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </div>
                    </div>
                  </div>
                  
                  <ChevronRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Terminal className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-mono text-gray-400 mb-2">NO_LOGS_FOUND</h3>
            <p className="text-gray-500 font-mono">
              Try adjusting your search terms or filters
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

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
import { FilterButton } from '../FilterButton/FilterButton';

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
    <div className="min-h-screen text-white pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 ">TECHNICAL LOGS</h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
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
            <FilterButton
              tag="All Posts"
              selectedTag={selectedTag}
              setSelectedTag={() => setSelectedTag(null)}
            />

            {allTags.map((tag) => (
            <FilterButton
               key={tag}
                tag={tag}
                selectedTag={selectedTag}
                setSelectedTag={() => setSelectedTag(selectedTag === tag ? null : tag)}
              />
            ))}
          </div>

          {/* Results Count */}
          <div className="text-center text-gray-400  text-sm">
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
              <Card className="h-full  transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-primary" />
                      <span className="text-xs  text-primary">LOG_ENTRY</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-400 ">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <CardTitle className="group-hover:text-primary transition-colors  text-xl mb-2">
                    {post.title}
                  </CardTitle>
                  
                  <CardDescription className="text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="outline" 
                        className="bg-primary text-primary-foreground   text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {post.tags.length > 3 && (
                      <Badge variant="outline" className=" text-xs bg-secondary text-secondary-foreground">
                        +{post.tags.length - 3} more
                      </Badge>
                    )}
                  </div>
                </CardContent>
                
                <CardFooter className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-8 h-8 border border-primary">
                      <AvatarImage src={post.authorAvatar} alt={post.author} />
                      <AvatarFallback className="bg-secondary text-primary text-xs">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-sm">{post.author}</div>
                      <div className="flex items-center gap-1 text-xs text-gray-400 ">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </div>
                    </div>
                  </div>
                  
                  <ChevronRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
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
            <h3 className="text-xl  text-gray-400 mb-2">NO_LOGS_FOUND</h3>
            <p className="text-gray-500 ">
              Try adjusting your search terms or filters
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

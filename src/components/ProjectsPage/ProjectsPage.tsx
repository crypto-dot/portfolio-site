"use client"
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../shadcn-ui/card';
import { Badge } from '../shadcn-ui/badge';
import { Button } from '../shadcn-ui/button';
import { Input } from '../shadcn-ui/input';
import { ChevronRight, Search, ExternalLink, Github, Calendar, Clock, User, Filter, Code, Smartphone, Monitor, Server } from 'lucide-react';
import { allProjects } from '../../lib/testing/mocks/project';
import { motion } from 'motion/react';
import { Project } from '../../lib/types/project';
import { FilterButton } from '../FilterButton/FilterButton';

const categoryIcons = {
  'Web Development': <Monitor className="w-4 h-4" />,
  'AI/ML': <Code className="w-4 h-4" />,
  'Mobile': <Smartphone className="w-4 h-4" />,
  'Desktop': <Monitor className="w-4 h-4" />,
  'Full Stack': <Server className="w-4 h-4" />,
  'Frontend': <Monitor className="w-4 h-4" />,
  'Backend': <Server className="w-4 h-4" />
};

const statusColors = {
  'Live': 'bg-[#10391e] text-green-400 border-green-500/50',
  'In Development': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50',
  'Completed': 'bg-blue-500/20 text-blue-400 border-blue-500/50',
  'Archived': 'bg-gray-500/20 text-gray-400 border-gray-500/50'
};

export const ProjectsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);

  // Get all unique categories and statuses
  const allCategories = Array.from(new Set(allProjects.map(project => project.category)));
  const allStatuses = Array.from(new Set(allProjects.map(project => project.status)));

  // Filter projects based on search term, category, status, and featured filter
  const filteredProjects = allProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory ? project.category === selectedCategory : true;
    const matchesStatus = selectedStatus ? project.status === selectedStatus : true;
    const matchesFeatured = showFeaturedOnly ? project.featured : true;
    
    return matchesSearch && matchesCategory && matchesStatus && matchesFeatured;
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4 ">DEVELOPMENT CYCLES</h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            A collection of projects showcasing my expertise in modern web development, AI integration, and full-stack solutions.
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="max-w-2xl mx-auto mb-8 md:mb-16">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search projects by title, description, or technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 text-secondary placeholder-secondary-foreground"
              />
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {/* Featured Toggle */}
            <FilterButton
              tag="Featured Only"
              selectedTag={showFeaturedOnly ? "Featured Only" : null}
              setSelectedTag={() => setShowFeaturedOnly(!showFeaturedOnly)}
            />

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              <FilterButton
                tag="All Categories"
                selectedTag={selectedCategory}
                setSelectedTag={() => setSelectedCategory(null)}
              />
              {allCategories.map((category) => (
                <FilterButton
                  key={category}
                  tag={category}
                  selectedTag={selectedCategory}
                  setSelectedTag={() => setSelectedCategory(selectedCategory === category ? null : category)}
                />
              ))}
            </div>

            {/* Status Filters */}
            <div className="flex flex-wrap gap-2">
              <FilterButton
                tag="All Status"
                selectedTag={selectedStatus}
                setSelectedTag={() => setSelectedStatus(null)}
              />
              {allStatuses.map((status) => (
                <FilterButton
                  key={status}
                  tag={status}
                    selectedTag={selectedStatus}
                  setSelectedTag={() => setSelectedStatus(selectedStatus === status ? null : status)}
                />
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="text-center text-gray-400  text-sm">
            {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'} found
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full  transition-all duration-300 cursor-pointer overflow-hidden">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-primary">
                  <div className="absolute inset-0" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl  text-secondary-foreground">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-secondary-foreground text-secondary  text-xs">
                        FEATURED
                      </Badge>
                    </div>
                  )}
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {categoryIcons[project.category as keyof typeof categoryIcons]}
                      <span className="text-xs  text-primary">{project.category}</span>
                    </div>
                    <Badge 
                      variant="outline" 
                      className={` text-xs ${statusColors[project.status as keyof typeof statusColors]}`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  
                  <CardTitle className="group-hover:text-primary transition-colors  text-xl mb-4">
                    {project.title}
                  </CardTitle>
                  
                  <CardDescription className="text-muted-foreground line-clamp-3 mb-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                          <Badge 
                          key={tech} 
                          variant="outline" 
                          className="bg-primary text-primary-foreground   text-xs"
                        >
                          {tech}
                        </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                        <Badge variant="outline" className="bg-secondary text-secondary-foreground  text-xs">
                          +{project.technologies.length - 4} more
                        </Badge>
                    )}
                  </div>

                  {/* Project Details */}
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span className="">{project.year}</span>
                    </div>
                    {project.duration && (
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span className="">{project.duration}</span>
                      </div>
                    )}
                    {project.client && (
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span className="">{project.client}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
                
                <CardFooter className="flex items-center justify-between mt-auto">
                  <div className="flex gap-2">
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-primary text-primary hover:bg-cyan-500/10  text-xs"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.liveUrl, '_blank');
                        }}
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Live
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-gray-500/50 text-gray-400 hover:bg-gray-500/10  text-xs"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.githubUrl, '_blank');
                        }}
                      >
                        <Github className="w-3 h-3 mr-1" />
                        Code
                      </Button>
                    )}
                  </div>
                  
                  <ChevronRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Code className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl  text-gray-400 mb-2">NO_PROJECTS_FOUND</h3>
            <p className="text-gray-500 ">
              Try adjusting your search terms or filters
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

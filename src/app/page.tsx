import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/shadcn-ui/card';
import { Button } from '@/components/shadcn-ui/button';
import { Badge } from '@/components/shadcn-ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/shadcn-ui/avatar';
import { 
  Github, 
  ExternalLink, 
  Calendar, 
  Terminal,
  BugOff,
  Shield,
  Cpu,
  ChevronRight,
  Play,
  Star,
  Users
} from 'lucide-react';
import "@/components/Projects/Index";
import Projects from '@/components/Projects/Index';
const DesignVariation2 = () => {
  // Sample data - in real app, this would come from Strapi

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development: Beyond the Browser",
      excerpt: "Exploring emerging technologies that will reshape how we build and interact with web applications.",
      publishedAt: "2024-01-15",
      author: "Alex Cipher",
      authorAvatar: "/api/placeholder/40/40",
      tags: ["WebAssembly", "Edge Computing", "Future Tech"],
      readTime: "8 min"
    },
    {
      id: 2,
      title: "Building Secure Smart Contracts: A Deep Dive",
      excerpt: "Essential security patterns and best practices for developing robust smart contracts.",
      publishedAt: "2024-01-10",
      author: "Alex Cipher",
      authorAvatar: "/api/placeholder/40/40",
      tags: ["Blockchain", "Security", "Solidity"],
      readTime: "12 min"
    }
  ];

  const skills = [
    { name: "Artificial Intelligence", level: 95, category: "AI/ML" },
    { name: "Blockchain Development", level: 90, category: "Web3" },
    { name: "Full-Stack Development", level: 98, category: "Web Dev" },
    { name: "DevOps & Cloud", level: 85, category: "Infrastructure" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Header */}
      <header className="relative border-b border-cyan-500/20 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                  <Terminal className="w-5 h-5 text-black" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              </div>
              <div>
                <div className="font-mono text-lg font-bold text-cyan-400">./carlosarbizu</div>
                <div className="text-xs text-gray-400">SYSTEM_ONLINE</div>
              </div>
            </div>
            
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="text-sm font-mono hover:text-cyan-400 transition-colors relative group">
                <span className="text-cyan-400 mr-1">01.</span>HOME
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" />
              </a>
              <a href="#projects" className="text-sm font-mono hover:text-cyan-400 transition-colors relative group">
                <span className="text-cyan-400 mr-1">02.</span>PROJECTS
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" />
              </a>
              <a href="#blog" className="text-sm font-mono hover:text-cyan-400 transition-colors relative group">
                <span className="text-cyan-400 mr-1">03.</span>BLOG
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" />
              </a>
              <a href="#contact" className="text-sm font-mono hover:text-cyan-400 transition-colors relative group">
                <span className="text-cyan-400 mr-1">04.</span>CONTACT
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" />
              </a>
            </div>
            
            <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 font-mono">
              INITIALIZE_CONTACT
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-2">
                  <div className="text-cyan-400 font-mono text-sm">SYSTEM_STATUS: ONLINE</div>
                  <div className="text-gray-400 font-mono text-sm">$ whoami</div>
                </div>
                
                <div>
                  <h1 className="text-5xl lg:text-7xl font-bold mb-4 font-mono">
                    <span className="text-cyan-400">Carlos</span>
                    <br />
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
                      ARBIZU
                    </span>
                  </h1>
                  <div className="text-xl text-gray-300 font-mono">
                    <span className="text-green-400">&rarr;</span> FullStack_Developer.exe
                    <br />
                    <span className="text-green-400">&rarr;</span> Blockchain_Enthusiast.dll
                    <br />
                    <span className="text-green-400">&rarr;</span> AI_Enthusiast.py
                  </div>
                </div>
                
                <p className="text-lg text-gray-300 max-w-lg">
                  Architecting the future of web technology through cutting-edge development, 
                  blockchain innovation, and artificial intelligence integration.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 font-mono gap-2">
                    <Play className="w-4 h-4" />
                    RUN_PROJECTS.exe
                  </Button>
                  <Button variant="outline" size="lg" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-mono gap-2">
                    <Github className="w-4 h-4" />
                    ACCESS_GITHUB
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="w-80 h-80 mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-full blur-2xl animate-pulse" />
                  <Avatar className="w-80 h-80 border-4 border-cyan-500/50 shadow-2xl shadow-cyan-500/25">
                    <AvatarImage src="/api/placeholder/320/320" alt="Alex Cipher" />
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
              </div>
            </div>

            {/* Skills Grid */}
            <div className="mt-20 grid md:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="bg-slate-800/50 border border-cyan-500/20 rounded-lg p-6 group hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-mono text-sm text-cyan-400">{skill.category}</span>
                    <span className="font-mono text-xs text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="font-semibold mb-3">{skill.name}</div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 h-2 rounded-full transition-all duration-1000 group-hover:shadow-lg group-hover:shadow-cyan-500/50" 
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <Projects/>

      {/* Blog Section */}
      <section id="blog" className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-cyan-400 font-mono text-sm mb-2">KNOWLEDGE_BASE.MD</div>
            <h2 className="text-4xl font-bold mb-4 font-mono">RECENT_LOGS</h2>
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
                
                <CardFooter className="flex items-center justify-between">
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

      {/* Footer */}
      <footer className="relative bg-slate-900 border-t border-cyan-500/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                    <Terminal className="w-5 h-5 text-black" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                </div>
                <div>
                  <div className="font-mono text-lg font-bold text-cyan-400">./CarlosArbizu</div>
                  <div className="text-xs text-gray-400">ALWAYS_ONLINE</div>
                </div>
              </div>
              <p className="text-gray-300 font-mono text-sm">
                Building the future, one commit at a time.
              </p>
            </div>
            
            <div>
              <h3 className="font-mono font-semibold mb-4 text-cyan-400">NAVIGATION.MAP</h3>
              <div className="space-y-2">
                <a href="#projects" className="block text-gray-300 hover:text-cyan-400 transition-colors font-mono text-sm">
                  <span className="text-cyan-400 mr-2">&rarr;</span>PROJECTS
                </a>
                <a href="#blog" className="block text-gray-300 hover:text-cyan-400 transition-colors font-mono text-sm">
                  <span className="text-cyan-400 mr-2">&rarr;</span>BLOG
                </a>
                <a href="#contact" className="block text-gray-300 hover:text-cyan-400 transition-colors font-mono text-sm">
                  <span className="text-cyan-400 mr-2">&rarr;</span>CONTACT
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-mono font-semibold mb-4 text-cyan-400">EXTERNAL.LINKS</h3>
              <div className="flex space-x-4">
                <Button size="sm" variant="ghost" className="text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 p-2">
                  <Github className="w-5 h-5" />
                </Button>
                <Button size="sm" variant="ghost" className="text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 p-2">
                  <ExternalLink className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-cyan-500/20 mt-8 pt-8 text-center">
            <p className="text-gray-400 font-mono text-sm">
              <span className="text-cyan-400">©</span> 2024 ALEXCIPHER.DEV | ALL_RIGHTS_RESERVED
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DesignVariation2;
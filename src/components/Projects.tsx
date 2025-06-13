import React from 'react';
import { ExternalLink, Github, Code, Heart, Calendar, CheckSquare } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Valentine Card Generator',
      description: 'A romantic web application that allows users to create personalized Valentine\'s Day cards with custom messages, beautiful animations, and downloadable designs.',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Canvas API'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: 'Birthday Wish Card Creator',
      description: 'Interactive birthday card maker with customizable templates, animations, and the ability to add personal photos and messages for special celebrations.',
      image: 'https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React.js', 'CSS3', 'JavaScript', 'Local Storage'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      icon: <Calendar className="w-6 h-6" />
    },
    {
      title: 'Birthday Wish Website',
      description: 'A comprehensive birthday celebration platform where users can create profiles, send wishes, share memories, and organize virtual birthday parties.',
      image: 'https://images.pexels.com/photos/1857157/pexels-photo-1857157.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React.js', 'Node.js', 'CSS3', 'JavaScript'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      icon: <Calendar className="w-6 h-6" />
    },
    {
      title: 'Task Scheduler App',
      description: 'A productivity application for managing daily tasks, setting priorities, tracking progress, and organizing schedules with an intuitive user interface.',
      image: 'https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React.js', 'JavaScript', 'Local Storage', 'CSS3'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      icon: <CheckSquare className="w-6 h-6" />
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              My Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Here are some projects I've built while learning web development. Each project represents a step in my journey 
              of mastering different technologies and solving real-world problems.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="space-y-12 mb-16">
            {featuredProjects.map((project, index) => (
              <div
                key={project.title}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative group overflow-hidden rounded-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                      <div className="flex gap-3">
                        <a
                          href={project.liveUrl}
                          className="p-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
                        >
                          <ExternalLink size={20} />
                        </a>
                        <a
                          href={project.githubUrl}
                          className="p-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                        >
                          <Github size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-lg">
                        {project.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    </div>
                    <p className="text-gray-400 leading-relaxed">{project.description}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm border border-emerald-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-lg hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-2 px-6 py-3 border-2 border-emerald-500 text-emerald-400 rounded-lg hover:bg-emerald-500 hover:text-white transition-all duration-300"
                    >
                      <Github size={18} />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects Grid */}
          {otherProjects.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 text-center">More Projects</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {otherProjects.map((project) => (
                  <div
                    key={project.title}
                    className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden group"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-lg">
                          {project.icon}
                        </div>
                        <h4 className="text-xl font-semibold text-white">{project.title}</h4>
                      </div>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded text-xs border border-emerald-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 text-gray-400 text-xs">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                      
                      <div className="flex gap-3">
                        <a
                          href={project.liveUrl}
                          className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors text-sm"
                        >
                          <ExternalLink size={16} />
                          Demo
                        </a>
                        <a
                          href={project.githubUrl}
                          className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors text-sm"
                        >
                          <Github size={16} />
                          Code
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Future Projects Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 backdrop-blur-sm p-8 rounded-2xl border border-emerald-500/30">
              <Code className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">More Projects Coming Soon!</h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                I'm constantly learning and building new projects. Stay tuned for more exciting web applications 
                as I continue my journey in web development and explore new technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
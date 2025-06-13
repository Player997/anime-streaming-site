import React from 'react';
import { Code2, Database, Globe, Smartphone, Server, Palette } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Globe className="w-8 h-8" />,
      skills: [
        { name: 'HTML/CSS', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'React.js', level: 88 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 92 },
      ],
      color: 'emerald'
    },
    {
      title: 'Backend Development',
      icon: <Server className="w-8 h-8" />,
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 82 },
        { name: 'Java', level: 78 },
      ],
      color: 'cyan'
    },
    {
      title: 'Database & Cloud',
      icon: <Database className="w-8 h-8" />,
      skills: [
        { name: 'SQL', level: 87 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'AWS', level: 80 },
        { name: 'Docker', level: 83 },
        { name: 'Kubernetes', level: 75 },
      ],
      color: 'emerald'
    },
    {
      title: 'Design & Tools',
      icon: <Palette className="w-8 h-8" />,
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'Framer', level: 80 },
      ],
      color: 'cyan'
    }
  ];

  const technologies = [
    'HTML', 'CSS', 'JavaScript', 'Python', 'Java', 'React.js', 'Node.js',
    'Next.js', 'Tailwind CSS', 'SQL', 'PostgreSQL', 'AWS', 'Docker',
    'Kubernetes', 'Framer', 'Figma'
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks that I use to build amazing web applications.
            </p>
          </div>

          {/* Skill Categories */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className={`bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-${category.color}-500/20 hover:border-${category.color}-500/40 transition-all duration-300 hover:transform hover:scale-105`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-xl bg-${category.color}-500/20 text-${category.color}-400`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className={`text-${category.color}-400 font-semibold`}>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className={`bg-gradient-to-r from-${category.color}-500 to-${category.color}-400 h-2 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Technology Tags */}
          <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-emerald-500/20">
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="w-6 h-6 text-emerald-400" />
              <h3 className="text-xl font-semibold text-white">Technologies I Work With</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-white rounded-full border border-emerald-500/30 hover:border-emerald-500/60 transition-all duration-300 hover:scale-105 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
import React from 'react';
import { GraduationCap, Award, BookOpen, Code, Trophy, Target } from 'lucide-react';

const Experience: React.FC = () => {
  const education = [
    {
      degree: 'Bachelor of Computer Science',
      institution: 'University of California',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Currently pursuing my degree with focus on software engineering, web development, and computer systems.',
      courses: [
        'Data Structures & Algorithms',
        'Web Development',
        'Database Systems',
        'Software Engineering',
        'Computer Networks'
      ],
      gpa: '3.8/4.0'
    }
  ];

  const certifications = [
    {
      name: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      year: '2023',
      description: 'HTML, CSS, Flexbox, Grid'
    },
    {
      name: 'JavaScript Algorithms',
      issuer: 'freeCodeCamp',
      year: '2023',
      description: 'ES6, Data Structures, Algorithms'
    },
    {
      name: 'React Development',
      issuer: 'Codecademy',
      year: '2024',
      description: 'Components, Hooks, State Management'
    }
  ];

  const achievements = [
    {
      title: 'Dean\'s List',
      description: 'Achieved Dean\'s List recognition for academic excellence',
      year: '2023'
    },
    {
      title: 'Hackathon Participant',
      description: 'Participated in university coding competitions',
      year: '2023'
    },
    {
      title: 'Open Source Contributor',
      description: 'Contributing to open source projects on GitHub',
      year: '2024'
    }
  ];

  const learningGoals = [
    'Master advanced React patterns and Next.js',
    'Learn backend development with Express.js',
    'Explore cloud technologies (AWS, Docker)',
    'Build full-stack applications',
    'Contribute to open source projects'
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Education & Learning Journey
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              My academic background, certifications, and continuous learning path in computer science and web development.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Education */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <GraduationCap className="w-6 h-6 text-emerald-400" />
                  Education
                </h3>
                
                {education.map((edu, index) => (
                  <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                      <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                      <div className="flex items-center gap-2 text-emerald-400 text-sm">
                        <BookOpen className="w-4 h-4" />
                        {edu.period}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 mb-4 text-gray-400">
                      <span className="font-medium">{edu.institution}</span>
                      <span>•</span>
                      <span>{edu.location}</span>
                      <span>•</span>
                      <span className="text-emerald-400 font-semibold">GPA: {edu.gpa}</span>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">{edu.description}</p>
                    
                    <div>
                      <h5 className="text-emerald-400 font-semibold mb-2">Relevant Coursework:</h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course) => (
                          <span
                            key={course}
                            className="px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded text-xs border border-emerald-500/30"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Award className="w-6 h-6 text-emerald-400" />
                  Certifications & Courses
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300"
                    >
                      <h4 className="font-semibold text-white mb-1">{cert.name}</h4>
                      <p className="text-gray-400 text-sm mb-2">{cert.issuer} • {cert.year}</p>
                      <p className="text-emerald-400 text-xs">{cert.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Achievements */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Trophy className="w-6 h-6 text-emerald-400" />
                  Achievements
                </h3>
                
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300"
                    >
                      <h4 className="font-semibold text-white mb-1">{achievement.title}</h4>
                      <p className="text-gray-400 text-sm mb-2">{achievement.description}</p>
                      <span className="text-emerald-400 text-xs font-medium">{achievement.year}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Learning Goals */}
              <div className="bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 backdrop-blur-sm p-6 rounded-2xl border border-emerald-500/30">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <Target className="w-5 h-5 text-emerald-400" />
                  Learning Goals
                </h3>
                <div className="space-y-3">
                  {learningGoals.map((goal, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm">{goal}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-emerald-500/20">
                <h3 className="text-xl font-bold text-white mb-6">Learning Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-400 mb-1">4+</div>
                    <div className="text-gray-400 text-sm">Projects Built</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400 mb-1">2+</div>
                    <div className="text-gray-400 text-sm">Years Learning</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-400 mb-1">16+</div>
                    <div className="text-gray-400 text-sm">Technologies</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400 mb-1">3.8</div>
                    <div className="text-gray-400 text-sm">GPA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
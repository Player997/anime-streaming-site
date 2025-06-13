import React from 'react';
import { User, MapPin, Calendar, Heart, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <User className="w-6 h-6 text-emerald-400" />
                  <h3 className="text-xl font-semibold text-emerald-400">Who I Am</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  I'm a passionate computer science student with a love for creating digital experiences that matter. 
                  Currently pursuing my degree while building practical projects and learning cutting-edge web technologies 
                  to transform ideas into reality through clean, efficient code.
                </p>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-6 h-6 text-emerald-400" />
                  <h3 className="text-xl font-semibold text-emerald-400">What I Love</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  I'm fascinated by the intersection of technology and creativity. When I'm not studying, 
                  you'll find me building personal projects, exploring new frameworks, contributing to open source, 
                  or sharing knowledge with fellow students and the developer community.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800/30 backdrop-blur-sm p-4 rounded-xl border border-emerald-500/20 text-center">
                  <MapPin className="w-5 h-5 text-emerald-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-white font-semibold">San Francisco, CA</p>
                </div>
                <div className="bg-gray-800/30 backdrop-blur-sm p-4 rounded-xl border border-emerald-500/20 text-center">
                  <GraduationCap className="w-5 h-5 text-emerald-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-400">Status</p>
                  <p className="text-white font-semibold">CS Student</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/30">
                <div className="aspect-square bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center mb-6">
                  <User size={120} className="text-gray-500" />
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-2xl"></div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">John Doe</h3>
                  <p className="text-emerald-400 font-semibold mb-4">Computer Science Student & Web Developer</p>
                  <p className="text-gray-300 text-sm">
                    "The best way to learn programming is by building real projects and solving real problems."
                  </p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-emerald-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-cyan-500/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
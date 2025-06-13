import React from 'react';
import { Play, Heart, Github, Twitter, Disc as Discord, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Browse': ['Popular', 'Recent', 'Movies', 'Genres', 'Random'],
    'Community': ['Discord', 'Reddit', 'Twitter', 'Facebook', 'Blog'],
    'Support': ['Help Center', 'Contact Us', 'Bug Report', 'Feature Request', 'API'],
    'Legal': ['Terms of Service', 'Privacy Policy', 'DMCA', 'Copyright', 'Disclaimer']
  };

  return (
    <footer className="bg-[#0f0f23] border-t border-[#1a1a2e]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-r from-[#ff6b6b] to-[#4ecdc4]">
                <Play className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#ff6b6b] to-[#4ecdc4] bg-clip-text text-transparent">
                AnimeMAX
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your ultimate destination for streaming anime. Watch thousands of episodes 
              and movies with high quality and no ads. Join millions of anime fans worldwide.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 bg-[#1a1a2e] rounded-lg text-gray-400 hover:text-white hover:bg-[#ff6b6b] transition-colors">
                <Discord size={20} />
              </a>
              <a href="#" className="p-2 bg-[#1a1a2e] rounded-lg text-gray-400 hover:text-white hover:bg-blue-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-[#1a1a2e] rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="p-2 bg-[#1a1a2e] rounded-lg text-gray-400 hover:text-white hover:bg-red-600 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[#1a1a2e] mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gray-400">
              <span>&copy; {currentYear} AnimeMAX. All rights reserved.</span>
            </div>
            
            <div className="flex items-center gap-2 text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>for anime fans</span>
            </div>
          </div>
          
          <div className="mt-4 text-center text-gray-500 text-sm">
            <p>
              This is a demo website. All anime content is for demonstration purposes only. 
              Please support official anime distributors and creators.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, TrendingUp, Clock, Film, Grid3X3, Star, Calendar, Filter, ChevronRight } from 'lucide-react';
import { genres } from '../data/animeData';

const Sidebar: React.FC = () => {
  const location = useLocation();

  const mainLinks = [
    { icon: <Home size={18} />, label: 'Home', path: '/' },
    { icon: <TrendingUp size={18} />, label: 'Popular', path: '/popular' },
    { icon: <Clock size={18} />, label: 'Recent', path: '/recent' },
    { icon: <Film size={18} />, label: 'Movies', path: '/movies' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const isGenreActive = (genre: string) => {
    return location.pathname === `/genre/${genre.toLowerCase()}`;
  };

  return (
    <aside className="w-64 bg-[#1a1a2e] min-h-screen border-r border-[#2a2a3e] sticky top-20">
      <div className="p-4 space-y-6">
        {/* Main Navigation */}
        <div>
          <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <Grid3X3 size={14} />
            Menu
          </h3>
          <nav className="space-y-1">
            {mainLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-300 group ${
                  isActive(link.path)
                    ? 'bg-gradient-to-r from-[#ff6b6b] to-[#4ecdc4] text-white shadow-lg'
                    : 'text-gray-300 hover:bg-[#2a2a3e] hover:text-white'
                }`}
              >
                <div className={`${isActive(link.path) ? 'text-white' : 'text-gray-400 group-hover:text-[#ff6b6b]'} transition-colors`}>
                  {link.icon}
                </div>
                <span className="font-medium">{link.label}</span>
                {isActive(link.path) && (
                  <ChevronRight size={16} className="ml-auto" />
                )}
              </Link>
            ))}
          </nav>
        </div>

        {/* Genres */}
        <div>
          <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <Filter size={14} />
            Genres
          </h3>
          <nav className="space-y-1 max-h-80 overflow-y-auto custom-scrollbar">
            {genres.map((genre) => (
              <Link
                key={genre}
                to={`/genre/${genre.toLowerCase()}`}
                className={`block px-3 py-2 rounded-lg transition-all duration-300 text-sm group ${
                  isGenreActive(genre)
                    ? 'bg-gradient-to-r from-[#ff6b6b]/20 to-[#4ecdc4]/20 text-[#ff6b6b] border border-[#ff6b6b]/30'
                    : 'text-gray-300 hover:bg-[#2a2a3e] hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{genre}</span>
                  {isGenreActive(genre) && (
                    <div className="w-2 h-2 bg-[#ff6b6b] rounded-full"></div>
                  )}
                </div>
              </Link>
            ))}
          </nav>
        </div>

        {/* Quick Stats */}
        <div className="bg-gradient-to-br from-[#2a2a3e] to-[#1a1a2e] rounded-xl p-4 border border-[#3a3a4e]">
          <h3 className="text-white font-bold mb-4 flex items-center gap-2">
            <Star size={16} className="text-[#ffd700]" />
            Quick Stats
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Total Anime</span>
              <span className="text-[#4ecdc4] font-bold">20+</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Episodes</span>
              <span className="text-[#4ecdc4] font-bold">2000+</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Movies</span>
              <span className="text-[#4ecdc4] font-bold">4+</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Users</span>
              <span className="text-[#ff6b6b] font-bold">10M+</span>
            </div>
          </div>
        </div>

        {/* Featured Banner */}
        <div className="bg-gradient-to-br from-[#ff6b6b]/20 to-[#4ecdc4]/20 rounded-xl p-4 border border-[#ff6b6b]/30">
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-[#ff6b6b] to-[#4ecdc4] rounded-full flex items-center justify-center mx-auto mb-3">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-white font-bold text-sm mb-2">Premium Features</h4>
            <p className="text-gray-400 text-xs mb-3">Unlock HD streaming, no ads, and exclusive content</p>
            <button className="w-full py-2 bg-gradient-to-r from-[#ff6b6b] to-[#4ecdc4] text-white text-xs font-bold rounded-lg hover:shadow-lg transition-all duration-300">
              Upgrade Now
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #2a2a3e;
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #ff6b6b;
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #4ecdc4;
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;
import React, { useState } from 'react';
import { Search, Menu, X, Play, User, Bell, Bookmark, Home, TrendingUp, Clock, Film } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/', icon: <Home size={18} /> },
    { label: 'Popular', path: '/popular', icon: <TrendingUp size={18} /> },
    { label: 'Recent', path: '/recent', icon: <Clock size={18} /> },
    { label: 'Movies', path: '/movies', icon: <Film size={18} /> },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f23]/95 backdrop-blur-md border-b border-[#1a1a2e]">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-[#ff6b6b] to-[#4ecdc4] rounded-lg flex items-center justify-center">
                <Play className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#ff6b6b] rounded-full animate-pulse"></div>
            </div>
            <div className="hidden sm:block">
              <span className="text-2xl font-bold bg-gradient-to-r from-[#ff6b6b] to-[#4ecdc4] bg-clip-text text-transparent">
                AnimeMAX
              </span>
              <div className="text-xs text-gray-400 -mt-1">Watch Anime Online</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 relative group ${
                  isActive(item.path) 
                    ? 'bg-[#ff6b6b]/20 text-[#ff6b6b]' 
                    : 'text-gray-300 hover:text-white hover:bg-[#1a1a2e]'
                }`}
              >
                {item.icon}
                {item.label}
                {isActive(item.path) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#ff6b6b] rounded-full"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="relative w-full">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search anime, movies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-[#1a1a2e] border border-[#2a2a3e] rounded-xl focus:border-[#ff6b6b] focus:ring-2 focus:ring-[#ff6b6b]/20 text-white placeholder-gray-400 transition-all duration-300"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 px-3 py-1.5 bg-gradient-to-r from-[#ff6b6b] to-[#4ecdc4] text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300"
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-2">
            <button className="p-2.5 text-gray-400 hover:text-white hover:bg-[#1a1a2e] rounded-lg transition-all duration-300 relative">
              <Bell size={20} />
              <div className="absolute top-1 right-1 w-2 h-2 bg-[#ff6b6b] rounded-full"></div>
            </button>
            <button className="p-2.5 text-gray-400 hover:text-white hover:bg-[#1a1a2e] rounded-lg transition-all duration-300">
              <Bookmark size={20} />
            </button>
            <button className="p-2.5 rounded-lg bg-gradient-to-r from-[#ff6b6b] to-[#4ecdc4] text-white hover:shadow-lg transition-all duration-300">
              <User size={20} />
            </button>
            
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2.5 text-gray-400 hover:text-white hover:bg-[#1a1a2e] rounded-lg transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-4">
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search anime, movies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-[#1a1a2e] border border-[#2a2a3e] rounded-xl focus:border-[#ff6b6b] focus:ring-2 focus:ring-[#ff6b6b]/20 text-white placeholder-gray-400 transition-all duration-300"
            />
          </form>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 py-4 border-t border-[#1a1a2e]">
            <div className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`flex items-center gap-3 py-3 px-4 rounded-lg transition-all duration-300 ${
                    isActive(item.path)
                      ? 'bg-[#ff6b6b]/20 text-[#ff6b6b]'
                      : 'text-gray-300 hover:text-white hover:bg-[#1a1a2e]'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
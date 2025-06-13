import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Clock, Film, Star, ChevronRight, Zap } from 'lucide-react';
import Hero from '../components/Hero';
import AnimeCard from '../components/AnimeCard';
import Sidebar from '../components/Sidebar';
import { popularAnime, recentAnime, movieAnime } from '../data/animeData';

const Home: React.FC = () => {
  return (
    <div className="flex bg-[#0f0f23]">
      <Sidebar />
      
      <div className="flex-1">
        <Hero />
        
        <div className="py-12 bg-[#0f0f23]">
          <div className="container mx-auto px-6">
            {/* Trending Section */}
            <section className="mb-16">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-r from-[#ff6b6b] to-[#4ecdc4] rounded-lg">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Trending Now</h2>
                    <p className="text-gray-400 text-sm">Most watched this week</p>
                  </div>
                </div>
                <Link 
                  to="/popular"
                  className="flex items-center gap-2 text-[#ff6b6b] hover:text-[#4ecdc4] font-semibold transition-colors group"
                >
                  View All
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                {popularAnime.slice(0, 10).map((anime, index) => (
                  <AnimeCard 
                    key={anime.id} 
                    anime={anime} 
                    showRank={index < 3}
                    rank={index + 1}
                  />
                ))}
              </div>
            </section>

            {/* Recently Added Section */}
            <section className="mb-16">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-r from-[#4ecdc4] to-[#45b7aa] rounded-lg">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Recently Added</h2>
                    <p className="text-gray-400 text-sm">Latest episodes and series</p>
                  </div>
                </div>
                <Link 
                  to="/recent"
                  className="flex items-center gap-2 text-[#ff6b6b] hover:text-[#4ecdc4] font-semibold transition-colors group"
                >
                  View All
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                {recentAnime.map((anime) => (
                  <AnimeCard key={anime.id} anime={anime} />
                ))}
              </div>
            </section>

            {/* Top Rated Movies */}
            <section className="mb-16">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-r from-[#ffd700] to-[#ff8c00] rounded-lg">
                    <Film className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Top Rated Movies</h2>
                    <p className="text-gray-400 text-sm">Highest rated anime films</p>
                  </div>
                </div>
                <Link 
                  to="/movies"
                  className="flex items-center gap-2 text-[#ff6b6b] hover:text-[#4ecdc4] font-semibold transition-colors group"
                >
                  View All
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {movieAnime.map((anime) => (
                  <AnimeCard key={anime.id} anime={anime} size="large" />
                ))}
              </div>
            </section>

            {/* Continue Watching Section */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-[#1a1a2e] to-[#2a2a3e] rounded-2xl p-8 border border-[#3a3a4e]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-to-r from-[#ff6b6b] to-[#4ecdc4] rounded-lg">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Continue Watching</h2>
                    <p className="text-gray-400 text-sm">Pick up where you left off</p>
                  </div>
                </div>
                
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-[#2a2a3e] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-gray-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-400 mb-2">No recent activity</h3>
                  <p className="text-gray-500 mb-6">Start watching anime to see your progress here</p>
                  <Link
                    to="/popular"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#ff6b6b] to-[#4ecdc4] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    Browse Anime
                    <ChevronRight size={18} />
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
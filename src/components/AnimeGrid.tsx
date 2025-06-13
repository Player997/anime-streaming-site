import React from 'react';
import { Star, Play, Clock, Calendar } from 'lucide-react';
import { popularAnime, recentAnime } from '../data/animeData';
import { Anime } from '../types/anime';

interface AnimeGridProps {
  onAnimeSelect: (anime: Anime) => void;
}

const AnimeCard: React.FC<{ anime: Anime; onSelect: (anime: Anime) => void }> = ({ anime, onSelect }) => {
  return (
    <div className="group relative bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
      <div className="relative overflow-hidden">
        <img
          src={anime.image}
          alt={anime.title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => onSelect(anime)}
            className="p-4 bg-purple-600 rounded-full hover:bg-purple-700 transform hover:scale-110 transition-all duration-300 shadow-lg"
          >
            <Play className="w-8 h-8 text-white" />
          </button>
        </div>

        {/* Status Badge */}
        <div className="absolute top-3 left-3">
          <span className={`px-2 py-1 rounded text-xs font-semibold ${
            anime.status === 'Ongoing' 
              ? 'bg-green-600 text-white' 
              : 'bg-blue-600 text-white'
          }`}>
            {anime.status}
          </span>
        </div>

        {/* Rating */}
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/60 px-2 py-1 rounded">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-white text-sm font-semibold">{anime.rating}</span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-2 line-clamp-1 group-hover:text-purple-400 transition-colors">
          {anime.title}
        </h3>
        
        <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{anime.year}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{anime.duration}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1 mb-3">
          {anime.genres.slice(0, 2).map((genre) => (
            <span
              key={genre}
              className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
            >
              {genre}
            </span>
          ))}
          {anime.genres.length > 2 && (
            <span className="px-2 py-1 text-gray-400 text-xs">
              +{anime.genres.length - 2}
            </span>
          )}
        </div>

        <p className="text-gray-400 text-sm line-clamp-2">
          {anime.description}
        </p>
      </div>
    </div>
  );
};

const AnimeGrid: React.FC<AnimeGridProps> = ({ onAnimeSelect }) => {
  return (
    <div className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Popular Anime Section */}
        <section id="popular" className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">Popular Anime</h2>
            <button className="text-purple-400 hover:text-purple-300 font-semibold">
              View All →
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {popularAnime.map((anime) => (
              <AnimeCard key={anime.id} anime={anime} onSelect={onAnimeSelect} />
            ))}
          </div>
        </section>

        {/* Recent Anime Section */}
        <section id="recent" className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">Recently Added</h2>
            <button className="text-purple-400 hover:text-purple-300 font-semibold">
              View All →
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {recentAnime.map((anime) => (
              <AnimeCard key={anime.id} anime={anime} onSelect={onAnimeSelect} />
            ))}
          </div>
        </section>

        {/* Genres Section */}
        <section id="genres" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Browse by Genre</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Romance',
              'Sci-Fi', 'Thriller', 'Horror', 'Slice of Life', 'Sports', 'Music'
            ].map((genre) => (
              <button
                key={genre}
                className="p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-gray-700 hover:border-purple-500 hover:from-purple-900/20 hover:to-gray-800 transition-all duration-300 text-center group"
              >
                <span className="text-white font-semibold group-hover:text-purple-400 transition-colors">
                  {genre}
                </span>
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AnimeGrid;
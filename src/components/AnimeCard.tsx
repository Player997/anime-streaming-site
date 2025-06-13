import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Play, Clock, Calendar, Eye, Plus } from 'lucide-react';
import { Anime } from '../types/anime';

interface AnimeCardProps {
  anime: Anime;
  size?: 'small' | 'medium' | 'large';
  showRank?: boolean;
  rank?: number;
}

const AnimeCard: React.FC<AnimeCardProps> = ({ anime, size = 'medium', showRank = false, rank }) => {
  const sizeClasses = {
    small: 'h-48',
    medium: 'h-64',
    large: 'h-80'
  };

  return (
    <div className="group relative bg-[#1a1a2e] rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer border border-[#2a2a3e] hover:border-[#ff6b6b]/50">
      <Link to={`/anime/${anime.id}`}>
        <div className="relative overflow-hidden">
          {/* Rank Badge */}
          {showRank && rank && (
            <div className="absolute top-3 left-3 z-20">
              <div className="w-8 h-8 bg-gradient-to-br from-[#ffd700] to-[#ff8c00] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">#{rank}</span>
              </div>
            </div>
          )}

          <img
            src={anime.image}
            alt={anime.title}
            className={`w-full ${sizeClasses[size]} object-cover group-hover:scale-110 transition-transform duration-500`}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://via.placeholder.com/300x400/1a1a2e/4ecdc4?text=No+Image';
            }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="p-4 bg-gradient-to-r from-[#ff6b6b] to-[#4ecdc4] rounded-full hover:shadow-2xl transform hover:scale-110 transition-all duration-300">
              <Play className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Status Badge */}
          <div className="absolute top-3 right-3">
            <span className={`px-2 py-1 rounded-lg text-xs font-bold backdrop-blur-sm ${
              anime.status === 'Ongoing' 
                ? 'bg-[#4ecdc4]/90 text-white' 
                : 'bg-[#ff6b6b]/90 text-white'
            }`}>
              {anime.status}
            </span>
          </div>

          {/* Rating */}
          <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-lg">
            <Star className="w-4 h-4 text-[#ffd700] fill-current" />
            <span className="text-white text-sm font-bold">{anime.rating}</span>
          </div>

          {/* Episode Count */}
          {anime.episodes > 1 && (
            <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-lg">
              <span className="text-white text-xs font-bold">{anime.episodes} EP</span>
            </div>
          )}

          {/* Quick Actions */}
          <div className="absolute top-3 left-1/2 transform -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="p-2 bg-black/60 backdrop-blur-sm rounded-lg text-white hover:bg-[#ff6b6b] transition-colors">
              <Plus className="w-4 h-4" />
            </button>
            <button className="p-2 bg-black/60 backdrop-blur-sm rounded-lg text-white hover:bg-[#4ecdc4] transition-colors">
              <Eye className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="p-4">
          <h3 className="text-lg font-bold text-white mb-2 line-clamp-1 group-hover:text-[#ff6b6b] transition-colors">
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
                className="px-2 py-1 bg-[#2a2a3e] text-gray-300 rounded-lg text-xs hover:bg-[#ff6b6b] hover:text-white transition-colors"
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

          <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed">
            {anime.description}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default AnimeCard;
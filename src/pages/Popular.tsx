import React from 'react';
import { TrendingUp } from 'lucide-react';
import AnimeCard from '../components/AnimeCard';
import Sidebar from '../components/Sidebar';
import { popularAnime } from '../data/animeData';

const Popular: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      
      <div className="flex-1 p-6">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="w-8 h-8 text-purple-400" />
            <h1 className="text-3xl font-bold text-white">Popular Anime</h1>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {popularAnime.map((anime) => (
              <AnimeCard key={anime.id} anime={anime} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
import React from 'react';
import { useParams } from 'react-router-dom';
import { Grid3X3 } from 'lucide-react';
import AnimeCard from '../components/AnimeCard';
import Sidebar from '../components/Sidebar';
import { allAnime } from '../data/animeData';

const Genre: React.FC = () => {
  const { genre } = useParams<{ genre: string }>();
  
  const genreTitle = genre?.charAt(0).toUpperCase() + genre?.slice(1) || '';
  const animeByGenre = allAnime.filter(anime => 
    anime.genres.some(g => g.toLowerCase() === genre?.toLowerCase())
  );

  return (
    <div className="flex">
      <Sidebar />
      
      <div className="flex-1 p-6">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Grid3X3 className="w-8 h-8 text-purple-400" />
            <h1 className="text-3xl font-bold text-white">{genreTitle} Anime</h1>
          </div>
          
          {animeByGenre.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {animeByGenre.map((anime) => (
                <AnimeCard key={anime.id} anime={anime} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Grid3X3 className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">
                No anime found
              </h3>
              <p className="text-gray-500">
                No anime available in the {genreTitle} genre yet.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Genre;
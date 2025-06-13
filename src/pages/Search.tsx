import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search as SearchIcon, Filter } from 'lucide-react';
import AnimeCard from '../components/AnimeCard';
import Sidebar from '../components/Sidebar';
import { allAnime, genres } from '../data/animeData';
import { Anime } from '../types/anime';

const Search: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState<Anime[]>([]);
  const [filteredResults, setFilteredResults] = useState<Anime[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<string>('');
  const [selectedStatus, setSelectedStatus] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('title');
  const [showFilters, setShowFilters] = useState(false);

  const query = searchParams.get('q') || '';

  useEffect(() => {
    if (query) {
      const results = allAnime.filter(anime =>
        anime.title.toLowerCase().includes(query.toLowerCase()) ||
        anime.description.toLowerCase().includes(query.toLowerCase()) ||
        anime.genres.some(genre => genre.toLowerCase().includes(query.toLowerCase())) ||
        anime.studio.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [query]);

  useEffect(() => {
    let filtered = [...searchResults];

    // Apply filters
    if (selectedGenre) {
      filtered = filtered.filter(anime => 
        anime.genres.includes(selectedGenre)
      );
    }

    if (selectedYear) {
      filtered = filtered.filter(anime => 
        anime.year.toString() === selectedYear
      );
    }

    if (selectedStatus) {
      filtered = filtered.filter(anime => 
        anime.status === selectedStatus
      );
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'year':
          return b.year - a.year;
        case 'episodes':
          return b.episodes - a.episodes;
        case 'title':
        default:
          return a.title.localeCompare(b.title);
      }
    });

    setFilteredResults(filtered);
  }, [searchResults, selectedGenre, selectedYear, selectedStatus, sortBy]);

  const clearFilters = () => {
    setSelectedGenre('');
    setSelectedYear('');
    setSelectedStatus('');
    setSortBy('title');
  };

  const years = Array.from(new Set(allAnime.map(anime => anime.year))).sort((a, b) => b - a);

  return (
    <div className="flex">
      <Sidebar />
      
      <div className="flex-1 p-6">
        <div className="container mx-auto">
          {/* Search Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <SearchIcon className="w-8 h-8 text-purple-400" />
              <h1 className="text-3xl font-bold text-white">
                {query ? `Search Results for "${query}"` : 'Search Anime'}
              </h1>
            </div>
            
            {query && (
              <p className="text-gray-400">
                Found {filteredResults.length} result{filteredResults.length !== 1 ? 's' : ''}
              </p>
            )}
          </div>

          {/* Filters */}
          <div className="mb-8">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors mb-4"
            >
              <Filter size={20} />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>

            {showFilters && (
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  {/* Genre Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Genre
                    </label>
                    <select
                      value={selectedGenre}
                      onChange={(e) => setSelectedGenre(e.target.value)}
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                    >
                      <option value="">All Genres</option>
                      {genres.map(genre => (
                        <option key={genre} value={genre}>{genre}</option>
                      ))}
                    </select>
                  </div>

                  {/* Year Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Year
                    </label>
                    <select
                      value={selectedYear}
                      onChange={(e) => setSelectedYear(e.target.value)}
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                    >
                      <option value="">All Years</option>
                      {years.map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>

                  {/* Status Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Status
                    </label>
                    <select
                      value={selectedStatus}
                      onChange={(e) => setSelectedStatus(e.target.value)}
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                    >
                      <option value="">All Status</option>
                      <option value="Ongoing">Ongoing</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </div>

                  {/* Sort By */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Sort By
                    </label>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                    >
                      <option value="title">Title</option>
                      <option value="rating">Rating</option>
                      <option value="year">Year</option>
                      <option value="episodes">Episodes</option>
                    </select>
                  </div>
                </div>

                <button
                  onClick={clearFilters}
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>

          {/* Results */}
          {query ? (
            filteredResults.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredResults.map((anime) => (
                  <AnimeCard key={anime.id} anime={anime} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <SearchIcon className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-400 mb-2">
                  No results found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your search terms or filters
                </p>
              </div>
            )
          ) : (
            <div className="text-center py-16">
              <SearchIcon className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">
                Start searching for anime
              </h3>
              <p className="text-gray-500">
                Use the search bar above to find your favorite anime
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
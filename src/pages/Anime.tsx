import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Play, Pause, Volume2, VolumeX, Maximize, SkipBack, SkipForward, Star, Calendar, Clock, Users, Bookmark, Share2 } from 'lucide-react';
import { allAnime } from '../data/animeData';

const Anime: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const anime = allAnime.find(a => a.id === id);
  
  const [currentEpisode, setCurrentEpisode] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(100);

  if (!anime) {
    return <Navigate to="/\" replace />;
  }

  const episodes = Array.from({ length: Math.min(anime.episodes, 12) }, (_, i) => ({
    number: i + 1,
    title: `Episode ${i + 1}`,
    duration: anime.duration,
    thumbnail: anime.image
  }));

  const relatedAnime = allAnime
    .filter(a => a.id !== anime.id && a.genres.some(g => anime.genres.includes(g)))
    .slice(0, 6);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleMute = () => {
    setIsMuted(!isMuted);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Video Player */}
          <div className="lg:col-span-2">
            <div className="bg-black rounded-xl overflow-hidden mb-6">
              <div className="relative aspect-video">
                <video
                  className="w-full h-full object-cover"
                  poster={anime.image}
                  src={anime.videoUrl}
                >
                  Your browser does not support the video tag.
                </video>
                
                {/* Video Controls Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="w-full p-6">
                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="w-full bg-gray-600 rounded-full h-1 mb-2">
                        <div 
                          className="bg-purple-500 h-1 rounded-full transition-all duration-300"
                          style={{ width: `${(currentTime / duration) * 100}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-sm text-gray-300">
                        <span>{formatTime(currentTime)}</span>
                        <span>{formatTime(duration)}</span>
                      </div>
                    </div>
                    
                    {/* Control Buttons */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => setCurrentEpisode(Math.max(1, currentEpisode - 1))}
                          className="p-2 text-white hover:text-purple-400 transition-colors"
                          disabled={currentEpisode === 1}
                        >
                          <SkipBack size={24} />
                        </button>
                        
                        <button
                          onClick={handlePlayPause}
                          className="p-3 bg-purple-600 rounded-full text-white hover:bg-purple-700 transition-colors"
                        >
                          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                        </button>
                        
                        <button
                          onClick={() => setCurrentEpisode(Math.min(anime.episodes, currentEpisode + 1))}
                          className="p-2 text-white hover:text-purple-400 transition-colors"
                          disabled={currentEpisode === anime.episodes}
                        >
                          <SkipForward size={24} />
                        </button>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <button
                          onClick={handleMute}
                          className="p-2 text-white hover:text-purple-400 transition-colors"
                        >
                          {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                        </button>
                        
                        <button className="p-2 text-white hover:text-purple-400 transition-colors">
                          <Maximize size={24} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Anime Info */}
            <div className="bg-gray-800 rounded-xl p-6 mb-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-white mb-2">{anime.title}</h1>
                  <p className="text-purple-400 font-semibold mb-4">
                    {anime.episodes > 1 ? `Episode ${currentEpisode} of ${anime.episodes}` : 'Movie'}
                  </p>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-white font-semibold">{anime.rating}</span>
                  </div>
                  <button className="p-2 bg-gray-700 rounded-lg text-gray-300 hover:text-white hover:bg-gray-600 transition-colors">
                    <Bookmark size={20} />
                  </button>
                  <button className="p-2 bg-gray-700 rounded-lg text-gray-300 hover:text-white hover:bg-gray-600 transition-colors">
                    <Share2 size={20} />
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6 mb-6 text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{anime.year}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{anime.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>{anime.studio}</span>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  anime.status === 'Ongoing' 
                    ? 'bg-green-600 text-white' 
                    : 'bg-blue-600 text-white'
                }`}>
                  {anime.status}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {anime.genres.map((genre) => (
                  <span
                    key={genre}
                    className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-purple-600 hover:text-white transition-colors cursor-pointer"
                  >
                    {genre}
                  </span>
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed text-lg">
                {anime.description}
              </p>
            </div>

            {/* Related Anime */}
            {relatedAnime.length > 0 && (
              <div className="bg-gray-800 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-white mb-6">Related Anime</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {relatedAnime.map((related) => (
                    <div key={related.id} className="group cursor-pointer">
                      <div className="relative overflow-hidden rounded-lg mb-2">
                        <img
                          src={related.image}
                          alt={related.title}
                          className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Play className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <h3 className="text-white font-medium text-sm group-hover:text-purple-400 transition-colors line-clamp-2">
                        {related.title}
                      </h3>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="text-gray-400 text-xs">{related.rating}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Episode List */}
          <div className="lg:col-span-1">
            {anime.episodes > 1 && (
              <div className="bg-gray-800 rounded-xl p-6 mb-6">
                <h2 className="text-xl font-bold text-white mb-6">Episodes</h2>
                
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {episodes.map((episode) => (
                    <button
                      key={episode.number}
                      onClick={() => setCurrentEpisode(episode.number)}
                      className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
                        currentEpisode === episode.number
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      <img
                        src={episode.thumbnail}
                        alt={episode.title}
                        className="w-16 h-12 object-cover rounded"
                      />
                      <div className="flex-1 text-left">
                        <p className="font-semibold">{episode.title}</p>
                        <p className="text-sm opacity-75">{episode.duration}</p>
                      </div>
                      {currentEpisode === episode.number && (
                        <Play className="w-5 h-5" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Anime Stats */}
            <div className="bg-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-6">Information</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Type</span>
                  <span className="text-white font-medium">{anime.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Episodes</span>
                  <span className="text-white font-medium">{anime.episodes}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Status</span>
                  <span className="text-white font-medium">{anime.status}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Year</span>
                  <span className="text-white font-medium">{anime.year}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Studio</span>
                  <span className="text-white font-medium">{anime.studio}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Duration</span>
                  <span className="text-white font-medium">{anime.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Rating</span>
                  <span className="text-white font-medium flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    {anime.rating}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Anime;
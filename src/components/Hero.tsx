import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Info, Star, Calendar, Clock, Plus, Share2 } from 'lucide-react';
import { featuredAnime } from '../data/animeData';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const heroAnime = featuredAnime[currentSlide];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredAnime.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroAnime.banner || heroAnime.image}
          alt={heroAnime.title}
          className="w-full h-full object-cover scale-105"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = heroAnime.image;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f23]/95 via-[#0f0f23]/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f23] via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0f0f23]/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            {/* Badges */}
            <div className="flex items-center gap-3 mb-6">
              <span className="px-4 py-2 bg-gradient-to-r from-[#ff6b6b] to-[#4ecdc4] text-white text-sm font-bold rounded-full shadow-lg">
                #1 SPOTLIGHT
              </span>
              <span className="px-3 py-1 bg-[#1a1a2e]/80 backdrop-blur-sm text-gray-300 text-sm rounded-full border border-[#2a2a3e]">
                {heroAnime.type} • {heroAnime.year}
              </span>
              <span className="px-3 py-1 bg-[#1a1a2e]/80 backdrop-blur-sm text-gray-300 text-sm rounded-full border border-[#2a2a3e]">
                {heroAnime.episodes > 1 ? `${heroAnime.episodes} Episodes` : 'Movie'}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                {heroAnime.title}
              </span>
            </h1>

            {/* Meta Info */}
            <div className="flex items-center gap-6 mb-6 text-gray-300">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 text-[#ffd700] fill-current" />
                  <span className="font-bold text-white">{heroAnime.rating}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{heroAnime.year}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{heroAnime.duration}</span>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                heroAnime.status === 'Ongoing' 
                  ? 'bg-[#4ecdc4] text-white' 
                  : 'bg-[#ff6b6b] text-white'
              }`}>
                {heroAnime.status}
              </span>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl">
              {heroAnime.description}
            </p>

            {/* Genres */}
            <div className="flex items-center gap-2 mb-8 flex-wrap">
              {heroAnime.genres.slice(0, 4).map((genre) => (
                <Link
                  key={genre}
                  to={`/genre/${genre.toLowerCase()}`}
                  className="px-3 py-1 bg-[#1a1a2e]/60 backdrop-blur-sm text-gray-300 rounded-full text-sm border border-[#2a2a3e] hover:bg-[#ff6b6b] hover:text-white hover:border-[#ff6b6b] transition-all duration-300"
                >
                  {genre}
                </Link>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={`/anime/${heroAnime.id}`}
                className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#ff6b6b] to-[#4ecdc4] text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-[#ff6b6b]/25 transform hover:scale-105 transition-all duration-300"
              >
                <Play className="w-6 h-6" />
                Watch Now
              </Link>
              
              <div className="flex gap-3">
                <Link
                  to={`/anime/${heroAnime.id}`}
                  className="flex items-center justify-center gap-3 px-6 py-4 bg-[#1a1a2e]/80 backdrop-blur-sm text-white font-semibold rounded-xl border border-[#2a2a3e] hover:bg-[#2a2a3e] transition-all duration-300"
                >
                  <Info className="w-5 h-5" />
                  Details
                </Link>
                
                <button className="flex items-center justify-center px-4 py-4 bg-[#1a1a2e]/80 backdrop-blur-sm text-white rounded-xl border border-[#2a2a3e] hover:bg-[#2a2a3e] transition-all duration-300">
                  <Plus className="w-5 h-5" />
                </button>
                
                <button className="flex items-center justify-center px-4 py-4 bg-[#1a1a2e]/80 backdrop-blur-sm text-white rounded-xl border border-[#2a2a3e] hover:bg-[#2a2a3e] transition-all duration-300">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
        {featuredAnime.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide 
                ? 'w-8 h-2 bg-gradient-to-r from-[#ff6b6b] to-[#4ecdc4]' 
                : 'w-2 h-2 bg-gray-600 hover:bg-gray-500'
            }`}
          />
        ))}
      </div>

      {/* Next Episode Preview (if applicable) */}
      {heroAnime.status === 'Ongoing' && (
        <div className="absolute bottom-8 right-8 bg-[#1a1a2e]/90 backdrop-blur-sm p-4 rounded-xl border border-[#2a2a3e] max-w-xs">
          <div className="text-[#4ecdc4] text-sm font-semibold mb-1">Next Episode</div>
          <div className="text-white font-medium">Episode {Math.floor(Math.random() * 10) + 1}</div>
          <div className="text-gray-400 text-sm">Releases in 2 days</div>
        </div>
      )}
    </section>
  );
};

export default Hero;
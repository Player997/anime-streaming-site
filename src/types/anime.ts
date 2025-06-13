export interface Anime {
  id: string;
  title: string;
  description: string;
  image: string;
  banner?: string;
  rating: number;
  year: number;
  status: 'Ongoing' | 'Completed';
  episodes: number;
  genres: string[];
  duration: string;
  studio: string;
  type: 'TV' | 'Movie' | 'OVA' | 'Special';
  videoUrl?: string;
}

export interface Episode {
  number: number;
  title: string;
  duration: string;
  thumbnail: string;
  videoUrl: string;
}
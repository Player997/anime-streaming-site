import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Search from './pages/Search';
import Anime from './pages/Anime';
import Genre from './pages/Genre';
import Popular from './pages/Popular';
import Recent from './pages/Recent';
import Movies from './pages/Movies';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Header />
        
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/anime/:id" element={<Anime />} />
            <Route path="/genre/:genre" element={<Genre />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/recent" element={<Recent />} />
            <Route path="/movies" element={<Movies />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
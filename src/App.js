import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ArtGalleries from './pages/ArtGalleries';
import RecentArtWork from './pages/RecentArtWork';
import Collaborations from './pages/Collaborations';
import OlderPaintings from './pages/OlderPaintings';
import StainedGlass from './pages/StainedGlass';
import MusicGalleries from './pages/MusicGalleries';
import OtherProjects from './pages/OtherProjects';
import AboutContact from './pages/AboutContact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/art-galleries" element={<ArtGalleries />} />
          <Route path="/art-galleries/recent-work" element={<RecentArtWork />} />
          <Route path="/art-galleries/collaborations" element={<Collaborations />} />
          <Route path="/art-galleries/older-paintings" element={<OlderPaintings />} />
          <Route path="/art-galleries/stained-glass" element={<StainedGlass />} />
          <Route path="/music-galleries" element={<MusicGalleries />} />
          <Route path="/other-projects" element={<OtherProjects />} />
          <Route path="/about-contact" element={<AboutContact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

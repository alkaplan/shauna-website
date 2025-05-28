import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="main-content">
      <div className="home-page">
        <h1>Welcome to My Creative Portfolio</h1>
        <p>
          Explore my journey through art, music, and various creative projects. 
          Each gallery represents a different facet of my artistic expression and passion for creativity.
        </p>
        
        <div className="home-gallery-preview">
          <div className="preview-card">
            <div className="preview-card-content">
              <h3>Art Galleries</h3>
              <p>Discover my recent artwork, collaborations, older paintings, and stained glass creations. From miniatures to large-scale works, each piece tells a story.</p>
              <Link to="/art-galleries">Explore Art →</Link>
            </div>
          </div>
          
          <div className="preview-card">
            <div className="preview-card-content">
              <h3>Music Galleries</h3>
              <p>Listen to my musical compositions and projects. Experience the harmony between visual and auditory art through various musical explorations.</p>
              <Link to="/music-galleries">Explore Music →</Link>
            </div>
          </div>
          
          <div className="preview-card">
            <div className="preview-card-content">
              <h3>Other Projects</h3>
              <p>From collaborative works to experimental endeavors, discover the diverse range of creative projects that showcase different aspects of artistic expression.</p>
              <Link to="/other-projects">Explore Projects →</Link>
            </div>
          </div>
          
          <div className="preview-card">
            <div className="preview-card-content">
              <h3>About & Contact</h3>
              <p>Learn more about my artistic journey, philosophy, and get in touch for collaborations or inquiries about my work.</p>
              <Link to="/about-contact">Learn More →</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 
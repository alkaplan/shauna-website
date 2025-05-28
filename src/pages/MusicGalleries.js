import React from 'react';

const MusicGalleries = () => {
  return (
    <div className="main-content">
      <div className="home-page">
        <h1>Music Galleries</h1>
        <p style={{ marginBottom: '3rem' }}>
          Experience my musical journey through various compositions and projects. 
          Each collection represents different phases and styles of my musical expression.
        </p>
        
        <div className="home-gallery-preview">
          <div className="preview-card">
            <div className="preview-card-content">
              <h3>Bijou</h3>
              <p>A collection of musical pieces featuring documents and audio recordings. Explore the delicate compositions and intimate musical moments.</p>
              <p style={{ marginTop: '1rem', opacity: 0.8, fontSize: '0.9rem' }}>
                Features: 3 document links, 3 MP3 recordings
              </p>
            </div>
          </div>
          
          <div className="preview-card">
            <div className="preview-card-content">
              <h3>New Growth</h3>
              <p>Fresh musical explorations and recent compositions. Discover the evolution of sound and the growth of musical ideas.</p>
              <p style={{ marginTop: '1rem', opacity: 0.8, fontSize: '0.9rem' }}>
                Features: 1 document link, 4 audio pieces
              </p>
            </div>
          </div>
          
          <div className="preview-card">
            <div className="preview-card-content">
              <h3>Future Collections</h3>
              <p>Space reserved for upcoming musical projects and collaborations. Stay tuned for new compositions and experimental works.</p>
            </div>
          </div>
        </div>
        
        <div style={{ 
          textAlign: 'center', 
          marginTop: '3rem', 
          padding: '2rem',
          backgroundColor: '#4a4a4a',
          borderRadius: '8px',
          opacity: 0.8
        }}>
          <h4 style={{ marginBottom: '1rem' }}>To Add Music Content:</h4>
          <p style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
            Upload your audio files to the assets folder and create dedicated pages for each music collection.
            Add document links and MP3 players as needed for your musical portfolio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MusicGalleries; 
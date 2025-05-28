import React from 'react';

const OtherProjects = () => {
  return (
    <div className="main-content">
      <div className="home-page">
        <h1>Other Projects</h1>
        <p style={{ marginBottom: '3rem' }}>
          Discover diverse creative endeavors beyond traditional art and music. 
          These projects showcase experimental approaches and interdisciplinary explorations.
        </p>
        
        <div className="home-gallery-preview">
          <div className="preview-card">
            <div className="preview-card-content">
              <h3>Neil's Bar</h3>
              <p>A creative project featuring film documentation and artistic exploration of social spaces and community gathering places.</p>
              <p style={{ marginTop: '1rem', opacity: 0.8, fontSize: '0.9rem' }}>
                Features: 1 film documentary
              </p>
            </div>
          </div>
          
          <div className="preview-card">
            <div className="preview-card-content">
              <h3>Fun in the Kitchen</h3>
              <p>Culinary arts and food-related creative projects including preserving techniques and recipe documentation.</p>
              <p style={{ marginTop: '1rem', opacity: 0.8, fontSize: '0.9rem' }}>
                • Pressure Canning Broth Flip-book<br />
                • Recipes Flip-book<br />
                • Future culinary projects
              </p>
            </div>
          </div>
          
          <div className="preview-card">
            <div className="preview-card-content">
              <h3>French Project</h3>
              <p>Cultural and linguistic explorations through creative documentation and artistic interpretation of French culture and language.</p>
              <p style={{ marginTop: '1rem', opacity: 0.8, fontSize: '0.9rem' }}>
                Features: Interactive flip-books and cultural documentation
              </p>
            </div>
          </div>
          
          <div className="preview-card">
            <div className="preview-card-content">
              <h3>Future Projects</h3>
              <p>Space reserved for upcoming experimental works and collaborative endeavors across various creative disciplines.</p>
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
          <h4 style={{ marginBottom: '1rem' }}>To Add Project Content:</h4>
          <p style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
            Upload project files, videos, and documentation to the assets folder.
            Create dedicated pages for each project with galleries, videos, and interactive content as needed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OtherProjects; 
import React from 'react';

const AboutContact = () => {
  return (
    <div className="main-content">
      <div className="about-layout">
        <div className="about-text">
          <h2>This is my favorite photograph of myself.</h2>
          <p>
            I am in the Rijksmuseum in Amsterdam with my young friend, Victor.
          </p>
          <p>
            We went there together to look at Dutch Still Life paintings from the Baroque.
          </p>
          <p>
            At first, he was not interested but, as you can see, he warmed to the subject.
          </p>
        </div>
        
        <div className="about-image">
          <img 
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDUwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjNkE0QzMwIi8+Cjx0ZXh0IHg9IjI1MCIgeT0iMjAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4Ij5SaWprc211c2V1bSBQaG90bzwvdGV4dD4KPC9zdmc+"
            alt="Rijksmuseum photograph with Victor"
          />
        </div>
      </div>
      
      <div style={{ padding: '2rem', textAlign: 'right' }}>
        <div className="about-image" style={{ marginBottom: '2rem' }}>
          <img 
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjODA2MDQwIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMjAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2Ij5TdGlsbCBMaWZlIEFydHdvcms8L3RleHQ+Cjwvc3ZnPg=="
            alt="Still life artwork created together"
            style={{ maxWidth: '400px' }}
          />
        </div>
        <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '400px', marginLeft: 'auto' }}>
          This is the still life we made together later that day from flowers, 
          fruits and vegetables found in the market on our way home.
        </p>
      </div>
      
      <div style={{ 
        textAlign: 'center', 
        padding: '3rem 2rem',
        backgroundColor: '#4a4a4a',
        margin: '2rem',
        borderRadius: '8px'
      }}>
        <h3 style={{ marginBottom: '2rem', fontSize: '1.8rem', fontWeight: 300 }}>
          Contact Information
        </h3>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
          I welcome inquiries about my work, collaboration opportunities, 
          and commissions. Please feel free to reach out to discuss your ideas.
        </p>
        <div style={{ opacity: 0.8 }}>
          <p>Email: [Add your email here]</p>
          <p>Phone: [Add your phone here]</p>
          <p>Location: [Add your location here]</p>
        </div>
        
        <div style={{ 
          marginTop: '2rem', 
          padding: '1.5rem',
          backgroundColor: '#333333',
          borderRadius: '6px',
          fontSize: '0.9rem'
        }}>
          <h4 style={{ marginBottom: '1rem' }}>To Update Contact Information:</h4>
          <p>
            Edit the AboutContact.js file to add your actual contact details, 
            social media links, and any additional information you'd like to share.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutContact; 
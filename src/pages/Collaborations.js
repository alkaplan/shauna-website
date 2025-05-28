import React from 'react';
import GalleryLayout from '../components/GalleryLayout';
import ImageGallery from '../components/ImageGallery';

const Collaborations = () => {
  const artGalleriesLinks = [
    { path: '/art-galleries/recent-work', label: 'Recent Art Work' },
    { path: '/art-galleries/collaborations', label: 'Collaborations' },
    { path: '/art-galleries/older-paintings', label: 'Older Paintings' },
    { path: '/art-galleries/stained-glass', label: 'Stained Glass' }
  ];

  const sampleImages = [
    {
      src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjNzA0MDMwIi8+Cjx0ZXh0IHg9IjMwMCIgeT0iMjAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjIwIj5Db2xsYWJvcmF0aXZlIFdvcms8L3RleHQ+Cjwvc3ZnPg==',
      alt: 'Collaborative Artwork 1',
      caption: 'Collaborative project - placeholder image'
    }
  ];

  return (
    <GalleryLayout title="Collaborations" sidebarLinks={artGalleriesLinks}>
      <div style={{ width: '100%' }}>
        <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 300 }}>
            Collaborative Works
          </h3>
          <p style={{ opacity: 0.8, fontSize: '1rem' }}>
            Art created in partnership with other artists and creative minds
          </p>
        </div>
        
        <ImageGallery 
          images={sampleImages} 
          title="Collaborations"
        />
        
        <div style={{ 
          textAlign: 'center', 
          marginTop: '3rem', 
          padding: '2rem',
          backgroundColor: '#4a4a4a',
          borderRadius: '8px',
          opacity: 0.8
        }}>
          <p style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
            This section includes:
            <br />• Santoleri Mural Art Galleries
            <br />• Piano As Art Projects
            <br />• Future collaborative works
          </p>
        </div>
      </div>
    </GalleryLayout>
  );
};

export default Collaborations; 
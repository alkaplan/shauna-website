import React from 'react';
import GalleryLayout from '../components/GalleryLayout';
import ImageGallery from '../components/ImageGallery';

const RecentArtWork = () => {
  // Sample images - these would be replaced with actual artwork
  const sampleImages = [
    {
      src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjNEE0QTRBIi8+Cjx0ZXh0IHg9IjMwMCIgeT0iMjAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0Ij5TYW1wbGUgQXJ0d29yazwvdGV4dD4KPC9zdmc+',
      alt: 'Sample Recent Artwork 1',
      caption: 'Recent artwork piece - placeholder image'
    },
    {
      src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjNjA2MDYwIi8+Cjx0ZXh0IHg9IjMwMCIgeT0iMjAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0Ij5BcnR3b3JrIDI8L3RleHQ+Cjwvc3ZnPg==',
      alt: 'Sample Recent Artwork 2',
      caption: 'Another recent piece - placeholder image'
    }
  ];

  const artGalleriesLinks = [
    { path: '/art-galleries/recent-work', label: 'Recent Art Work' },
    { path: '/art-galleries/collaborations', label: 'Collaborations' },
    { path: '/art-galleries/older-paintings', label: 'Older Paintings' },
    { path: '/art-galleries/stained-glass', label: 'Stained Glass' }
  ];

  return (
    <GalleryLayout title="Recent Art Work" sidebarLinks={artGalleriesLinks}>
      <div style={{ width: '100%' }}>
        <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 300 }}>
            Miniatures
          </h3>
          <p style={{ opacity: 0.8, fontSize: '1rem' }}>
            A collection of my recent miniature artwork
          </p>
        </div>
        
        <ImageGallery 
          images={sampleImages} 
          title="Recent Art Work - Miniatures"
        />
        
        <div style={{ 
          textAlign: 'center', 
          marginTop: '3rem', 
          padding: '2rem',
          backgroundColor: '#4a4a4a',
          borderRadius: '8px',
          opacity: 0.8
        }}>
          <h4 style={{ marginBottom: '1rem' }}>To Add Your Images:</h4>
          <p style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
            Replace the sample images in the RecentArtWork.js file with your actual artwork. 
            Simply update the images array with the paths to your image files in the assets/images folder.
          </p>
        </div>
      </div>
    </GalleryLayout>
  );
};

export default RecentArtWork; 
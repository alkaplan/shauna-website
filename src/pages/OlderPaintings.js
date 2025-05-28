import React from 'react';
import GalleryLayout from '../components/GalleryLayout';
import ImageGallery from '../components/ImageGallery';

const OlderPaintings = () => {
  const artGalleriesLinks = [
    { path: '/art-galleries/recent-work', label: 'Recent Art Work' },
    { path: '/art-galleries/collaborations', label: 'Collaborations' },
    { path: '/art-galleries/older-paintings', label: 'Older Paintings' },
    { path: '/art-galleries/stained-glass', label: 'Stained Glass' }
  ];

  const sampleImages = [
    {
      src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjODA2MDQwIi8+Cjx0ZXh0IHg9IjMwMCIgeT0iMjAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjIwIj5PbGRlciBQYWludGluZzwvdGV4dD4KPC9zdmc+',
      alt: 'Older Painting 1',
      caption: 'Classic painting from earlier period'
    }
  ];

  return (
    <GalleryLayout title="Older Paintings" sidebarLinks={artGalleriesLinks}>
      <div style={{ width: '100%' }}>
        <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 300 }}>
            Older Paintings
          </h3>
          <p style={{ opacity: 0.8, fontSize: '1rem' }}>
            A collection of paintings and portraits from earlier artistic periods
          </p>
        </div>
        
        <ImageGallery 
          images={sampleImages} 
          title="Older Paintings"
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
            <br />• Classic Paintings
            <br />• Portrait Collections
            <br />• Historical artwork pieces
          </p>
        </div>
      </div>
    </GalleryLayout>
  );
};

export default OlderPaintings; 
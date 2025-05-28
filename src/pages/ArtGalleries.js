import React from 'react';
import GalleryLayout from '../components/GalleryLayout';

const ArtGalleries = () => {
  const sidebarLinks = [
    { path: '/art-galleries/recent-work', label: 'Recent Art Work' },
    { path: '/art-galleries/collaborations', label: 'Collaborations' },
    { path: '/art-galleries/older-paintings', label: 'Older Paintings' },
    { path: '/art-galleries/stained-glass', label: 'Stained Glass' }
  ];

  return (
    <GalleryLayout title="Art Galleries" sidebarLinks={sidebarLinks}>
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', fontWeight: 300 }}>
          Art Galleries
        </h2>
        <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
          Welcome to my art galleries. Here you'll find a curated collection of my artistic works, 
          ranging from recent creations to collaborative projects and timeless pieces. 
          Use the navigation on the left to explore different categories of my artwork.
        </p>
        <div style={{ marginTop: '3rem', opacity: 0.7 }}>
          <p>← Select a gallery from the menu to begin exploring</p>
        </div>
      </div>
    </GalleryLayout>
  );
};

export default ArtGalleries; 
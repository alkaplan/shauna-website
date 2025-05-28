import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const GalleryLayout = ({ title, sidebarLinks, children }) => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="main-content">
      <div className="gallery-layout">
        <aside className="sidebar">
          <h2>{title}</h2>
          <nav>
            <ul className="sidebar-nav">
              {sidebarLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className={isActive(link.path) ? 'active' : ''}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main className="content-area">
          {children}
        </main>
      </div>
    </div>
  );
};

export default GalleryLayout; 
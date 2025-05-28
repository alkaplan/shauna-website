import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="header">
      <Link to="/" className="header-title">
        Shauna Holiman
      </Link>
      <nav className="header-nav">
        <Link 
          to="/art-galleries" 
          className={`nav-link ${isActive('/art-galleries') ? 'active' : ''}`}
        >
          Art Galleries
        </Link>
        <Link 
          to="/music-galleries" 
          className={`nav-link ${isActive('/music-galleries') ? 'active' : ''}`}
        >
          Music Galleries
        </Link>
        <Link 
          to="/other-projects" 
          className={`nav-link ${isActive('/other-projects') ? 'active' : ''}`}
        >
          Other Projects
        </Link>
        <Link 
          to="/about-contact" 
          className={`nav-link ${isActive('/about-contact') ? 'active' : ''}`}
        >
          About/Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header; 
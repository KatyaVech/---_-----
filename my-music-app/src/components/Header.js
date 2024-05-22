import React from 'react';
import { Link } from 'react-router-dom';
import './style/Header.css'; 
function Header() {
  return (
    <header className="header">
      <div className="logo-container">
      <Link to="/">
          <img src="/logo_music.svg" alt="Logo" className="logo" />
        </Link>
        
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/searchMusik">Search</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

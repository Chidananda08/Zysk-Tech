// Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Untitled UI</div>
      <nav>
        <a href="#home">Home</a>
        <a href="#products">Products</a>
        <a href="#resources">Resources</a>
        <a href="#pricing">Pricing</a>
      </nav>
      <div className="user-icon">👤</div>
    </header>
  );
};

export default Header;

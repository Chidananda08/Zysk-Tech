// HeroSection.js
import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <h1>Beautiful analytics to grow smarter</h1>
        <p>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
        <div className="hero-buttons">
          <button className="demo-button">Demo</button>
          <button className="signup-button">Sign Up</button>
        </div>
      </div>
      <div className="hero-image">
        {/* Add your image or SVG graphic here */}
      </div>
    </section>
  );
};

export default HeroSection;

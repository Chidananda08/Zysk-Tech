// src/components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Product</h4>
          <a href="#overview">Overview</a>
          <a href="#features">Features</a>
          <a href="#solutions">Solutions <span className="new-badge">New</span></a>
          <a href="#tutorials">Tutorials</a>
          <a href="#pricing">Pricing</a>
          <a href="#releases">Releases</a>
        </div>
        <div className="footer-section">
          <h4>Company</h4>
          <a href="#about">About us</a>
          <a href="#careers">Careers</a>
          <a href="#press">Press</a>
          <a href="#news">News</a>
          <a href="#media-kit">Media kit</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-section">
          <h4>Resources</h4>
          <a href="#blog">Blog</a>
          <a href="#newsletter">Newsletter</a>
          <a href="#events">Events</a>
          <a href="#help-centre">Help centre</a>
          <a href="#tutorials">Tutorials</a>
          <a href="#support">Support</a>
        </div>
        <div className="footer-section">
          <h4>Use cases</h4>
          <a href="#startups">Startups</a>
          <a href="#enterprise">Enterprise</a>
          <a href="#government">Government</a>
          <a href="#saas-centre">SaaS centre</a>
          <a href="#marketplaces">Marketplaces</a>
          <a href="#ecommerce">Ecommerce</a>
        </div>
        <div className="footer-section">
          <h4>Social</h4>
          <a href="#twitter">Twitter</a>
          <a href="#linkedin">LinkedIn</a>
          <a href="#facebook">Facebook</a>
          <a href="#github">GitHub</a>
          <a href="#angel-list">AngelList</a>
          <a href="#dribbble">Dribbble</a>
        </div>
        <div className="footer-section">
          <h4>Legal</h4>
          <a href="#terms">Terms</a>
          <a href="#privacy">Privacy</a>
          <a href="#cookies">Cookies</a>
          <a href="#licenses">Licenses</a>
          <a href="#settings">Settings</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2077 Untitled UI. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

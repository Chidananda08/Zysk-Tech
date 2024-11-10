import React from 'react';
import './CTASection.css';

function CTASection() {
  return (
    <section className="cta">
      <h3>Start your free trial</h3>
      <p>Join over 4,000+ startups already growing with Untitled.</p>
      <div className="cta-buttons">
        <button className="btn-learn-more">Learn more</button>
        <button className="btn-get-started">Get started</button>
      </div>
    </section>
  );
}

export default CTASection;
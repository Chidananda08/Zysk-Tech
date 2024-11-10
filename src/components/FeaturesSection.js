import React from 'react';
import './FeaturesSection.css';

function FeaturesSection() {
  return (
    <section className="features">
      <h2>Analytics that feels like it's from the future</h2>
      <p>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>   

      <div className="feature-cards">
        <div className="feature-card">
          <h4>Share team inboxes</h4>
          <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
        </div>
        <div   
 className="feature-card">
          <h4>Deliver instant answers</h4>
          <p>An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
        </div>
        <div   
 className="feature-card">
          <h4>Manage your team with reports</h4>
          <p>Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple   
 of clicks.</p>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
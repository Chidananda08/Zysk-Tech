import React from 'react';
import './TestimonialSection.css';

function TestimonialSection() {
  return (
    <section className="testimonials">
      <h2>What Our Users Say</h2>
      <div className="testimonial">
        <p>“We’ve been using Untitled to kick start every new project and can’t imagine working without it.”</p>
        <img src="candice-wu.jpg" alt="Candice Wu" />
        <p>Candice Wu</p>
        <p>Product Manager, Sisyphus</p>
      </div>
    </section>
  );
}

export default TestimonialSection;
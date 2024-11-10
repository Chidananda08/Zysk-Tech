// src/components/FAQSection.js
import React, { useState } from 'react';
import './FAQSection.css';

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    { question: 'What is this product about?', answer: 'This product is about analytics and growth.' },
    { question: 'How does the free trial work?', answer: 'You can try our product free for 30 days, no credit card required.' },
    { question: 'Can I change my plan later?', answer: 'Yes, you can upgrade or downgrade your plan at any time.' },
    { question: 'What is your cancellation policy?', answer: 'You can cancel anytime from your account settings.' },
    { question: 'How do I contact support?', answer: 'You can reach our support team via chat or email.' },
  ];

  return (
    <section className="faq">
      <h3 className="faq-title">Frequently Asked Questions</h3>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <h4 className="faq-question">
              {faq.question}
              <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
            </h4>
            {activeIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQSection;

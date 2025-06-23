import React, { useState } from 'react';
import './FeatureHighlight.css';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { FaSyncAlt, FaPaperPlane, FaStar } from 'react-icons/fa';

const accordionData = [
  {
    title: 'Internal Feedback',
    icon: <FaSyncAlt />,
    content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur velit.',
  },
  {
    title: 'Internal Feedback',
    icon: <FaPaperPlane />,
    content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur velit.',
  },
  {
    title: 'Internal Feedback',
    icon: <FaStar />,
    content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur velit.',
  },
];

const FeatureHighlight = () => {
  const [openAccordion, setOpenAccordion] = useState(0);
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <section ref={ref} className={`feature-highlight-section ${isVisible ? 'is-visible' : ''}`}>
      <div className="feature-highlight-container">
        <div className="main-title">
            The quick brown fox jumped over <br/>the lazy dog
        </div>
        <div className="feature-highlight-content">
          <div className="feature-highlight-image">
            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800" alt="Feature" />
          </div>
          <div className="decorative-swoosh">
            <svg viewBox="0 0 60 160" preserveAspectRatio="none">
              <path d="M 51.1,155.9 C 23.3,130.4 5.8,96.3 0.6,58.3 -2.2,38.2 5.1,18.5 20.3,2.4" stroke="#e0e7ff" strokeWidth="4" fill="none" strokeLinecap="round"></path>
            </svg>
          </div>
          <div className="feature-highlight-text">
            <h3>Built exclusively for you</h3>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.</p>
            <div className="accordion">
              {accordionData.map((item, index) => (
                <div key={index} className="accordion-item">
                  <div className="accordion-header" onClick={() => toggleAccordion(index)}>
                    <div className="accordion-icon">{item.icon}</div>
                    <span className="accordion-title">{item.title}</span>
                  </div>
                  {openAccordion === index && (
                    <div className="accordion-content">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlight; 
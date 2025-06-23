import React from 'react';
import './CTASection.css';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const CTASection = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section ref={ref} className={`cta-section ${isVisible ? 'is-visible' : ''}`}>
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">
            Say goodbye to long queues, big <br /> updates, and <span className="highlight">confusion</span>.
          </h2>
          <p className="cta-subtitle">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.
          </p>
          <button className="cta-button">
            Request Demo <span>&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 
import React from 'react';
import './Newsletter.css';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const Newsletter = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3 });

    return (
        <section ref={ref} className={`newsletter-section ${isVisible ? 'is-visible' : ''}`}>
            <div className="container">
                <div className="newsletter-content">
                    <h2 className="newsletter-title">Several People Are Typing</h2>
                    <p className="newsletter-subtitle">
                        Lessons designed to help you kick start and grow your business and turn your idea into a thriving empire.
                    </p>
                    <form className="newsletter-form">
                        <input type="email" placeholder="Your email" className="newsletter-input" />
                        <button type="submit" className="newsletter-button">Subscribe</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Newsletter; 
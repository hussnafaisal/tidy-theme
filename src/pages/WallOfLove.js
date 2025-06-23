import React from 'react';
import './WallOfLove.css';
import WallOfLoveImage from '../wof-hero.jpg';
import LogoCloud from '../components/LogoCloud/LogoCloud';
import Testimonial from '../components/Testimonial/Testimonial';
import TestimonialGrid from '../components/TestimonialGrid/TestimonialGrid';
import CTASection from '../components/CTASection/CTASection';
const WallOfLove = () => {
  return (
    <>
      <div className="wall-of-love-section">
        <div className="wall-of-love-content">
          <h2>Join 70K+ companies and investors</h2>
          <p>We're proud to have played a part in these amazing journeys.</p>
          <div className="image-container">
            <img src={WallOfLoveImage} alt="Team collaboration" />
            <div className="play-button">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 5V19L19 12L8 5Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <LogoCloud />
      <Testimonial />
      <TestimonialGrid />
      <CTASection />
    </>
  );
};

export default WallOfLove;

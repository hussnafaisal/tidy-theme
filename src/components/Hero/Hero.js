import React from 'react';
import './Hero.css';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>
          Create stunning<br />
          web experiences
        </h1>
        <p>
          Our landing page template works on all devices, so you only have to
          set it up once, and get beautiful results forever.
        </p>
        <div className="hero-actions">
          <button  onClick={() => navigate('/request-demo')} className="btn btn-primary">Request Demo →</button>
          <button className="btn btn-secondary">Explore Product</button>
        </div>
      </div>
      <div className="hero-image-wrapper">
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop"
          alt="Team collaboration"
          className="hero-image"
        />
        <button className="play-button" aria-label="Play video">
          <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.4615 12.1154L3.46154 0.653842C2.34615 -0.076926 0.923077 0.653842 0.923077 2.03846V25.9615C0.923077 27.3461 2.34615 28.0769 3.46154 27.3461L22.4615 15.8846C23.4231 15.2308 23.4231 12.7692 22.4615 12.1154Z" fill="#3B82F6"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero; 
import React from 'react';
import './LogoCloud.css';
import { FaFacebook, FaAirbnb, FaHubspot, FaAmazon } from 'react-icons/fa';
import { SiTinder } from 'react-icons/si';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const LogoCloud = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`logo-cloud-section animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="logo-cloud-grid">
        <div className="logo-item" style={{'--i': 1}}><FaFacebook /></div>
        <div className="logo-item" style={{'--i': 2}}><SiTinder /></div>
        <div className="logo-item" style={{'--i': 3}}><FaAirbnb /></div>
        <div className="logo-item" style={{'--i': 4}}><FaHubspot /></div>
        <div className="logo-item" style={{'--i': 5}}><FaAmazon /></div>
      </div>
    </div>
  );
};

export default LogoCloud;
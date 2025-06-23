import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">
          Oops!
          <svg width="60" height="60" viewBox="0 0 100 100" className="oops-icon">
            <path d="M10 60 Q30 20 40 35 Q20 55 10 60" fill="#cbd5e1" />
            <path d="M10 60 20 60 80 85 Q5 35 30 90" fill="#cbd5e1" />
          </svg>
        </h1>
        <p className="not-found-text">We couldn't find the page you're looking for.</p>
        <Link to="/home" className="back-home-button">
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound; 
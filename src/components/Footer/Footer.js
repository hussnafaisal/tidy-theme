import React from 'react';
import './Footer.css';
import { FaTwitter, FaFacebook, FaTelegram, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-about">
          <div className="footer-logo">
            <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="footer-logo-svg">
              <g fillRule="evenodd">
                <path d="M15.25 4.116c.039.899-.51.468-.79.629-.894.524-1.491 2.04-2.612 2.125-.423.87-1.121.898-1.874 1.503-.327.256-.463.839-.756 1.097l-3.694 3.27a2.395 2.395 0 0 1-.44.314c-.378.219-.656.717-1.096.81-.475.106-1.601-.775-2.633-2.012-.825-1.587-.025-1.924.518-2.525.916-1.022 2.48-2.064 3.585-2.753.843-.537 1.677-1.13 2.59-1.482.935-.357 1.779-.842 2.738-1.041.7-.141 1.522.063 2.206 0a9.596 9.596 0 0 1 2.258.065" />
                <path d="M30.676 3.646c-.06 1.046-1.038.955-1.593 1.363C27.32 6.31 25.8 8.656 23.63 9.583c-1.07 1.412-2.411 1.952-4.056 3.254-.711.56-1.21 1.417-1.877 1.965-2.887 2.381-5.668 4.524-8.64 6.823-.303.236-.646.468-1.008.697-.834.528-1.675 1.394-2.543 1.77-.95.413-2.376-.279-3.375-1.544-.43-1.849 1.112-2.657 2.38-3.737 2.13-1.82 5.33-4.012 7.558-5.536 1.707-1.17 3.395-2.426 5.138-3.43 1.789-1.03 3.439-2.179 5.224-3.063 1.303-.643 2.758-.96 4.038-1.53a40.762 40.762 0 0 1 4.207-1.606" />
                <path d="M30.386 14.346c.229.918-.566.8-.896 1.136-1.048 1.058-1.721 3.056-3.254 3.7-.563 1.17-1.522 1.532-2.603 2.507-.464.426-.731 1.128-1.177 1.542-1.94 1.77-3.91 3.263-6.082 4.772a6.36 6.36 0 0 1-.748.43c-.618.313-1.24.914-1.901 1.065-.731.161-1.856-.807-2.662-2.199-.401-1.784.715-2.129 1.6-2.818 1.49-1.15 3.693-2.49 5.192-3.486 1.154-.755 2.247-1.633 3.417-2.292 1.2-.68 2.244-1.52 3.44-2.128.868-.448 1.927-.61 2.79-1.029.92-.447 1.873-.85 2.884-1.2" />
              </g>
            </svg>
          </div>
          <p>The smarter way to start your next idea.</p>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h4>How it works</h4>
            <Link to="/overview">Overview</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/service-areas">Service Areas</Link>
          </div>
          <div className="footer-column">
            <h4>Resources</h4>
            <Link to="/customer-stories">Customer Stories</Link>
            <Link to="/knowledge-base">Knowledge Base</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
          <div className="footer-column">
            <h4>Products</h4>
            <Link to="/corporate-partners">Corporate Partners</Link>
            <Link to="/secure-identity">Secure Identity</Link>
            <Link to="/legal-help">Legal Help</Link>
            <Link to="/first-capital">First Capital</Link>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <Link to="/about">About Us</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/terms">Terms of Use</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copyright">
          © Cruip.com. All rights reserved.
        </div>
        <div className="footer-socials">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://telegram.org" target="_blank" rel="noopener noreferrer"><FaTelegram /></a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
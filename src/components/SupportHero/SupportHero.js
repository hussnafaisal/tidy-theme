import React from 'react';
import './SupportHero.css';
import { FaSearch } from 'react-icons/fa';

const SupportHero = () => {
  return (
    <section className="support-hero">
      <div className="support-hero-content">
        <h1>Advice and answers from the Tidy Team</h1>
        <form className="search-form">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search for articles..." />
        </form>
      </div>
    </section>
  );
};

export default SupportHero; 
import React from 'react';
import './store.css';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { FaFileAlt, FaThumbsUp, FaRegBookmark, FaHeart } from 'react-icons/fa';
import { BsBriefcaseFill } from 'react-icons/bs';

const storesData = [
  {
    icon: <FaFileAlt />,
    title: 'Robust Workflow',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    icon: <BsBriefcaseFill />,
    title: 'Robust Workflow',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    icon: <FaThumbsUp />,
    title: 'Robust Workflow',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    icon: <FaFileAlt />,
    title: 'Robust Workflow',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    icon: <FaRegBookmark />,
    title: 'Robust Workflow',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    icon: <FaHeart />,
    title: 'Robust Workflow',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
];

const Stores = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section ref={ref} className={`store-section animate-on-scroll ${isVisible ? 'is-visible' : ''}`}>
      <div className="store-grid">
        {storesData.map((store, index) => (
          <div key={index} className="store-item">
            <div className="store-icon">{store.icon}</div>
            <h3 className="store-title">{store.title}</h3>
            <p className="store-text">{store.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stores;
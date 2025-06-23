import React, { useState } from 'react';
import './TabsSection.css';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { FaRegChartBar, FaRegCommentDots, FaRegWindowRestore } from 'react-icons/fa';

const tabData = [
  { id: 'feedback', icon: <FaRegChartBar />, label: 'Internal Feedback' },
  { id: 'reporting', icon: <FaRegCommentDots />, label: 'Internal Feedback' },
  { id: 'analytics', icon: <FaRegWindowRestore />, label: 'Internal Feedback' },
  { id: 'insights', icon: <FaRegChartBar />, label: 'Internal Feedback' },
];

const imageData = [
    'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=500',
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500',
    'https://images.unsplash.com/photo-1554224155-1696413565d3?w=500',
    'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=500',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500',
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500',
];

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState('feedback');
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section ref={ref} className={`tabs-section animate-on-scroll ${isVisible ? 'is-visible' : ''}`}>
      <h2 className="tabs-title">Built exclusively for you</h2>
      <p className="tabs-description">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.
      </p>
      <div className="tabs-nav">
        {tabData.map(tab => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <div className="tab-icon">{tab.icon}</div>
            <span className='tab-label'>{tab.label}</span>
          </button>
        ))}
      </div>
      <div className="tabs-content">
        <div className="mockup-window">
            <div className="mockup-header">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
            <div className="mockup-body">
                <div className="image-grid">
                    {imageData.map((src, index) => (
                        <div key={index} className="image-item">
                            <img src={src} alt={`Gallery item ${index + 1}`} />
                            <div className="progress-bar"></div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mockup-footer">
                <button>&larr;</button>
                <button>&rarr;</button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default TabsSection; 
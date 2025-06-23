import React from 'react';
import './ExpertsSection.css';

const Icon = ({ className }) => (
  <svg
    className={className}
    width="32"
    height="32"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.722 4.008C14.408 1.214 10.954-.635 7.318.203 5.6.596 4.072 1.561 2.919 2.757A10.57 10.57 0 0 0 .484 6.93C.03 8.458-.173 10.035.18 11.764c.191.862.518 1.683 1.146 2.479a4.876 4.876 0 0 0 2.256 1.522c1.635.469 3.156.192 4.41-.439 1.242-.615 2.298-1.769 2.494-3.094.094-.656-.537-.657-.69-.18-.781 2.126-3.715 2.534-5.265 1.579-1.568-.922-1.185-3.068-.294-4.801.89-1.729 2.454-3.02 3.92-3.338.376-.098.714-.121 1.026-.098.324.018.658.074.98.188.65.2 1.23.591 1.618 1 .27.3.575.386 1.002.461.436.061.95.117 1.499.045.535-.073 1.06-.287 1.41-.807.345-.504.462-1.348.03-2.273"
      fill="currentColor"
    />
  </svg>
);

const ExpertsSection = () => {
  return (
    <section className="experts-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">We're experts and brand creators</h2>
          <p className="section-subtitle">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.
          </p>
        </div>
        <div className="experts-content">
          <div className="stats-column">
            <div className="stat-item">
              <div className="stat-value">
                <Icon className="stat-icon blue" /> 79%
              </div>
              <p className="stat-description">
                Lorem ipsum is placeholder text used in the graphic, print, and publishing for
                previewing layouts.
              </p>
            </div>
            <div className="stat-item">
              <div className="stat-value">
                <Icon className="stat-icon pink" /> 1M+
              </div>
              <p className="stat-description">
                Lorem ipsum is placeholder text used in the graphic, print, and publishing for
                previewing layouts.
              </p>
            </div>
            <div className="stat-item">
              <div className="stat-value">
                <Icon className="stat-icon yellow" /> 500K
              </div>
              <p className="stat-description">
                Lorem ipsum is placeholder text used in the graphic, print, and publishing for
                previewing layouts.
              </p>
            </div>
          </div>
          <div className="images-column">
            <div className="image-collage">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500" alt="Team working" className="collage-img-1" />
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500" alt="Woman smiling" className="collage-img-2" />
              <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=500" alt="Group discussion" className="collage-img-3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertsSection; 
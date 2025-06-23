import React from 'react';
import './AdvancedFeatures.css';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const featureData = [
  {
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400',
    title: 'Advanced Features',
    description: 'Lorem ipsum is placeholder text used in the graphic, print, and publishing for previewing layouts.',
  },
  {
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400',
    title: 'Advanced Features',
    description: 'Lorem ipsum is placeholder text used in the graphic, print, and publishing for previewing layouts.',
  },
  {
    image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?w=400',
    title: 'Advanced Features',
    description: 'Lorem ipsum is placeholder text used in the graphic, print, and publishing for previewing layouts.',
  },
];

const AdvancedFeatures = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

    return (
        <section ref={ref} className={`advanced-features-section ${isVisible ? 'is-visible' : ''}`}>
            <div className="advanced-features-container">
                <div className="advanced-features-header">
                    <h2 className="advanced-features-title">Simplify operating and manage <br /> with transparency</h2>
                </div>
                <div className="features-grid">
                    {featureData.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-image-wrapper">
                            <div className="borderimg"></div>
                                <img src={feature.image} alt={feature.title} className="feature-image" />
                                <div className="feature-number">{index + 1}</div>
                            </div>
                            <div className="feature-card-content">
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AdvancedFeatures; 
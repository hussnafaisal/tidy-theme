import React from 'react';
import './Testimonial.css';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
// import testimonialImage from './testimonial-image.jpg'; // Placeholder for the image
// import authorImage from './author-image.jpg'; // Placeholder for the author avatar

const Testimonial = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className={`testimonial-section animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="testimonial-container">
        <div className="testimonial-image-wrapper">
          <div className='border'> </div>       
        <img src="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=1974&auto=format&fit=crop" alt="Business handshake" className="testimonial-image"/>
      <div className="play-button-testimonial">
            <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>
          </div>
        </div>
        <div className="testimonial-content">
          <h3>Black Inc.</h3>
          <p className="testimonial-main-text">
            Award-winning design firm Black Inc. didn't get the personalized approach they wanted from colloboration tools - until they met Tidy.
          </p>
          <blockquote className="testimonial-quote">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur e xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
          </blockquote>
          <div className="testimonial-author">
            <img src={"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop"} alt="Christine Duck" className="author-avatar" />
            <div className="author-info">
              <strong>Christine Duck   <span>CEO, Black Inc.</span></strong>
             
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial-container">
        
        <div className="testimonial-content">
          <h3>Black Inc.</h3>
          <p className="testimonial-main-text">
            Award-winning design firm Black Inc. didn't get the personalized approach they wanted from colloboration tools - until they met Tidy.
          </p>
          <blockquote className="testimonial-quote">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur e xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
          </blockquote>
          <div className="testimonial-author">
            <img src={"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop"} alt="Christine Duck" className="author-avatar" />
            <div className="author-info">
              <strong>Christine Duck   <span>CEO, Black Inc.</span></strong>
             
            </div>
          </div>
        </div>
        <div className="testimonial-image-wrapper">
            <div className='border'> </div>
          <img src={"https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2069&auto=format&fit=crop"} alt="Happy customer" className="testimonial-image"/>
          <div className="play-button-testimonial">
            <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>
          </div>
        </div>
      </div>
      <div className="testimonial-container">
        <div className="testimonial-image-wrapper">
            <div className='border'> </div>
          <img src={"https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=2069&auto=format&fit=crop"} alt="Happy customer" className="testimonial-image"/>
          <div className="play-button-testimonial">
            <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>
          </div>
        </div>
        <div className="testimonial-content">
          <h3>Black Inc.</h3>
          <p className="testimonial-main-text">
            Award-winning design firm Black Inc. didn't get the personalized approach they wanted from colloboration tools - until they met Tidy.
          </p>
          <blockquote className="testimonial-quote">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur e xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
          </blockquote>
          <div className="testimonial-author">
            <img src={"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop"} alt="Christine Duck" className="author-avatar" />
            <div className="author-info">
              <strong>Christine Duck   <span>CEO, Black Inc.</span></strong>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
import React from 'react';
import './BlogPost.css';
import postImage from '../../blog-post-01.jpg'; 
import authorAvatar from '../../customer-avatar-02.jpg';

const BlogPost = () => {
  return (
    <article className="blog-post-featured">

      <div className="post-image-wrapper">
        <img src={postImage} alt="Featured post" />
        <div className="post-icon">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.9375 1.5L2.625 7.5H6.375L5.0625 10.5L9.375 4.5H5.625L6.9375 1.5Z" fill="white" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <div className="post-content">
        <h1>How startups can sell more using smart channels</h1>
        <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt.</p>
        <div className="post-meta">
          <img src={authorAvatar} alt="Patricia Williams" className="author-avatar" />
          <span>Patricia Williams · Sep 24, 2021</span>
        </div>
      </div>
    </article>
  );
};

export default BlogPost; 
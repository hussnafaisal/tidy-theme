import React from 'react';
import './Blog.css';
import Newsletter from '../components/Newsletter/Newsletter';
import BlogPost from '../components/BlogPost/BlogPost';
import NewsSection from '../components/NewsSection/NewsSection';

import articleImage1 from '../blog-post-01.jpg';
import articleImage2 from '../customers-01.jpg';
import articleImage3 from '../customers-02.jpg';
import articleImage4 from '../customers-03.jpg';
import articleImage5 from '../wof-hero.jpg';
import articleImage6 from '../target.png';

import authorAvatar1 from '../customer-avatar-02.jpg';
import authorAvatar2 from '../customer-avatar-03.jpg';
import authorAvatar3 from '../customers-03.jpg';
import CTASection from '../components/CTASection/CTASection';


const latestArticles = [
    {
        title: 'A sneak peek of the new Tidy Web Portal',
        description: 'Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt.',
        author: 'Knut Mayer',
        date: 'Sep 24, 2021',
        image: articleImage1,
        authorAvatar: authorAvatar1
    },
    {
        title: '40+ creative content ideas to post on your blog',
        description: 'Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt.',
        author: 'Samuel Regan',
        date: 'Sep 24, 2021',
        image: articleImage2,
        authorAvatar: authorAvatar2
    },
    {
        title: 'The best marketing channels to promote your products',
        description: 'Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt.',
        author: 'Fabian Centero',
        date: 'Sep 22, 2021',
        image: articleImage3,
        authorAvatar: authorAvatar3
    }
];

const popularArticles = [
    {
        title: 'Where to Post Remote Jobs for Developers for Free',
        description: 'Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt.',
        author: 'Knut Mayer',
        date: 'Sep 1, 2021',
        image: articleImage4,
        authorAvatar: authorAvatar1
    },
    {
        title: '4 Must-Know Skill to Be an Effective Leader',
        description: 'Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt.',
        author: 'Christina Brill',
        date: 'Jul 29, 2021',
        image: articleImage5,
        authorAvatar: authorAvatar2
    },
    {
        title: 'Remote founder stand-up with Mark Muller',
        description: 'Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt.',
        author: 'Alicia Muller',
        date: 'Jul 4, 2021',
        image: articleImage6,
        authorAvatar: authorAvatar3
    }
];

const productNewsArticles = [
    {
        title: 'How to level up your marketing strategy with Tidy Pro',
        description: 'Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt.',
        author: 'Alice Rossi',
        date: 'May 17, 2021',
        image: articleImage1, // Placeholder
        authorAvatar: authorAvatar1 // Placeholder
    },
    {
        title: 'Introducing the Tidy mentor Network',
        description: 'Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt.',
        author: 'Knut Mayer',
        date: 'Apr 14, 2021',
        image: articleImage2, // Placeholder
        authorAvatar: authorAvatar2 // Placeholder
    },
    {
        title: 'Elevating collaboration with Tidy and Google Workspace',
        description: 'Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt.',
        author: 'Christina Brill',
        date: 'Mar 4, 2021',
        image: articleImage3, // Placeholder
        authorAvatar: authorAvatar3 // Placeholder
    }
];

const Blog = () => {
  return (
    <>
    <Newsletter />
    <div className="blog-container">
      <header className="blog-header-nav">
        <nav className="blog-nav">
          <a href="#" className="nav-link active">Latest</a>
          <a href="#" className="nav-link">Popular</a>
          <a href="#" className="nav-link">Tips & Tricks</a>
          <a href="#" className="nav-link">Product</a>
          <a href="#" className="nav-link">Product news</a>
        </nav>
        <div className="search-icon">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 14.5L11.5 10.5" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 12C9.76142 12 12 9.76142 12 7C12 4.23858 9.76142 2 7 2C4.23858 2 2 4.23858 2 7C2 9.76142 4.23858 12 7 12Z" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </header>
      <main>
        <BlogPost />
        <h2>Latest</h2>
        <NewsSection title="Latest" articles={latestArticles} />
        <h2>Popular</h2>
        <NewsSection title="Popular" articles={popularArticles} />
        <div className="cta-section-container">
        <CTASection />
        </div>
        <h2>Product & News</h2>
        <NewsSection articles={productNewsArticles} showButton={true} />
      </main>
    </div>
    </>
  );
};

export default Blog;
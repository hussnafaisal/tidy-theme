import React from 'react';
import './Support.css';
import SupportHero from '../components/SupportHero/SupportHero';
import ArticleList from '../components/ArticleList/ArticleList';

const supportPageStyles = `
.article-list-container {
  max-width: 80%;
  position: relative;
  z-index: 10;
  margin: 60px auto;   
  display: flex;  
  align-items: center;  
  flex-direction: column;
  gap: 20px;
  padding: 0 20px;
  }
  
  .article-card {
  text-align: left;
  background-color: #fff;
  border: 1px solid #e2e8f0;
  box-shadow: 3px 3px 8px 3px rgba(0, 0, 0, 0.17);
  padding: 25px;
  width: 100%;  
  height: 100%;
  display: flex;
  align-items: flex-start;
  gap: 25px;
  transition: box-shadow 0.2s, transform 0.2s;
}

.article-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.article-icon {
  font-size: 1.5rem;
  color: #3b82f6;
}
.article-content h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 10px;
}

.article-content p {
  font-size: 1rem;
  color: #718096;
  margin: 0 0 15px;
  line-height: 1.6;
}

.article-meta {
  display: flex;
  align-items: center;
  gap: 10px;
}

.author-avatars {
  display: flex;
}

.author-avatars img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid #fff;
  margin-left: -10px;
}

.author-avatars img:first-child {
  margin-left: 0;
}

.article-meta span {
  font-size: 0.875rem;
  color: #718096;
}
`;

const Support = () => {
  return (
    <>
      <style>{supportPageStyles}</style>
      <SupportHero />
      <ArticleList />
    </>
  );
};

export default Support;
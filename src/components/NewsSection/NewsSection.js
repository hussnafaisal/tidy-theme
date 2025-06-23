import React from 'react';
import './NewsSection.css';

const NewsSection = ({ articles = [], showButton = false }) => {
    return (
        <div className="news-section-wrapper">
            <div className="news-grid">
                {articles.map((article, index) => (
                    <div key={index} className="news-card">
                        <img src={article.image} alt={article.title} className="news-card-image" />
                        <div className="news-card-content">
                            <h3 className="news-card-title">{article.title}</h3>
                            <p className="news-card-description">{article.description}</p>
                            <div className="news-card-meta">
                                <img src={article.authorAvatar} alt={article.author} className="author-avatar" />
                                <span>{article.author}</span>
                                <span>·</span>
                                <span>{article.date}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {showButton && (
                <div className="see-all-container">
                    <button className="see-all-button">
                        See All Articles <span>&rarr;</span>
                    </button>
                </div>
            )}
        </div>
    );
};

export default NewsSection; 
import React from 'react';
import './ArticleList.css';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { FaSeedling, FaHandHoldingUsd, FaAward, FaCode, FaUsers } from 'react-icons/fa';

const articleData = [
  {
    icon: <FaSeedling />,
    title: 'Getting Started with Tidy',
    description: 'New to Tidy or feeling a little lost? Start here :)',
    authors: ['/images/avatar-1.jpg', '/images/avatar-2.jpg', '/images/avatar-3.jpg'],
    meta: '4 Articles written by Anna L., and 2 others',
  },
  {
    icon: <FaHandHoldingUsd />,
    title: 'Account Access and Billing',
    description: 'Managing your account; upgrading, downgrading and cancellations, payments, etc.',
    authors: ['/images/avatar-1.jpg', '/images/avatar-2.jpg', '/images/avatar-3.jpg'],
    meta: '7 Articles written by Anna L., and 2 others',
  },
  {
    icon: <FaAward />,
    title: 'Best Practices',
    description: 'Practical platform tips and recommendations.',
    authors: ['/images/avatar-4.jpg', '/images/avatar-2.jpg', '/images/avatar-3.jpg'],
    meta: '2 Articles written by Kevin P., and 2 others',
  },
  {
    icon: <FaCode />,
    title: 'API',
    description: "Find the most commonly asked questions about Tidy's API",
    authors: ['/images/avatar-1.jpg'],
    meta: '2 Articles written by Anna L.',
  },
  {
    icon: <FaUsers />,
    title: 'Other Tools',
    description: 'Tutorials, FAQs and best practices with tools like Tidy Pro, Tidy Tracker, and more.',
    authors: ['/images/avatar-1.jpg', '/images/avatar-2.jpg', '/images/avatar-3.jpg'],
    meta: '5 Articles written by Anna L., and 2 others',
  },
];

const ArticleList = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div ref={ref} className={`article-list-container animate-on-scroll ${isVisible ? 'is-visible' : ''}`}>
        {articleData.map((article, index) => (
            <div key={index} className="article-card">
                <div className="article-icon">{article.icon}</div>
                <div className="article-content">
                    <h3>{article.title}</h3>
                    <p>{article.description}</p>
                    <div className="article-meta">
                        <div className="author-avatars">
                            {article.authors.map((avatar, i) => (
                                <img key={i} src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${i + 10}.jpg`} alt={`author ${i + 1}`} />
                            ))}
                        </div>
                        <span>{article.meta}</span>
                    </div>
                </div>
            </div>
        ))}
    </div>
  );
};

export default ArticleList; 
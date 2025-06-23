import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
            <div className="navbar-container">
                <div className="navbar-left">
                    <ul className="nav-menu">
                        <li className="nav-item">
                        <NavLink to="/home" className="nav-links" onClick={handleLinkClick}>
                                Home
                            </NavLink>
                            </li>
                            <li className="nav-item">
                            
                            <NavLink to="/pricing" className="nav-links" onClick={handleLinkClick}>
                                Pricing
                            </NavLink>
                        </li>
                    
                        <li className="nav-item">
                            <NavLink to="/blog" className="nav-links" onClick={handleLinkClick}>
                                Blog
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/wall-of-love" className="nav-links" onClick={handleLinkClick}>
                                Wall of Love
                            </NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <button className="nav-links dropdown-toggle" onClick={toggleDropdown} aria-expanded={isOpen}>
                                Resources 
                                <svg className="dropdown-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 4L6 8L2 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                            {isOpen && (
                                <ul className="dropdown-menu">
                                    <li><NavLink to="/support" className="dropdown-link" onClick={handleLinkClick}>Support</NavLink></li>
                                    <li><NavLink to="/404" className="dropdown-link" onClick={handleLinkClick}>404</NavLink></li>
                                </ul>
                            )}
                        </li>
                    </ul>
                </div>
                <div className="navbar-right">
                    <NavLink to="/signin" className="nav-links-btn" onClick={handleLinkClick}>
                        Sign in
                    </NavLink>
                    <Link to="/request-demo" className="nav-links-btn btn-primary" onClick={handleLinkClick}>
                        Request Demo
                        <svg className="arrow-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M3.33301 8H12.6663" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                           <path d="M8 3.33301L12.6667 7.99967L8 12.6663" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar; 
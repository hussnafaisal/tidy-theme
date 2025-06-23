import React from 'react';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-container">
      {/* Left Side */}
      <div className="login-left">
        <div className="brand-logo">🔷</div>
        <h2>Sign in to Tidy</h2>

        <button className="google-btn">Login with Google</button>
        <button className="facebook-btn">Login with Facebook</button>

        <div className="separator">
          <hr /><span>or</span><hr />
        </div>

        <form>
          <label>Email *</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Password *</label>
          <input type="password" placeholder="Enter your password" required />

          <button type="submit" className="sign-in-btn">Sign In →</button>
        </form>

        <a href="#" className="forgot-link">Forgot your password?</a>
      </div>

      {/* Right Side */}
      <div className="login-right">
        <div className="testimonial">
          <h2>The Wealth Inc.</h2>
          <p>
            <i className="quote">“</i>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur e xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
          </p>
          <div className="author">
            <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="user" />
            <span><strong>Michael Crob</strong> · CEO, The Wealth Inc.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

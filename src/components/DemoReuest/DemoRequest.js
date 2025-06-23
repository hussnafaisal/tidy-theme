  import React from 'react';
import './DemoRequest.css';

const DemoRequest = () => {
  return (
    <div className="demo-container">
      {/* Left side */}
      <div className="demo-left">
        <div className="brand-logo">🔷</div>
        <h2>Request your demo</h2>

        <form>
          <label>Email *</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Contact Name *</label>
          <input type="text" placeholder="Enter your name" required />

          <div className="row">
            <div>
              <label>City *</label>
              <input type="text" required />
            </div>
            <div>
              <label>Postal Code *</label>
              <input type="text" required />
            </div>
          </div>

          <label>Street Address *</label>
          <input type="text" placeholder="123 Main St" required />

          <label>Country *</label>
          <select required>
            <option>United States</option>
            <option>Pakistan</option>
            <option>Canada</option>
            <option>India</option>
            <option>Other</option>
          </select>

          <button type="submit" className="submit-btn">Submit →</button>

          <div className="consent">
            <input type="checkbox" id="consent" required />
            <label htmlFor="consent">
              By filling out this form, I consent to the collection and use of my information.
            </label>
          </div>
        </form>
      </div>

      {/* Right side */}
      <div className="demo-right">
        <div className="testimonial">
          <h2>Black Inc.</h2>
          <p>
            <i className="quote">“</i>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur e xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
          </p>
          <div className="author">
            <img src="https://randomuser.me/api/portraits/women/52.jpg" alt="user" />
            <span><strong>Christine Duck</strong> · CEO, Black Inc.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoRequest;

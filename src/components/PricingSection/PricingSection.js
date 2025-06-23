import React, { useState } from 'react';
import './PricingSection.css';
import { FaCheck } from 'react-icons/fa';

const monthlyPlans = [
  {
    name: 'Essential',
    price: '$49',
    description: 'Better insights for growing businesses that want more customers.',
    features: [
      '50 Placeholder text commonly',
      'Consectetur adipiscing elit',
      'Excepteur sint occaecat cupidatat',
      'Officia deserunt mollit anim',
    ],
  },
  {
    name: 'Premium',
    price: '$79',
    description: 'Better insights for growing businesses that want more customers.',
    features: [
      'All features of Essential plus:',
      '100 placeholder text commonly',
      'Consectetur adipiscing elit',
      'Excepteur sint occaecat cupidatat',
      'Officia deserunt mollit anim',
      'Placeholder text commonly used',
    ],
    popular: true,
  },
  {
    name: 'Advanced',
    price: '$129',
    description: 'Better insights for growing businesses that want more customers.',
    features: [
      'All features of Essential plus:',
      '200 placeholder text commonly',
      'Consectetur adipiscing elit',
      'Excepteur sint occaecat cupidatat',
      'Officia deserunt mollit anim',
      'Voluptate velit esse cillum',
      'Placeholder text commonly used',
    ],
  },
];

const yearlyPlans = [
  {
    name: 'Essential',
    price: '$55',
    description: 'Better insights for growing businesses that want more customers.',
    features: [
      '50 Placeholder text commonly',
      'Consectetur adipiscing elit',
      'Excepteur sint occaecat cupidatat',
      'Officia deserunt mollit anim',
    ],
  },
  {
    name: 'Premium',
    price: '$85',
    description: 'Better insights for growing businesses that want more customers.',
    features: [
      'All features of Essential plus:',
      '100 placeholder text commonly',
      'Consectetur adipiscing elit',
      'Excepteur sint occaecat cupidatat',
      'Officia deserunt mollit anim',
      'Placeholder text commonly used',
    ],
    popular: true,
  },
  {
    name: 'Advanced',
    price: '$135',
    description: 'Better insights for growing businesses that want more customers.',
    features: [
        'All features of Essential plus:',
        '200 placeholder text commonly',
        'Consectetur adipiscing elit',
        'Excepteur sint occaecat cupidatat',
        'Officia deserunt mollit anim',
        'Voluptate velit esse cillum',
        'Placeholder text commonly used',
    ],
  },
];

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = isYearly ? yearlyPlans : monthlyPlans;

  return (
    <section className="pricing-section">
      <div className="container">
        <h2 className="pricing-title">Find the right plan for your <br /> business</h2>
        <div className="toggle-container">
          <span>Pay Monthly</span>
          <label className="switch">
            <input type="checkbox" checked={isYearly} onChange={() => setIsYearly(!isYearly)} />
            <span className="slider round"></span>
          </label>
          <span>Pay Yearly (-20%)</span>
        </div>
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <h3>{plan.name}</h3>
              <div className="price">
                {plan.price}
                <span>/mo</span>
              </div>
              <p className="plan-description">{plan.description}</p>
              <ul className="features-list">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <FaCheck className="check-icon" /> {feature}
                  </li>
                ))}
              </ul>
              <button className=" ta-button">
                Start free trial <span>&rarr;</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

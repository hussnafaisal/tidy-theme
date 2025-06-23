import React from 'react';
import './TestimonialGrid.css';

const testimonials = [
  {
    name: 'Patrick Hills',
    title: 'CEO, Acme Inc.',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    quote: 'Tidy has been the system to drive change in collaboration on content for our organisation.',
  },
  {
    name: 'Jeff Wong',
    title: 'CEO, Acme Inc.',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    quote: 'Tidy has been the system to drive change in collaboration on content for our organisation.',
  },
  {
    name: 'Amy Tolinski',
    title: 'CEO, Acme Inc.',
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    quote: 'Tidy has been the system to drive change in collaboration on content for our organisation.',
  },
  {
    name: 'Chris Mallard',
    title: 'CEO, Acme Inc.',
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
    quote: 'Tidy has been the system to drive change in collaboration on content for our organisation.',
  },
  {
    name: 'Cathie Wood',
    title: 'CEO, Acme Inc.',
    avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
    quote: 'Tidy has been the system to drive change in collaboration on content for our organisation.',
  },
  {
    name: 'Mary Duncan',
    title: 'CEO, Acme Inc.',
    avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    quote: 'Tidy has been the system to drive change in collaboration on content for our organisation.',
  },
];

const TestimonialGrid = () => {
  return (
    <section className="testimonial-grid-section">
      <h2 className="testimonial-grid-title">
        What our customers are saying about us
      </h2>
      <div className="testimonial-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="card-header">
              <img src={testimonial.avatar} alt={testimonial.name} className="card-avatar" />
              <div className="card-quote-icon">“</div>
              <span className="card-company">Acme Inc.</span>
            </div>
            <p className="card-quote">{testimonial.quote}</p>
            <div className="card-author">
              <strong>{testimonial.name} · <span>{testimonial.title}</span></strong>
             
            </div>
          </div>
        ))}
      </div>
      <button className="see-all-btn">See All Customers →</button>
    </section>
  );
};

export default TestimonialGrid;
import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="testimonials" style={{ paddingTop: '150px', minHeight: '80vh' }}>
      <div className="container">
        <div className="section-header reveal active">
          <div className="badge">TESTIMONIALS</div>
          <h1 className="section-title">What Our Clients <span className="gradient-text">Say About Us</span></h1>
          <p className="section-desc">Don't just take our word for it. Hear from the brands we've helped elevate.</p>
        </div>

        <div className="testimonial-carousel reveal active" style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          
          <div className="testimonial-card glass-panel" style={{ padding: '3rem' }}>
            <Quote className="quote-icon" style={{ top: '1.5rem', left: '1.5rem' }} />
            <p className="testimonial-text" style={{ fontSize: '1.1rem' }}>"Pentableu completely transformed our digital presence. Their strategic approach to our social media and website redesign led to a 150% increase in lead generation within just three months."</p>
            <div className="client-info">
              <div className="client-avatar"></div>
              <div>
                <h4 className="client-name">Sarah Jenkins</h4>
                <p className="client-role">Marketing Director, TechFlow</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card glass-panel" style={{ padding: '3rem' }}>
            <Quote className="quote-icon" style={{ top: '1.5rem', left: '1.5rem' }} />
            <p className="testimonial-text" style={{ fontSize: '1.1rem' }}>"The photography and videography team captured the essence of our brand perfectly. The content they delivered was breathtaking and highly engaging for our audience."</p>
            <div className="client-info">
              <div className="client-avatar" style={{ background: 'var(--accent-1)' }}></div>
              <div>
                <h4 className="client-name">Marcus Cole</h4>
                <p className="client-role">Founder, Elevate Retail</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;

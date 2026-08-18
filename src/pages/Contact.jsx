import React from 'react';
import { Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="contact" style={{ paddingTop: '150px' }}>
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info reveal active">
            <div className="badge">CONTACT US</div>
            <h2 className="section-title">Ready to Elevate <br/>Your <span className="gradient-text">Brand?</span></h2>
            <p className="section-desc">Let's discuss how we can help you achieve your digital goals.</p>
            
            <div className="contact-methods">
              <div className="method">
                <Mail />
                <span>hello@pentableu.in</span>
              </div>
              <div className="method">
                <MapPin />
                <span>Mumbai, India</span>
              </div>
            </div>
          </div>
          
          <div className="contact-form-wrapper glass-panel reveal active">
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="john@example.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="4" placeholder="How can we help?" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

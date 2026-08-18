import React from 'react';

const About = () => {
  return (
    <section className="hero" style={{ minHeight: '60vh', paddingTop: '150px' }}>
      <div className="container">
        <div className="section-header reveal active">
          <div className="badge">ABOUT US</div>
          <h1 className="section-title">We are <span className="gradient-text">Pentableu.</span></h1>
          <p className="section-desc">We are a passionate team of creators, strategists, and technologists dedicated to building brands that stand out in the digital world.</p>
        </div>
        
        <div className="glass-panel about-story-panel">
          <h2>Our Story</h2>
          <p className="about-story-text">
            Founded over a decade ago, Pentableu started as a small content creation studio. Today, we've grown into a full-service digital agency helping brands across the globe achieve their highest potential through innovative marketing, stunning visuals, and cutting-edge web development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

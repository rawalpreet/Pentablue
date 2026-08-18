import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Smartphone, Camera, BarChart, LayoutTemplate, Quote } from 'lucide-react';
import Hero3DObject from '../components/Hero3DObject';

const Reveal = ({ children, delay = 0 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>
  );
};

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', alignItems: 'center', gap: '4rem' }}>
          <Reveal>
            <div className="hero-content">
              <div className="badge">OVER A DECADE OF EXCELLENCE</div>
              <h1 className="hero-title">Building Brands<br/>That <span className="gradient-text">Stand Out.</span></h1>
              <p className="hero-subtitle">
                Pentableu has helped brands grow through strategy, creativity, content, and experiences that leave a lasting impact.
              </p>
              <div className="hero-actions">
                <Link to="/services" className="btn btn-primary">Explore Our Work</Link>
                <Link to="/contact" className="btn btn-secondary">Get in Touch <ArrowRight className="icon-sm" /></Link>
              </div>
            </div>
          </Reveal>
          
          <Reveal delay={0.2}>
            <div className="hero-3d-wrapper">
              <Hero3DObject />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="banner">
        <div className="container">
          <Reveal>
            <div className="glass-panel banner-panel">
              <div className="stat">
                <h3>10+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>200+</h3>
                <p>Brands Elevated</p>
              </div>
              <div className="stat">
                <h3>15+</h3>
                <p>Industry Awards</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services">
        <div className="container">
          <Reveal>
            <div className="section-header">
              <h2 className="section-title">A Decade of Building <span className="gradient-text">Brands That Matter</span></h2>
              <p className="section-desc">To create your own digital world, you need to start with content creation and digital marketing. We've got it all for you under one roof.</p>
            </div>
          </Reveal>

          <div className="services-grid">
            <Reveal delay={0}>
              <div className="service-card">
                <div className="service-icon"><Smartphone /></div>
                <h3 className="service-title">Social Media Marketing</h3>
                <p className="service-desc">From content and campaigns to reels and community engagement, we create social media strategies that build brands and deliver measurable growth.</p>
                <Link to="/services" className="service-link">Learn More <ArrowRight className="icon-sm" /></Link>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="service-card">
                <div className="service-icon"><Camera /></div>
                <h3 className="service-title">Photography & Videography</h3>
                <p className="service-desc">Bring your brand to life with compelling photography and cinematic videos crafted for hospitality, retail, corporate brands, and digital campaigns.</p>
                <Link to="/services" className="service-link">Learn More <ArrowRight className="icon-sm" /></Link>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="service-card">
                <div className="service-icon"><BarChart /></div>
                <h3 className="service-title">SEO Services</h3>
                <p className="service-desc">Boost your online visibility with data-driven SEO strategies that improve rankings, drive qualified traffic, and turn searches into business opportunities.</p>
                <Link to="/services" className="service-link">Learn More <ArrowRight className="icon-sm" /></Link>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="service-card">
                <div className="service-icon"><LayoutTemplate /></div>
                <h3 className="service-title">Website Development</h3>
                <p className="service-desc">Create a website that looks exceptional and performs even better with responsive design, seamless user experience, and conversion-focused development.</p>
                <Link to="/services" className="service-link">Learn More <ArrowRight className="icon-sm" /></Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <Reveal>
            <div className="section-header">
              <div className="badge">TESTIMONIALS</div>
              <h2 className="section-title">What Our Clients <span className="gradient-text">Say About Us</span></h2>
            </div>
          </Reveal>

          <Reveal>
            <div className="testimonial-carousel">
              <div className="testimonial-card glass-panel">
                <Quote className="quote-icon" />
                <p className="testimonial-text">"Pentableu completely transformed our digital presence. Their strategic approach to our social media and website redesign led to a 150% increase in lead generation within just three months."</p>
                <div className="client-info">
                  <div className="client-avatar"></div>
                  <div>
                    <h4 className="client-name">Sarah Jenkins</h4>
                    <p className="client-role">Marketing Director, TechFlow</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Home;

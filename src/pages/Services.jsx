import { motion } from 'framer-motion';
import { Smartphone, Camera, BarChart2, LayoutTemplate, CheckCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const services = [
  {
    id: 'smm',
    icon: <Smartphone size={40} />,
    title: 'Social Media Marketing',
    color: '#00f0ff',
    tagline: 'Conversations that Convert',
    desc: 'We craft data-driven, creative social media strategies that build community, spark engagement, and deliver measurable ROI. From daily content to full-scale viral campaigns—we handle it all.',
    perks: ['Platform strategy & setup', 'Monthly content calendar', 'Reel & story creation', 'Community management', 'Paid ad campaigns', 'Monthly analytics reports'],
    cta: 'Book a Social Media Consultation',
  },
  {
    id: 'photo',
    icon: <Camera size={40} />,
    title: 'Photography & Videography',
    color: '#8a2be2',
    tagline: 'Visuals That Stop the Scroll',
    desc: 'Our creative team brings your brand to life through compelling photography and cinematic video production. Tailored for hospitality, retail, corporate brands, and digital-first campaigns.',
    perks: ['Studio & on-location shoots', 'Product photography', 'Corporate headshots', 'Brand films & reels', 'Drone videography', 'Post-production editing'],
    cta: 'Book a Creative Shoot',
  },
  {
    id: 'seo',
    icon: <BarChart2 size={40} />,
    title: 'SEO Services',
    color: '#00d084',
    tagline: 'Get Found, Stay Found',
    desc: 'We build sustainable search engine visibility with technical SEO, keyword strategy, and authoritative content. Turn organic traffic into real business growth.',
    perks: ['Full SEO audit & roadmap', 'Keyword research & mapping', 'On-page & technical SEO', 'Link building strategy', 'Local SEO & Google Maps', 'Monthly ranking reports'],
    cta: 'Get a Free SEO Audit',
  },
  {
    id: 'web',
    icon: <LayoutTemplate size={40} />,
    title: 'Website Development',
    color: '#fcb900',
    tagline: 'Your Best Salesperson, Online 24/7',
    desc: 'We design and develop high-performance websites that look stunning, load fast, and convert visitors into customers. From landing pages to full e-commerce platforms.',
    perks: ['Custom UI/UX design', 'Mobile-first, responsive builds', 'E-commerce development', 'Speed & performance optimization', 'CMS integration', 'Ongoing support & maintenance'],
    cta: 'Build Your Brand Website',
  },
];

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Wait for the page to render then scroll
      const timer = setTimeout(() => {
        const el = document.getElementById(location.hash.replace('#', ''));
        if (el) {
          const offset = el.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top: offset, behavior: 'smooth' });
        }
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [location.hash]);

  return (
    <div style={{ paddingTop: '120px', paddingBottom: '6rem' }}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '6rem' }}
        >
          <div className="badge">OUR SERVICES</div>
          <h1 className="section-title">Everything You Need to <span className="gradient-text">Succeed Online</span></h1>
          <p className="section-desc">Comprehensive digital solutions designed to grow your brand at every stage.</p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
          {services.map((service, i) => (
            <motion.div
              key={i}
              id={service.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className={`services-zigzag ${i % 2 !== 0 ? 'reverse' : ''}`}
            >
              {/* Visual Panel */}
              <div
                className="glass-panel service-visual-panel"
                style={{
                  background: `linear-gradient(135deg, ${service.color}11, ${service.color}22)`,
                  border: `1px solid ${service.color}33`,
                }}
              >
                <div style={{ color: service.color }} className="service-visual-icon">{service.icon}</div>
                <h2 className="service-visual-title" style={{
                  background: `linear-gradient(135deg, #fff, ${service.color})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  {service.title}
                </h2>
              </div>

              {/* Content */}
              <div style={{ direction: 'ltr' }}>
                <div className="badge" style={{ borderColor: `${service.color}44`, color: service.color, background: `${service.color}11` }}>
                  {service.tagline}
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: 1.8 }}>
                  {service.desc}
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.5rem', listStyle: 'none' }}>
                  {service.perks.map((perk, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                      <CheckCircle size={18} style={{ color: service.color, flexShrink: 0 }} />
                      {perk}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn-primary">{service.cta}</Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Responsive fix */}
      <style>{`
        @media (max-width: 768px) {
          .services-zigzag { grid-template-columns: 1fr !important; direction: ltr !important; }
        }
      `}</style>
    </div>
  );
};

export default Services;

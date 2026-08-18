import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  { id: 1, title: 'Elevate Retail', category: 'Branding & Photography', color: '#00f0ff', desc: 'Full brand identity and product photography for a leading retail chain.' },
  { id: 2, title: 'TechFlow', category: 'Web Development & SEO', color: '#8a2be2', desc: 'Custom-built website and a comprehensive SEO campaign driving 150% more leads.' },
  { id: 3, title: 'Dine Mumbai', category: 'Social Media Marketing', color: '#ff6b6b', desc: 'End-to-end social media management that grew their following by 10x in 6 months.' },
  { id: 4, title: 'PureForm Studios', category: 'Videography', category2: 'Photography', color: '#f7c59f', desc: 'Cinematic brand films and product shoots for a premium wellness brand.' },
  { id: 5, title: 'Atlas Corp', category: 'SEO & Content', color: '#00d084', desc: 'Achieved Page 1 Google rankings for 50+ high-value keywords in 4 months.' },
  { id: 6, title: 'NovaBrew', category: 'Full Digital Suite', color: '#fcb900', desc: 'Complete digital transformation: branding, website, socials, and photography.' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
};

const Portfolio = () => {
  return (
    <section style={{ paddingTop: '150px', paddingBottom: '6rem' }}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '4rem' }}
        >
          <div className="badge">OUR WORK</div>
          <h1 className="section-title">Work That <span className="gradient-text">Speaks for Itself</span></h1>
          <p className="section-desc">A curated selection of brands we have helped grow, scale, and make unforgettable.</p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '2rem',
        }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ y: -12, scale: 1.02 }}
              className="glass-panel"
              style={{
                overflow: 'hidden',
                cursor: 'pointer',
                borderRadius: '20px',
              }}
            >
              {/* Image Placeholder */}
              <div style={{
                height: '220px',
                background: `linear-gradient(135deg, ${project.color}22, ${project.color}55)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                borderBottom: `1px solid ${project.color}33`,
              }}>
                <span style={{
                  fontSize: '3rem',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  color: project.color,
                  opacity: 0.4,
                  letterSpacing: '-2px',
                }}>
                  {project.title[0]}{project.title.split(' ')[1]?.[0] || ''}
                </span>
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: `${project.color}22`,
                  border: `1px solid ${project.color}44`,
                  borderRadius: '50px',
                  padding: '0.3rem 0.75rem',
                  fontSize: '0.75rem',
                  color: project.color,
                  fontWeight: 600,
                  letterSpacing: '1px',
                }}>
                  {project.category}
                </div>
              </div>

              {/* Card Content */}
              <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{project.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>{project.desc}</p>
                <a href="#" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: project.color,
                  fontWeight: 600,
                  fontSize: '0.9rem',
                }}>
                  View Case Study <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

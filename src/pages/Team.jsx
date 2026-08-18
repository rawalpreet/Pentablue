import { motion } from 'framer-motion';
import { Globe, ExternalLink } from 'lucide-react';

const team = [
  { name: 'Pratik', role: 'Founder & CEO', color: '#00f0ff', bio: 'A decade of brand-building across digital and physical touchpoints. Visionary leader with a passion for impactful storytelling.' },
  { name: 'Arjun Mehta', role: 'Creative Director', color: '#8a2be2', bio: 'Award-winning creative with a knack for visual narratives that resonate. Expert in photography, film, and brand identity.' },
  { name: 'Sneha Kapoor', role: 'Head of Digital Marketing', color: '#00d084', bio: 'Data-driven marketer with a creative soul. Specialist in SEO, paid media, and scaling social media brands from zero to viral.' },
  { name: 'Rohan Sharma', role: 'Lead Web Developer', color: '#fcb900', bio: 'Full-stack developer who bridges design and technology. Builds blazing-fast, pixel-perfect websites that convert.' },
  { name: 'Aisha Khan', role: 'Content Strategist', color: '#ff6b6b', bio: 'Master wordsmith and content architect. Crafts compelling copy and editorial strategies that drive organic growth.' },
  { name: 'Dev Patel', role: 'Videographer', color: '#a8e6cf', bio: 'Cinematic storyteller with expertise in brand films, product reels, and immersive digital content for modern audiences.' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
};

const Team = () => {
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
          <div className="badge">THE TEAM</div>
          <h1 className="section-title">The Minds Behind <span className="gradient-text">the Magic</span></h1>
          <p className="section-desc">A passionate team of creators, strategists, and technologists united by a mission to build brands that matter.</p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
        }}>
          {team.map((member, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ y: -10, borderColor: member.color }}
              className="glass-panel team-card"
              style={{
                padding: '2.5rem',
                borderRadius: '20px',
                transition: 'border-color 0.3s ease',
                borderColor: 'rgba(255,255,255,0.08)',
              }}
            >
              {/* Avatar */}
              <motion.div
                className="team-avatar"
                whileHover={{ scale: 1.05 }}
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${member.color}, ${member.color}55)`,
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.8rem',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  color: '#fff',
                  boxShadow: `0 0 25px ${member.color}44`,
                }}
              >
                {member.name.split(' ').map(n => n[0]).join('')}
              </motion.div>

              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.25rem' }}>{member.name}</h3>
              <p style={{ color: member.color, fontSize: '0.85rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1rem' }}>
                {member.role}
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {member.bio}
              </p>

              {/* Social Links */}
              <div className="team-socials" style={{ display: 'flex', gap: '0.75rem' }}>
                <a href="#" className="team-social-link" style={{
                  width: '36px', height: '36px', borderRadius: '50%',
                  background: 'rgba(255,255,255,0.05)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text-secondary)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  transition: 'all 0.3s ease', fontSize: '0.7rem', fontWeight: 700,
                }}>
                  in
                </a>
                <a href="#" className="team-social-link" style={{
                  width: '36px', height: '36px', borderRadius: '50%',
                  background: 'rgba(255,255,255,0.05)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text-secondary)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  transition: 'all 0.3s ease',
                }}>
                  <Globe size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

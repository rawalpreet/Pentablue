import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Smartphone, Camera, BarChart2, LayoutTemplate } from 'lucide-react';

const servicesDropdown = [
  { icon: <Smartphone size={18} />, label: 'Social Media Marketing', path: '/services#smm', desc: 'Content, campaigns & community' },
  { icon: <Camera size={18} />, label: 'Photography & Videography', path: '/services#photo', desc: 'Cinematic brand visuals' },
  { icon: <BarChart2 size={18} />, label: 'SEO Services', path: '/services#seo', desc: 'Rank higher, grow faster' },
  { icon: <LayoutTemplate size={18} />, label: 'Website Development', path: '/services#web', desc: 'Beautiful, high-performance sites' },
];

const MainLayout = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">

          {/* Logo */}
          <Link to="/" className="logo">
            <span className="logo-text">PENTABLEU</span>
            <span className="logo-dot">.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="nav-links">
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
            <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>About</Link>

            {/* Services Dropdown */}
            <div
              className="nav-dropdown-wrapper"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link
                to="/services"
                className={`nav-link nav-link-dropdown ${isActive('/services') ? 'active' : ''}`}
              >
                Services <ChevronDown size={14} className={`dropdown-chevron ${dropdownOpen ? 'open' : ''}`} />
              </Link>

              {/* Mega Dropdown Panel */}
              <div className={`dropdown-panel glass-panel ${dropdownOpen ? 'dropdown-visible' : ''}`}>
                <div className="dropdown-grid">
                  {servicesDropdown.map((item, i) => (
                    <Link key={i} to={item.path} className="dropdown-item" onClick={() => setDropdownOpen(false)}>
                      <div className="dropdown-item-icon">{item.icon}</div>
                      <div>
                        <p className="dropdown-item-label">{item.label}</p>
                        <p className="dropdown-item-desc">{item.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/work" className={`nav-link ${isActive('/work') ? 'active' : ''}`}>Our Work</Link>
            <Link to="/team" className={`nav-link ${isActive('/team') ? 'active' : ''}`}>Team</Link>
            <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>Contact</Link>
          </nav>

          {/* CTA */}
          <Link to="/signup" className="btn btn-primary nav-cta">Sign Up</Link>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            aria-label="Toggle Menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="mobile-menu glass-panel">
            <Link to="/" className="mobile-nav-link">Home</Link>
            <Link to="/about" className="mobile-nav-link">About</Link>
            <Link to="/services" className="mobile-nav-link">Services</Link>
            <Link to="/work" className="mobile-nav-link">Our Work</Link>
            <Link to="/testimonials" className="mobile-nav-link">Testimonials</Link>
            <Link to="/team" className="mobile-nav-link">Team</Link>
            <Link to="/contact" className="mobile-nav-link">Contact</Link>
            <Link to="/signup" className="btn btn-primary" style={{ marginTop: '1rem', textAlign: 'center' }}>Sign Up</Link>
          </div>
        )}
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container footer-container">
          <div className="footer-brand">
            <Link to="/" className="logo">
              <span className="logo-text">PENTABLEU</span>
              <span className="logo-dot">.</span>
            </Link>
            <p>Building Brands That Stand Out.</p>
          </div>
          <nav style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            <Link to="/about" className="nav-link" style={{ fontSize: '0.9rem' }}>About</Link>
            <Link to="/services" className="nav-link" style={{ fontSize: '0.9rem' }}>Services</Link>
            <Link to="/work" className="nav-link" style={{ fontSize: '0.9rem' }}>Our Work</Link>
            <Link to="/contact" className="nav-link" style={{ fontSize: '0.9rem' }}>Contact</Link>
          </nav>
          <div className="footer-links">
            <a href="#">IG</a>
            <a href="#">LI</a>
            <a href="#">TW</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Pentableu. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default MainLayout;

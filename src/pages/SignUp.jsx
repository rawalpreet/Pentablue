import React from 'react';

const SignUp = () => {
  return (
    <section className="contact" style={{ paddingTop: '150px', minHeight: '80vh' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
        
        <div className="contact-form-wrapper glass-panel reveal active" style={{ maxWidth: '500px', width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
              Join <span className="gradient-text">Pentableu</span>
            </h2>
            <p className="section-desc">Create an account to manage your projects and access exclusive resources.</p>
          </div>

          {/* Social Logins */}
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
            <button className="btn btn-secondary w-100" style={{ justifyContent: 'center' }}>Google</button>
            <button className="btn btn-secondary w-100" style={{ justifyContent: 'center' }}>GitHub</button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', margin: '2rem 0' }}>
            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
            <span style={{ padding: '0 1rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>or continue with email</span>
            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
          </div>

          {/* Email Form */}
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="John Doe" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="john@example.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="••••••••" required />
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              <input type="checkbox" id="terms" required style={{ width: 'auto' }} />
              <label htmlFor="terms" style={{ margin: 0 }}>I agree to the Terms & Conditions</label>
            </div>

            <button type="submit" className="btn btn-primary w-100" style={{ justifyContent: 'center' }}>Create Account</button>
          </form>

          <p style={{ textAlign: 'center', marginTop: '1.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Already have an account? <a href="#" style={{ color: 'var(--accent-1)' }}>Log in</a>
          </p>
        </div>

      </div>
    </section>
  );
};

export default SignUp;

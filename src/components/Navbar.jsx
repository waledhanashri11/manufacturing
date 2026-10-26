import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import {
  Wrench,
  Droplets,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Sun,
  Moon,
  ArrowRight
} from 'lucide-react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('ss_theme') || 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('ss_theme', theme)
  }, [theme])

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <>
      {/* REFINED ENTERPRISE TOP BAR */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-left">
            <span className="top-address-text">
              <MapPin size={13} className="text-accent" />
              <span>S&S Corporation, C Block, Pramukh Sangam, Samarvarni, Silvasaa, Dadra & Nagar Haveli</span>
            </span>
          </div>

          <div className="top-bar-right">
            <span className="top-meta-badge">sascorporation.com</span>
            <span className="top-divider">|</span>
            <a href="tel:+919561240625" className="top-contact-link">
              <Phone size={12} className="text-amber" />
              <span>+91 95612 40625</span>
            </a>
            <span className="top-divider">|</span>
            <a href="mailto:sandscorporationpvtltd@gmail.com" className="top-contact-link" title="Corporate & Division Emails">
              <Mail size={12} className="text-cyan" />
              <span>sandscorporationpvtltd@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* MODERN EXECUTIVE MAIN NAVBAR */}
      <header className="navbar">
        <div className="container">
          <div className="nav-content">
            {/* BRAND LOGO & IDENTITY */}
            <Link to="/" className="brand-logo-wrap">
              <div className="brand-logo-frame">
                <img src="/logo.jpg" alt="S&S Logo" className="brand-logo-img" />
              </div>
              <div className="brand-text">
                <span className="brand-name">S&S CORPORATION</span>
                <span className="brand-sub">Engineering & Water Chemistry</span>
              </div>
            </Link>

            {/* UNIFIED EXECUTIVE NAVIGATION LINKS */}
            <nav className="nav-links">
              <NavLink
                to="/"
                end
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Home
              </NavLink>

              <NavLink
                to="/engineering"
                className={({ isActive }) => `nav-link nav-link-division ${isActive ? 'active active-eng-link' : ''}`}
              >
                <span className="division-dot dot-eng"></span>
                <span>S&S Engineering</span>
              </NavLink>

              <NavLink
                to="/chemicals"
                className={({ isActive }) => `nav-link nav-link-division ${isActive ? 'active active-chem-link' : ''}`}
              >
                <span className="division-dot dot-chem"></span>
                <span>AquaCorp Chemicals</span>
              </NavLink>

              <NavLink
                to="/industries"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Industries
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                About Firm
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Contact
              </NavLink>
            </nav>

            {/* RIGHT SIDE ACTIONS: THEME TOGGLE + PRIMARY CTA */}
            <div className="nav-actions">
              {/* Minimalist Theme Switcher */}
              <button
                type="button"
                className="theme-icon-btn"
                onClick={toggleTheme}
                title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <Moon size={16} />
                ) : (
                  <Sun size={16} />
                )}
              </button>

              {/* Primary High-Impact CTA */}
              <Link to="/contact" className="nav-cta-btn">
                <span>Request Quote</span>
                <ArrowRight size={13} />
              </Link>

              {/* Mobile Hamburger Toggle */}
              <button
                className="mobile-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE NAVIGATION DRAWER */}
        {mobileMenuOpen && (
          <div className="mobile-nav-drawer">
            <div className="mobile-drawer-header">
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Display Mode:</span>
              <button type="button" className="theme-toggle-btn" onClick={toggleTheme}>
                {theme === 'light' ? <><Moon size={14} /> Dark Theme</> : <><Sun size={14} /> Light Theme</>}
              </button>
            </div>

            <div className="mobile-drawer-links">
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                🏢 Corporate Home
              </Link>

              <div className="mobile-division-group">
                <span className="mobile-group-title">Dedicated Business Pages:</span>
                <Link
                  to="/engineering"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mobile-division-item item-eng"
                >
                  <Wrench size={16} />
                  <div>
                    <strong>S&S Engineering Solutions</strong>
                    <small>Piping, Vessels, Automation & Turnkey EPC</small>
                  </div>
                </Link>

                <Link
                  to="/chemicals"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mobile-division-item item-chem"
                >
                  <Droplets size={16} />
                  <div>
                    <strong>AquaCorp Chemicals</strong>
                    <small>Boiler, Cooling, RO & ETP Treatment</small>
                  </div>
                </Link>
              </div>

              <Link to="/industries" onClick={() => setMobileMenuOpen(false)}>
                🏭 Target Industries
              </Link>
              <Link to="/about" onClick={() => setMobileMenuOpen(false)}>
                ℹ️ About S&S Corporation
              </Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                📞 Contact & RFQ
              </Link>
            </div>

            <div className="mobile-drawer-footer">
              <div><strong>Address:</strong> S&S Corporation, C Block, Pramukh Sangam, Samarvarni, Silvasaa, Dadra & Nagar Haveli</div>
              <div style={{ marginTop: '0.4rem' }}><strong>Direct:</strong> <a href="tel:+919561240625">+91 95612 40625</a></div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

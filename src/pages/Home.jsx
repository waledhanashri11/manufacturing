import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Wrench,
  Droplets,
  Building2,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Layers,
  Activity,
  Flame,
  Snowflake,
  Filter,
  Send,
  Sparkles,
  Cog,
  Gauge
} from 'lucide-react'

export default function Home() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    division: 'Both / Turnkey Solution',
    notes: ''
  })

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => {
      setFormSubmitted(false)
      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        division: 'Both / Turnkey Solution',
        notes: ''
      })
    }, 6000)
  }

  return (
    <div className="page-home">
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-bg-layer"></div>
        <div className="hero-grid-pattern"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge-wrap">
              <div className="hero-badge">
                <span className="pulse-dot"></span>
                <span>Proprietorship Firm • Incorporated June 2022</span>
              </div>
              <div className="hero-badge" style={{ borderColor: 'var(--eng-border-subtle)', color: 'var(--eng-primary)' }}>
                <Sparkles size={14} />
                <span>Single-Window Mechanical & Chemical EPC</span>
              </div>
            </div>

            <h1 className="hero-title">
              Powering Modern Industry with <br />
              <span className="gradient-text-gold">Turnkey Engineering</span> & <br />
              <span className="gradient-text-cyan">Specialty Water Chemistry</span>
            </h1>

            <p className="hero-subtitle">
              <strong>S&S Corporation</strong> unites heavy industrial manufacturing and plant engineering with high-performance water treatment chemical formulations across two dedicated businesses. Select a business below to visit its dedicated page:
            </p>

            {/* DUAL DIVISION DEDICATED PORTAL CARDS */}
            <div className="dual-cards-grid">
              {/* DIVISION 1: S&S Engineering */}
              <div className="division-card eng-card">
                <div className="card-img-header">
                  <img
                    src="https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=800&q=80"
                    alt="Industrial Piping & Plant Engineering"
                  />
                  <div className="card-img-overlay">
                    <span className="division-pill pill-eng">Mechanical & Automation</span>
                    <span style={{ fontSize: '0.8rem', color: '#fbbf24', fontWeight: 600 }}>Business Unit 01</span>
                  </div>
                </div>

                <div className="card-body">
                  <div>
                    <h3 className="card-title">S&S Engineering Solutions</h3>
                    <p className="card-desc">
                      Turnkey plant erection, high-pressure piping headers, custom reaction tanks, modular pump skids, and PLC/SCADA automation.
                    </p>
                    <ul className="feature-bullets">
                      <li><CheckCircle2 size={16} color="#f59e0b" /> Process Piping (SS304/SS316 & MS Utility Lines)</li>
                      <li><CheckCircle2 size={16} color="#f59e0b" /> Pressure Vessels, Reactor Tanks & Storage Skids</li>
                      <li><CheckCircle2 size={16} color="#f59e0b" /> AODD Pumps, Metering Pumps & Pneumatic Valves</li>
                      <li><CheckCircle2 size={16} color="#f59e0b" /> PLC/HMI Automation & Batch Control Integration</li>
                    </ul>
                  </div>
                  <Link to="/engineering" className="card-cta-btn btn-eng-solid">
                    Visit S&S Engineering Page <ArrowRight size={17} />
                  </Link>
                </div>
              </div>

              {/* DIVISION 2: AquaCorp Chemicals */}
              <div className="division-card chem-card">
                <div className="card-img-header">
                  <img
                    src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80"
                    alt="Cooling Tower & Water Chemistry"
                  />
                  <div className="card-img-overlay">
                    <span className="division-pill pill-chem">Water & Process Chemistry</span>
                    <span style={{ fontSize: '0.8rem', color: '#38bdf8', fontWeight: 600 }}>Business Unit 02</span>
                  </div>
                </div>

                <div className="card-body">
                  <div>
                    <h3 className="card-title">AquaCorp Chemicals</h3>
                    <p className="card-desc">
                      Formulator and provider of advanced specialty water treatment chemicals, membrane antiscalants, and effluent remediation solutions.
                    </p>
                    <ul className="feature-bullets">
                      <li><CheckCircle2 size={16} color="#38bdf8" /> Boiler Treatment: Oxygen Scavengers & Sludge Conditioners</li>
                      <li><CheckCircle2 size={16} color="#38bdf8" /> Cooling Towers: Anti-Scalants, Biocides & Biodispersants</li>
                      <li><CheckCircle2 size={16} color="#38bdf8" /> RO Systems: High-Silica Antiscalants & Membrane Cleaners</li>
                      <li><CheckCircle2 size={16} color="#38bdf8" /> ETP / STP: Coagulants, Flocculants & Decoloring Blends</li>
                    </ul>
                  </div>
                  <Link to="/chemicals" className="card-cta-btn btn-chem-solid">
                    Visit AquaCorp Chemicals Page <ArrowRight size={17} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* STATS BAR */}
        <div className="stats-bar">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">2022</span>
                <span className="stat-label">Incorporated & Certified</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">2</span>
                <span className="stat-label">Dedicated Business Pages</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Single-Window Execution</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">Silvassa</span>
                <span className="stat-label">Industrial Hub Base</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SYNERGY HIGHLIGHT */}
      <section className="section section-alt-bg">
        <div className="container">
          <div className="section-header">
            <span className="section-tag section-tag-neutral">The S&S Advantage</span>
            <h2 className="section-title">Why Integrated Mechanical & Chemical Engineering Wins</h2>
            <p className="section-desc">
              Conventional plants face constant finger-pointing between equipment fabricators and chemical suppliers. S&S Corporation resolves this friction by designing the physical pipeline infrastructure and formulating the treatment chemistry together.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-card-body">
                <div style={{ color: 'var(--eng-primary)', marginBottom: '1rem' }}><Layers size={32} /></div>
                <h3 className="service-title">Unified Hardware & Fluid Compatibility</h3>
                <p className="service-text">
                  Our mechanical team fabricates piping using metallurgy (SS316, Hastelloy, PTFE lined) calibrated to withstand the exact chemical formulations applied by AquaCorp.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-card-body">
                <div style={{ color: 'var(--chem-primary)', marginBottom: '1rem' }}><Cpu size={32} /></div>
                <h3 className="service-title">Automated Dosing Integration</h3>
                <p className="service-text">
                  Rather than manual chemical pouring, S&S Engineering manufactures custom dosing skids with PLC logic that feeds AquaCorp chemicals based on real-time pH and ORP sensors.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-card-body">
                <div style={{ color: 'var(--accent-emerald)', marginBottom: '1rem' }}><ShieldCheck size={32} /></div>
                <h3 className="service-title">Single Point of Accountability</h3>
                <p className="service-text">
                  One vendor from preliminary CAD P&ID layout and pipeline erection to chemical commissioning, water lab analysis, and ongoing facility maintenance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TARGET INDUSTRIES */}
      <section id="industries" className="section section-main-bg">
        <div className="container">
          <div className="section-header">
            <span className="section-tag section-tag-neutral">Applications & Sectors</span>
            <h2 className="section-title">Industries We Serve</h2>
            <p className="section-desc">
              Serving industrial manufacturing facilities across Silvassa, Vapi, Gujarat, Maharashtra, and pan-India.
            </p>
          </div>

          <div className="industries-grid">
            <div className="industry-card">
              <div className="industry-icon"><Layers size={24} /></div>
              <h4 className="industry-name">Paints, Resins & Inks</h4>
              <p className="industry-desc">Pumping skids, automated batch pigment reactors, and solvent recovery.</p>
            </div>

            <div className="industry-card">
              <div className="industry-icon"><Droplets size={24} /></div>
              <h4 className="industry-name">Chemical Processing</h4>
              <p className="industry-desc">Corrosion-resistant piping, reaction vessels, and neutralizing chemistry.</p>
            </div>

            <div className="industry-card">
              <div className="industry-icon"><Flame size={24} /></div>
              <h4 className="industry-name">Thermal Power & Utilities</h4>
              <p className="industry-desc">High-pressure steam boiler water conditioning and cooling tower circuits.</p>
            </div>

            <div className="industry-card">
              <div className="industry-icon"><Activity size={24} /></div>
              <h4 className="industry-name">Pharmaceuticals</h4>
              <p className="industry-desc">Purified water RO membrane chemicals, sanitized piping, and CIP skids.</p>
            </div>

            <div className="industry-card">
              <div className="industry-icon"><Cog size={24} /></div>
              <h4 className="industry-name">Textiles & Dyeing</h4>
              <p className="industry-desc">Color removal, high-COD wastewater treatment, and automated chemical dosing.</p>
            </div>

            <div className="industry-card">
              <div className="industry-icon"><Building2 size={24} /></div>
              <h4 className="industry-name">Ceramics & Minerals</h4>
              <p className="industry-desc">Slurry transfer pumping networks, settling tanks, and flocculation chemistry.</p>
            </div>

            <div className="industry-card">
              <div className="industry-icon"><ShieldCheck size={24} /></div>
              <h4 className="industry-name">Packaging & Polymers</h4>
              <p className="industry-desc">Chilled water loop treatment, extrusion line cooling, and automation.</p>
            </div>

            <div className="industry-card">
              <div className="industry-icon"><Filter size={24} /></div>
              <h4 className="industry-name">Water & ETP Plants</h4>
              <p className="industry-desc">Turnkey ETP/STP setup, clarifier piping, and zero liquid discharge (ZLD).</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT S&S CORPORATION */}
      <section id="about" className="section section-alt-bg">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <span className="section-tag section-tag-neutral">Corporate Overview</span>
              <h2 className="section-title">The Story of S&S Corporation</h2>
              <p>
                <strong>S&S Corporation</strong> was established in June 2022 as a registered proprietorship enterprise under the visionary leadership of Premnath Singh. Operating from the prominent manufacturing corridor of Silvassa in Dadra & Nagar Haveli, we bridge a critical gap in industrial execution.
              </p>
              <p>
                With two dedicated wings—<strong>S&S Engineering Solutions</strong> for physical plant erection, piping, and automation, and <strong>AquaCorp Chemicals</strong> for specialty water and process treatment formulations—we provide an unmatched single-window experience.
              </p>

              <div className="about-highlights">
                <div className="highlight-item">
                  <div className="highlight-title">Proprietorship Firm</div>
                  <div className="highlight-sub">Led by Premnath Singh with hands-on industrial focus</div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-title">Government Registered</div>
                  <div className="highlight-sub">MSME UDYAM & GST Registered Industrial Entity</div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-title">Dual Business Synergy</div>
                  <div className="highlight-sub">Mechanical hardware and chemical formulations aligned</div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-title">On-Site Technical Audits</div>
                  <div className="highlight-sub">Direct field inspections, water sampling, and EPC design</div>
                </div>
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <div
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-card)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '2.5rem',
                  boxShadow: 'var(--shadow-card)'
                }}
              >
                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                  <div className="brand-logo-frame" style={{ width: '80px', height: '64px', margin: '0 auto 1rem' }}>
                    <img src="/logo.jpg" alt="S&S Corporation Monogram" className="brand-logo-img" />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-heading)' }}>S&S CORPORATION</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Registered Industrial & Technical Services Enterprise</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Incorporation:</span>
                    <strong style={{ color: 'var(--text-heading)' }}>01 / 06 / 2022</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                    <span style={{ color: 'var(--text-muted)' }}>GSTIN:</span>
                    <strong style={{ color: 'var(--chem-primary)' }}>26EOKPS6065H1ZD</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                    <span style={{ color: 'var(--text-muted)' }}>UDYAM Reg:</span>
                    <strong style={{ color: 'var(--eng-primary)' }}>UDYAM-DN-01-0005998</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                    <span style={{ color: 'var(--text-muted)' }}>NIC 5-Digit:</span>
                    <strong style={{ color: 'var(--text-heading)' }}>71100 (Engineering & Technical Consultancy)</strong>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', fontSize: '0.9rem', marginTop: '0.5rem', background: 'var(--bg-card-nested)', padding: '0.85rem', borderRadius: '8px', borderLeft: '4px solid var(--eng-primary)' }}>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.775rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Official Address:</span>
                    <strong style={{ color: 'var(--text-heading)', fontSize: '0.875rem', lineHeight: '1.45' }}>
                      S&S Corporation, C Block, Pramukh Sangam, Samarvarni, Silvasaa, Dadra & Nagar Haveli
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT & QUOTATION SECTION */}
      <section id="contact" className="section section-main-bg">
        <div className="container">
          <div className="section-header">
            <span className="section-tag section-tag-neutral">Direct Inquiries</span>
            <h2 className="section-title">Connect with S&S Corporation</h2>
            <p className="section-desc">
              Request a detailed technical quote, arrange an on-site water quality assessment, or discuss turnkey engineering projects with our specialists.
            </p>
          </div>

          <div className="contact-grid">
            {/* Interactive Form */}
            <div className="contact-form-box">
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--text-heading)' }}>
                Submit a Commercial / Technical Request
              </h3>

              <form onSubmit={handleFormSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Company / Plant Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Select Division / Service Interest *</label>
                  <select
                    value={formData.division}
                    onChange={(e) => setFormData({ ...formData, division: e.target.value })}
                  >
                    <option value="S&S Engineering Solutions">S&S Engineering Solutions (Piping, Tanks, Automation, EPC)</option>
                    <option value="AquaCorp Chemicals">AquaCorp Chemicals (Boiler, Cooling Tower, RO, ETP Formulations)</option>
                    <option value="Both / Turnkey Solution">Both Divisions (Integrated Turnkey Project)</option>
                    <option value="On-Site Water Audit">On-Site Industrial Water & System Audit</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Project Scope or Chemical Specifications</label>
                  <textarea
                    rows="4"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="form-submit-btn">
                  <Send size={18} /> Send Inquiry to S&S Corporation
                </button>

                {formSubmitted && (
                  <div className="toast-success">
                    <CheckCircle2 size={18} />
                    <span>Thank you! Your request has been dispatched to S&S Corporation. We will contact you promptly at {formData.phone || 'your phone number'}.</span>
                  </div>
                )}
              </form>
            </div>

            {/* Contact Details & Mandatory Official Address */}
            <div className="contact-info-cards">
              {/* Mandatory Official Address Card */}
              <div className="info-card official-address-highlight">
                <div className="info-icon" style={{ background: 'var(--eng-bg-subtle)', color: 'var(--eng-primary)' }}>
                  <MapPin size={22} />
                </div>
                <div>
                  <div className="info-title">Registered Office Address</div>
                  <div className="info-val">
                    S&S Corporation, C Block, Pramukh Sangam, Samarvarni, Silvasaa, Dadra & Nagar Haveli
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
                    PIN: 396230 • DNH & DD, India
                  </div>
                </div>
              </div>

              {/* Direct Phone Card */}
              <div className="info-card">
                <div className="info-icon">
                  <Phone size={22} />
                </div>
                <div>
                  <div className="info-title">Commercial & Technical Support</div>
                  <a href="tel:+919561240625" className="info-val" style={{ color: 'var(--chem-primary)' }}>
                    +91 95612 40625
                  </a>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                    Monday – Saturday (9:00 AM – 7:00 PM IST)
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="info-card">
                <div className="info-icon">
                  <Mail size={22} />
                </div>
                <div>
                  <div className="info-title">Official Correspondence</div>
                  <a href="mailto:sandscorporationpvtltd@gmail.com" className="info-val" style={{ color: 'var(--chem-primary)', wordBreak: 'break-all' }}>
                    sandscorporationpvtltd@gmail.com
                  </a>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                    Direct response within 24 business hours
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action */}
              <a
                href="https://wa.me/919561240625?text=Hello%20S%26S%20Corporation%2C%20I%20would%20like%20to%20inquire%20about%20your%20Engineering%20Solutions%20and%20AquaCorp%20Chemicals."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  color: '#ffffff',
                  padding: '1rem 1.5rem',
                  borderRadius: 'var(--radius-lg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.65rem',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)',
                  transition: 'all 0.25s ease'
                }}
              >
                <Activity size={18} /> Chat Directly on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

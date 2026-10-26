import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  ChevronRight,
  Clock,
  ShieldCheck,
  Building2,
  Activity,
  MessageSquare,
  Copy,
  Check,
  ExternalLink,
  Sparkles,
  Wrench,
  Droplets
} from 'lucide-react'

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [copiedAddress, setCopiedAddress] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    division: 'Both Divisions / Turnkey Project',
    location: '',
    services: ['Turnkey Industrial Piping'],
    notes: ''
  })

  const availableServices = [
    'Turnkey Industrial Piping',
    'Process Vessels & Tanks',
    'Plant Automation & SCADA',
    'Boiler Water Chemicals',
    'Cooling Tower Treatment',
    'RO Antiscalants & Cleaners',
    'ETP / Wastewater Treatment',
    'On-Site Water Audit'
  ]

  const toggleService = (srv) => {
    setFormData(prev => {
      const exists = prev.services.includes(srv)
      return {
        ...prev,
        services: exists
          ? prev.services.filter(s => s !== srv)
          : [...prev.services, srv]
      }
    })
  }

  const handleCopyAddress = () => {
    navigator.clipboard.writeText('S&S Corporation, C Block, Pramukh Sangam, Samarvarni, Silvasaa, Dadra & Nagar Haveli, PIN: 396230')
    setCopiedAddress(true)
    setTimeout(() => setCopiedAddress(false), 2500)
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('sandscorporationpvtltd@gmail.com')
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2500)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => {
      setFormSubmitted(false)
      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        division: 'Both Divisions / Turnkey Project',
        location: '',
        services: ['Turnkey Industrial Piping'],
        notes: ''
      })
    }, 6000)
  }

  return (
    <div className="page-contact">
      {/* PAGE HERO BANNER */}
      <section className="division-hero" style={{
        background: 'linear-gradient(rgba(15, 23, 42, 0.88), rgba(15, 23, 42, 0.96)), url("https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '4.5rem 0 3.5rem',
        borderBottom: '1px solid var(--border-subtle)',
        color: '#ffffff'
      }}>
        <div className="container">
          <div style={{ maxWidth: '850px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '0.85rem' }}>
              <Link to="/" style={{ color: '#cbd5e1' }}>S&S Corporation</Link>
              <ChevronRight size={14} />
              <span style={{ color: '#38bdf8', fontWeight: 600 }}>Contact & RFQ</span>
            </div>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(2, 132, 199, 0.2)', border: '1px solid rgba(2, 132, 199, 0.45)', padding: '0.35rem 0.9rem', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 700, color: '#38bdf8', marginBottom: '1.15rem' }}>
              <Phone size={14} /> Commercial Inquiries & Technical Support
            </div>

            <h1 style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1.15, marginBottom: '1rem', color: '#ffffff' }}>
              Connect with S&S Corporation
            </h1>

            <p style={{ fontSize: '1.15rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '0' }}>
              Get in touch with our engineering estimators and water chemistry specialists. We provide itemized quotations and arrange direct plant visits across Silvassa, Vapi, and nationwide.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTACT & RFQ SECTION */}
      <section className="section section-main-bg" style={{ paddingBottom: '7rem' }}>
        <div className="container">
          <div className="contact-grid">
            {/* LEFT COLUMN: INTERACTIVE RFQ FORM */}
            <div className="contact-form-box" style={{ position: 'relative', overflow: 'hidden' }}>
              {/* Subtle division accent bar */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #f59e0b, #0284c7)' }}></div>

              <div style={{ marginBottom: '1.75rem' }}>
                <span className="section-tag section-tag-neutral" style={{ marginBottom: '0.5rem' }}>Itemized RFQ</span>
                <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--text-heading)', margin: '0.25rem 0 0.5rem' }}>
                  Request a Technical Proposal
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem' }}>
                  Share your plant requirements below. Our technical desk responds within 24 business hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">
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
                    <label>Company / Factory Name *</label>
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

                <div className="form-row">
                  <div className="form-group">
                    <label>Primary Business Unit *</label>
                    <select
                      value={formData.division}
                      onChange={(e) => setFormData({ ...formData, division: e.target.value })}
                    >
                      <option value="S&S Engineering Solutions">S&S Engineering Solutions (Piping, Tanks, Automation)</option>
                      <option value="AquaCorp Chemicals">AquaCorp Chemicals (Water Treatment Chemistry)</option>
                      <option value="Both Divisions / Turnkey Project">Both Divisions (Integrated Turnkey Project)</option>
                      <option value="On-Site Plant Audit">On-Site Industrial Plant & Water Audit</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Plant Location / Industrial Area</label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    />
                  </div>
                </div>

                {/* Service Requirement Chips */}
                <div className="form-group">
                  <label style={{ marginBottom: '0.4rem' }}>Select Specific Scope of Interest:</label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {availableServices.map((srv) => {
                      const selected = formData.services.includes(srv)
                      return (
                        <button
                          key={srv}
                          type="button"
                          onClick={() => toggleService(srv)}
                          style={{
                            padding: '0.4rem 0.75rem',
                            borderRadius: '6px',
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            border: selected ? '1px solid #0284c7' : '1px solid var(--border-subtle)',
                            background: selected ? 'var(--chem-bg-subtle)' : 'var(--bg-card-nested)',
                            color: selected ? 'var(--chem-primary)' : 'var(--text-muted)',
                            cursor: 'pointer',
                            transition: 'all 0.15s ease'
                          }}
                        >
                          {selected ? '✓ ' : '+ '} {srv}
                        </button>
                      )
                    })}
                  </div>
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
                  <Send size={18} /> Submit RFQ to S&S Corporation
                </button>

                {formSubmitted && (
                  <div className="toast-success">
                    <CheckCircle2 size={18} />
                    <span>Your quotation request has been recorded. Our engineering & chemical specialists will contact you at {formData.phone} shortly.</span>
                  </div>
                )}
              </form>
            </div>

            {/* RIGHT COLUMN: EXECUTIVE CONTACT & LOCATION CARDS */}
            <div className="contact-info-cards">
              {/* STRICT REGISTERED OFFICE ADDRESS CARD */}
              <div className="info-card official-address-highlight">
                <div className="info-icon" style={{ background: 'var(--eng-bg-subtle)', color: 'var(--eng-primary)' }}>
                  <MapPin size={24} />
                </div>
                <div style={{ flexGrow: 1 }}>
                  <div className="info-title">Official Registered Office</div>
                  <div className="info-val" style={{ fontSize: '1.05rem', lineHeight: '1.5' }}>
                    S&S Corporation, C Block, Pramukh Sangam, Samarvarni, Silvasaa, Dadra & Nagar Haveli
                  </div>
                  <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
                    PIN: 396230 • Dadra & Nagar Haveli and Daman & Diu, India
                  </div>

                  <div style={{ display: 'flex', gap: '0.65rem', marginTop: '0.85rem' }}>
                    <button
                      type="button"
                      onClick={handleCopyAddress}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontSize: '0.775rem',
                        fontWeight: 600,
                        padding: '0.3rem 0.65rem',
                        borderRadius: '6px',
                        background: 'var(--bg-card-nested)',
                        border: '1px solid var(--border-subtle)',
                        color: copiedAddress ? '#059669' : 'var(--text-muted)',
                        cursor: 'pointer'
                      }}
                    >
                      {copiedAddress ? <Check size={13} /> : <Copy size={13} />}
                      <span>{copiedAddress ? 'Address Copied!' : 'Copy Address'}</span>
                    </button>

                    <a
                      href="https://maps.google.com/?q=Pramukh+Sangam+Samarvarni+Silvassa"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontSize: '0.775rem',
                        fontWeight: 600,
                        padding: '0.3rem 0.65rem',
                        borderRadius: '6px',
                        background: 'var(--bg-card-nested)',
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--chem-primary)',
                        textDecoration: 'none'
                      }}
                    >
                      <ExternalLink size={13} />
                      <span>Google Maps</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* COMMERCIAL & TECHNICAL HOTLINE */}
              <div className="info-card">
                <div className="info-icon" style={{ background: 'var(--chem-bg-subtle)', color: 'var(--chem-primary)' }}>
                  <Phone size={24} />
                </div>
                <div style={{ flexGrow: 1 }}>
                  <div className="info-title">Commercial & Technical Hotline</div>
                  <a href="tel:+919561240625" className="info-val" style={{ color: 'var(--chem-primary)', fontSize: '1.25rem', fontWeight: 800 }}>
                    +91 95612 40625
                  </a>
                  <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                    Direct desk: Premnath Singh & Lead Engineers
                  </div>
                </div>
              </div>

              {/* DEDICATED EMAILS DIRECTORY */}
              <div className="info-card" style={{ flexDirection: 'column', alignItems: 'stretch', gap: '0.9rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem' }}>
                  <div className="info-icon" style={{ background: 'var(--chem-bg-subtle)', color: 'var(--chem-primary)' }}>
                    <Mail size={22} />
                  </div>
                  <div>
                    <div className="info-title">Division &amp; Corporate Emails</div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Official domain: <strong>sascorporation.com</strong></span>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {/* ENGINEERING EMAIL */}
                  <div style={{ background: 'var(--eng-bg-subtle)', border: '1px solid rgba(245, 158, 11, 0.25)', borderRadius: '8px', padding: '0.75rem 0.9rem' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--eng-primary)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.2rem' }}>
                      S&amp;S Engineering Solutions:
                    </div>
                    <a
                      href="mailto:engineering.solutions@sascorporation.com"
                      style={{ color: 'var(--text-heading)', fontWeight: 700, fontSize: '0.925rem', wordBreak: 'break-all', display: 'block' }}
                    >
                      engineering.solutions@sascorporation.com
                    </a>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Piping, skid drawings, automation &amp; RFQs</span>
                  </div>

                  {/* CHEMICALS EMAIL */}
                  <div style={{ background: 'var(--chem-bg-subtle)', border: '1px solid rgba(2, 132, 199, 0.25)', borderRadius: '8px', padding: '0.75rem 0.9rem' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--chem-primary)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.2rem' }}>
                      AquaCorp Chemicals:
                    </div>
                    <a
                      href="mailto:aquacorp@sascorporation.com"
                      style={{ color: 'var(--text-heading)', fontWeight: 700, fontSize: '0.925rem', wordBreak: 'break-all', display: 'block' }}
                    >
                      aquacorp@sascorporation.com
                    </a>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Water test reports, cooling tower &amp; boiler programs</span>
                  </div>

                  {/* CORPORATE / GENERAL EMAIL */}
                  <div style={{ background: 'var(--bg-card-nested)', border: '1px solid var(--border-card)', borderRadius: '8px', padding: '0.75rem 0.9rem' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.2rem' }}>
                      Corporate &amp; Administrative Desk:
                    </div>
                    <a
                      href="mailto:sandscorporationpvtltd@gmail.com"
                      style={{ color: 'var(--text-heading)', fontWeight: 700, fontSize: '0.925rem', wordBreak: 'break-all', display: 'block' }}
                    >
                      sandscorporationpvtltd@gmail.com
                    </a>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>General correspondence, billing &amp; vendor registration</span>
                  </div>
                </div>
              </div>

              {/* OPERATING HOURS CARD */}
              <div className="info-card">
                <div className="info-icon" style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#059669' }}>
                  <Clock size={24} />
                </div>
                <div>
                  <div className="info-title">Operating Hours</div>
                  <div className="info-val" style={{ fontSize: '0.95rem' }}>
                    Monday – Saturday: 9:00 AM – 7:00 PM IST
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                    Sunday: 24/7 Breakdown Hotline for AMC Contract Clients
                  </div>
                </div>
              </div>

              {/* DEDICATED WHATSAPP CARD */}
              <a
                href="https://wa.me/919561240625?text=Hello%20S%26S%20Corporation%2C%20I%20would%20like%20to%20inquire%20about%20your%20Engineering%20Solutions%20and%20AquaCorp%20Chemicals."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  color: '#ffffff',
                  padding: '1.1rem 1.5rem',
                  borderRadius: 'var(--radius-lg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  fontWeight: 700,
                  fontSize: '1rem',
                  boxShadow: '0 4px 16px rgba(16, 185, 129, 0.35)',
                  transition: 'all 0.25s ease',
                  textDecoration: 'none'
                }}
              >
                <MessageSquare size={20} />
                <span>Chat Directly with Us on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

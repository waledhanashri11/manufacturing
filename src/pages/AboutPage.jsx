import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Building2,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Send,
  ChevronRight,
  ArrowRight,
  Wrench,
  Droplets,
  Layers,
  Award,
  Users,
  Copy,
  Check,
  Clock,
  Compass,
  FileText,
  BadgeCheck,
  Gauge,
  Factory
} from 'lucide-react'

export default function AboutPage() {
  const [copiedGstin, setCopiedGstin] = useState(false)
  const [copiedUdyam, setCopiedUdyam] = useState(false)

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text)
    if (type === 'gstin') {
      setCopiedGstin(true)
      setTimeout(() => setCopiedGstin(false), 2500)
    } else {
      setCopiedUdyam(true)
      setTimeout(() => setCopiedUdyam(false), 2500)
    }
  }

  return (
    <div className="page-about">
      {/* PAGE HERO BANNER */}
      <section
        className="division-hero"
        style={{
          background:
            'linear-gradient(rgba(15, 23, 42, 0.90), rgba(15, 23, 42, 0.97)), url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1800&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '4.5rem 0 4rem',
          borderBottom: '1px solid var(--border-subtle)',
          color: '#ffffff'
        }}
      >
        <div className="container">
          <div className="about-hero-grid">
            {/* HERO LEFT COLUMN */}
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.85rem',
                  color: '#94a3b8',
                  marginBottom: '1rem'
                }}
              >
                <Link to="/" style={{ color: '#cbd5e1' }}>
                  S&S Corporation
                </Link>
                <ChevronRight size={14} />
                <span style={{ color: '#fbbf24', fontWeight: 600 }}>Corporate Profile</span>
              </div>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'rgba(245, 158, 11, 0.2)',
                  border: '1px solid rgba(245, 158, 11, 0.45)',
                  padding: '0.35rem 0.95rem',
                  borderRadius: '999px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: '#fbbf24',
                  marginBottom: '1.25rem',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase'
                }}
              >
                <Building2 size={15} /> Corporate Profile & Technical Credentials
              </div>

              <h1
                style={{
                  fontSize: '3rem',
                  fontWeight: 800,
                  lineHeight: 1.15,
                  marginBottom: '1.25rem',
                  color: '#ffffff'
                }}
              >
                Engineering Precision &amp; Process Chemistry Under One Roof
              </h1>

              <p
                style={{
                  fontSize: '1.15rem',
                  color: '#cbd5e1',
                  lineHeight: 1.65,
                  marginBottom: '2rem'
                }}
              >
                Founded on <strong>June 1, 2022</strong>, in Silvassa, <strong>S&S Corporation</strong> unites heavy industrial piping fabrication, ASME vessels, and SCADA automation with high-potency water treatment formulations. One unified firm eliminating vendor conflict for Indian manufacturers.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                <Link
                  to="/contact"
                  className="nav-cta"
                  style={{
                    background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                    color: '#000',
                    fontWeight: 700,
                    padding: '0.75rem 1.6rem',
                    fontSize: '0.95rem'
                  }}
                >
                  <Send size={16} /> Partner With S&S Team
                </Link>
                <a
                  href="tel:+919561240625"
                  className="nav-division-btn nav-btn-eng"
                  style={{ padding: '0.75rem 1.4rem', fontSize: '0.95rem' }}
                >
                  <Phone size={15} /> Call: +91 95612 40625
                </a>
              </div>

              {/* FAST ASSURANCE PILLS */}
              <div
                style={{
                  display: 'flex',
                  gap: '1.25rem',
                  flexWrap: 'wrap',
                  borderTop: '1px solid rgba(255, 255, 255, 0.12)',
                  paddingTop: '1.25rem',
                  fontSize: '0.875rem',
                  color: '#94a3b8'
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={16} color="#fbbf24" /> Single-Point EPC Accountability
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={16} color="#38bdf8" /> Custom Chemical Formulations
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={16} color="#10b981" /> Silvassa &amp; Vapi 24/7 Field Response
                </span>
              </div>
            </div>

            {/* HERO RIGHT COLUMN: CREDENTIAL BADGE CARD */}
            <div className="about-hero-card">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div className="brand-logo-frame" style={{ width: '48px', height: '48px', background: '#ffffff', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                    <img src="/logo.jpg" alt="S&S Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>S&S CORPORATION</h3>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Govt. Registered Industrial Firm
                    </span>
                  </div>
                </div>
                <span style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#34d399', padding: '0.25rem 0.65rem', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <BadgeCheck size={14} /> Active
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', fontSize: '0.875rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#cbd5e1' }}>
                  <span style={{ color: '#94a3b8' }}>Proprietor:</span>
                  <strong style={{ color: '#ffffff' }}>Premnath Singh</strong>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#cbd5e1' }}>
                  <span style={{ color: '#94a3b8' }}>Incorporated:</span>
                  <strong style={{ color: '#ffffff' }}>01 / 06 / 2022</strong>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#cbd5e1' }}>
                  <span style={{ color: '#94a3b8' }}>GSTIN:</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'monospace', fontWeight: 700, color: '#38bdf8' }}>
                    26EOKPS6065H1ZD
                  </span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#cbd5e1' }}>
                  <span style={{ color: '#94a3b8' }}>MSME UDYAM:</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'monospace', fontWeight: 700, color: '#fbbf24' }}>
                    UDYAM-DN-01-0005998
                  </span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#cbd5e1' }}>
                  <span style={{ color: '#94a3b8' }}>NIC Code:</span>
                  <strong style={{ color: '#ffffff' }}>71100 (Technical Consultancy)</strong>
                </div>

                <div style={{ background: 'rgba(0, 0, 0, 0.35)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '1rem', marginTop: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#f59e0b', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                    <MapPin size={14} /> Registered Address
                  </div>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: '#e2e8f0', lineHeight: 1.5 }}>
                    S&S Corporation, C Block, Pramukh Sangam, Samarvarni, Silvasaa, Dadra &amp; Nagar Haveli
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS & CREDENTIAL STRIP */}
      <section className="section-main-bg" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div className="about-metrics-bar">
            <div className="about-metric-item">
              <div className="about-metric-icon" style={{ background: 'var(--eng-bg-subtle)', color: 'var(--eng-primary)' }}>
                <Clock size={24} />
              </div>
              <div>
                <div style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-heading)', lineHeight: 1.1 }}>
                  June 2022
                </div>
                <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
                  Founded &amp; Registered in Silvassa
                </div>
              </div>
            </div>

            <div className="about-metric-item">
              <div className="about-metric-icon" style={{ background: 'var(--chem-bg-subtle)', color: 'var(--chem-primary)' }}>
                <Layers size={24} />
              </div>
              <div>
                <div style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-heading)', lineHeight: 1.1 }}>
                  2 Core Divisions
                </div>
                <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
                  Engineering EPC &amp; Water Chemistry
                </div>
              </div>
            </div>

            <div className="about-metric-item">
              <div className="about-metric-icon" style={{ background: 'rgba(16, 185, 129, 0.12)', color: 'var(--accent-emerald)' }}>
                <ShieldCheck size={24} />
              </div>
              <div>
                <div style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-heading)', lineHeight: 1.1 }}>
                  100% In-House
                </div>
                <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
                  Hydro-Testing &amp; Water Sampling
                </div>
              </div>
            </div>

            <div className="about-metric-item">
              <div className="about-metric-icon" style={{ background: 'rgba(236, 72, 153, 0.12)', color: '#ec4899' }}>
                <Compass size={24} />
              </div>
              <div>
                <div style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-heading)', lineHeight: 1.1 }}>
                  2-4 Hours
                </div>
                <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
                  Rapid On-Site DNH &amp; Gujarat Support
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXECUTIVE STORY & OFFICIAL VERIFIED CERTIFICATE */}
      <section className="section section-main-bg">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <span className="section-tag section-tag-neutral">Our Founding Story &amp; Vision</span>
              <h2 className="section-title">Bridging the Gap in Industrial Plant Execution</h2>
              <p>
                <strong>S&S Corporation</strong> was established on <strong>June 1, 2022</strong>, by founder and proprietor <strong>Premnath Singh</strong>. Headquartered in Samarvarni, Silvassa, the firm was created to solve a pervasive problem in Indian manufacturing: <em>the disconnect between mechanical equipment fabricators and water treatment chemical providers.</em>
              </p>
              <p>
                When a factory commissions a boiler, cooling tower, or RO filtration system, mechanical contractors construct the piping, vessels, and pump skids. Later, an independent chemical supplier provides water conditioners. If scaling, corrosion, biological slime, or pipe wall thinning occurs, both parties point fingers at each other.
              </p>
              <p>
                <strong>S&S Corporation changed this paradigm completely.</strong> By housing both engineering fabrication and water treatment chemistry under one roof, we provide end-to-end accountability. The team that designs your piping also formulates the exact antiscalants and biocides running inside it.
              </p>

              {/* TIMELINE STEPS */}
              <div style={{ marginTop: '2rem' }}>
                <div className="timeline-step">
                  <div className="timeline-badge" style={{ background: 'var(--eng-bg-subtle)', color: 'var(--eng-primary)' }}>
                    1
                  </div>
                  <div>
                    <h4 style={{ margin: '0 0 0.25rem', fontSize: '1rem', fontWeight: 700, color: 'var(--text-heading)' }}>
                      June 2022: Corporate Incorporation in Silvassa
                    </h4>
                    <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                      Premnath Singh founded S&S Corporation as a registered MSME entity at Pramukh Sangam, Samarvarni, Silvassa, delivering piping skids, pump installations, and mechanical fabrication for local industrial corridors.
                    </p>
                  </div>
                </div>

                <div className="timeline-step">
                  <div className="timeline-badge" style={{ background: 'var(--chem-bg-subtle)', color: 'var(--chem-primary)' }}>
                    2
                  </div>
                  <div>
                    <h4 style={{ margin: '0 0 0.25rem', fontSize: '1rem', fontWeight: 700, color: 'var(--text-heading)' }}>
                      Launch of AquaCorp Chemicals Division
                    </h4>
                    <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                      Expanded into specialty industrial formulations: corrosion inhibitors, scaling preventers, RO antiscalants, and wastewater coagulants tailored to local borehole and river water chemistries.
                    </p>
                  </div>
                </div>

                <div className="timeline-step">
                  <div className="timeline-badge" style={{ background: 'rgba(16, 185, 129, 0.15)', color: 'var(--accent-emerald)' }}>
                    3
                  </div>
                  <div>
                    <h4 style={{ margin: '0 0 0.25rem', fontSize: '1rem', fontWeight: 700, color: 'var(--text-heading)' }}>
                      Turnkey Automation &amp; Integrated EPC Delivery
                    </h4>
                    <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                      Integrated PLC/SCADA automated chemical dosing skids, motorized valve manifolds, and automated blowdown systems, giving clients unified control over mechanical assets and chemical consumption.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* OFFICIAL REGISTRATION CERTIFICATE CARD */}
            <div className="official-cert-card">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1.25rem' }}>
                <div>
                  <span className="cert-seal">
                    <BadgeCheck size={14} /> Official Government Registration
                  </span>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-heading)', marginTop: '0.5rem', marginBottom: '0.15rem' }}>
                    S&S CORPORATION
                  </h3>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    Proprietorship Firm • Government of India Registered
                  </span>
                </div>
                <div className="brand-logo-frame" style={{ width: '64px', height: '64px', background: 'var(--bg-card-nested)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src="/logo.jpg" alt="S&S Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
              </div>

              <div>
                <div className="cert-row">
                  <span style={{ color: 'var(--text-muted)' }}>Founder &amp; Proprietor</span>
                  <strong style={{ color: 'var(--text-heading)' }}>Premnath Singh</strong>
                </div>

                <div className="cert-row">
                  <span style={{ color: 'var(--text-muted)' }}>Date of Incorporation</span>
                  <strong style={{ color: 'var(--text-heading)' }}>01 / 06 / 2022</strong>
                </div>

                <div className="cert-row">
                  <span style={{ color: 'var(--text-muted)' }}>GSTIN Registration</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <code style={{ background: 'var(--chem-bg-subtle)', color: 'var(--chem-primary)', padding: '0.2rem 0.5rem', borderRadius: '4px', fontWeight: 700, fontSize: '0.85rem' }}>
                      26EOKPS6065H1ZD
                    </code>
                    <button
                      onClick={() => handleCopy('26EOKPS6065H1ZD', 'gstin')}
                      title="Copy GSTIN"
                      style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', display: 'flex', alignItems: 'center' }}
                    >
                      {copiedGstin ? <Check size={15} color="#10b981" /> : <Copy size={15} />}
                    </button>
                  </div>
                </div>

                <div className="cert-row">
                  <span style={{ color: 'var(--text-muted)' }}>MSME UDYAM Registration</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <code style={{ background: 'var(--eng-bg-subtle)', color: 'var(--eng-primary)', padding: '0.2rem 0.5rem', borderRadius: '4px', fontWeight: 700, fontSize: '0.85rem' }}>
                      UDYAM-DN-01-0005998
                    </code>
                    <button
                      onClick={() => handleCopy('UDYAM-DN-01-0005998', 'udyam')}
                      title="Copy UDYAM"
                      style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', display: 'flex', alignItems: 'center' }}
                    >
                      {copiedUdyam ? <Check size={15} color="#10b981" /> : <Copy size={15} />}
                    </button>
                  </div>
                </div>

                <div className="cert-row">
                  <span style={{ color: 'var(--text-muted)' }}>NIC 5-Digit Code</span>
                  <strong style={{ color: 'var(--text-heading)' }}>71100 (Technical Consultancy)</strong>
                </div>

                <div className="cert-row">
                  <span style={{ color: 'var(--text-muted)' }}>Enterprise Category</span>
                  <strong style={{ color: 'var(--text-heading)' }}>Micro (Services &amp; Engineering)</strong>
                </div>

                <div className="cert-row">
                  <span style={{ color: 'var(--text-muted)' }}>Official Email</span>
                  <strong style={{ color: 'var(--text-heading)' }}>sandscorporationpvtltd@gmail.com</strong>
                </div>

                <div className="cert-row">
                  <span style={{ color: 'var(--text-muted)' }}>Phone / WhatsApp</span>
                  <strong style={{ color: 'var(--text-heading)' }}>+91 95612 40625</strong>
                </div>

                {/* OFFICIAL ADDRESS BOX */}
                <div style={{ marginTop: '1.25rem', background: 'var(--bg-card-nested)', border: '1px solid var(--border-card)', borderRadius: '10px', padding: '1.1rem', borderLeft: '4px solid var(--eng-primary)' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>
                    Official Registered Address
                  </div>
                  <strong style={{ color: 'var(--text-heading)', fontSize: '0.9rem', lineHeight: 1.5, display: 'block' }}>
                    S&S Corporation, C Block, Pramukh Sangam, Samarvarni, Silvasaa, Dadra &amp; Nagar Haveli
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIC ADVANTAGE: SILVASSA INDUSTRIAL CORRIDOR */}
      <section className="section section-alt-bg">
        <div className="container">
          <div className="location-advantage-grid">
            <div>
              <span className="section-tag section-tag-neutral">Strategic Geographic Advantage</span>
              <h2 className="section-title">Headquartered in Silvassa: Direct Access to Western India's Industrial Belts</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                Dadra &amp; Nagar Haveli (Silvassa) is one of India's premier industrial growth zones, hosting hundreds of paper mills, chemical manufacturing plants, textile dye-houses, polymer extruders, and metal foundries.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Having our central fabrication yard and specialty chemical storehouse in Samarvarni, Silvassa gives S&S Corporation unmatched operational mobility. While distant vendors take days to mobilize, our technical engineers and chemical transport vehicles reach client plants in hours.
              </p>

              <div className="location-list">
                <div className="location-chip">
                  <MapPin size={18} color="var(--eng-primary)" />
                  <div>
                    <div>Vapi GIDC (Gujarat)</div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 400 }}>18 km • ~25 min transit</span>
                  </div>
                </div>

                <div className="location-chip">
                  <MapPin size={18} color="var(--chem-primary)" />
                  <div>
                    <div>Daman Industrial Area</div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 400 }}>30 km • ~40 min transit</span>
                  </div>
                </div>

                <div className="location-chip">
                  <MapPin size={18} color="var(--accent-emerald)" />
                  <div>
                    <div>Sarigam &amp; Umbergaon</div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 400 }}>35 km • ~45 min transit</span>
                  </div>
                </div>

                <div className="location-chip">
                  <MapPin size={18} color="#ec4899" />
                  <div>
                    <div>Surat &amp; Hazira Belt</div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 400 }}>110 km • ~2 hr transit</span>
                  </div>
                </div>
              </div>
            </div>

            {/* LOCATION HIGHLIGHT CARD */}
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-card)', borderRadius: 'var(--radius-xl)', padding: '2.5rem', boxShadow: 'var(--shadow-card)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--eng-bg-subtle)', color: 'var(--eng-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Factory size={24} />
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-heading)' }}>
                    Centralized Operations Facility
                  </h3>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    Samarvarni, Silvassa, Dadra &amp; Nagar Haveli
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.925rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <CheckCircle2 size={18} color="var(--eng-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'var(--text-heading)' }}>In-House Piping Fabrication Staging:</strong>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      Spool pre-fabrication, TIG/MIG pipe welding, and hydrostatic pressure testing prior to field delivery.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <CheckCircle2 size={18} color="var(--chem-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'var(--text-heading)' }}>Ready Inventory of Water Treatment Formulations:</strong>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      Maintained stock of boiler oxygen scavengers, biocides, antiscalants, and poly-electrolytes for same-day dispatch.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <CheckCircle2 size={18} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'var(--text-heading)' }}>Water Testing Analytical Laboratory:</strong>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      Conducting titration tests for total hardness, silica, chlorides, TDS, and pH to calculate precise Langelier Saturation Index (LSI).
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <CheckCircle2 size={18} color="#ec4899" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'var(--text-heading)' }}>Emergency Breakdown Response Squad:</strong>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      Mobile teams equipped with portable welders, hydrostatic testing pumps, and dosing spares for 24/7 client emergencies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE STANDARDS & OPERATIONAL PILLARS (6-CARD GRID) */}
      <section className="section section-main-bg">
        <div className="container">
          <div className="section-header">
            <span className="section-tag section-tag-neutral">Our Quality Benchmark</span>
            <h2 className="section-title">Six Pillars Guiding S&S Corporation</h2>
            <p className="section-desc">
              Every pipeline welded, pump skid automated, and chemical drum formulated complies with rigorous Indian and international industrial benchmarks.
            </p>
          </div>

          <div className="values-six-grid">
            <div className="service-card">
              <div className="service-card-body">
                <div style={{ color: 'var(--eng-primary)', marginBottom: '1rem' }}>
                  <Award size={32} />
                </div>
                <h3 className="service-title">ASME &amp; IBR Welding Precision</h3>
                <p className="service-text">
                  Certified TIG/MIG pipe welders executing ASME B31.3 process piping and IBR steam lines. Every spool undergoes 1.5x hydrostatic pressure testing and non-destructive dye-penetrant checks.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-card-body">
                <div style={{ color: 'var(--chem-primary)', marginBottom: '1rem' }}>
                  <ShieldCheck size={32} />
                </div>
                <h3 className="service-title">Proprietary Water Chemistry</h3>
                <p className="service-text">
                  Formulated with high-potency organo-phosphonates, film-forming polyamines, and oxidizing biocides engineered specifically to inhibit scale and biofouling in high-heat industrial circuits.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-card-body">
                <div style={{ color: 'var(--accent-emerald)', marginBottom: '1rem' }}>
                  <Users size={32} />
                </div>
                <h3 className="service-title">Proprietor-Led Accountability</h3>
                <p className="service-text">
                  Led directly by founder Premnath Singh, guaranteeing hands-on project governance, strict timeline adherence, and transparent commercial commitments without multi-tiered bureaucracy.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-card-body">
                <div style={{ color: '#ec4899', marginBottom: '1rem' }}>
                  <Gauge size={32} />
                </div>
                <h3 className="service-title">Zero Liquid Discharge (ZLD) Focus</h3>
                <p className="service-text">
                  High-recovery RO antiscalants (operating up to 85% water recovery) and specialized de-coloring coagulants helping regional factories meet strict GPCB &amp; CPCB environmental norms.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-card-body">
                <div style={{ color: '#8b5cf6', marginBottom: '1rem' }}>
                  <Wrench size={32} />
                </div>
                <h3 className="service-title">Turnkey Single-Point Responsibility</h3>
                <p className="service-text">
                  We supply both the mechanical hardware (metering pumps, stainless mixing skids, automated valves) and the chemical reagents, eliminating third-party compatibility disputes forever.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-card-body">
                <div style={{ color: '#06b6d4', marginBottom: '1rem' }}>
                  <Clock size={32} />
                </div>
                <h3 className="service-title">24/7 Rapid Regional Deployment</h3>
                <p className="service-text">
                  Centrally located in Silvassa, our service vehicles and field technicians are deployed within hours to assist with sudden pipe leaks, chemical dosing anomalies, or urgent plant shutdowns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPLORE OUR TWO DEDICATED BUSINESSES */}
      <section className="section section-alt-bg">
        <div className="container">
          <div className="section-header">
            <span className="section-tag section-tag-neutral">Our Operations</span>
            <h2 className="section-title">Explore Our Two Dedicated Businesses</h2>
            <p className="section-desc">
              Visit the dedicated standalone pages for each of our core operating divisions:
            </p>
          </div>

          <div className="dual-cards-grid">
            <div className="division-card eng-card">
              <div className="card-img-header">
                <img
                  src="https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=800&q=80"
                  alt="S&S Engineering Solutions"
                />
                <div className="card-img-overlay">
                  <span className="division-pill pill-eng">Mechanical &amp; Automation</span>
                </div>
              </div>
              <div className="card-body">
                <div>
                  <h3 className="card-title">S&S Engineering Solutions</h3>
                  <p className="card-desc">
                    Process piping (SS304/SS316/MS), ASME reaction vessels, modular chemical dosing skids, AODD &amp; progressive cavity pumps, automated valves, and turnkey plant EPC erection.
                  </p>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', margin: '1rem 0 1.5rem' }}>
                    <span style={{ fontSize: '0.75rem', background: 'var(--bg-card-nested)', padding: '0.25rem 0.65rem', borderRadius: '4px', border: '1px solid var(--border-subtle)' }}>Process Piping</span>
                    <span style={{ fontSize: '0.75rem', background: 'var(--bg-card-nested)', padding: '0.25rem 0.65rem', borderRadius: '4px', border: '1px solid var(--border-subtle)' }}>Modular Skids</span>
                    <span style={{ fontSize: '0.75rem', background: 'var(--bg-card-nested)', padding: '0.25rem 0.65rem', borderRadius: '4px', border: '1px solid var(--border-subtle)' }}>PLC / SCADA</span>
                    <span style={{ fontSize: '0.75rem', background: 'var(--bg-card-nested)', padding: '0.25rem 0.65rem', borderRadius: '4px', border: '1px solid var(--border-subtle)' }}>Industrial Pumps</span>
                  </div>
                </div>
                <Link to="/engineering" className="card-cta-btn btn-eng-solid">
                  Open Engineering Page <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="division-card chem-card">
              <div className="card-img-header">
                <img
                  src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80"
                  alt="AquaCorp Chemicals"
                />
                <div className="card-img-overlay">
                  <span className="division-pill pill-chem">Water &amp; Process Chemistry</span>
                </div>
              </div>
              <div className="card-body">
                <div>
                  <h3 className="card-title">AquaCorp Chemicals</h3>
                  <p className="card-desc">
                    High-performance boiler water chemicals, cooling tower scale &amp; corrosion inhibitors, biocide regimens, RO membrane antiscalants, and effluent wastewater treatment.
                  </p>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', margin: '1rem 0 1.5rem' }}>
                    <span style={{ fontSize: '0.75rem', background: 'var(--bg-card-nested)', padding: '0.25rem 0.65rem', borderRadius: '4px', border: '1px solid var(--border-subtle)' }}>Boiler Treatment</span>
                    <span style={{ fontSize: '0.75rem', background: 'var(--bg-card-nested)', padding: '0.25rem 0.65rem', borderRadius: '4px', border: '1px solid var(--border-subtle)' }}>Cooling Towers</span>
                    <span style={{ fontSize: '0.75rem', background: 'var(--bg-card-nested)', padding: '0.25rem 0.65rem', borderRadius: '4px', border: '1px solid var(--border-subtle)' }}>RO Antiscalants</span>
                    <span style={{ fontSize: '0.75rem', background: 'var(--bg-card-nested)', padding: '0.25rem 0.65rem', borderRadius: '4px', border: '1px solid var(--border-subtle)' }}>LSI Calculator</span>
                  </div>
                </div>
                <Link to="/chemicals" className="card-cta-btn btn-chem-solid">
                  Open Chemicals Page <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION BANNER */}
      <section
        className="section"
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          color: '#ffffff',
          borderTop: '1px solid var(--border-subtle)',
          textAlign: 'center'
        }}
      >
        <div className="container" style={{ maxWidth: '820px' }}>
          <span
            style={{
              display: 'inline-block',
              background: 'rgba(245, 158, 11, 0.2)',
              color: '#fbbf24',
              padding: '0.35rem 0.9rem',
              borderRadius: '999px',
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              marginBottom: '1rem',
              letterSpacing: '0.04em'
            }}
          >
            Direct Engagement
          </span>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '1rem', color: '#ffffff' }}>
            Ready to Upgrade Your Industrial Infrastructure or Water Treatment?
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
            Reach out directly to S&S Corporation. Our technical engineers and chemical specialists conduct complimentary on-site surveys throughout Silvassa, Vapi, Daman, and surrounding industrial belts.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              to="/contact"
              className="nav-cta"
              style={{
                background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                color: '#000',
                fontWeight: 700,
                padding: '0.85rem 1.8rem',
                fontSize: '1rem'
              }}
            >
              <Send size={18} /> Contact S&S Corporation
            </Link>
            <a
              href="tel:+919561240625"
              className="nav-division-btn nav-btn-eng"
              style={{ padding: '0.85rem 1.6rem', fontSize: '1rem' }}
            >
              <Phone size={18} /> +91 95612 40625
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

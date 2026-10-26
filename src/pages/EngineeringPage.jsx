import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Wrench,
  Layers,
  Gauge,
  Cpu,
  Activity,
  Building2,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Send,
  ArrowRight,
  ChevronRight,
  Cog
} from 'lucide-react'

export default function EngineeringPage() {
  const [submitted, setSubmitted] = useState(false)
  const [rfq, setRfq] = useState({
    name: '',
    company: '',
    phone: '',
    serviceType: 'Industrial Piping & Skid Fabrication',
    scope: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setRfq({ name: '', company: '', phone: '', serviceType: 'Industrial Piping & Skid Fabrication', scope: '' })
    }, 6000)
  }

  return (
    <div className="page-engineering">
      {/* DIVISION HEADER BANNER */}
      <section className="division-hero" style={{
        background: 'linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.95)), url("https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=1600&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '5rem 0 4rem',
        borderBottom: '1px solid rgba(245, 158, 11, 0.3)',
        color: '#ffffff'
      }}>
        <div className="container">
          <div style={{ maxWidth: '850px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '1rem' }}>
              <Link to="/" style={{ color: '#cbd5e1' }}>S&S Corporation</Link>
              <ChevronRight size={14} />
              <span style={{ color: '#fbbf24', fontWeight: 600 }}>S&S Engineering Solutions</span>
            </div>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(245, 158, 11, 0.2)', border: '1px solid rgba(245, 158, 11, 0.45)', padding: '0.35rem 0.9rem', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 700, color: '#fbbf24', marginBottom: '1.25rem' }}>
              <Cog size={15} /> Division 01 • Mechanical, Piping & Plant Automation
            </div>

            <h1 style={{ fontSize: '3.2rem', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.25rem', color: '#ffffff' }}>
              S&S Engineering Solutions
            </h1>

            <p style={{ fontSize: '1.2rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '2rem' }}>
              Precision plant engineering, custom vessel fabrication, automated chemical dosing skids, high-pressure piping networks, and turnkey industrial erection across India.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#rfq" className="nav-cta" style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', color: '#000', fontWeight: 700 }}>
                <Send size={16} /> Submit Engineering RFQ
              </a>
              <a href="tel:+919561240625" className="nav-division-btn nav-btn-eng" style={{ padding: '0.65rem 1.25rem', fontSize: '0.9rem' }}>
                <Phone size={15} /> Talk to Chief Engineer: +91 95612 40625
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED ENGINEERING CAPABILITIES */}
      <section className="section section-main-bg">
        <div className="container">
          <div className="section-header">
            <span className="section-tag section-tag-eng">Full Capability Spectrum</span>
            <h2 className="section-title">Core Mechanical & Automation Offerings</h2>
            <p className="section-desc">
              Engineered to ASME, ASTM, and DIN standards. Our certified fabrication teams ensure leak-proof, vibration-damped, and corrosion-resistant operation.
            </p>
          </div>

          <div className="services-grid">
            {/* 1. Piping */}
            <div id="piping" className="service-card">
              <div className="service-img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=800&q=80"
                  alt="Industrial Piping"
                />
                <div className="service-icon-float" style={{ background: '#f59e0b', color: '#000' }}>
                  <Layers size={22} />
                </div>
              </div>
              <div className="service-card-body">
                <h3 className="service-title">Industrial Piping & Header Networks</h3>
                <p className="service-text">
                  Complete design, hydraulic isometric drafting, and on-site orbital/TIG welding for:
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.875rem', color: 'var(--text-main)', marginBottom: '1.25rem' }}>
                  <li>• High-Pressure Steam & Condensate Returns</li>
                  <li>• Chemical Acids, Solvents & Corrosive Headers</li>
                  <li>• Stainless Steel (SS304/SS316L) Process Loops</li>
                  <li>• Compressed Air, Chilled Water & Raw Water Mains</li>
                </ul>
                <div className="service-tags">
                  <span className="service-tag-item">TIG / MIG Certified</span>
                  <span className="service-tag-item">Hydro-Tested</span>
                </div>
              </div>
            </div>

            {/* 2. Vessels */}
            <div id="vessels" className="service-card">
              <div className="service-img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
                  alt="Process Vessels"
                />
                <div className="service-icon-float" style={{ background: '#f59e0b', color: '#000' }}>
                  <Gauge size={22} />
                </div>
              </div>
              <div className="service-card-body">
                <h3 className="service-title">Process Vessels, Jacketed Reactors & Skids</h3>
                <p className="service-text">
                  Heavy fabrication in our workshops tailored to temperature, pressure, and chemical corrosion profiles:
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.875rem', color: 'var(--text-main)', marginBottom: '1.25rem' }}>
                  <li>• Jacketed & Limpet Coil Reaction Kettles</li>
                  <li>• Bulk Chemical & Acid Storage Tanks</li>
                  <li>• Modular Chemical Dosing Skids</li>
                  <li>• Pressure Sand & Multi-Grade Filtration Vessels</li>
                </ul>
                <div className="service-tags">
                  <span className="service-tag-item">ASME Standards</span>
                  <span className="service-tag-item">Custom Agitators</span>
                </div>
              </div>
            </div>

            {/* 3. Automation */}
            <div id="automation" className="service-card">
              <div className="service-img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80"
                  alt="Automation"
                />
                <div className="service-icon-float" style={{ background: '#f59e0b', color: '#000' }}>
                  <Cpu size={22} />
                </div>
              </div>
              <div className="service-card-body">
                <h3 className="service-title">Plant Automation, SCADA & Instrumentation</h3>
                <p className="service-text">
                  Eliminating manual errors and optimizing batch repeatability with smart automation:
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.875rem', color: 'var(--text-main)', marginBottom: '1.25rem' }}>
                  <li>• Siemens, Allen-Bradley & Schneider PLC Systems</li>
                  <li>• Multi-Touch Industrial HMI Control Panels</li>
                  <li>• Electromagnetic Flowmeters & Radar Level Gauges</li>
                  <li>• Automatic Batch Weighing & Auto-Dosing Logic</li>
                </ul>
                <div className="service-tags">
                  <span className="service-tag-item">SCADA Systems</span>
                  <span className="service-tag-item">Smart Telemetry</span>
                </div>
              </div>
            </div>

            {/* 4. Pumps */}
            <div id="pumps" className="service-card">
              <div className="service-img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80"
                  alt="Pumps and valves"
                />
                <div className="service-icon-float" style={{ background: '#f59e0b', color: '#000' }}>
                  <Activity size={22} />
                </div>
              </div>
              <div className="service-card-body">
                <h3 className="service-title">Industrial Pumps, Valves & Flow Control</h3>
                <p className="service-text">
                  Reliable fluid conveyance engineered for high viscosity, abrasive slurries, and aggressive chemicals:
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.875rem', color: 'var(--text-main)', marginBottom: '1.25rem' }}>
                  <li>• Air-Operated Double Diaphragm (AODD) Pumps</li>
                  <li>• Positive Displacement Gear & Screw Pumps</li>
                  <li>• High-Precision Chemical Metering Dosing Pumps</li>
                  <li>• Pneumatic Actuated Ball & Butterfly Valves</li>
                </ul>
                <div className="service-tags">
                  <span className="service-tag-item">Explosion Proof</span>
                  <span className="service-tag-item">Corrosion Proof</span>
                </div>
              </div>
            </div>

            {/* 5. Turnkey EPC */}
            <div id="epc" className="service-card">
              <div className="service-img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
                  alt="Turnkey EPC"
                />
                <div className="service-icon-float" style={{ background: '#f59e0b', color: '#000' }}>
                  <Building2 size={22} />
                </div>
              </div>
              <div className="service-card-body">
                <h3 className="service-title">Turnkey Plant Erection & Commissioning</h3>
                <p className="service-text">
                  Single-window execution from greenfield site to hot-commissioning:
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.875rem', color: 'var(--text-main)', marginBottom: '1.25rem' }}>
                  <li>• Civil Foundation & Structural Steel Support Erection</li>
                  <li>• Equipment Rigging, Alignment & Base Leveling</li>
                  <li>• Hydrostatic Testing & Safety Pressure Relief Audits</li>
                  <li>• Trial Batches, Parameter Calibration & Handover</li>
                </ul>
                <div className="service-tags">
                  <span className="service-tag-item">Turnkey Delivery</span>
                  <span className="service-tag-item">Safety Certified</span>
                </div>
              </div>
            </div>

            {/* 6. AMC & Maintenance */}
            <div id="maintenance" className="service-card">
              <div className="service-img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                  alt="Maintenance"
                />
                <div className="service-icon-float" style={{ background: '#f59e0b', color: '#000' }}>
                  <ShieldCheck size={22} />
                </div>
              </div>
              <div className="service-card-body">
                <h3 className="service-title">Preventive Maintenance & Plant Revamping</h3>
                <p className="service-text">
                  Guaranteed uptime through structured lifecycle maintenance:
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.875rem', color: 'var(--text-main)', marginBottom: '1.25rem' }}>
                  <li>• Annual Maintenance Contracts (AMC)</li>
                  <li>• Pipeline Integrity Testing & Ultrasonic Thickness Checks</li>
                  <li>• Pump Overhauls, Impeller Re-balancing & Seal Kits</li>
                  <li>• De-bottlenecking Lines for Higher Throughput</li>
                </ul>
                <div className="service-tags">
                  <span className="service-tag-item">24/7 Breakdown AMC</span>
                  <span className="service-tag-item">Zero Downtime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT WORKFLOW */}
      <section className="section section-alt-bg">
        <div className="container">
          <div className="section-header">
            <span className="section-tag section-tag-eng">Our Execution Methodology</span>
            <h2 className="section-title">How S&S Delivers Turnkey Engineering Projects</h2>
            <p className="section-desc">A disciplined 5-stage project lifecycle minimizing delays, budget overruns, and plant shutdown windows.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-card)', borderRadius: '12px', padding: '1.5rem', textAlign: 'center', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--eng-bg-subtle)', color: 'var(--eng-primary)', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>1</div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-heading)' }}>Consultation & P&ID</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Reviewing flow charts, pressure classes, and chemical compatibility.</p>
            </div>

            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-card)', borderRadius: '12px', padding: '1.5rem', textAlign: 'center', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--eng-bg-subtle)', color: 'var(--eng-primary)', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>2</div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-heading)' }}>3D CAD Layouts</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Isometric piping modeling, clash detection, and stress analysis.</p>
            </div>

            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-card)', borderRadius: '12px', padding: '1.5rem', textAlign: 'center', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--eng-bg-subtle)', color: 'var(--eng-primary)', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>3</div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-heading)' }}>Shop Fabrication</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Precision cutting, rolling, welding, and pressure vessel testing.</p>
            </div>

            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-card)', borderRadius: '12px', padding: '1.5rem', textAlign: 'center', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--eng-bg-subtle)', color: 'var(--eng-primary)', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>4</div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-heading)' }}>On-Site Erection</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Rigging, alignment, electrical connections, and hydro-testing.</p>
            </div>

            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-card)', borderRadius: '12px', padding: '1.5rem', textAlign: 'center', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--eng-bg-subtle)', color: 'var(--eng-primary)', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>5</div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-heading)' }}>Hot Handover</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Live commissioning, automation tuning, and AMC contract initiation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DEDICATED ENGINEERING RFQ FORM */}
      <section id="rfq" className="section section-main-bg">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-box">
              <span className="section-tag section-tag-eng">Direct RFQ</span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-heading)' }}>
                Request an Engineering Proposal or Site Audit
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                Share your pipeline routing, skid dimensions, or automation specifications for an itemized estimate.
              </p>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Contact Name *</label>
                    <input
                      type="text"
                      required
                      value={rfq.name}
                      onChange={(e) => setRfq({ ...rfq, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Company / Plant *</label>
                    <input
                      type="text"
                      required
                      value={rfq.company}
                      onChange={(e) => setRfq({ ...rfq, company: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={rfq.phone}
                      onChange={(e) => setRfq({ ...rfq, phone: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Primary Engineering Scope *</label>
                    <select
                      value={rfq.serviceType}
                      onChange={(e) => setRfq({ ...rfq, serviceType: e.target.value })}
                    >
                      <option>Industrial Piping & Skid Fabrication</option>
                      <option>Process Vessels & Mixing Tanks</option>
                      <option>Plant Automation & SCADA Control</option>
                      <option>AODD / Metering Pumps & Valves</option>
                      <option>Turnkey Plant Erection & Commissioning</option>
                      <option>Annual Maintenance Contract (AMC)</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Project Details (Pipe Diameter, MOC, Flow Rate, Pressure)</label>
                  <textarea
                    rows="4"
                    value={rfq.scope}
                    onChange={(e) => setRfq({ ...rfq, scope: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="card-cta-btn btn-eng-solid" style={{ borderRadius: '8px', cursor: 'pointer' }}>
                  <Send size={18} /> Submit RFQ to S&S Engineering Team
                </button>

                {submitted && (
                  <div className="toast-success">
                    <CheckCircle2 size={18} />
                    <span>Your engineering request has been recorded. Our team will contact {rfq.phone} within 24 hours.</span>
                  </div>
                )}
              </form>
            </div>

            <div className="contact-info-cards">
              <div className="info-card official-address-highlight">
                <div className="info-icon" style={{ background: 'var(--eng-bg-subtle)', color: 'var(--eng-primary)' }}>
                  <MapPin size={22} />
                </div>
                <div>
                  <div className="info-title">Headquarters & Fabrication Base</div>
                  <div className="info-val">
                    S&S Corporation, C Block, Pramukh Sangam, Samarvarni, Silvasaa, Dadra & Nagar Haveli
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
                    PIN: 396230 • DNH & DD
                  </div>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon" style={{ background: 'var(--eng-bg-subtle)', color: 'var(--eng-primary)' }}>
                  <Phone size={22} />
                </div>
                <div>
                  <div className="info-title">Direct Engineering Hotlines</div>
                  <a href="tel:+919561240625" className="info-val" style={{ color: 'var(--eng-primary)' }}>
                    +91 95612 40625
                  </a>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                    Direct line to Premnath Singh & Lead Engineers
                  </div>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon" style={{ background: 'var(--eng-bg-subtle)', color: 'var(--eng-primary)' }}>
                  <Mail size={22} />
                </div>
                <div>
                  <div className="info-title">RFQ Drawing Submission</div>
                  <a href="mailto:sandscorporationpvtltd@gmail.com" className="info-val" style={{ color: 'var(--eng-primary)', wordBreak: 'break-all' }}>
                    sandscorporationpvtltd@gmail.com
                  </a>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                    Submit AutoCAD, PDF, and P&ID drawings
                  </div>
                </div>
              </div>

              <div style={{ background: 'var(--chem-bg-subtle)', border: '1px solid var(--chem-border-subtle)', borderRadius: '12px', padding: '1.25rem' }}>
                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--chem-primary)', fontWeight: 700 }}>Looking for Water Chemistry?</span>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-main)', margin: '0.4rem 0 0.8rem' }}>
                  Explore our sister business unit for boiler, cooling tower, and RO chemicals.
                </p>
                <Link to="/chemicals" style={{ color: 'var(--chem-primary)', fontWeight: 700, fontSize: '0.875rem', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  Go to AquaCorp Chemicals Page <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

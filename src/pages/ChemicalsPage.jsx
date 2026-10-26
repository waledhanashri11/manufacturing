import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Droplets,
  Flame,
  Snowflake,
  Filter,
  Activity,
  Calculator,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Send,
  ArrowRight,
  ChevronRight
} from 'lucide-react'

export default function ChemicalsPage() {
  // Interactive LSI Calculator State
  const [ph, setPh] = useState(7.8)
  const [tempC, setTempC] = useState(30)
  const [calcium, setCalcium] = useState(240) // mg/L as CaCO3
  const [alkalinity, setAlkalinity] = useState(180) // mg/L as CaCO3
  const [tds, setTds] = useState(650) // mg/L
  const [activePreset, setActivePreset] = useState('cooling')

  const [submitted, setSubmitted] = useState(false)
  const [auditReq, setAuditReq] = useState({
    name: '',
    company: '',
    phone: '',
    category: 'Boiler Water Treatment',
    scope: ''
  })

  const loadPreset = (preset) => {
    setActivePreset(preset)
    if (preset === 'cooling') {
      setPh(7.8)
      setTempC(32)
      setCalcium(250)
      setAlkalinity(190)
      setTds(700)
    } else if (preset === 'boiler') {
      setPh(9.5)
      setTempC(65)
      setCalcium(15)
      setAlkalinity(120)
      setTds(180)
    } else if (preset === 'ro_permeate') {
      setPh(6.4)
      setTempC(25)
      setCalcium(10)
      setAlkalinity(15)
      setTds(45)
    } else if (preset === 'high_silica') {
      setPh(8.2)
      setTempC(35)
      setCalcium(420)
      setAlkalinity(310)
      setTds(1450)
    }
  }

  const calculateWaterIndices = () => {
    const A = (Math.log10(Math.max(tds, 10)) - 1) / 10
    const B = -13.12 * Math.log10(tempC + 273) + 34.55
    const C = Math.log10(Math.max(calcium, 5)) - 0.4
    const D = Math.log10(Math.max(alkalinity, 5))
    const pHs = (9.3 + A + B) - (C + D)
    const lsi = parseFloat((ph - pHs).toFixed(2))
    const rsi = parseFloat((2 * pHs - ph).toFixed(2))
    return { lsi, rsi }
  }

  const { lsi, rsi } = calculateWaterIndices()

  const getLSIStatus = (val) => {
    if (val > 0.5) {
      return {
        label: 'Severe Scale Forming',
        class: 'status-scale',
        desc: 'High potential for calcium carbonate scaling. Recommends AquaCorp DORSAL-S Anti-Scalant and automated acid dosing skids.'
      }
    } else if (val >= -0.5 && val <= 0.5) {
      return {
        label: 'Balanced Water Chemistry',
        class: 'status-balanced',
        desc: 'Water is stable and non-aggressive. Recommended: Routine AquaCorp oxidizing/non-oxidizing biocide dosing and parameter monitoring.'
      }
    } else {
      return {
        label: 'Corrosive / Aggressive Water',
        class: 'status-corrosive',
        desc: 'Water dissolves protective oxide coatings, leading to pitting corrosion in piping and boilers. Recommends AquaCorp pH boosters and multi-metal corrosion inhibitors.'
      }
    }
  }

  const lsiStatus = getLSIStatus(lsi)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setAuditReq({ name: '', company: '', phone: '', category: 'Boiler Water Treatment', scope: '' })
    }, 6000)
  }

  return (
    <div className="page-chemicals">
      {/* CHEMICAL DIVISION HEADER BANNER */}
      <section className="division-hero" style={{
        background: 'linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.95)), url("https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1600&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '5rem 0 4rem',
        borderBottom: '1px solid rgba(2, 132, 199, 0.35)',
        color: '#ffffff'
      }}>
        <div className="container">
          <div style={{ maxWidth: '850px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '1rem' }}>
              <Link to="/" style={{ color: '#cbd5e1' }}>S&S Corporation</Link>
              <ChevronRight size={14} />
              <span style={{ color: '#38bdf8', fontWeight: 600 }}>AquaCorp Chemicals</span>
            </div>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(2, 132, 199, 0.2)', border: '1px solid rgba(2, 132, 199, 0.45)', padding: '0.35rem 0.9rem', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 700, color: '#38bdf8', marginBottom: '1.25rem' }}>
              <Droplets size={15} /> Division 02 • Industrial Water & Process Chemistry
            </div>

            <h1 style={{ fontSize: '3.2rem', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.25rem', color: '#ffffff' }}>
              AquaCorp Chemicals
            </h1>

            <p style={{ fontSize: '1.2rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '2rem' }}>
              Advanced water treatment programs formulated to safeguard boilers, cooling towers, reverse osmosis membranes, and effluent plants from scale, corrosion, and biofouling.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#calculator" className="nav-cta" style={{ background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)', color: '#fff', fontWeight: 700 }}>
                <Calculator size={16} /> Open LSI Water Calculator
              </a>
              <a href="#chemical-rfq" className="nav-division-btn nav-btn-chem" style={{ padding: '0.65rem 1.25rem', fontSize: '0.9rem' }}>
                <Send size={15} /> Request Chemical Pricing & Sample
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FULL CHEMICAL MATRIX */}
      <section className="section section-main-bg">
        <div className="container">
          <div className="section-header">
            <span className="section-tag section-tag-chem">Chemical Portfolio</span>
            <h2 className="section-title">Specialty Water Treatment Programs</h2>
            <p className="section-desc">
              Custom-blended chemical solutions engineered for harsh TDS, high hardness, silica, and high temperatures commonly found in industrial water systems.
            </p>
          </div>

          <div className="products-matrix">
            {/* Boiler Water Chemicals */}
            <div id="boiler" className="product-box">
              <div className="product-box-img">
                <img
                  src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80"
                  alt="Boiler Water Treatment"
                />
                <div className="product-box-img-overlay">
                  <span className="product-badge">Thermal Utilities</span>
                </div>
              </div>
              <div className="product-box-content">
                <h4>Boiler Water Treatment Programs</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.4rem', lineHeight: '1.5' }}>
                  Preventing scale-induced tube ruptures, neutralizing corrosive dissolved oxygen, and preserving maximum heat transfer efficiency.
                </p>
                <ul className="chem-list">
                  <li><CheckCircle2 size={15} color="#0284c7" /> Catalyzed DEHA & Sulfite Oxygen Scavengers</li>
                  <li><CheckCircle2 size={15} color="#0284c7" /> Polymeric Phosphate Scale Inhibitors</li>
                  <li><CheckCircle2 size={15} color="#0284c7" /> Sludge Dispersants & Conditioners</li>
                  <li><CheckCircle2 size={15} color="#0284c7" /> Alkalinity & pH Boosters</li>
                  <li><CheckCircle2 size={15} color="#0284c7" /> Volatile Neutralizing Amines</li>
                  <li><CheckCircle2 size={15} color="#0284c7" /> Online Scale Removal Blends</li>
                </ul>
              </div>
            </div>

            {/* Cooling Water Chemicals */}
            <div id="cooling" className="product-box">
              <div className="product-box-img">
                <img
                  src="https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=800&q=80"
                  alt="Cooling Towers"
                />
                <div className="product-box-img-overlay">
                  <span className="product-badge">Cooling Towers & Heat Exchangers</span>
                </div>
              </div>
              <div className="product-box-content">
                <h4>Cooling Water Treatment Systems</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.4rem', lineHeight: '1.5' }}>
                  Multi-action chemical regimens for open recirculating cooling towers, plate heat exchangers, and closed chill loops.
                </p>
                <ul className="chem-list">
                  <li><CheckCircle2 size={15} color="#0284c7" /> Oxidizing Biocides (Chlorine/Bromine)</li>
                  <li><CheckCircle2 size={15} color="#0284c7" /> Non-Oxidizing Isothiazolin Biocides</li>
                  <li><CheckCircle2 size={15} color="#0284c7" /> High-Performance Biodispersants</li>
                  <li><CheckCircle2 size={15} color="#0284c7" /> Multi-Metal Corrosion Inhibitors</li>
                  <li><CheckCircle2 size={15} color="#0284c7" /> High-Stress Anti-Scalants</li>
                  <li><CheckCircle2 size={15} color="#0284c7" /> Legionella Bacterial Control</li>
                </ul>
              </div>
            </div>

            {/* RO & Membrane Chemicals */}
            <div id="ro" className="product-box">
              <div className="product-box-img">
                <img
                  src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80"
                  alt="RO Membrane Treatment"
                />
                <div className="product-box-img-overlay">
                  <span className="product-badge">Membrane Separation</span>
                </div>
              </div>
              <div className="product-box-content">
                <h4>RO & Demineralizer Chemicals</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.4rem', lineHeight: '1.5' }}>
                  Ensuring high permeate flux recovery, suppressing silica fouling, and prolonging reverse osmosis polyamide membrane longevity.
                </p>
                <ul className="chem-list">
                  <li><CheckCircle2 size={15} color="#0284c7" /> Broad-Spectrum RO Antiscalants</li>
                  <li><CheckCircle2 size={15} color="#0284c7" /> High Silica Specific Antiscalants</li>
                  <li><CheckCircle2 size={15} color="#0284c7" /> Acidic Cleaners (Inorganic Salts)</li>
                  <li><CheckCircle2 size={15} color="#0284c7" /> Alkaline Cleaners (Biofouling & Oils)</li>
                  <li><CheckCircle2 size={15} color="#0284c7" /> Non-Oxidizing Membrane Biocides</li>
                  <li><CheckCircle2 size={15} color="#0284c7" /> SMBS Dechlorination Conditioners</li>
                </ul>
              </div>
            </div>

            {/* Wastewater & ETP Chemicals */}
            <div id="etp" className="product-box">
              <div className="product-box-img">
                <img
                  src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80"
                  alt="Wastewater ETP"
                />
                <div className="product-box-img-overlay">
                  <span className="product-badge">Environmental Compliance</span>
                </div>
              </div>
              <div className="product-box-content">
                <h4>Wastewater & ETP Solutions</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.4rem', lineHeight: '1.5' }}>
                  Assisting factories in meeting PCB discharge limits, reducing turbidity/color, and achieving Zero Liquid Discharge (ZLD) economics.
                </p>
                <ul className="chem-list">
                  <li><CheckCircle2 size={15} color="#0284c7" /> Poly Aluminium Chloride (PAC)</li>
                  <li><CheckCircle2 size={15} color="#0284c7" /> Cationic / Anionic Polyelectrolytes</li>
                  <li><CheckCircle2 size={15} color="#0284c7" /> High COD/BOD Reduction Formulations</li>
                  <li><CheckCircle2 size={15} color="#0284c7" /> Industrial Decoloring Agents</li>
                  <li><CheckCircle2 size={15} color="#0284c7" /> Silicone & Oil-based Defoamers</li>
                  <li><CheckCircle2 size={15} color="#0284c7" /> Sludge Dewatering Flocculants</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIALIZED TOOL: LSI & RYZNAR CALCULATOR */}
      <section id="calculator" className="section section-alt-bg">
        <div className="container">
          <div className="section-header">
            <span className="section-tag section-tag-chem">Engineering Utility</span>
            <h2 className="section-title">LSI & Ryznar Water Chemistry Calculator</h2>
            <p className="section-desc">
              Calculate the Langelier Saturation Index (LSI) and Ryznar Stability Index (RSI) for your industrial cooling towers or boilers in real-time.
            </p>
          </div>

          <div className="calc-container">
            {/* Quick Presets */}
            <div className="calc-presets-bar">
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>Quick Presets:</span>
              <button
                type="button"
                className={`preset-btn ${activePreset === 'cooling' ? 'active' : ''}`}
                onClick={() => loadPreset('cooling')}
              >
                Cooling Tower Circuit
              </button>
              <button
                type="button"
                className={`preset-btn ${activePreset === 'boiler' ? 'active' : ''}`}
                onClick={() => loadPreset('boiler')}
              >
                Boiler Feed Water
              </button>
              <button
                type="button"
                className={`preset-btn ${activePreset === 'high_silica' ? 'active' : ''}`}
                onClick={() => loadPreset('high_silica')}
              >
                High Silica Hard Water
              </button>
              <button
                type="button"
                className={`preset-btn ${activePreset === 'ro_permeate' ? 'active' : ''}`}
                onClick={() => loadPreset('ro_permeate')}
              >
                RO Permeate
              </button>
            </div>

            <div className="calc-grid">
              {/* Inputs */}
              <div>
                <h4 style={{ marginBottom: '1.25rem', fontSize: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-heading)' }}>
                  <Calculator size={20} color="var(--chem-primary)" /> Water Parameter Controls
                </h4>
                <div className="calc-inputs-grid">
                  <div className="calc-field">
                    <label>
                      <span>Water pH:</span>
                      <strong style={{ color: 'var(--chem-primary)' }}>{ph}</strong>
                    </label>
                    <input
                      type="range"
                      min="6.0"
                      max="10.5"
                      step="0.1"
                      value={ph}
                      onChange={(e) => {
                        setPh(parseFloat(e.target.value))
                        setActivePreset('custom')
                      }}
                    />
                  </div>

                  <div className="calc-field">
                    <label>
                      <span>Temperature (°C):</span>
                      <strong style={{ color: 'var(--chem-primary)' }}>{tempC} °C</strong>
                    </label>
                    <input
                      type="number"
                      min="5"
                      max="90"
                      value={tempC}
                      onChange={(e) => {
                        setTempC(parseFloat(e.target.value) || 25)
                        setActivePreset('custom')
                      }}
                    />
                  </div>

                  <div className="calc-field">
                    <label>
                      <span>Calcium Hardness:</span>
                      <strong style={{ color: 'var(--chem-primary)' }}>{calcium} ppm</strong>
                    </label>
                    <input
                      type="number"
                      min="5"
                      max="2500"
                      value={calcium}
                      onChange={(e) => {
                        setCalcium(parseFloat(e.target.value) || 50)
                        setActivePreset('custom')
                      }}
                    />
                  </div>

                  <div className="calc-field">
                    <label>
                      <span>M-Alkalinity:</span>
                      <strong style={{ color: 'var(--chem-primary)' }}>{alkalinity} ppm</strong>
                    </label>
                    <input
                      type="number"
                      min="5"
                      max="2500"
                      value={alkalinity}
                      onChange={(e) => {
                        setAlkalinity(parseFloat(e.target.value) || 50)
                        setActivePreset('custom')
                      }}
                    />
                  </div>

                  <div className="calc-field" style={{ gridColumn: 'span 2' }}>
                    <label>
                      <span>Total Dissolved Solids (TDS):</span>
                      <strong style={{ color: 'var(--chem-primary)' }}>{tds} ppm</strong>
                    </label>
                    <input
                      type="range"
                      min="50"
                      max="5000"
                      step="25"
                      value={tds}
                      onChange={(e) => {
                        setTds(parseFloat(e.target.value))
                        setActivePreset('custom')
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Live Output */}
              <div className="calc-result-card">
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Langelier Saturation Index (LSI)
                </span>
                <div
                  className="result-lsi-val"
                  style={{
                    color: lsi > 0.5 ? 'var(--eng-primary)' : lsi < -0.5 ? '#ef4444' : '#10b981'
                  }}
                >
                  {lsi > 0 ? `+${lsi}` : lsi}
                </div>
                <div className="rsi-badge">
                  Ryznar Index (RSI): <strong style={{ color: 'var(--text-heading)' }}>{rsi}</strong>
                </div>

                <div className={`result-status-badge ${lsiStatus.class}`}>
                  {lsiStatus.label}
                </div>
                <div className="result-recommendation">
                  <strong style={{ color: 'var(--text-heading)' }}>AquaCorp Recommendation:</strong>
                  <p style={{ marginTop: '0.35rem' }}>{lsiStatus.desc}</p>
                </div>
                <a
                  href="#chemical-rfq"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: 'var(--chem-primary)',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    marginTop: '1.25rem'
                  }}
                >
                  Request Matching Chemical Dosing Batch <ChevronRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEDICATED CHEMICAL INQUIRY & WATER AUDIT FORM */}
      <section id="chemical-rfq" className="section section-main-bg">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-box">
              <span className="section-tag section-tag-chem">Direct Chemical RFQ</span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-heading)' }}>
                Request Chemical Formulation Pricing or Water Testing
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                Book an on-site water quality analysis, request product material safety data sheets (MSDS), or get bulk batch quotations.
              </p>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Contact Name *</label>
                    <input
                      type="text"
                      required
                      value={auditReq.name}
                      onChange={(e) => setAuditReq({ ...auditReq, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Plant / Factory Name *</label>
                    <input
                      type="text"
                      required
                      value={auditReq.company}
                      onChange={(e) => setAuditReq({ ...auditReq, company: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={auditReq.phone}
                      onChange={(e) => setAuditReq({ ...auditReq, phone: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Treatment Program *</label>
                    <select
                      value={auditReq.category}
                      onChange={(e) => setAuditReq({ ...auditReq, category: e.target.value })}
                    >
                      <option>Boiler Water Treatment Program</option>
                      <option>Cooling Tower Biocides & Anti-Scalants</option>
                      <option>RO Membrane Antiscalant & Acid Cleaner</option>
                      <option>ETP / STP Coagulants & Color Removers</option>
                      <option>On-Site Water Audit & Sampling</option>
                      <option>Auto-Dosing Skid & Equipment</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Current Water Chemistry / Specific Concerns</label>
                  <textarea
                    rows="4"
                    value={auditReq.scope}
                    onChange={(e) => setAuditReq({ ...auditReq, scope: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="card-cta-btn btn-chem-solid" style={{ borderRadius: '8px', cursor: 'pointer' }}>
                  <Send size={18} /> Send Request to AquaCorp Specialists
                </button>

                {submitted && (
                  <div className="toast-success">
                    <CheckCircle2 size={18} />
                    <span>Your request has been received. An AquaCorp water specialist will contact {auditReq.phone} shortly.</span>
                  </div>
                )}
              </form>
            </div>

            <div className="contact-info-cards">
              <div className="info-card official-address-highlight">
                <div className="info-icon" style={{ background: 'var(--chem-bg-subtle)', color: 'var(--chem-primary)' }}>
                  <MapPin size={22} />
                </div>
                <div>
                  <div className="info-title">AquaCorp Chemicals Facility</div>
                  <div className="info-val">
                    S&S Corporation, C Block, Pramukh Sangam, Samarvarni, Silvasaa, Dadra & Nagar Haveli
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
                    PIN: 396230 • DNH & DD
                  </div>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon" style={{ background: 'var(--chem-bg-subtle)', color: 'var(--chem-primary)' }}>
                  <Phone size={22} />
                </div>
                <div>
                  <div className="info-title">Chemical Inquiries & Emergency Delivery</div>
                  <a href="tel:+919561240625" className="info-val" style={{ color: 'var(--chem-primary)' }}>
                    +91 95612 40625
                  </a>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                    Rapid dispatch across Silvassa, Vapi & Gujarat industrial zones
                  </div>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon" style={{ background: 'var(--chem-bg-subtle)', color: 'var(--chem-primary)' }}>
                  <Mail size={22} />
                </div>
                <div>
                  <div className="info-title">Water Test Reports & Technical Support</div>
                  <a href="mailto:sandscorporationpvtltd@gmail.com" className="info-val" style={{ color: 'var(--chem-primary)', wordBreak: 'break-all' }}>
                    sandscorporationpvtltd@gmail.com
                  </a>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                    Send lab water analysis sheets for free program sizing
                  </div>
                </div>
              </div>

              <div style={{ background: 'var(--eng-bg-subtle)', border: '1px solid var(--eng-border-subtle)', borderRadius: '12px', padding: '1.25rem' }}>
                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--eng-primary)', fontWeight: 700 }}>Looking for Plant Piping & Skids?</span>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-main)', margin: '0.4rem 0 0.8rem' }}>
                  Explore our sister business unit for mechanical fabrication, pumps, and plant automation.
                </p>
                <Link to="/engineering" style={{ color: 'var(--eng-primary)', fontWeight: 700, fontSize: '0.875rem', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  Go to S&S Engineering Solutions Page <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div className="brand-logo-frame" style={{ width: '46px', height: '38px', padding: '2px' }}>
                <img src="/logo.jpg" alt="S&S Logo" className="brand-logo-img" />
              </div>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff' }}>S&S CORPORATION</span>
            </div>
            <p className="footer-brand-desc">
              Pioneering turnkey engineering solutions and specialty water treatment chemical programs for industrial manufacturing enterprises across India.
            </p>
            <div style={{ fontSize: '0.825rem', color: '#64748b' }}>
              GSTIN: 26EOKPS6065H1ZD | UDYAM-DN-01-0005998
            </div>
          </div>

          <div className="footer-col">
            <h5 style={{ color: '#fbbf24' }}>S&S Engineering</h5>
            <ul className="footer-links">
              <li><Link to="/engineering">Dedicated Engineering Page <ArrowRight size={12} /></Link></li>
              <li><Link to="/engineering#piping">Industrial Piping & Fabrication</Link></li>
              <li><Link to="/engineering#vessels">Process Vessels & Mixing Tanks</Link></li>
              <li><Link to="/engineering#automation">Plant Automation & SCADA</Link></li>
              <li><Link to="/engineering#pumps">AODD & Metering Pumps</Link></li>
              <li><Link to="/engineering#epc">Turnkey EPC Erection</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5 style={{ color: '#38bdf8' }}>AquaCorp Chemicals</h5>
            <ul className="footer-links">
              <li><Link to="/chemicals">Dedicated Chemicals Page <ArrowRight size={12} /></Link></li>
              <li><Link to="/chemicals#boiler">Boiler Water Treatment</Link></li>
              <li><Link to="/chemicals#cooling">Cooling Tower Biocides</Link></li>
              <li><Link to="/chemicals#ro">RO Antiscalants & Cleaners</Link></li>
              <li><Link to="/chemicals#etp">ETP Coagulants & Decolorants</Link></li>
              <li><Link to="/chemicals#calculator">LSI Water Scale Calculator</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Official Contact &amp; Divisions</h5>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.85rem' }}>
              <MapPin size={18} color="#f59e0b" style={{ flexShrink: 0, marginTop: '3px' }} />
              <p style={{ fontSize: '0.875rem', lineHeight: '1.5', color: '#cbd5e1', margin: 0 }}>
                S&S Corporation, C Block, Pramukh Sangam, Samarvarni, Silvasaa, Dadra &amp; Nagar Haveli
              </p>
            </div>
            <div style={{ fontSize: '0.825rem', color: '#94a3b8', display: 'flex', flexDirection: 'column', gap: '0.35rem', marginBottom: '1rem' }}>
              <div><strong style={{ color: '#ffffff' }}>Phone:</strong> <a href="tel:+919561240625" style={{ color: '#38bdf8' }}>+91 95612 40625</a></div>
              <div><strong style={{ color: '#ffffff' }}>Web:</strong> <span style={{ color: '#fbbf24', fontFamily: 'monospace' }}>www.sascorporation.com</span></div>
              <div><strong style={{ color: '#fbbf24' }}>Engineering:</strong> <a href="mailto:engineering.solutions@sascorporation.com" style={{ color: '#cbd5e1', wordBreak: 'break-all' }}>engineering.solutions@sascorporation.com</a></div>
              <div><strong style={{ color: '#38bdf8' }}>AquaCorp:</strong> <a href="mailto:aquacorp@sascorporation.com" style={{ color: '#cbd5e1', wordBreak: 'break-all' }}>aquacorp@sascorporation.com</a></div>
              <div><strong style={{ color: '#94a3b8' }}>Corporate:</strong> <a href="mailto:sandscorporationpvtltd@gmail.com" style={{ color: '#cbd5e1', wordBreak: 'break-all' }}>sandscorporationpvtltd@gmail.com</a></div>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', fontSize: '0.825rem' }}>
              <Link to="/industries" style={{ color: '#94a3b8' }}>Industries</Link>
              <span>•</span>
              <Link to="/about" style={{ color: '#94a3b8' }}>About Firm</Link>
              <span>•</span>
              <Link to="/contact" style={{ color: '#38bdf8' }}>Contact &amp; RFQ</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} S&S Corporation. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', color: '#64748b' }}>
            <Link to="/engineering" style={{ color: '#fbbf24' }}>S&S Engineering Solutions</Link>
            <span>•</span>
            <Link to="/chemicals" style={{ color: '#38bdf8' }}>AquaCorp Chemicals</Link>
            <span>•</span>
            <Link to="/about">About</Link>
            <span>•</span>
            <Link to="/contact">Contact</Link>
            <span>•</span>
            <span>Silvassa, DNH & DD</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

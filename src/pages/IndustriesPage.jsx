import React from 'react'
import { Link } from 'react-router-dom'
import {
  Layers,
  Droplets,
  Flame,
  Activity,
  Cog,
  Building2,
  ShieldCheck,
  Filter,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Wrench,
  Send,
  Phone
} from 'lucide-react'

export default function IndustriesPage() {
  const industries = [
    {
      id: 'paints',
      title: 'Paints, Coatings, Resins & Inks',
      icon: <Layers size={28} />,
      img: 'https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=800&q=80',
      description: 'Handling heavy solvent mixtures, high-viscosity resins, pigment dispersion, and explosive atmospheres with flameproof engineering.',
      engineeringRole: 'Jacketed reactor kettles, flameproof AODD pump transfer skids, automated batching valves, and stainless steel utility pipelines.',
      chemicalRole: 'Cooling tower anti-scalants for solvent condensers, wastewater decoloring polymers, and COD reduction in washdown sumps.'
    },
    {
      id: 'chemicals',
      title: 'Chemical Processing & Petrochemicals',
      icon: <Droplets size={28} />,
      img: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80',
      description: 'Continuous and batch synthesis requiring certified metallurgy, high chemical resistance, and precise thermal control.',
      engineeringRole: 'SS316 / Hastelloy piping, acid storage tanks, modular reagent dosing skids, and PLC-controlled emergency shutdown valves.',
      chemicalRole: 'Process water biocides, gas scrubber neutralizers, corrosion inhibitors for multi-metal systems, and ETP coagulants.'
    },
    {
      id: 'thermal',
      title: 'Thermal Power & Utility Boilers',
      icon: <Flame size={28} />,
      img: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80',
      description: 'Optimizing steam generation, heat exchange rates, and boiler lifespan across heavy industrial utilities.',
      engineeringRole: 'High-pressure steam headers, condensate return loops, pressure-reducing stations, and automated feed-water pump packages.',
      chemicalRole: 'DEHA catalyzed oxygen scavengers, polymeric sludge conditioners, neutralizing amines, and online descaling programs.'
    },
    {
      id: 'pharma',
      title: 'Pharmaceuticals & Clean Formulations',
      icon: <Activity size={28} />,
      img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
      description: 'Strict hygiene, sanitary fluid handling, validation protocols, and purified water distribution networks.',
      engineeringRole: 'Orbital-welded electro-polished piping, CIP/SIP automated washing skids, magnetic drive pumps, and zero-dead-leg valves.',
      chemicalRole: 'RO membrane cleaners, food-grade antiscalants, non-oxidizing membrane biocides, and boiler treatment with steam purity.'
    },
    {
      id: 'textiles',
      title: 'Textiles, Dyeing & Yarn Processing',
      icon: <Cog size={28} />,
      img: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80',
      description: 'Managing massive water consumption volumes, complex dye chemistry, and demanding effluent treatment standards.',
      engineeringRole: 'Large-bore chemical transfer headers, automated dye color-dispensing skids, and heat recovery exchangers.',
      chemicalRole: 'High-performance dye decoloring agents, anionic/cationic polyelectrolytes, biological bio-cultures, and defoamers.'
    },
    {
      id: 'ceramics',
      title: 'Ceramics, Tiles & Minerals',
      icon: <Building2 size={28} />,
      img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
      description: 'Pumping abrasive mineral slurries, settling clay particles, and handling high solids concentration without clogging.',
      engineeringRole: 'Heavy-gauge abrasion-resistant slurry pipelines, positive displacement pumps, settling tanks, and agitator skids.',
      chemicalRole: 'Clay deflocculants, settling polymers, turbidity clarifiers, and recycled water anti-scalants.'
    },
    {
      id: 'packaging',
      title: 'Packaging, Polymers & Extrusion',
      icon: <ShieldCheck size={28} />,
      img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
      description: 'Continuous chiller loops, high-speed molding lines, and thermal stabilization for polymer processing.',
      engineeringRole: 'Chilled water supply/return manifolds, cooling tower piping loops, plate heat exchangers, and booster pumps.',
      chemicalRole: 'Closed-loop nitrite corrosion inhibitors, non-oxidizing algicides, and scale preventives in mold cooling channels.'
    },
    {
      id: 'etp',
      title: 'Industrial Water & Wastewater (ETP / STP / ZLD)',
      icon: <Filter size={28} />,
      img: 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=800&q=80',
      description: 'End-of-pipe environmental compliance, pollution control board norms, and Zero Liquid Discharge (ZLD) implementation.',
      engineeringRole: 'Turnkey ETP piping, clarifier mechanical scrapers, aeration blowers, and filter press dewatering skids.',
      chemicalRole: 'PAC coagulants, polyacrylamide flocculants, COD/BOD reducing formulations, and sludge conditioning agents.'
    }
  ]

  return (
    <div className="page-industries">
      {/* PAGE HERO BANNER */}
      <section className="division-hero" style={{
        background: 'linear-gradient(rgba(15, 23, 42, 0.88), rgba(15, 23, 42, 0.96)), url("https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '5rem 0 4rem',
        borderBottom: '1px solid var(--border-subtle)',
        color: '#ffffff'
      }}>
        <div className="container">
          <div style={{ maxWidth: '850px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '1rem' }}>
              <Link to="/" style={{ color: '#cbd5e1' }}>S&S Corporation</Link>
              <ChevronRight size={14} />
              <span style={{ color: '#38bdf8', fontWeight: 600 }}>Industries We Serve</span>
            </div>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(2, 132, 199, 0.2)', border: '1px solid rgba(2, 132, 199, 0.45)', padding: '0.35rem 0.9rem', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 700, color: '#38bdf8', marginBottom: '1.25rem' }}>
              <Building2 size={15} /> Industrial Application Sectors
            </div>

            <h1 style={{ fontSize: '3.2rem', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.25rem', color: '#ffffff' }}>
              Industries & Manufacturing Sectors
            </h1>

            <p style={{ fontSize: '1.2rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '2rem' }}>
              Discover how <strong>S&S Corporation</strong> integrates heavy mechanical plant engineering with specialized industrial water chemistry across manufacturing clusters in Silvassa, Gujarat, Maharashtra, and nationwide.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="nav-cta" style={{ background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)', color: '#fff', fontWeight: 700 }}>
                <Send size={16} /> Request Industry Technical Proposal
              </Link>
              <a href="tel:+919561240625" className="nav-division-btn nav-btn-chem" style={{ padding: '0.65rem 1.25rem', fontSize: '0.9rem' }}>
                <Phone size={15} /> Call Industry Specialist: +91 95612 40625
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED INDUSTRY SECTORS LIST */}
      <section className="section section-main-bg">
        <div className="container">
          <div className="section-header">
            <span className="section-tag section-tag-neutral">Sector-by-Sector Capabilities</span>
            <h2 className="section-title">Specialized Engineering & Chemical Programs</h2>
            <p className="section-desc">
              Every manufacturing sector faces distinct operating conditions. Explore how our dual business units serve your specific plant requirements:
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {industries.map((ind, index) => (
              <div
                key={ind.id}
                id={ind.id}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-card)',
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-card)',
                  display: 'grid',
                  gridTemplateColumns: '360px 1fr',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ position: 'relative', overflow: 'hidden', minHeight: '260px' }}>
                  <img
                    src={ind.img}
                    alt={ind.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(9, 13, 22, 0.2) 0%, rgba(9, 13, 22, 0.85) 100%)', display: 'flex', alignItems: 'flex-end', padding: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#ffffff' }}>
                      <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38bdf8' }}>
                        {ind.icon}
                      </div>
                      <span style={{ fontSize: '1.15rem', fontWeight: 800, textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                        Sector 0{index + 1}
                      </span>
                    </div>
                  </div>
                </div>

                <div style={{ padding: '2.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--text-heading)', marginBottom: '0.75rem' }}>
                      {ind.title}
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.975rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                      {ind.description}
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '1rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
                      <div style={{ background: 'var(--eng-bg-subtle)', border: '1px solid var(--eng-border-subtle)', borderRadius: '12px', padding: '1.25rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--eng-primary)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                          <Wrench size={16} /> S&S Engineering Role
                        </div>
                        <p style={{ fontSize: '0.875rem', color: 'var(--text-main)', lineHeight: '1.5' }}>
                          {ind.engineeringRole}
                        </p>
                      </div>

                      <div style={{ background: 'var(--chem-bg-subtle)', border: '1px solid var(--chem-border-subtle)', borderRadius: '12px', padding: '1.25rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--chem-primary)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                          <Droplets size={16} /> AquaCorp Chemicals Role
                        </div>
                        <p style={{ fontSize: '0.875rem', color: 'var(--text-main)', lineHeight: '1.5' }}>
                          {ind.chemicalRole}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <Link to="/engineering" style={{ fontSize: '0.85rem', color: 'var(--eng-primary)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                        Explore Engineering Solutions <ArrowRight size={13} />
                      </Link>
                      <span style={{ color: 'var(--border-subtle)' }}>•</span>
                      <Link to="/chemicals" style={{ fontSize: '0.85rem', color: 'var(--chem-primary)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                        Explore AquaCorp Chemicals <ArrowRight size={13} />
                      </Link>
                    </div>

                    <Link to="/contact" className="nav-cta" style={{ padding: '0.45rem 1rem', fontSize: '0.825rem' }}>
                      Inquire for this Sector
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="section section-alt-bg" style={{ textAlign: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', margin: '0 auto' }}>
            <span className="section-tag section-tag-neutral">Ready to Collaborate?</span>
            <h2 className="section-title">Schedule an On-Site Engineering & Water Audit</h2>
            <p className="section-desc" style={{ marginBottom: '2rem' }}>
              Our engineering specialists and water chemistry auditors visit your plant in Silvassa, Vapi, or surrounding industrial regions for a free baseline inspection.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="nav-cta" style={{ padding: '0.85rem 1.75rem', fontSize: '1rem' }}>
                <Send size={17} /> Request On-Site Plant Audit
              </Link>
              <a href="tel:+919561240625" className="nav-division-btn nav-btn-chem" style={{ padding: '0.85rem 1.75rem', fontSize: '1rem' }}>
                <Phone size={17} /> Direct Call: +91 95612 40625
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './AboutPage.css'
import qualityImg from '../assets/images/quality.png'

const milestones = [
  { year: '1986', title: 'Foundation', desc: 'SSV Pharmaceuticals was established with a small manufacturing unit and a big vision for quality healthcare.' },
  { year: '1995', title: 'WHO-GMP Certification', desc: 'Achieved WHO-GMP certification, marking our commitment to international quality standards.' },
  { year: '2005', title: 'Export Operations', desc: 'Expanded to international markets, beginning exports to Asia and Africa.' },
  { year: '2015', title: 'R&D Centre Launch', desc: 'Opened a state-of-the-art R&D centre for new drug development and formulation research.' },
  { year: '2024', title: 'Global Presence', desc: 'Reached 12+ countries with 200+ products across multiple therapeutic categories.' },
]

const values = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'Our Vision',
    description: 'To become a globally recognized pharmaceutical company known for innovation, quality, and making healthcare accessible to communities worldwide.',
    color: '#3b82f6',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
    title: 'Our Mission',
    description: 'To deliver safe, effective, and affordable pharmaceutical solutions through continuous research, ethical practices, and unwavering commitment to quality.',
    color: '#10b981',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </svg>
    ),
    title: 'Our Values',
    description: 'Integrity, innovation, patient safety, and social responsibility form the cornerstones of everything we do — from R&D to distribution.',
    color: '#f59e0b',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: 'Our People',
    description: 'Our 500+ dedicated professionals are the backbone of SSV — driven by passion, guided by purpose, and united by a commitment to better health outcomes.',
    color: '#8b5cf6',
  },
]

const certifications = [
  { name: 'WHO-GMP', desc: 'World Health Organization Good Manufacturing Practice' },
  { name: 'ISO 9001', desc: 'International Quality Management System' },
  { name: 'ISO 14001', desc: 'Environmental Management Standards' },
  { name: 'FSSAI', desc: 'Food Safety & Standards Authority of India' },
]

const stats = [
  { number: '38+', label: 'Years of Excellence' },
  { number: '200+', label: 'Products Portfolio' },
  { number: '12+', label: 'Export Countries' },
  { number: '500+', label: 'Professionals' },
]

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="about-page">

      {/* ── Hero Banner ── */}
      <section className="ap-hero">
        <div className="ap-hero__overlay" />
        <div className="ap-hero__content container">
          <Link to="/" className="ap-back-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
            Back to Home
          </Link>
          <span className="ap-hero__label">About SSV Pharmaceuticals</span>
          <h1 className="ap-hero__title">Committed to Health,<br/>Driven by Science.</h1>
          <p className="ap-hero__sub">For over 38 years, we've been manufacturing and delivering trusted pharmaceutical formulations across India and globally.</p>
        </div>
        {/* Scroll indicator */}
        <div className="ap-hero__scroll">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <section className="ap-stats">
        <div className="container ap-stats__inner">
          {stats.map((s, i) => (
            <div className="ap-stat" key={i}>
              <span className="ap-stat__number">{s.number}</span>
              <span className="ap-stat__label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Who We Are ── */}
      <section className="ap-section ap-who">
        <div className="container ap-who__inner">
          <div className="ap-who__content">
            <span className="section-label">Who We Are</span>
            <h2 className="section-title">Our <span>Story</span></h2>
            <p className="ap-text">
              Founded in 1986 with a vision to make quality healthcare accessible to all, SSV Pharmaceuticals has grown from a modest beginning into a trusted name in the pharmaceutical industry. With over three decades of experience, we manufacture and distribute a wide range of pharmaceutical formulations that meet international standards.
            </p>
            <p className="ap-text">
              Our commitment to research-driven innovation, stringent quality controls, and patient-centric approach has earned us the trust of healthcare professionals and patients across 12+ countries. We operate with the conviction that every patient deserves the highest quality medicine.
            </p>
            <div className="ap-who__highlights">
              <div className="ap-highlight">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
                <span>WHO-GMP Certified Manufacturing</span>
              </div>
              <div className="ap-highlight">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
                <span>Exporting to 12+ Countries</span>
              </div>
              <div className="ap-highlight">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
                <span>200+ Product Portfolio</span>
              </div>
              <div className="ap-highlight">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
                <span>500+ Skilled Professionals</span>
              </div>
            </div>
          </div>
          <div className="ap-who__image">
            <img
              src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=800&h=600&fit=crop&auto=format"
              alt="SSV Pharmaceuticals team"
            />
            <div className="ap-who__badge">
              <span className="ap-who__badge-number">38+</span>
              <span className="ap-who__badge-label">Years of<br/>Excellence</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision & Values ── */}
      <section className="ap-section ap-vision">
        <div className="container">
          <div className="ap-section-header">
            <span className="section-label">Vision & Values</span>
            <h2 className="section-title">What <span>Drives Us</span> Forward</h2>
            <p className="ap-section-sub">Our guiding principles shape every decision, from the lab to the patient.</p>
          </div>
          <div className="ap-vision__grid">
            {values.map((v, i) => (
              <div className="ap-vision__card" key={i} style={{ '--card-color': v.color }}>
                <div className="ap-vision__card-icon" style={{ color: v.color }}>
                  {v.icon}
                </div>
                <h3 className="ap-vision__card-title">{v.title}</h3>
                <p className="ap-vision__card-desc">{v.description}</p>
                <div className="ap-vision__card-bar" style={{ background: v.color }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Milestones ── */}
      <section className="ap-section ap-milestones">
        <div className="container">
          <div className="ap-section-header">
            <span className="section-label">Our Journey</span>
            <h2 className="section-title">Key <span>Milestones</span></h2>
            <p className="ap-section-sub">From a humble beginning to a global pharmaceutical presence — the moments that defined us.</p>
          </div>
          <div className="ap-timeline">
            {milestones.map((m, i) => (
              <div className={`ap-timeline__item ${i % 2 === 0 ? 'ap-timeline__item--left' : 'ap-timeline__item--right'}`} key={i}>
                <div className="ap-timeline__dot">
                  <span>{m.year}</span>
                </div>
                <div className="ap-timeline__card">
                  <h3 className="ap-timeline__title">{m.title}</h3>
                  <p className="ap-timeline__desc">{m.desc}</p>
                </div>
              </div>
            ))}
            <div className="ap-timeline__line" />
          </div>
        </div>
      </section>

      {/* ── Quality ── */}
      <section className="ap-section ap-quality">
        <div className="container ap-quality__inner">
          <div className="ap-quality__content">
            <span className="section-label">Quality & Certifications</span>
            <h2 className="section-title">Uncompromising <span>Quality</span> Standards</h2>
            <p className="ap-text">
              Every product that leaves our facility undergoes rigorous testing and quality assurance processes. Our manufacturing plants are certified by international regulatory bodies, ensuring that our products meet the highest global standards.
            </p>
            <div className="ap-quality__certs">
              {certifications.map((cert, i) => (
                <div className="ap-quality__cert" key={i}>
                  <div className="ap-quality__cert-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="ap-quality__cert-name">{cert.name}</span>
                    <span className="ap-quality__cert-desc">{cert.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="ap-quality__image">
            <img src={qualityImg} alt="GMP-certified manufacturing facility" />
            <div className="ap-quality__badge">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/>
              </svg>
              <span>GMP Certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="ap-cta">
        <div className="container ap-cta__inner">
          <h2>Ready to Partner with Us?</h2>
          <p>Get in touch with our team to explore opportunities in pharmaceutical manufacturing and distribution.</p>
          <Link to="/" className="btn ap-cta__btn">
            Contact Us
          </Link>
        </div>
      </section>

    </div>
  )
}

export default AboutPage

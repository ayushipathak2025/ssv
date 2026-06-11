import { useEffect, useRef, useState } from 'react'
import './Hero.css'
import heroBg from '../../assets/images/hero-bg.png'

const stats = [
  { number: '38+', label: 'Years of Excellence' },
  { number: '200+', label: 'Quality Products' },
  { number: '12', label: 'Countries Served' },
  { number: '500+', label: 'Professionals' },
]

const Hero = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="hero" id="hero">
      <div className="hero__bg">
        <img src={heroBg} alt="Pharmaceutical laboratory" />
        <div className="hero__overlay"></div>
      </div>

      <div className="hero__content container">
        <div className={`hero__text ${visible ? 'hero__text--visible' : ''}`}>
          <span className="hero__eyebrow">ADVANCING GLOBAL HEALTHCARE</span>
          <h1 className="hero__title">
            Committed to Health,<br />
            Driven by Science.
          </h1>
          <p className="hero__description">
            SSV Pharmaceuticals is dedicated to delivering high-quality
            medicines across therapeutic categories — improving lives
            worldwide through innovation and trust.
          </p>
          <div className="hero__buttons">
            <a href="#products" className="btn btn-primary" id="hero-cta-explore">
              Explore Products
            </a>
            <a href="#about" className="btn btn-outline" id="hero-cta-learn">
              Learn More
            </a>
          </div>
        </div>
      </div>

      <div className={`hero__stats ${visible ? 'hero__stats--visible' : ''}`}>
        <div className="hero__stats-inner container">
          {stats.map((stat, i) => (
            <div className="hero__stat" key={i} style={{ animationDelay: `${0.6 + i * 0.15}s` }}>
              <span className="hero__stat-number">{stat.number}</span>
              <span className="hero__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero

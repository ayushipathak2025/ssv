import { useEffect, useRef, useState } from 'react'
import './About.css'
import aboutImg from '../../assets/images/about-us.png'

const About = () => {
  const [visible, setVisible] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="about" id="about" ref={ref}>
      <div className={`about__inner container ${visible ? 'about--visible' : ''}`}>
        <div className="about__content">
          <span className="section-label">About Us</span>
          <h2 className="section-title">
            A Legacy of Trust in <span>Healthcare</span>
          </h2>
          <p className="about__text">
            Founded with a vision to make quality healthcare accessible to all,
            SSV Pharmaceuticals has grown from a modest beginning into a
            trusted name in the pharmaceutical industry. With over three decades
            of experience, we manufacture and distribute a wide range of
            pharmaceutical formulations that meet international standards.
          </p>
          <p className="about__text">
            Our commitment to research-driven innovation, stringent quality
            controls, and patient-centric approach has earned us the trust of
            healthcare professionals and patients across 12+ countries.
          </p>
          <a href="#milestones" className="btn btn-dark" id="about-cta">
            Our Journey
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        <div className="about__image">
          <div className="about__image-wrapper">
            <img src={aboutImg} alt="SSV Pharmaceuticals team" />
            <div className="about__badge">
              <span className="about__badge-number">38+</span>
              <span className="about__badge-label">Years of<br/>Excellence</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

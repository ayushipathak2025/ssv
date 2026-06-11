import { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu)
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="navbar">
      <div className="navbar__inner container">
        {/* Logo */}
        <a href="#" className="navbar__logo" id="logo">
          <div className="navbar__logo-icon">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <circle cx="18" cy="18" r="16" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 10h3l3 8 3-8h3v16h-3V16l-3 8-3-8v10h-3V10z" fill="currentColor"/>
            </svg>
          </div>
          <div className="navbar__logo-text">
            <span className="navbar__logo-name">SSV</span>
            <span className="navbar__logo-tagline">PHARMACEUTICALS</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className="navbar__menu" id="nav-menu">
          <li className="navbar__item navbar__item--dropdown"
              onMouseEnter={() => setActiveDropdown('home')}
              onMouseLeave={() => setActiveDropdown(null)}>
            <a href="#hero" className="navbar__link">
              Home
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </a>
            {activeDropdown === 'home' && (
              <ul className="navbar__dropdown">
                <li><a href="#about">About Us</a></li>
                <li><a href="#vision">Vision & Values</a></li>
                <li><a href="#milestones">Milestones</a></li>
                <li><a href="#quality">Quality</a></li>
              </ul>
            )}
          </li>
          <li className="navbar__item navbar__item--dropdown"
              onMouseEnter={() => setActiveDropdown('products')}
              onMouseLeave={() => setActiveDropdown(null)}>
            <a href="#products" className="navbar__link">
              Products
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </a>
            {activeDropdown === 'products' && (
              <ul className="navbar__dropdown">
                <li><a href="#">Tablets & Capsules</a></li>
                <li><a href="#">Injectables</a></li>
                <li><a href="#">Syrups & Suspensions</a></li>
                <li><a href="#">Ointments & Creams</a></li>
                <li><a href="#">Nutraceuticals</a></li>
                <li><a href="#">Veterinary</a></li>
              </ul>
            )}
          </li>
          <li className="navbar__item">
            <a href="#quality" className="navbar__link">Quality</a>
          </li>
          <li className="navbar__item">
            <a href="#contact" className="navbar__link">Contact</a>
          </li>
        </ul>

        {/* Right Side */}
        <div className="navbar__actions">
          <button className="navbar__search" id="search-btn" aria-label="Search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
            </svg>
          </button>
          <a href="#contact" className="btn btn-dark navbar__cta" id="contact-btn">Contact Us</a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`navbar__hamburger ${mobileOpen ? 'active' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          id="mobile-toggle"
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="navbar__mobile" id="mobile-menu">
          <a href="#hero" onClick={() => setMobileOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMobileOpen(false)}>About Us</a>
          <a href="#vision" onClick={() => setMobileOpen(false)}>Vision & Values</a>
          <a href="#milestones" onClick={() => setMobileOpen(false)}>Milestones</a>
          <a href="#products" onClick={() => setMobileOpen(false)}>Products</a>
          <a href="#quality" onClick={() => setMobileOpen(false)}>Quality</a>
          <a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  )
}

export default Navbar

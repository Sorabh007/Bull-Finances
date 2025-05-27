import React, { useState, useEffect } from 'react';
import './index.css';
import Hero from './Components/Hero/Hero';
import logo from './assets/logo_2.png'
import TestimonialPage from './Components/Testimonials/Testimonial';
import WhoWeAre from './Components/about/about';
import Features from './Components/features/features';
import Footer from './Components/footer/footer';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="header">
        <header className="heading">
          <div className='brand'>
            <img className='header-logo' src={logo} alt='Logo' />
            <h1>Bull Finances</h1>
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            ☰
          </div>
          <nav className={`Navbar ${menuOpen ? 'open' : ''}`}>
            <a href="#WhoWeAre">Who We Are</a>
            <a href="#Features">Features</a>
            <a href="tel:+918400200854" className="desktop-phone">📞 +91 8400200854</a>
          </nav>
        </header>
      </div>

      <a href="tel:+918400200854" className="mobile-phone-fixed">
        Call Now
      </a>

      <Hero />
      <TestimonialPage />
      <WhoWeAre />
      <Features />
      <Footer />
      {showScrollButton && (
        <button
          className="scroll-to-top show"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </>
  );
}

export default App;

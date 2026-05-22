import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Services from '../components/Services';
import Footer from '../components/Footer';
import './Home.css';

// ✅ Ad component for showing Google Ads
const AdBanner = ({ slot }) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('AdSense error:', e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block', textAlign: 'center', margin: '40px auto', opacity: 0.15 }}
      data-ad-client="ca-pub-5793619803460776"
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

const Home = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  // ✅ Show scroll-to-top button after scrolling 300px
  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="page-container fade-in">
      {/* ✅ Navbar */}
      <Navbar />

      {/* ✅ Hero section */}
      <HeroSection />

      {/* ✅ About section */}
      <About />

      {/* ✅ First ad only after meaningful content */}
      <AdBanner slot="1234567890" />

      {/* ✅ Services & Projects section */}
      <Services />

      {/* ✅ Optional second ad, but keep it near the bottom */}
      <AdBanner slot="9876543210" />

      {/* ✅ Footer */}
      <Footer />

      {/* ✅ Scroll to top button */}
      {showTopBtn && (
        <button className="scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
          ↑
        </button>
      )}
    </div>
  );
};

export default Home;

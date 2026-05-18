import React, { useState, useEffect } from 'react';
import './App.css'; 

// ─── GOOGLE APPS SCRIPT BACKEND ENDPOINT CONFIGURATION ───
const BACKEND_API_URL = "https://script.google.com/macros/s/AKfycbxcI6NsdYHUMz2lma_cx7_1-Vf1CCLkG0n9XY86_XucG5q7RDvs9D2fnDhgijF70SVkJg/exec";

async function sendToBackendEngine(payloadData) {
  try {
    await fetch(BACKEND_API_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body: JSON.stringify(payloadData)
    });
    return { success: true, message: "Payload successfully routed." };
  } catch (error) {
    console.error("Critical backend connection submission failure:", error);
    return { success: false, message: error.toString() };
  }
}

export default function App() {
  const [activePortal, setActivePortal] = useState(null);
  const [toastMsg, setToastMsg] = useState('');
  const [isToastVisible, setIsToastVisible] = useState(false);

  // ─── FORM INPUT STATES FOR DATABASE BINDINGS ───
  const [bookingName, setBookingName] = useState('');
  const [bookingEmail, setBookingEmail] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingLocation, setBookingLocation] = useState('');
  const [bookingBudget, setBookingBudget] = useState('$1k - $10k');
  const [subscribeEmail, setSubscribeEmail] = useState('');

  useEffect(() => {
    setTimeout(() => showToast("Belly Dancer Season Out Now"), 1500);
  }, []);

  const showToast = (msg) => {
    setToastMsg(msg);
    setIsToastVisible(true);
    setTimeout(() => setIsToastVisible(false), 3000);
  };

  const openPortal = (id) => {
    setActivePortal(id);
    document.body.style.overflow = 'hidden';
  };

  const closePortal = () => {
    setActivePortal(null);
    document.body.style.overflow = 'auto';
  };

  // ─── LIVE BACKEND HANDLERS ───
  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    showToast('Sending Booking Request...');
     
    const payload = {
      action: 'booking',
      name: bookingName,
      email: bookingEmail,
      date: bookingDate,
      location: bookingLocation,
      budget: bookingBudget,
      notes: 'Submitted via Web Abstract Portal Form'
    };

    const result = await sendToBackendEngine(payload);
    if (result.success) {
      showToast('Booking Request Received.');
      setBookingName('');
      setBookingEmail('');
      setBookingDate('');
      setBookingLocation('');
      closePortal();
    }
  };

  const handleSubscribeSubmit = async (e) => {
    e.preventDefault();
    showToast('Synchronizing Frequencies...');

    const payload = {
      action: 'subscribe',
      email: subscribeEmail
    };

    const result = await sendToBackendEngine(payload);
    if (result.success) {
      showToast('Welcome to the Tribe.');
      setSubscribeEmail('');
      closePortal();
    }
  };

  return (
    <>
      <div className="container">
        
        {/* VIDEO BACKGROUND CONTAINER */}
        <div className="hero-container">
          <video autoPlay loop muted playsInline className="background-video">
            <source src="https://res.cloudinary.com/dccxjo9x8/video/upload/v1778949878/backgroundVideo_qpjurc.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* NAVIGATION LINKS */}
        <nav>
          <a href="https://unitedmasters.com/m/inflection" target="_blank" rel="noreferrer" className="nav-inflection">BELLY DANCER</a>
          
          <a href="https://www.youtube.com/@ODUWAIAM?sub_confirmation=1" target="_blank" rel="noreferrer" className="nav-video">VIDEO <span className="bling">●</span></a>
          <a onClick={() => openPortal('booking-portal')} className="nav-booking">BOOKING <span className="bling">●</span></a>
          <a onClick={() => openPortal('bio-portal')} className="nav-bio">BIO <span className="bling">●</span></a>
          <a onClick={() => openPortal('tour-portal')} className="nav-tour">TOUR <span className="bling">●</span></a>
          <a onClick={() => openPortal('merch-portal')} className="nav-merch">MERCH <span className="bling">●</span></a>
          <a onClick={() => openPortal('music-portal')} className="nav-music">MUSIC <span className="bling">●</span></a>
          <a onClick={() => openPortal('gallery-portal')} className="nav-gallery">GALLERY <span className="bling">●</span></a>
          <a onClick={() => openPortal('join-portal')} className="nav-join">JOIN <span className="bling">●</span></a>
          
          <div className="scroll-indicator">Scroll Down</div>
        </nav>

        <div className="scroll-footer-area">
          <footer>
            <a href="mailto:Info@oduwaiam.com" className="footer-email">Info@oduwaiam.com</a>
            <div style={{ letterSpacing: '0.1em', fontSize: '0.6rem' }}>&copy; ODUWA 2026 | ALL RIGHTS RESERVED</div>
          </footer>
        </div>

        <div className="floating-socials">
          <a href="https://www.youtube.com/@ODUWAIAM?sub_confirmation=1" target="_blank" rel="noreferrer">YT</a>
          <a href="https://instagram.com/oduwaiam" target="_blank" rel="noreferrer">IG</a>
          <a href="https://twitter.com/oduwaiam" target="_blank" rel="noreferrer">X</a>
          <a href="https://tiktok.com/@oduwaiam" target="_blank" rel="noreferrer">TK</a>
        </div>
      </div>

      <div className={`toast-message ${isToastVisible ? 'show' : ''}`}>{toastMsg}</div>

      {/* Booking Portal */}
      {activePortal === 'booking-portal' && (
        <div className="overlay">
          <div className="portal-card">
            <h2 className="portal-title">Book Oduwa</h2>
            <form onSubmit={handleBookingSubmit}>
              <div className="portal-section">
                <label className="section-label">Full Name / Organization</label>
                <input type="text" placeholder="Who is booking?" value={bookingName} onChange={(e) => setBookingName(e.target.value)} required />
              </div>
              <div className="portal-section">
                <label className="section-label">Email Address</label>
                <input type="email" placeholder="Your contact email" value={bookingEmail} onChange={(e) => setBookingEmail(e.target.value)} required />
              </div>
              <div className="portal-section" style={{ display: 'flex', gap: '10px' }}>
                <div style={{ flex: 1 }}>
                  <label className="section-label">Event Date</label>
                  <input type="text" placeholder="DD/MM/YYYY" value={bookingDate} onChange={(e) => setBookingDate(e.target.value)} />
                </div>
                <div style={{ flex: 1 }}>
                  <label className="section-label">Location</label>
                  <input type="text" placeholder="City, Country" value={bookingLocation} onChange={(e) => setBookingLocation(e.target.value)} />
                </div>
              </div>
              <div className="portal-section">
                <label className="section-label">Budget Range (USD)</label>
                <select value={bookingBudget} onChange={(e) => setBookingBudget(e.target.value)}>
                  <option>$1k - $10k</option>
                  <option>$10k - $25k</option>
                  <option>$25k - $50k</option>
                  <option>$100k - $1m</option>
                </select>
              </div>
              <button type="submit" className="btn-action">SEND INQUIRY</button>
            </form>
            <button className="btn-close" onClick={closePortal}>Close</button>
          </div>
        </div>
      )}

      {/* Merch Portal (Configured with elegant placeholder) */}
      {activePortal === 'merch-portal' && (
        <div className="overlay">
          <div className="portal-card">
            <h2 className="portal-title">Merch Store</h2>
            <div style={{ textAlign: 'center', padding: '40px 0', color: '#ccc', letterSpacing: '0.1em', fontSize: '0.9rem' }}>
              <p style={{ color: '#EAB308', fontWeight: 'bold' }}>BELLY DANCER CAPSULE COLLECTION</p>
              <p style={{ marginTop: '10px', fontSize: '0.8rem', color: '#888' }}>LOCKING DOWN INVENTORY LINES • DROPPING SOON</p>
            </div>
            <button className="btn-close" onClick={closePortal}>Back</button>
          </div>
        </div>
      )}

      {/* Music Portal (Cleaned up waiting on metadata assets) */}
      {activePortal === 'music-portal' && (
        <div className="overlay">
          <div className="portal-card">
            <h2 className="portal-title">Discography</h2>
            <div style={{ textAlign: 'center', padding: '40px 0', color: '#ccc', letterSpacing: '0.1em', fontSize: '0.9rem' }}>
              <p style={{ color: '#EAB308', fontWeight: 'bold' }}>SONIC ARCHIVES VAULT</p>
              <p style={{ marginTop: '10px', fontSize: '0.8rem', color: '#888' }}>PROCESSING TRANSCENDENT FREQUENCIES • COMING SOON</p>
            </div>
            <button className="btn-close" onClick={closePortal}>Back</button>
          </div>
        </div>
      )}

      {/* Bio Portal */}
      {activePortal === 'bio-portal' && (
        <div className="overlay">
          <div className="portal-card">
            <h2 className="portal-title">Biography</h2>
            <div style={{ fontSize: '0.9rem', lineHeight: '1.7', color: '#ccc' }}>
              <p><strong>ODUWA</strong> is more than an artist; he is a sonic architect. Born in Nigeria and raised within the vibrant polyrhythms of Afrobeat, Oduwa has spent years meticulously crafting a sound that bridges the gap between raw street energy and high-fashion luxury.</p>
              <p>His latest single, <em>BELLY DANCER</em>, marks a daring progression in his aesthetic—layering hypnotic visual concepts over hard-hitting international syncopated grooves.</p>
              <p>2026 marks the beginning of the Global Tour cycle, scaling up experimental visions to live crowds across borders.</p>
            </div>
            <button className="btn-close" onClick={closePortal}>Back</button>
          </div>
        </div>
      )}

      {/* Tour Portal (Updated with explicit Tix Africa connection routing) */}
      {activePortal === 'tour-portal' && (
        <div className="overlay">
          <div className="portal-card">
            <h2 className="portal-title">World Tour</h2>
            <div style={{ textAlign: 'center', padding: '20px 0', color: '#ccc', fontSize: '0.9rem' }}>
              <p style={{ marginBottom: '5px' }}>No live dates currently scheduled.</p>
              <p style={{ color: '#888', marginBottom: '25px', fontSize: '0.8rem' }}>Monitor upcoming show drops via our primary ticketing engine.</p>
              <a 
                href="https://tix.africa" 
                target="_blank" 
                rel="noreferrer" 
                className="btn-action" 
                style={{ display: 'inline-block', textDecoration: 'none', textAlign: 'center' }}
              >
                CHECK TIX AFRICA
              </a>
            </div>
            <button className="btn-close" onClick={closePortal} style={{ marginTop: '15px' }}>Back</button>
          </div>
        </div>
      )}

      {/* Gallery Portal (Configured with high-end placeholder layout) */}
      {activePortal === 'gallery-portal' && (
        <div className="overlay">
          <div className="portal-card">
            <h2 className="portal-title">Visuals</h2>
            <div style={{ textAlign: 'center', padding: '40px 0', color: '#ccc', letterSpacing: '0.1em', fontSize: '0.9rem' }}>
              <p style={{ color: '#EAB308', fontWeight: 'bold' }}>VISUAL SYSTEMS SECURED</p>
              <p style={{ marginTop: '10px', fontSize: '0.8rem', color: '#888' }}>HIGH-RESOLUTION CINEMATIC ENGINES LOADED WITH NEXT CYCLE</p>
            </div>
            <button className="btn-close" onClick={closePortal}>Back</button>
          </div>
        </div>
      )}

      {/* Join Portal */}
      {activePortal === 'join-portal' && (
        <div className="overlay">
          <div className="portal-card">
            <h2 className="portal-title">Join Tribe</h2>
            <form onSubmit={handleSubscribeSubmit}>
              <div className="portal-section">
                <label className="section-label">Email</label>
                <input type="email" placeholder="your@email.com" value={subscribeEmail} onChange={(e) => setSubscribeEmail(e.target.value)} required />
              </div>
              <button type="submit" className="btn-action">SUBSCRIBE</button>
            </form>
            <button className="btn-close" onClick={closePortal}>Back</button>
          </div>
        </div>
      )}
    </>
  );
}

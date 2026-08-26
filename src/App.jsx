import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activePortal, setActivePortal] = useState(null);
  const [bookingStatus, setBookingStatus] = useState('');
  const [emailStatus, setEmailStatus] = useState('');
  const [toast, setToast] = useState({ show: false, message: '' });

  // Dynamically inject Google Tag Manager on mount
  useEffect(() => {
    const gtmScript = document.createElement('script');
    gtmScript.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-KJWB6WHS');
    `;
    document.head.appendChild(gtmScript);

    const gtmNoscript = document.createElement('noscript');
    gtmNoscript.innerHTML = `
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KJWB6WHS"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>
    `;
    document.body.insertBefore(gtmNoscript, document.body.firstChild);
  }, []);

  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => {
      setToast({ show: false, message: '' });
    }, 3500);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingStatus('Inquiry Sent Successfully!');
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'booking_submitted' });
    showToast('Booking Inquiry Received');
    e.target.reset();
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setEmailStatus('Welcome to the Tribe!');
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'complete_registration' });
    showToast('Successfully Subscribed');
    e.target.reset();
  };

  return (
    <div className="container">
      {/* Background Video Layer */}
      <div className="hero-container">
        <video autoPlay muted loop playsInline className="background-video">
          <source src="https://res.cloudinary.com/demo/video/upload/v1/background.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>

      {/* Floating Social Links */}
      <div className="floating-socials">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">IG</a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">TT</a>
        <a href="https://spotify.com" target="_blank" rel="noopener noreferrer">SP</a>
      </div>

      {/* Main Scatter Navigation Screen */}
      <nav>
        <div className="nav-inflection">
          <img 
            src="https://res.cloudinary.com/demo/image/upload/v1/logo.png" 
            alt="King Oduwa Logo" 
            className="nav-logo"
            onError={(e)=>{e.target.style.display='none'}}
          />
          <span>KING ODUWA</span>
        </div>

        <a onClick={() => setActivePortal('video')} className="nav-video">
          [01] VISUALS <span className="bling">✦</span>
        </a>
        <a onClick={() => setActivePortal('booking')} className="nav-booking">
          [02] BOOKING <span className="bling">✦</span>
        </a>
        <a onClick={() => setActivePortal('bio')} className="nav-bio">
          [03] BIO <span className="bling">✦</span>
        </a>
        <a onClick={() => setActivePortal('tour')} className="nav-tour">
          [04] TOUR <span className="bling">✦</span>
        </a>
        <a onClick={() => setActivePortal('merch')} className="nav-merch">
          [05] MERCH <span className="bling">✦</span>
        </a>
        <a onClick={() => setActivePortal('music')} className="nav-music">
          [06] MUSIC <span className="bling">✦</span>
        </a>
        <a onClick={() => setActivePortal('gallery')} className="nav-gallery">
          [07] GALLERY <span className="bling">✦</span>
        </a>
        <a onClick={() => setActivePortal('join')} className="nav-join">
          [08] JOIN <span className="bling">✦</span>
        </a>
      </nav>

      {/* Footer Area */}
      <div className="scroll-footer-area">
        <a href="mailto:management@kingoduwa.com" className="footer-email">MANAGEMENT@KINGODUWA.COM</a>
        <footer>&copy; 2026 LUMUSIC & MEHMEH QUIN LTD</footer>
      </div>
      <div className="scroll-indicator">SCROLL / INTERACT</div>

      {/* OVERLAYS & PORTALS */}
      {activePortal === 'video' && (
        <div className="overlay" onClick={() => setActivePortal(null)}>
          <div className="portal-card" onClick={(e) => e.stopPropagation()}>
            <h2 className="portal-title">GUUD NEWS VISUAL</h2>
            <div className="coming-soon-banner">WORLD PREMIERE LIVE</div>
            <button className="btn-close" onClick={() => setActivePortal(null)}>CLOSE [X]</button>
          </div>
        </div>
      )}

      {activePortal === 'booking' && (
        <div className="overlay" onClick={() => setActivePortal(null)}>
          <div className="portal-card" onClick={(e) => e.stopPropagation()}>
            <h2 className="portal-title">BOOKING PORTAL</h2>
            <form onSubmit={handleBookingSubmit}>
              <span className="section-label">Promoter / Name</span>
              <input type="text" required placeholder="Enter full name or organization" />
              <span className="section-label">Email Address</span>
              <input type="email" required placeholder="contact@domain.com" />
              <span className="section-label">Event Details</span>
              <textarea required placeholder="City, Venue, Date, and Offer details..." />
              <button type="submit" className="btn-action">SEND INQUIRY</button>
              {bookingStatus && <p style={{color: '#4ade80', textAlign: 'center', marginTop: '10px'}}>{bookingStatus}</p>}
            </form>
            <button className="btn-close" onClick={() => setActivePortal(null)}>CLOSE [X]</button>
          </div>
        </div>
      )}

      {activePortal === 'bio' && (
        <div className="overlay" onClick={() => setActivePortal(null)}>
          <div className="portal-card" onClick={(e) => e.stopPropagation()}>
            <h2 className="portal-title">BIOGRAPHY</h2>
            <p style={{color: '#aaa', lineHeight: '1.6', fontSize: '0.9rem'}}>
              King Oduwa is an innovative force bridging authentic African rhythms, high-fashion culture, and global soundscapes. Spearheading the new wave of independent music through Lumusic, the journey continues with the smash release <em>GUUD NEWS</em>.
            </p>
            <button className="btn-close" onClick={() => setActivePortal(null)}>CLOSE [X]</button>
          </div>
        </div>
      )}

      {activePortal === 'tour' && (
        <div className="overlay" onClick={() => setActivePortal(null)}>
          <div className="portal-card" onClick={(e) => e.stopPropagation()}>
            <h2 className="portal-title">TOUR DATES</h2>
            <div className="coming-soon-banner" style={{padding: '30px 0'}}>2026 WORLD DATES ANNOUNCING SOON</div>
            <button className="btn-close" onClick={() => setActivePortal(null)}>CLOSE [X]</button>
          </div>
        </div>
      )}

      {activePortal === 'merch' && (
        <div className="overlay" onClick={() => setActivePortal(null)}>
          <div className="portal-card" onClick={(e) => e.stopPropagation()}>
            <h2 className="portal-title">LIMITED MERCH</h2>
            <div className="coming-soon-banner" style={{padding: '30px 0'}}>DROP 01 COMING SOON</div>
            <button className="btn-close" onClick={() => setActivePortal(null)}>CLOSE [X]</button>
          </div>
        </div>
      )}

      {activePortal === 'music' && (
        <div className="overlay" onClick={() => setActivePortal(null)}>
          <div className="portal-card" onClick={(e) => e.stopPropagation()}>
            <h2 className="portal-title">DISCOGRAPHY</h2>
            <div className="disco-grid">
              <a href="https://distrokid.com/hyperfollow/oduwa/guud-news/" target="_blank" rel="noreferrer" className="disco-item">
                <img src="https://res.cloudinary.com/demo/image/upload/v1/Vibe_iwnfrp.jpg" alt="Guud News" className="disco-img" onError={(e)=>{e.target.src='https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=400&q=80'}} />
                <div className="disco-title">GUUD NEWS (2026)</div>
              </a>
            </div>
            <a href="https://distrokid.com/hyperfollow/oduwa/guud-news/" target="_blank" rel="noreferrer" className="btn-action" style={{display: 'block', textAlign: 'center', textDecoration: 'none', marginTop: '20px'}}>
              STREAM ON DISTROKID
            </a>
            <button className="btn-close" onClick={() => setActivePortal(null)}>CLOSE [X]</button>
          </div>
        </div>
      )}

      {activePortal === 'gallery' && (
        <div className="overlay" onClick={() => setActivePortal(null)}>
          <div className="portal-card" onClick={(e) => e.stopPropagation()}>
            <h2 className="portal-title">VISUAL GALLERY</h2>
            <div className="carousel-container">
              <img src="https://res.cloudinary.com/demo/image/upload/v1/GALLERY_Page_w9aynh.jpg" alt="Gallery item" className="carousel-image" onError={(e)=>{e.target.src='https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80'}} />
            </div>
            <button className="btn-close" onClick={() => setActivePortal(null)}>CLOSE [X]</button>
          </div>
        </div>
      )}

      {activePortal === 'join' && (
        <div className="overlay" onClick={() => setActivePortal(null)}>
          <div className="portal-card" onClick={(e) => e.stopPropagation()}>
            <h2 className="portal-title">JOIN THE TRIBE</h2>
            <form onSubmit={handleEmailSubmit}>
              <span className="section-label">Email Address</span>
              <input type="email" required placeholder="name@domain.com" />
              <button type="submit" className="btn-action">SUBSCRIBE</button>
              {emailStatus && <p style={{color: '#4ade80', textAlign: 'center', marginTop: '10px'}}>{emailStatus}</p>}
            </form>
            <button className="btn-close" onClick={() => setActivePortal(null)}>CLOSE [X]</button>
          </div>
        </div>
      )}

      {/* Toast Notification Popup */}
      <div className={`toast-message ${toast.show ? 'show' : ''}`}>
        {toast.message}
      </div>
    </div>
  );
}

export default App;

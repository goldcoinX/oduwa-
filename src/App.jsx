import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [bookingStatus, setBookingStatus] = useState('');
  const [emailStatus, setEmailStatus] = useState('');

  // Dynamically inject Google Tag Manager on mount
  useEffect(() => {
    // GTM Script in Head
    const gtmScript = document.createElement('script');
    gtmScript.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-KJWB6WHS');
    `;
    document.head.appendChild(gtmScript);

    // GTM Noscript in Body
    const gtmNoscript = document.createElement('noscript');
    gtmNoscript.innerHTML = `
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KJWB6WHS"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>
    `;
    document.body.insertBefore(gtmNoscript, document.body.firstChild);
  }, []);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingStatus('Inquiry Sent Successfully!');
    // Push custom data layer event for TikTok / GTM tracking
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'booking_submitted' });
    e.target.reset();
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setEmailStatus('Welcome to the Tribe!');
    // Push custom data layer event for TikTok / GTM tracking
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'complete_registration' });
    e.target.reset();
  };

  return (
    <div className="app-container">
      {/* Background Video / Atmosphere */}
      <div className="video-background">
        <div className="overlay-tint"></div>
      </div>

      {/* Navigation Header */}
      <header className="site-header">
        <div className="logo" onClick={() => setActiveTab('home')}>
          KING ODUWA
        </div>
        <nav className="nav-links">
          <button onClick={() => setActiveTab('music')} className={activeTab === 'music' ? 'active' : ''}>Music</button>
          <button onClick={() => setActiveTab('tour')} className={activeTab === 'tour' ? 'active' : ''}>Tour</button>
          <button onClick={() => setActiveTab('gallery')} className={activeTab === 'gallery' ? 'active' : ''}>Gallery</button>
          <button onClick={() => setActiveTab('join')} className={activeTab === 'join' ? 'active' : ''}>Join</button>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="content-area">
        {activeTab === 'home' && (
          <section className="hero-section">
            <div className="hero-visual">
              <img 
                src="https://res.cloudinary.com/demo/image/upload/v1/Home_Page_i4dyu8.jpg" 
                alt="King Oduwa" 
                className="hero-img"
                onError={(e)=>{e.target.src='https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80'}}
              />
            </div>
            <div className="hero-content">
              <h1>GUUD NEWS OUT NOW</h1>
              <p>The new sound bridging cultures, rhythms, and horizons.</p>
              <a 
                href="https://distrokid.com/hyperfollow/oduwa/guud-news/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cta-button"
              >
                Stream GUUD NEWS
              </a>
            </div>
          </section>
        )}

        {activeTab === 'music' && (
          <section className="portal-section">
            <h2>Discography</h2>
            <div className="release-card">
              <img 
                src="https://res.cloudinary.com/demo/image/upload/v1/Vibe_iwnfrp.jpg" 
                alt="Guud News Cover" 
                className="release-art"
                onError={(e)=>{e.target.src='https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80'}}
              />
              <div className="release-info">
                <h3>GUUD NEWS</h3>
                <p>Available everywhere on streaming platforms via DistroKid.</p>
                <a 
                  href="https://distrokid.com/hyperfollow/oduwa/guud-news/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="cta-button"
                >
                  Listen Now
                </a>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'tour' && (
          <section className="portal-section">
            <h2>Tour & Bookings</h2>
            <p>Secure King Oduwa for live performances, festival lineups, and private showcases.</p>
            <form onSubmit={handleBookingSubmit} className="booking-form">
              <input type="text" placeholder="Your Name / Promoter" required />
              <input type="email" placeholder="Email Address" required />
              <input type="text" placeholder="Event City / Venue" required />
              <button type="submit" className="submit-btn">Send Inquiry</button>
              {bookingStatus && <p className="success-msg">{bookingStatus}</p>}
            </form>
          </section>
        )}

        {activeTab === 'gallery' && (
          <section className="portal-section">
            <h2>Visuals</h2>
            <div className="gallery-grid">
              <img src="https://res.cloudinary.com/demo/image/upload/v1/GALLERY_Page_w9aynh.jpg" alt="Gallery 1" onError={(e)=>{e.target.src='https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80'}} />
              <img src="https://res.cloudinary.com/demo/image/upload/v1/JOIN_Page_bsnwah.jpg" alt="Gallery 2" onError={(e)=>{e.target.src='https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80'}} />
              <img src="https://res.cloudinary.com/demo/image/upload/v1/TOUR_Page_y6qif9.jpg" alt="Gallery 3" onError={(e)=>{e.target.src='https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80'}} />
            </div>
          </section>
        )}

        {activeTab === 'join' && (
          <section className="portal-section">
            <h2>Join the Tribe</h2>
            <p>Get exclusive drops, early ticket access, and behind-the-scenes updates directly.</p>
            <form onSubmit={handleEmailSubmit} className="email-form">
              <input type="email" placeholder="Enter your email address" required />
              <button type="submit" className="submit-btn">Subscribe</button>
              {emailStatus && <p className="success-msg">{emailStatus}</p>}
            </form>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <p>&copy; 2026 Lumusic & Mehmeh Quin Ltd. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;

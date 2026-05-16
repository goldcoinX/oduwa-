import React, { useState, useEffect } from 'react';
import './App.css'; // Make sure this matches your CSS file name

export default function App() {
  const [activePortal, setActivePortal] = useState(null);
  const [cart, setCart] = useState([]);
  const [toastMsg, setToastMsg] = useState('');
  const [isToastVisible, setIsToastVisible] = useState(false);

  // Initial welcome message
  useEffect(() => {
    setTimeout(() => showToast("Inflection Season"), 1500);
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

  // --- MERCH LOGIC ---
  const addToCart = (name, price) => {
    setCart([...cart, { name, price }]);
    showToast(`Added ${name} to Cart`);
  };

  const emptyCart = () => {
    setCart([]);
    closePortal();
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  // --- NEW MUSIC BACKEND CHECKOUT LOGIC ---
  const triggerMusicCheckout = async (trackId, trackName) => {
    showToast(`Initializing secure checkout for ${trackName}...`);
    
    // Quick browser prompt for their email to send the download link
    const customerEmail = prompt(`Please enter your email to receive your secure download link for ${trackName}:`);
    
    if (!customerEmail) {
      showToast("Email required for purchase delivery.");
      return;
    }

    try {
        // This calls your Next.js backend to determine if they pay in NGN or USD
        const response = await fetch('/api/checkout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ trackId: trackId, email: customerEmail })
        });

        const data = await response.json();

        if (data.url) {
            // Redirects them to Flutterwave or LemonSqueezy
            window.location.href = data.url;
        } else {
            showToast("Initialization error. Please try again.");
        }
    } catch (error) {
        console.error("Payment routing failure:", error);
        showToast("Backend connection failed. Please check network.");
    }
  };

  return (
    <>
      <div className="container">
        
        {/* NEW VIDEO LAYER (Sits behind everything inside .container) */}
        <div className="hero-video-background">
          <video autoPlay loop muted playsInline>
            <source src="https://res.cloudinary.com/dccxjo9x8/video/upload/v1778949878/backgroundVideo_qpjurc.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <nav>
          <a href="https://unitedmasters.com/m/inflection" target="_blank" rel="noreferrer" className="nav-inflection">INFLECTION</a>
          <a href="https://www.youtube.com/@ODUWAIAM?sub_confirmation=1" target="_blank" rel="noreferrer" className="nav-video">VIDEO <span className="bling">●</span></a>
          <a onClick={() => openPortal('booking')} className="nav-booking">BOOKING <span className="bling">●</span></a>
          <a onClick={() => openPortal('bio')} className="nav-bio">BIO <span className="bling">●</span></a>
          <a onClick={() => openPortal('tour')} className="nav-tour">TOUR <span className="bling">●</span></a>
          <a onClick={() => openPortal('merch')} className="nav-merch">MERCH <span className="bling">●</span></a>
          <a onClick={() => openPortal('music')} className="nav-music">MUSIC <span className="bling">●</span></a>
          <a onClick={() => openPortal('gallery')} className="nav-gallery">GALLERY <span className="bling">●</span></a>
          <a onClick={() => openPortal('join')} className="nav-join">JOIN <span className="bling">●</span></a>
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
      {activePortal === 'booking' && (
        <div className="overlay">
          <div className="portal-card">
            <h2 className="portal-title">Book Oduwa</h2>
            <form onSubmit={(e) => { e.preventDefault(); showToast('Booking Request Received.'); closePortal(); }}>
              <div className="portal-section">
                <label className="section-label">Full Name / Organization</label>
                <input type="text" placeholder="Who is booking?" required />
              </div>
              <div className="portal-section">
                <label className="section-label">Email Address</label>
                <input type="email" placeholder="Your contact email" required />
              </div>
              <div className="portal-section" style={{ display: 'flex', gap: '10px' }}>
                <div style={{ flex: 1 }}>
                  <label className="section-label">Event Date</label>
                  <input type="text" placeholder="DD/MM/YYYY" />
                </div>
                <div style={{ flex: 1 }}>
                  <label className="section-label">Location</label>
                  <input type="text" placeholder="City, Country" />
                </div>
              </div>
              <div className="portal-section">
                <label className="section-label">Budget Range (USD)</label>
                <select>
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

      {/* Merch Portal */}
      {activePortal === 'merch' && (
        <div className="overlay">
          <div className="portal-card">
            <h2 className="portal-title">Merch</h2>
            <div className="disco-grid">
              <div className="disco-item" onClick={() => addToCart('Inflection Tee', 45)}>
                <img src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=300" className="disco-img" alt="Tee" />
                <div className="disco-title">Inflection Tee • $45</div>
              </div>
              <div className="disco-item" onClick={() => addToCart('Studio Hoodie', 85)}>
                <img src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300" className="disco-img" alt="Hoodie" />
                <div className="disco-title">Studio Hoodie • $85</div>
              </div>
            </div>
            
            {cart.length > 0 && (
              <div className="cart-status">
                <div className="section-label">Your Cart</div>
                <div>
                  {cart.map((item, i) => (
                    <div key={i} className="cart-item-row">
                      <span>{item.name}</span><span>${item.price}</span>
                    </div>
                  ))}
                </div>
                <div style={{ borderTop: '1px solid #333', marginTop: '10px', paddingTop: '10px', fontWeight: '700', display: 'flex', justifyContent: 'space-between' }}>
                  <span>TOTAL</span><span>${cartTotal}</span>
                </div>
                <button className="btn-action" onClick={() => { showToast('Checkout simulated'); emptyCart(); }}>CHECKOUT</button>
              </div>
            )}
            <button className="btn-close" onClick={closePortal}>Back</button>
          </div>
        </div>
      )}

      {/* Music Portal */}
      {activePortal === 'music' && (
        <div className="overlay">
          <div className="portal-card">
            <h2 className="portal-title">Direct Store</h2>
            <p style={{textAlign: 'center', fontSize: '0.8rem', color: '#888', marginBottom: '20px'}}>Purchase High-Quality Studio Audio Directly</p>
            <div className="disco-grid">
              <div className="disco-item" onClick={() => triggerMusicCheckout('track-uuid-inflection', 'INFLECTION')}>
                <img src="https://uploads.onecompiler.io/44jjpumhc/44jmbu8kc/INFLECTION.png" className="disco-img" alt="INFLECTION" />
                <div className="disco-title">Buy INFLECTION</div>
              </div>
              <div className="disco-item" onClick={() => triggerMusicCheckout('track-uuid-ovbialeke', 'OVBIALEKE')}>
                <img src="https://uploads.onecompiler.io/44jjpumhc/44jmbu8kc/OVBIALEKE.png" className="disco-img" alt="OVBIALEKE" />
                <div className="disco-title">Buy OVBIALEKE</div>
              </div>
              <div className="disco-item" onClick={() => triggerMusicCheckout('track-uuid-madeforyou', 'MADE FOR YOU')}>
                <img src="https://uploads.onecompiler.io/44jjpumhc/44jmbu8kc/MADE%20FOR%20APP%20.png" className="disco-img" alt="MADE FOR YOU" />
                <div className="disco-title">Buy MADE FOR YOU</div>
              </div>
              <div className="disco-item" onClick={() => triggerMusicCheckout('track-uuid-sonofman', 'SON OF MAN')}>
                <img src="https://uploads.onecompiler.io/44jjpumhc/44jmbu8kc/SON%20OF%20MAN.png" className="disco-img" alt="SON OF MAN" />
                <div className="disco-title">Buy SON OF MAN</div>
              </div>
            </div>
            <button className="btn-close" onClick={closePortal}>Back</button>
          </div>
        </div>
      )}

      {/* Bio Portal */}
      {activePortal === 'bio' && (
        <div className="overlay">
          <div className="portal-card">
            <h2 className="portal-title">Biography</h2>
            <div style={{ fontSize: '0.9rem', lineHeight: '1.7', color: '#ccc' }}>
              <p><strong>ODUWA</strong> is more than an artist; he is a sonic architect. Born in Nigeria and raised within the vibrant polyrhythms of Afrobeat, Oduwa has spent years meticulously crafting a sound that bridges the gap between raw street energy and high-fashion luxury.</p>
              <p>His latest project, <em>INFLECTION</em>, represents a turning point in his career—a moment of pure creative clarity where traditional drums meet futuristic synths.</p>
              <p>2026 marks the beginning of the Inflection World Tour, bringing the vision to every corner of the globe.</p>
            </div>
            <button className="btn-close" onClick={closePortal}>Back</button>
          </div>
        </div>
      )}

      {/* Tour Portal */}
      {activePortal === 'tour' && (
        <div className="overlay">
          <div className="portal-card">
            <h2 className="portal-title">World Tour</h2>
            <div style={{ fontSize: '0.8rem' }}>
              <div style={{ borderBottom: '1px solid #222', padding: '15px 0', display: 'flex', justifyContent: 'space-between' }}><span>LAGOS • EKO HOTEL</span><span>MAY 12</span></div>
              <div style={{ borderBottom: '1px solid #222', padding: '15px 0', display: 'flex', justifyContent: 'space-between' }}><span>LONDON • O2 ACADEMY</span><span>JUN 03</span></div>
              <div style={{ borderBottom: '1px solid #222', padding: '15px 0', display: 'flex', justifyContent: 'space-between' }}><span>NYC • MADISON SQ GARDEN</span><span>JUL 15</span></div>
            </div>
            <button className="btn-close" onClick={closePortal}>Back</button>
          </div>
        </div>
      )}

      {/* Gallery Portal */}
      {activePortal === 'gallery' && (
        <div className="overlay">
          <div className="portal-card">
            <h2 className="portal-title">Visuals</h2>
            <div className="disco-grid">
              <img src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300" className="disco-img" alt="Visual 1" />
              <img src="https://images.unsplash.com/photo-1501612780327-45045538702b?w=300" className="disco-img" alt="Visual 2" />
              <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300" className="disco-img" alt="Visual 3" />
              <img src="https://images.unsplash.com/photo-1459749411177-042180ce673c?w=300" className="disco-img" alt="Visual 4" />
            </div>
            <button className="btn-close" onClick={closePortal}>Back</button>
          </div>
        </div>
      )}

      {/* Join Portal */}
      {activePortal === 'join' && (
        <div className="overlay">
          <div className="portal-card">
            <h2 className="portal-title">Join Tribe</h2>
            <div className="portal-section">
              <label className="section-label">Email</label>
              <input type="email" placeholder="your@email.com" />
            </div>
            <button className="btn-action" onClick={() => { showToast('Subscribed'); closePortal(); }}>SUBSCRIBE</button>
            <button className="btn-close" onClick={closePortal}>Back</button>
          </div>
        </div>
      )}
    </>
  );
}

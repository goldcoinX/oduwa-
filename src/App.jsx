import React, { useState, useEffect, useRef } from 'react';
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
  const [cart, setCart] = useState([]);
  const [toastMsg, setToastMsg] = useState('');
  const [toastUrl, setToastUrl] = useState('');
  const [isToastVisible, setIsToastVisible] = useState(false);
  
  // STATE MODULES FOR IMAGES
  const [previewImage, setPreviewImage] = useState(null);
  const [galleryIndex, setGalleryIndex] = useState(0);
  
  const videoRef = useRef(null);

  // ─── FORM INPUT STATES FOR DATABASE BINDINGS ───
  const [bookingName, setBookingName] = useState('');
  const [bookingEmail, setBookingEmail] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingLocation, setBookingLocation] = useState('');
  const [bookingBudget, setBookingBudget] = useState('$1k - $10k');
  const [bookingDetails, setBookingDetails] = useState(''); 
  const [subscribeEmail, setSubscribeEmail] = useState('');

  // ─── GALLERY IMAGES ARRAY ───
  const galleryImages = [
    "https://res.cloudinary.com/dccxjo9x8/image/upload/v1784818791/Home_Page_i4dyu8.jpg",
    "https://res.cloudinary.com/dccxjo9x8/image/upload/v1784818892/Vibe_iwnfrp.jpg",
    "https://res.cloudinary.com/dccxjo9x8/image/upload/v1784818885/GALLERY_Page_w9aynh.jpg",
    "https://res.cloudinary.com/dccxjo9x8/image/upload/v1784818894/JOIN_Page_bsnwah.jpg",
    "https://res.cloudinary.com/dccxjo9x8/image/upload/v1784818892/TOUR_Page_y6qif9.jpg"
  ];

  const nextImage = () => setGalleryIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  const prevImage = () => setGalleryIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));

  // ERROR HANDLER FOR BROKEN IMAGE LINKS
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = "https://images.unsplash.com/photo-1619983081563-430f63602796?w=300"; 
  };

  useEffect(() => {
    // ─── AUTOMATIC GTM INJECTION INTO DOCUMENT HEAD & BODY ───
    if (!document.getElementById('gtm-script')) {
      // 1. Head Script Injection
      const gtmScript = document.createElement('script');
      gtmScript.id = 'gtm-script';
      gtmScript.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-KJWB6WHS');
      `;
      document.head.appendChild(gtmScript);

      // 2. Body Noscript Fallback Injection
      const gtmNoscript = document.createElement('noscript');
      gtmNoscript.id = 'gtm-noscript';
      gtmNoscript.innerHTML = `
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KJWB6WHS"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>
      `;
      document.body.insertBefore(gtmNoscript, document.body.firstChild);
    }
    // ────────────────────────────────────────────────────────

    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Browser prevented autoplay (likely Low Power Mode):", error);
      });
    }
    
    setTimeout(() => showToast("GUUD NEWS Out Now", "https://distrokid.com/hyperfollow/oduwa/guud-news/"), 1500);
  }, []);

  const showToast = (msg, url = '') => {
    setToastMsg(msg);
    setToastUrl(url);
    setIsToastVisible(true);
    setTimeout(() => setIsToastVisible(false), url ? 4000 : 3000); 
  };

  const openPortal = (id) => {
    setActivePortal(id);
    document.body.style.overflow = 'hidden';
  };

  const closePortal = () => {
    setActivePortal(null);
    setPreviewImage(null); 
    setGalleryIndex(0); 
    document.body.style.overflow = 'auto';
  };

  const addToCart = (name, price) => {
    setCart([...cart, { name, price }]);
    showToast(`Added ${name} to Cart`);
  };

  // ─── LIVE BACKEND HANDLERS WITH GTM DATA LAYER EVENTS ───
  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    showToast('Sending Booking Request...');

    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'booking_submitted',
        content_name: 'Booking Inquiry'
      });
    }
    
    const payload = {
      action: 'booking',
      name: bookingName,
      email: bookingEmail,
      date: bookingDate,
      location: bookingLocation,
      budget: bookingBudget,
      eventDetails: bookingDetails, 
      notes: 'Submitted via Web Abstract Portal Form'
    };

    const result = await sendToBackendEngine(payload);
    if (result.success) {
      showToast('Booking Request Received.');
      setBookingName('');
      setBookingEmail('');
      setBookingDate('');
      setBookingLocation('');
      setBookingDetails('');
      closePortal();
    }
  };

  const handleSubscribeSubmit = async (e) => {
    e.preventDefault();
    showToast('Synchronizing Frequencies...');

    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'complete_registration',
        content_name: 'Join Tribe Form'
      });
    }

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

  const handleCheckoutSubmit = async () => {
    const customerEmail = prompt("Please enter your email to complete your design allocation order:");
    if (!customerEmail) return;

    showToast('Processing Checkout...');

    const payload = {
      action: 'checkout',
      name: 'Web Store Customer',
      email: customerEmail,
      address: 'Digital Processing Queue',
      phone: 'None Provided',
      items: cart.map(item => `${item.name}`).join(', '),
      total: cartTotal.toFixed(2)
    };

    const result = await sendToBackendEngine(payload);
    if (result.success) {
      setCart([]);
      showToast('Order Logged Successfully.');
      closePortal();
    }
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <div className="container">
        
        {/* VIDEO BACKGROUND CONTAINER */}
        <div className="hero-container">
          <video ref={videoRef} autoPlay loop muted playsInline className="background-video">
            <source src="https://res.cloudinary.com/dccxjo9x8/video/upload/v1778949878/backgroundVideo_qpjurc.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* NAVIGATION LINKS */}
        <nav>
          <a href="https://fanlink.tv/xaFj" target="_blank" rel="noreferrer" className="nav-inflection">
            <img src="https://uploads.onecompiler.io/44jjpumhc/1780638127727/logo%20Kingoduwa.png" alt="King Oduwa Logo" className="nav-logo" />
            KINGODUWA
          </a>
          
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
            <a href="mailto:booking@kingoduwa.com" className="footer-email">booking@kingoduwa.com</a>
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

      {/* DYNAMIC TOAST MESSAGE */}
      {toastUrl ? (
        <a href={toastUrl} target="_blank" rel="noreferrer" className={`toast-message ${isToastVisible ? 'show' : ''}`} style={{ textDecoration: 'none', cursor: 'pointer' }}>
          {toastMsg} <span style={{ fontSize: '0.8em', marginLeft: '5px' }}>↗</span>
        </a>
      ) : (
        <div className={`toast-message ${isToastVisible ? 'show' : ''}`}>
          {toastMsg}
        </div>
      )}

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
              
              {/* Event Details Section */}
              <div className="portal-section">
                <label className="section-label">Event Details</label>
                <textarea 
                  placeholder="Describe the event (e.g. Festival, Club Appearance, Private Event)..." 
                  value={bookingDetails} 
                  onChange={(e) => setBookingDetails(e.target.value)} 
                  rows="3"
                  required
                />
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

      {/* Merch Portal */}
      {activePortal === 'merch-portal' && (
        <div className="overlay">
          <div className="portal-card">
            <h2 className="portal-title">Merch</h2>
            
            <div className="coming-soon-banner">
              COMING SOON
            </div>

            <button className="btn-close" onClick={closePortal}>Back</button>
          </div>
        </div>
      )}

      {/* Music Portal */}
      {activePortal === 'music-portal' && (
        <div className="overlay">
          <div className="portal-card">
            <h2 className="portal-title">GUUD MUZIK EP</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '30px' }}>
              {/* Track 1: Press Release */}
              <div>
                <span className="section-label">Oduwa - Press Release</span>
                <iframe 
                  style={{ borderRadius: '12px' }} 
                  src="https://open.spotify.com/embed/track/3hMP0xyerEWxn2a52CSoP1?utm_source=generator&theme=0&si=f145fdd791d0493e" 
                  width="100%" 
                  height="152" 
                  frameBorder="0" 
                  allowFullScreen="" 
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                  loading="lazy">
                </iframe>
              </div>

              {/* Track 2: Jambole */}
              <div>
                <span className="section-label">Oduwa - Jambole</span>
                <iframe 
                  style={{ borderRadius: '12px' }} 
                  src="https://open.spotify.com/embed/track/3VrPCYvJuZ5I8YDwHq4wIa?utm_source=generator&theme=0&si=25e7a0c72586452b" 
                  width="100%" 
                  height="152" 
                  frameBorder="0" 
                  allowFullScreen="" 
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                  loading="lazy">
                </iframe>
              </div>
            </div>

            <div className="section-label" style={{ textAlign: 'center', marginBottom: '15px' }}>Past Releases</div>
            <div className="disco-grid">
              {/* BRAND NEW SINGLE: GUUD NEWS */}
              <a href="https://distrokid.com/hyperfollow/oduwa/guud-news/" target="_blank" rel="noreferrer" className="disco-item">
                <img src="https://res.cloudinary.com/dccxjo9x8/image/upload/v1784191527/GUUD_NEWS_SINGLE_COVER_t7efxo.jpg" onError={handleImageError} className="disco-img" alt="GUUD NEWS" />
                <div className="disco-title" style={{ color: '#fff', fontWeight: 'bold' }}>GUUD NEWS</div>
              </a>
              {/* BELLY DANCER */}
              <a href="https://fanlink.tv/xaFj" target="_blank" rel="noreferrer" className="disco-item">
                <img src="https://i.postimg.cc/15dCNbgC/belly-dancer-new-single-2.png" onError={handleImageError} className="disco-img" alt="BELLY DANCER" />
                <div className="disco-title">BELLY DANCER</div>
              </a>
              <a href="https://linktr.ee/oduwa" target="_blank" rel="noreferrer" className="disco-item">
                <img src="https://i.postimg.cc/vmYQx1x1/SAPA.png" onError={handleImageError} className="disco-img" alt="SAPA" />
                <div className="disco-title">SAPA</div>
              </a>
              <a href="https://linktr.ee/oduwa" target="_blank" rel="noreferrer" className="disco-item">
                <img src="https://i.postimg.cc/vmYQx1xc/OVBIALEKE.png" onError={handleImageError} className="disco-img" alt="OVBIALEKE" />
                <div className="disco-title">OVBIALEKE</div>
              </a>
              <a href="https://linktr.ee/oduwa" target="_blank" rel="noreferrer" className="disco-item">
                <img src="https://i.postimg.cc/wBw9X6DL/SON%20OF%20MAN.png" onError={handleImageError} className="disco-img" alt="SON OF MAN" />
                <div className="disco-title">SON OF MAN</div>
              </a>
              <a href="https://linktr.ee/oduwa" target="_blank" rel="noreferrer" className="disco-item">
                <img src="https://i.postimg.cc/nL3n4HqQ/WONDERFUL.png" onError={handleImageError} className="disco-img" alt="WONDERFUL" />
                <div className="disco-title">WONDERFUL</div>
              </a>
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
              <p><strong>ODUWA</strong> is more than an artist; he is a sonic architect. A Nigerian American, raised within the vibrant polyrhythms of Afrobeat, Oduwa has spent years meticulously crafting a sound that bridges the gap between raw street energy and high-fashion luxury.</p>
              <p>Following the visual hypnosis of <em>BELLY DANCER</em>, his brand new two single project <em>GUUD NEWS</em> is a daring progression in his aesthetic—layering rich concept styles over deep, syncopated global rhythms.</p>
              <p>2026 marks the beginning of the Global Tour cycle, scaling up experimental visions to live crowds across borders.</p>
            </div>
            <button className="btn-close" onClick={closePortal}>Back</button>
          </div>
        </div>
      )}

      {/* Tour Portal */}
      {activePortal === 'tour-portal' && (
        <div className="overlay">
          <div className="portal-card">
            <h2 className="portal-title">World Tour</h2>
            
            <div className="coming-soon-banner">
              COMING SOON
            </div>

            <button className="btn-close" onClick={closePortal}>Back</button>
          </div>
        </div>
      )}

      {/* Gallery Portal */}
      {activePortal === 'gallery-portal' && (
        <div className="overlay">
          <div className="portal-card" style={{ maxWidth: '850px' }}>
            <h2 className="portal-title">Visuals</h2>
            
            <div className="carousel-container">
              <button className="carousel-arrow left" onClick={prevImage}>&#10094;</button>
              <img 
                key={galleryIndex} 
                src={galleryImages[galleryIndex]} 
                className="carousel-image" 
                alt={`Oduwa Visual ${galleryIndex + 1}`} 
                onClick={() => setPreviewImage(galleryImages[galleryIndex])} 
              />
              <button className="carousel-arrow right" onClick={nextImage}>&#10095;</button>
            </div>
            
            <div className="carousel-dots">
              {galleryImages.map((_, idx) => (
                <span 
                  key={idx} 
                  className={`carousel-dot ${idx === galleryIndex ? 'active' : ''}`} 
                  onClick={() => setGalleryIndex(idx)}
                />
              ))}
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
            
            <div style={{ color: '#aaa', lineHeight: '1.6', fontSize: '0.9rem', textAlign: 'center', marginBottom: '20px' }}>
              Join the Tribe to unlock the exclusive GUUD NEWS CapCut template.
            </div>

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

      {/* THE MODERN LIGHTBOX PREVIEW OVERLAY SYSTEM */}
      {previewImage && (
        <div className="lightbox-overlay" onClick={() => setPreviewImage(null)}>
          <div className="lightbox-wrapper">
            <img src={previewImage} alt="Expanded Media View" className="lightbox-content" />
            <div className="lightbox-hint">Tap anywhere to return</div>
          </div>
        </div>
      )}
    </>
  );
}

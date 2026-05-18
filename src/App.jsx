import React, { useState } from "react";

export default function App() {
  // Subscription form states
  const [email, setEmail] = useState("");
  const [subStatus, setSubStatus] = useState({ loading: false, success: null, message: "" });

  // Booking form states
  const [booking, setBooking] = useState({ name: "", email: "", date: "", location: "", budget: "", notes: "" });
  const [bookStatus, setBookStatus] = useState({ loading: false, success: null, message: "" });

  // REPLACE THIS with your deployed Google Apps Script Macro URL
  const API_ENDPOINT = "https://script.google.com/macros/s/1YKmN18XBKC0nsvdW0nnohCVkIKBCJ_Z_zLVY03tHxBI/exec"; 

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    setSubStatus({ loading: true, success: null, message: "" });
    try {
      await fetch(API_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "subscribe", email }),
      });
      setSubStatus({ loading: false, success: true, message: "Your digital frequency has been synchronized with the tribe database." });
      setEmail("");
    } catch (err) {
      setSubStatus({ loading: false, success: false, message: "Transmission failed. Verify connection settings." });
    }
  };

  const handleBooking = async (e) => {
    e.preventDefault();
    setBookStatus({ loading: true, success: null, message: "" });
    try {
      await fetch(API_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "booking", ...booking }),
      });
      setBookStatus({ loading: false, success: true, message: "Proposal transmitted successfully. Operations division will respond within 48h." });
      setBooking({ name: "", email: "", date: "", location: "", budget: "", notes: "" });
    } catch (err) {
      setBookStatus({ loading: false, success: false, message: "Network transmission failure. Try again." });
    }
  };

  return (
    <div style={{ backgroundColor: "#030303", color: "#FAFAFA", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", minHeight: "100vh", padding: "0", margin: "0" }}>
      
      {/* LUXURY HEADER HERO */}
      <header style={{ textBreak: "keep-all", textAlign: "center", padding: "100px 20px 60px 20px", background: "linear-gradient(to bottom, #0d0d0d 0%, #030303 100%)", borderBottom: "1px solid #121212" }}>
        <h1 style={{ fontSize: "56px", letterSpacing: "0.35em", fontWeight: "900", margin: "0 0 10px 0", textTransform: "uppercase", color: "#FFFFFF" }}>
          ODUWA
        </h1>
        <p style={{ fontSize: "11px", letterSpacing: "0.6em", color: "#EAB308", textTransform: "uppercase", margin: "0", fontWeight: "bold" }}>
          The Sonic Architect
        </p>
      </header>

      {/* CORE DISPLAY CONTENT */}
      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 20px" }}>
        
        {/* CURRENT RELEASE PANEL */}
        <section style={{ marginBottom: "50px", textAlign: "center", background: "#0D0D0D", padding: "40px 30px", borderRadius: "16px", border: "1px solid #1A1A1A", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }}>
          <span style={{ fontSize: "9px", letterSpacing: "0.3em", color: "#EAB308", fontWeight: "bold", textTransform: "uppercase", display: "block", marginBottom: "10px" }}>
            LATEST FREQUENCY DROP
          </span>
          <h2 style={{ letterSpacing: "0.1em", fontSize: "24px", fontWeight: "700", margin: "0 0 15px 0", color: "#FFFFFF" }}>
            BELLY DANCER
          </h2>
          <p style={{ color: "#A3A3A3", fontSize: "14px", maxWidth: "600px", margin: "0 auto 30px auto", lineHeight: "1.6" }}>
            Visual and sonic systems streaming globally across all major international distribution points. Ready to transcend digital audio horizons.
          </p>
          
          {/* AUDIO PLAYER PLACEHOLDER */}
          <div style={{ background: "#030303", border: "1px solid #262626", borderRadius: "30px", padding: "12px 24px", display: "inline-flex", alignItems: "center", gap: "20px", minWidth: "280px" }}>
            <span style={{ color: "#EAB308", fontSize: "18px", cursor: "pointer" }}>▶</span>
            <div style={{ height: "2px", background: "#262626", flexGrow: "1", borderRadius: "2px", position: "relative", width: "150px" }}>
              <div style={{ position: "absolute", top: "0", left: "0", height: "100%", width: "35%", backgroundColor: "#EAB308" }}></div>
            </div>
            <span style={{ fontSize: "11px", color: "#A3A3A3", letterSpacing: "0.05em" }}>01:14 / 03:05</span>
          </div>
        </section>

        {/* ROW: SYSTEM OPERATIONS GRID */}
        <div style={{ display: "grid", gridTemplateColumns: "window.innerWidth > 768 ? '1fr' : '1fr'", gap: "40px", marginTop: "40px" }}>
          
          {/* COLUMN A: GLOBAL BOOKING PORTAL */}
          <section style={{ background: "#0D0D0D", padding: "45px 35px", borderRadius: "16px", border: "1px solid #1A1A1A" }}>
            <h3 style={{ fontSize: "20px", letterSpacing: "0.15em", color: "#FFFFFF", marginBottom: "5px", textTransform: "uppercase", fontWeight: "bold" }}>
              Global Booking Coordination
            </h3>
            <p style={{ color: "#A3A3A3", fontSize: "13px", marginBottom: "30px" }}>
              Secure administrative placement for event scheduling, festivals, and international rider coordination.
            </p>
            
            <form onSubmit={handleBooking} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
                <input 
                  type="text" 
                  placeholder="Company / Promoter Name" 
                  value={booking.name} 
                  onChange={e => setBooking({...booking, name: e.target.value})} 
                  required 
                  style={{ padding: "14px", background: "#030303", border: "1px solid #262626", borderRadius: "8px", color: "#FAFAFA", fontSize: "14px" }} 
                />
                <input 
                  type="email" 
                  placeholder="Email Coordinate" 
                  value={booking.email} 
                  onChange={e => setBooking({...booking, email: e.target.value})} 
                  required 
                  style={{ padding: "14px", background: "#030303", border: "1px solid #262626", borderRadius: "8px", color: "#FAFAFA", fontSize: "14px" }} 
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
                <input 
                  type="text" 
                  placeholder="Target Date (DD/MM/YYYY)" 
                  value={booking.date} 
                  onChange={e => setBooking({...booking, date: e.target.value})} 
                  style={{ padding: "14px", background: "#030303", border: "1px solid #262626", borderRadius: "8px", color: "#FAFAFA", fontSize: "14px" }} 
                />
                <input 
                  type="text" 
                  placeholder="Venue City / State" 
                  value={booking.location} 
                  onChange={e => setBooking({...booking, location: e.target.value})} 
                  style={{ padding: "14px", background: "#030303", border: "1px solid #262626", borderRadius: "8px", color: "#FAFAFA", fontSize: "14px" }} 
                />
              </div>

              <input 
                type="text" 
                placeholder="Allocated Budget Bracket ($ USD)" 
                value={booking.budget} 
                onChange={e => setBooking({...booking, budget: e.target.value})} 
                style={{ padding: "14px", background: "#030303", border: "1px solid #262626", borderRadius: "8px", color: "#FAFAFA", fontSize: "14px" }} 
              />

              <textarea 
                placeholder="Rider Protocol Specifications & Special Requirements..." 
                value={booking.notes} 
                onChange={e => setBooking({...booking, notes: e.target.value})} 
                rows="4" 
                style={{ padding: "14px", background: "#030303", border: "1px solid #262626", borderRadius: "8px", color: "#FAFAFA", fontSize: "14px", resize: "none" }}
              ></textarea>

              <button 
                type="submit" 
                disabled={bookStatus.loading}
                style={{ padding: "16px", background: "#EAB308", border: "none", borderRadius: "8px", color: "#030303", fontWeight: "900", letterSpacing: "0.15em", cursor: "pointer", textTransform: "uppercase", fontSize: "13px", transition: "opacity 0.2s" }}
              >
                {bookStatus.loading ? "TRANSMITTING..." : "Transmit Request Portfolio"}
              </button>
              {bookStatus.message && <p style={{ color: bookStatus.success ? "#EAB308" : "#EF4444", fontSize: "13px", textAlign: "center", marginTop: "5px" }}>{bookStatus.message}</p>}
            </form>
          </section>

          {/* COLUMN B: AUDIENCE DIRECTORY NETWORK */}
          <section style={{ background: "#0D0D0D", padding: "45px 35px", borderRadius: "16px", border: "1px solid #1A1A1A", textAlign: "center" }}>
            <h3 style={{ fontSize: "20px", letterSpacing: "0.15em", color: "#FFFFFF", marginBottom: "10px", textTransform: "uppercase", fontWeight: "bold" }}>
              Sync Your Frequency
            </h3>
            <p style={{ color: "#A3A3A3", fontSize: "13px", marginBottom: "30px", maxWidth: "500px", margin: "0 auto 35px auto", lineHeight: "1.6" }}>
              Map your digital coordinate into our master database pipeline. Gain top-tier priority allocation keys for event access layouts, structural asset drops, and archival telemetry.
            </p>
            
            <form onSubmit={handleSubscribe} style={{ display: "flex", flexDirection: "column", smDirection: "row", gap: "12px", maxWidth: "500px", margin: "0 auto" }}>
              <input 
                type="email" 
                placeholder="Enter Email Address" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
                style={{ padding: "14px", background: "#030303", border: "1px solid #262626", borderRadius: "8px", color: "#FAFAFA", fontSize: "14px", textAlign: "center" }} 
              />
              <button 
                type="submit" 
                disabled={subStatus.loading}
                style={{ padding: "14px 28px", background: "#FAFAFA", border: "none", borderRadius: "8px", color: "#030303", fontWeight: "bold", letterSpacing: "0.05em", cursor: "pointer", fontSize: "14px" }}
              >
                {subStatus.loading ? "SYNCING..." : "Join Tribe Directory"}
              </button>
            </form>
            {subStatus.message && <p style={{ marginTop: "20px", color: subStatus.success ? "#EAB308" : "#EF4444", fontSize: "13px" }}>{subStatus.message}</p>}
          </section>

        </div>
      </main>

      {/* LUXURY HOLLYWOOD-STYLE BRAND FOOTER */}
      <footer style={{ marginTop: "120px", borderTop: "1px solid #1A1A1A", padding: "50px 20px 60px 20px", textAlign: "center", background: "#0D0D0D" }}>
        <p style={{ letterSpacing: "0.25em", fontWeight: "900", color: "#FFFFFF", marginBottom: "15px", fontSize: "11px" }}>
          JOIN THE TRIBE IN REAL FREQUENCIES
        </p>
        
        <p style={{ marginBottom: "30px" }}>
          <a href="https://instagram.com/oduwaiam" target="_blank" rel="noreferrer" style={{ color: "#EAB308", textDecoration: "none", margin: "0 15px", fontWeight: "bold", fontSize: "12px", letterSpacing: "0.05em" }}>INSTAGRAM</a> | 
          <a href="https://www.youtube.com/@ODUWAIAM?sub_confirmation=1" target="_blank" rel="noreferrer" style={{ color: "#EAB308", textDecoration: "none", margin: "0 15px", fontWeight: "bold", fontSize: "12px", letterSpacing: "0.05em" }}>YOUTUBE</a> | 
          <a href="https://twitter.com/oduwaiam" target="_blank" rel="noreferrer" style={{ color: "#EAB308", textDecoration: "none", margin: "0 15px", fontWeight: "bold", fontSize: "12px", letterSpacing: "0.05em" }}>X</a>
        </p>
        
        {/* CORRECT BRAND EMAIL CONSOLE */}
        <p style={{ margin: "0 0 35px 0", fontSize: "13px", color: "#A3A3A3" }}>
          Official Inquiries: <a href="mailto:booking@kingoduwa.com" style={{ color: "#EAB308", textDecoration: "none", fontWeight: "bold", marginLeft: "5px" }}>booking@kingoduwa.com</a>
        </p>
        
        <p style={{ letterSpacing: "0.3em", fontSize: "9px", textTransform: "uppercase", color: "#525252", margin: "0" }}>
          &copy; 2026 ODUWA | MANAGEMENT & DESIGNS LLC
        </p>
      </footer>
    </div>
  );
}

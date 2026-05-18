import React, { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ loading: false, success: null, message: "" });
  const [booking, setBooking] = useState({ name: "", email: "", date: "", location: "", budget: "", notes: "" });

  const API_ENDPOINT = "https://script.google.com/macros/s/AKfycbzV-Xb9N_nI9ZEx87t3C-u0kX_5O8R3bM_Example/exec"; // Swap with your live App Script URL if needed

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus({ loading: true, success: null, message: "" });
    try {
      const res = await fetch(API_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "subscribe", email }),
      });
      setStatus({ loading: false, success: true, message: "Welcome to the tribe." });
      setEmail("");
    } catch (err) {
      setStatus({ loading: false, success: false, message: "System frequency error. Try again." });
    }
  };

  const handleBooking = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, message: "" });
    try {
      await fetch(API_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "booking", ...booking }),
      });
      setStatus({ loading: false, success: true, message: "Proposal transmitted successfully." });
      setBooking({ name: "", email: "", date: "", location: "", budget: "", notes: "" });
    } catch (err) {
      setStatus({ loading: false, success: false, message: "Transmission failed. Verify connection." });
    }
  };

  return (
    <div style={{ backgroundColor: "#030303", color: "#FAFAFA", fontFamily: "sans-serif", minHeight: "100vh", padding: "40px 20px" }}>
      {/* BRAND HEADER */}
      <header style={{ textAlign: "center", marginBottom: "60px" }}>
        <h1 style={{ fontSize: "36px", letterSpacing: "0.3em", fontWeight: "900", margin: "0 0 4px 0" }}>ODUWA</h1>
        <p style={{ fontSize: "10px", letterSpacing: "0.55em", color: "#EAB308", textTransform: "uppercase", margin: 0, fontWeight: "bold" }}>The Sonic Architect</p>
      </header>

      {/* RECENT RELEASES / BODY CONTAINER */}
      <main style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        <section style={{ marginBottom: "60px", background: "#0D0D0D", padding: "30px", borderRadius: "12px", border: "1px solid #1A1A1A" }}>
          <h2 style={{ letterSpacing: "0.2em", fontSize: "16px", marginBottom: "15px" }}>LATEST FREQUENCY</h2>
          <p style={{ color: "#A3A3A3", fontSize: "14px" }}>"BELLY DANCER" Streaming globally across all digital systems.</p>
        </section>

        {/* BOOKING CORE PORTAL */}
        <section style={{ marginBottom: "60px", textAlign: "left", background: "#0D0D0D", padding: "40px", borderRadius: "12px", border: "1px solid #1A1A1A" }}>
          <h3 style={{ letterSpacing: "0.15em", color: "#EAB308", marginBottom: "25px", textTransform: "uppercase" }}>Global Booking Coordination</h3>
          <form onSubmit={handleBooking} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <input type="text" placeholder="Your Name / Organization" value={booking.name} onChange={e => setBooking({...booking, name: e.target.value})} required style={{ padding: "12px", background: "#030303", border: "1px solid #262626", borderRadius: "6px", color: "#fff" }} />
            <input type="email" placeholder="Email Address" value={booking.email} onChange={e => setBooking({...booking, email: e.target.value})} required style={{ padding: "12px", background: "#030303", border: "1px solid #262626", borderRadius: "6px", color: "#fff" }} />
            <input type="text" placeholder="Target Date (DD/MM/YYYY)" value={booking.date} onChange={e => setBooking({...booking, date: e.target.value})} style={{ padding: "12px", background: "#030303", border: "1px solid #262626", borderRadius: "6px", color: "#fff" }} />
            <input type="text" placeholder="Event Location / Venue" value={booking.location} onChange={e => setBooking({...booking, location: e.target.value})} style={{ padding: "12px", background: "#030303", border: "1px solid #262626", borderRadius: "6px", color: "#fff" }} />
            <input type="text" placeholder="Budget Range ($)" value={booking.budget} onChange={e => setBooking({...booking, budget: e.target.value})} style={{ padding: "12px", background: "#030303", border: "1px solid #262626", borderRadius: "6px", color: "#fff" }} />
            <textarea placeholder=" RIder Requirements / Special Notes" value={booking.notes} onChange={e => setBooking({...booking, notes: e.target.value})} rows="4" style={{ padding: "12px", background: "#030303", border: "1px solid #262626", borderRadius: "6px", color: "#fff" }}></textarea>
            <button type="submit" style={{ padding: "14px", background: "#EAB308", border: "none", borderRadius: "6px", color: "#030303", fontWeight: "bold", letterSpacing: "0.1em", cursor: "pointer", uppercase: "true" }}>Transmit Request</button>
          </form>
        </section>

        {/* TRIBE SUBSCRIPTION GATE */}
        <section style={{ background: "#0D0D0D", padding: "40px", borderRadius: "12px", border: "1px solid #1A1A1A", marginBottom: "60px" }}>
          <h3 style={{ letterSpacing: "0.15em", marginBottom: "15px" }}>SYNC YOUR FREQUENCY</h3>
          <p style={{ color: "#A3A3A3", fontSize: "13px", marginBottom: "25px" }}>Join the directory for priority event access, luxury design drops, and private archives.</p>
          <form onSubmit={handleSubscribe} style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
            <input type="email" placeholder="Enter Email Coordinate" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ padding: "12px", background: "#030303", border: "1px solid #262626", borderRadius: "6px", color: "#fff", width: "70%" }} />
            <button type="submit" style={{ padding: "12px 24px", background: "#FAFAFA", border: "none", borderRadius: "6px", color: "#030303", fontWeight: "bold", cursor: "pointer" }}>Join</button>
          </form>
          {status.message && <p style={{ marginTop: "15px", color: status.success ? "#EAB308" : "#EF4444", fontSize: "13px" }}>{status.message}</p>}
        </section>
      </main>

      {/* LUXURY LUXE BRAND FOOTER */}
      <footer style={{ marginTop: "80px", borderTop: "1px solid #1A1A1A", paddingTop: "30px", textAlign: "center", fontSize: "11px", color: "#A3A3A3" }}>
        <p style={{ letterSpacing: "0.2em", fontWeight: "bold", color: "#FFFFFF", marginBottom: "12px", fontSize: "10px" }}>JOIN THE TRIBE IN REAL FREQUENCIES</p>
        <p style={{ marginBottom: "20px" }}>
          <a href="https://instagram.com/oduwaiam" style={{ color: "#EAB308", textDecoration: "none", margin: "0 12px", fontWeight: "bold" }}>INSTAGRAM</a> | 
          <a href="https://www.youtube.com/@ODUWAIAM?sub_confirmation=1" style={{ color: "#EAB308", textDecoration: "none", margin: "0 12px", fontWeight: "bold" }}>YOUTUBE</a> | 
          <a href="https://twitter.com/oduwaiam" style={{ color: "#EAB308", textDecoration: "none", margin: "0 12px", fontWeight: "bold" }}>X</a>
        </p>
        
        {/* RE-HARDCODED PRODUCTION BRAND FOOTER EMAIL */}
        <p style={{ margin: "0 0 25px 0", fontSize: "12px" }}>
          Official Channel: <a href="mailto:booking@kingoduwa.com" style={{ color: "#EAB308", textDecoration: "none", fontWeight: "bold" }}>booking@kingoduwa.com</a>
        </p>
        <p style={{ letterSpacing: "0.25em", fontSize: "8px", textTransform: "uppercase", color: "#525252" }}>&copy; 2026 ODUWA | MANAGEMENT & DESIGNS LLC</p>
      </footer>
    </div>
  );
}

export default function Home() {
  return (
    <div style={{fontFamily:'Arial', background:'#0f172a', color:'white', minHeight:'100vh'}}>
      
      {/* Navbar */}
      <div style={{display:'flex', justifyContent:'space-between', padding:'20px'}}>
        <h2>GlobalFix IT</h2>
        <div>
          <a href="#services" style={{marginRight:'15px', color:'white'}}>Services</a>
          <a href="/contact" style={{marginRight:'15px', color:'white'}}>Contact</a>
          <a href="/payment" style={{color:'white'}}>Payment</a>
        </div>
      </div>

      {/* Hero Section */}
      <div style={{textAlign:'center', padding:'80px 20px'}}>
        <h1 style={{fontSize:'40px'}}>Premium Tech Support Worldwide</h1>
        <p style={{marginTop:'10px'}}>Fast • Secure • Reliable IT Solutions</p>

        <div style={{marginTop:'20px'}}>
          <a href="/contact">
            <button style={{padding:'10px 20px', marginRight:'10px', background:'#22c55e', border:'none', color:'white', borderRadius:'8px'}}>
              Get Support
            </button>
          </a>
          <a href="/payment">
            <button style={{padding:'10px 20px', background:'#3b82f6', border:'none', color:'white', borderRadius:'8px'}}>
              Pay Now
            </button>
          </a>
        </div>
      </div>

      {/* Services */}
      <div id="services" style={{padding:'40px'}}>
        <h2 style={{textAlign:'center'}}>Our Services</h2>

        <div style={{display:'flex', justifyContent:'center', gap:'20px', marginTop:'30px', flexWrap:'wrap'}}>
          
          <div style={{background:'#1e293b', padding:'20px', borderRadius:'10px', width:'250px'}}>
            <h3>PC Repair</h3>
            <p>$50 - $150</p>
          </div>

          <div style={{background:'#1e293b', padding:'20px', borderRadius:'10px', width:'250px'}}>
            <h3>Virus Removal</h3>
            <p>$30 - $100</p>
          </div>

          <div style={{background:'#1e293b', padding:'20px', borderRadius:'10px', width:'250px'}}>
            <h3>Remote Support</h3>
            <p>$20 / hour</p>
          </div>

        </div>
      </div>

      {/* Trust Section */}
      <div style={{textAlign:'center', padding:'40px'}}>
        <h2>Why Choose Us?</h2>
        <p>✔ 24/7 Support</p>
        <p>✔ 1000+ Happy Clients</p>
        <p>✔ Secure Remote Access</p>
      </div>

      {/* Footer */}
      <div style={{textAlign:'center', padding:'20px', background:'#020617'}}>
        <p>© 2026 GlobalFix IT | Founder: Pratik Rajput</p>
      </div>

    </div>
  );
}

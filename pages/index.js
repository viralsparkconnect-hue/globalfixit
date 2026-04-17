import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>GlobalFix IT — Premium Tech Support</title>
        <meta name="description" content="World-class IT solutions by GlobalFix IT" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* ── NAVBAR ── */}
      <nav className={styles.nav}>
        <div className={styles.navLogo}>
          Global<span>Fix</span> IT
        </div>
        <ul className={styles.navLinks}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/#services">Services</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
        <Link href="/payment" className={styles.navCta}>Pay Now</Link>
      </nav>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroBadge}>
          <span className={styles.heroBadgeDot} />
          Global IT Solutions — Est. 2015
        </div>
        <h1 className={styles.heroTitle}>
          World-Class<br />
          <em className={styles.heroAccent}>Tech Support,</em><br />
          Delivered Fast
        </h1>
        <p className={styles.heroSub}>
          Premium IT services trusted by businesses and individuals worldwide.
          Rapid response, guaranteed results, competitive pricing.
        </p>
        <div className={styles.heroBtns}>
          <Link href="/contact" className={styles.btnPrimary}>Get Support Now</Link>
          <a href="#services" className={styles.btnGhost}>View Services</a>
        </div>
      </section>

      {/* ── STATS ── */}
      <div className={styles.statsStrip}>
        <div className={styles.statItem}>
          <div className={styles.statNum}>8,400+</div>
          <div className={styles.statLabel}>Devices Repaired</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statNum}>99%</div>
          <div className={styles.statLabel}>Client Satisfaction</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statNum}>24/7</div>
          <div className={styles.statLabel}>Remote Support</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statNum}>12+</div>
          <div className={styles.statLabel}>Years Experience</div>
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section className={styles.section} id="services">
        <p className={styles.sectionLabel}>What We Do</p>
        <h2 className={styles.sectionTitle}>Our Services</h2>
        <div className={styles.servicesGrid}>

          {[
            {
              title: 'PC Repair',
              desc: 'Hardware diagnostics, component replacement, and performance optimization. We restore your machine to peak condition.',
              price: 'From $50',
              unit: '/ session',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2" y="3" width="20" height="14" rx="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              ),
            },
            {
              title: 'Virus Removal',
              desc: 'Deep malware scanning, complete threat elimination, and security hardening to prevent future infections.',
              price: 'From $30',
              unit: '/ device',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              ),
            },
            {
              title: 'Remote Support',
              desc: 'Instant access to expert technicians without leaving home. Resolve any software issue within the hour.',
              price: '$20',
              unit: '/ hour',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              ),
            },
            {
              title: 'Software Setup',
              desc: 'Clean OS installation, driver updates, application configuration, and full system tuning tailored to your needs.',
              price: 'From $40',
              unit: '/ session',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <polyline points="16 18 22 12 16 6"/>
                  <polyline points="8 6 2 12 8 18"/>
                </svg>
              ),
            },
            {
              title: 'Network Setup',
              desc: 'Router configuration, secure Wi-Fi, VPN setup, and complete office network infrastructure design.',
              price: 'From $60',
              unit: '/ project',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2" y="2" width="20" height="8" rx="2"/>
                  <rect x="2" y="14" width="20" height="8" rx="2"/>
                  <line x1="6" y1="6" x2="6.01" y2="6"/>
                  <line x1="6" y1="18" x2="6.01" y2="18"/>
                </svg>
              ),
            },
            {
              title: 'IT Consulting',
              desc: 'Strategic technology planning for your business. Reduce costs, improve efficiency, and scale with confidence.',
              price: '$75',
              unit: '/ hour',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              ),
            },
          ].map((s) => (
            <div key={s.title} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>{s.icon}</div>
              <h3 className={styles.serviceCardTitle}>{s.title}</h3>
              <p className={styles.serviceCardDesc}>{s.desc}</p>
              <div className={styles.servicePrice}>
                {s.price} <span className={styles.servicePriceUnit}>{s.unit}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className={styles.footer}>
        <div>© 2024 <strong>GlobalFix IT</strong>. All rights reserved.</div>
        <div>Founded by Pratik Rajput · Worldwide IT Solutions</div>
      </footer>
    </>
  )
}

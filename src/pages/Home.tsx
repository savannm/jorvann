
import { motion } from 'framer-motion';
import { ArrowRight, Code, PenTool, BarChart, Camera, Video, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const services = [
  { title: 'Web Design', path: '/web-design', icon: <Code size={32} /> },
  { title: 'Graphic Design', path: '/graphic-design', icon: <PenTool size={32} /> },
  { title: 'Digital Marketing', path: '/digital-marketing', icon: <BarChart size={32} /> },
  { title: 'Photography', path: '/photography', icon: <Camera size={32} /> },
  { title: 'Video & Animation', path: '/video-animation', icon: <Video size={32} /> },
  { title: 'App', path: '/app', icon: <Smartphone size={32} /> },
];




export default function Home() {


  return (
    <>
      <div className="bg-gradient-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      <div className="bg-grid"></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <section className="hero-section">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">
              Hello, I’m Sav.<br />
              <span className="text-gradient">A Digital Specialist.</span>
            </h1>
            <p className="hero-subtitle">
              Welcome to my portfolio, spanning across multiple sectors. I may not show the most recent works. I hope you enjoy browsing.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-panel"
                style={{ padding: '0.5rem 1rem', fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)' }}
              >
                Let's Talk
              </motion.button>
            </Link>
          </motion.div>
        </section>

        <section style={{ padding: '2.5rem 0' }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <h2 style={{ fontSize: '2.5rem' }}>Core Disciplines</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Explore my multi-faceted skill set</p>
          </motion.div>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={service.path} style={{ display: 'block' }}>
                  <div className="glass-panel service-card">
                    <div className="service-icon">{service.icon}</div>
                    <h3 className="service-title">{service.title}</h3>
                    <div className="service-link">
                      View Portfolio <ArrowRight size={18} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Client Logos Section */}
        <section style={{ padding: '2.5rem 0', textAlign: 'center', borderTop: '1px solid var(--glass-border)', marginTop: '2rem' }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: '4rem' }}
          >
            <h2 style={{ fontSize: '2.2rem', color: 'var(--text-secondary)' }}>Amazing Companies I’ve Worked In</h2>
          </motion.div>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '4rem', filter: 'grayscale(1)', opacity: 0.7 }}>
            <img src="/images/flybuys.webp" alt="Flybuys" loading="lazy" style={{ height: '40px', objectFit: 'contain' }} />
            <img src="/images/ngv.jpg" alt="NGV" loading="lazy" style={{ height: '50px', objectFit: 'contain', mixBlendMode: 'lighten' }} />
            <img src="/images/2xu.png" alt="2XU" loading="lazy" style={{ height: '50px', objectFit: 'contain', filter: 'invert(1)' }} />
            <img src="/images/m1.png" alt="M1" loading="lazy" style={{ height: '50px', objectFit: 'contain', filter: 'invert(1)' }} />
            <img src="/images/movember.png" alt="Movember" loading="lazy" style={{ height: '40px', objectFit: 'contain', filter: 'invert(1)' }} />
          </div>
        </section>
      </div>
    </>
  );
}

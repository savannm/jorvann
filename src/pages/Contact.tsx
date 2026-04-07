import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="container" style={{ padding: '3rem 0.75rem 2rem', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', maxWidth: '600px', width: '100%' }}
        className="glass-panel"
      >
        <div style={{ padding: '1.5rem 1rem' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', letterSpacing: '-1px' }} className="text-gradient">Let's Talk</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
            Ready to start your next project? Drop me an email or connect with me via text.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <a href="mailto:savannmao@gmail.com" style={{ display: 'block' }}>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{ width: '100%', padding: '0.5rem', borderRadius: '12px', background: 'var(--accent-gradient)', color: '#fff', fontSize: '1.1rem', fontWeight: 600 }}
              >
                Send an Email
              </motion.button>
            </a>
            
            <a href="sms:0405741050" style={{ display: 'block' }}>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{ width: '100%', padding: '0.5rem', borderRadius: '12px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', color: 'var(--text-primary)', fontSize: '1.1rem', fontWeight: 600 }}
              >
                Send a Text
              </motion.button>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

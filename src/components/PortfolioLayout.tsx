import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function PortfolioLayout({ title, subtitle, items }: { title: string, subtitle: string, items: { title: string, desc: string, image?: string }[] }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="container" style={{ padding: '3rem 0.75rem 2rem', minHeight: '80vh' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '4rem', textAlign: 'center' }}
        >
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', letterSpacing: '-1px' }} className="text-gradient">{title}</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>{subtitle}</p>
        </motion.div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2.5rem' }}>
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel"
              style={{ padding: '0.75rem', display: 'flex', flexDirection: 'column' }}
            >
              {item.image ? (
                <div 
                  style={{ cursor: 'zoom-in', overflow: 'hidden', borderRadius: '12px' }}
                  onClick={() => setSelectedImage(item.image as string)}
                >
                  <motion.img 
                    loading="lazy"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    src={item.image} 
                    alt={item.title} 
                    style={{ width: '100%', height: '240px', objectFit: 'cover', display: 'block', border: '1px solid var(--glass-border)', borderRadius: '12px' }} 
                  />
                </div>
              ) : (
                <div style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))',
                  height: '240px',
                  borderRadius: '12px',
                  marginBottom: '1.5rem',
                  border: '1px solid var(--glass-border)'
                }}></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(0, 0, 0, 0.85)',
              backdropFilter: 'blur(10px)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'zoom-out',
              padding: '1rem'
            }}
          >
            <button 
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
              style={{ position: 'absolute', top: '2rem', right: '2rem', color: '#fff', cursor: 'pointer', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '50%', padding: '0.5rem', display: 'flex' }}
            >
              <X size={24} />
            </button>
            <motion.img
              loading="lazy"
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Fullscreen portfolio view"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
                borderRadius: '8px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
              }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

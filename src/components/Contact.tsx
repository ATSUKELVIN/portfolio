import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" style={styles.section}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        style={styles.card}
      >
        <h2 style={styles.heading}>Get In Touch</h2>
        <p style={styles.text}>
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
        </p>
        
        <div style={styles.infoContainer}>
          <div style={styles.infoItem}>
            <span style={styles.label}>Email:</span>
            <a href="mailto:kelvinatsu213@gmail.com" style={styles.link}>kelvinatsu213@gmail.com</a>
          </div>
          <div style={styles.infoItem}>
            <span style={styles.label}>Phone:</span>
            <a href="tel:+233592921133" style={styles.link}>+233 59 393 1133</a>
          </div>
          <div style={styles.infoItem}>
            <span style={styles.label}>Location:</span>
            <span style={styles.detail}>Accra, Ghana</span>
          </div>
        </div>

        <div style={styles.buttonContainer}>
          <a href="https://wa.me/233592921133" target="_blank" rel="noreferrer" style={styles.whatsappBtn}>
            Message on WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
};

const styles = {
  section: { padding: '100px 20px', backgroundColor: '#0F172A', display: 'flex', justifyContent: 'center' },
  card: { backgroundColor: '#1E293B', padding: '50px', borderRadius: '20px', maxWidth: '600px', textAlign: 'center' as const, border: '1px solid #334155' },
  heading: { color: '#2563EB', fontSize: '2.5rem', marginBottom: '20px' },
  text: { color: '#94A3B8', marginBottom: '30px', lineHeight: '1.6' },
  infoContainer: { marginBottom: '40px' },
  infoItem: { marginBottom: '15px', fontSize: '1.1rem' },
  label: { color: '#F1F5F9', fontWeight: 'bold', marginRight: '10px' },
  link: { color: '#10B981', textDecoration: 'none' },
  detail: { color: '#94A3B8' },
  buttonContainer: { marginTop: '20px' },
  whatsappBtn: { backgroundColor: '#25D366', color: 'white', padding: '12px 25px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', display: 'inline-block' }
};

export default Contact;
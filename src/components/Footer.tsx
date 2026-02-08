import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/yourusername", color: "#F1F5F9" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/yourusername", color: "#0077B5" },
    { icon: <FaWhatsapp />, url: "https://wa.me/233590000000", color: "#25D366" },
    { icon: <FaEnvelope />, url: "mailto:your.email@example.com", color: "#EA4335" }
  ];

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.logo}>
          KELVIN<span style={{color: '#2563EB'}}> ATSU</span>
        </div>
        
        <div style={styles.iconRow}>
          {socialLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.url} 
              target="_blank" 
              rel="noreferrer" 
              style={{...styles.icon, color: link.color}}
            >
              {link.icon}
            </a>
          ))}
        </div>

        <p style={styles.copyright}>
          © {new Date().getFullYear()} Built with React & TypeScript. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#0F172A',
    padding: '60px 20px',
    borderTop: '1px solid #1E293B',
    marginTop: 'auto',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '20px',
  },
  logo: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#F1F5F9',
    letterSpacing: '2px',
  },
  iconRow: {
    display: 'flex',
    gap: '25px',
    fontSize: '1.5rem',
  },
  icon: {
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
  },
  copyright: {
    color: '#64748B',
    fontSize: '0.9rem',
    marginTop: '10px',
  }
};

export default Footer;
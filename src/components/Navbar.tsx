import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      style={{
        ...styles.nav,
        backgroundColor: isScrolled ? 'rgba(15, 23, 42, 0.9)' : 'transparent',
        borderBottom: isScrolled ? '1px solid #334155' : 'none',
      }}
    >
      <div style={styles.container}>
        <div style={styles.logo}>KA<span style={{color: '#2563EB'}}>.</span></div>
        <ul style={styles.navList}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} style={styles.navLink}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

const styles = {
  nav: {
    position: 'fixed' as const,
    top: 0,
    width: '100%',
    zIndex: 1000,
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: { fontSize: '1.5rem', fontWeight: 'bold', color: '#F1F5F9' },
  navList: { display: 'flex', gap: '30px', listStyle: 'none' },
  navLink: { color: '#94A3B8', textDecoration: 'none', fontWeight: '500', transition: '0.3s' },
};

export default Navbar;
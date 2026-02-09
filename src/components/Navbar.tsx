import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav style={navStyles.nav}>
      <div style={navStyles.logo}>KA.</div>
      <div style={navStyles.links}>
        <a href="#about" style={navStyles.link}>About</a>
        <a href="#projects" style={navStyles.link}>Projects</a>
        <button onClick={toggleTheme} style={navStyles.toggle}>
          {isDark ? <FaSun color="#FBBF24" /> : <FaMoon color="#1E293B" />}
        </button>
      </div>
    </nav>
  );
};

const navStyles = {
  nav: { 
    display: 'flex', 
    justifyContent: 'space-between', 
    padding: '20px 40px', 
    backgroundColor: 'var(--bg-secondary)',
    position: 'fixed' as const,
    width: '100%',
    top: 0,
    zIndex: 1000,
    transition: '0.3s'
  },
  logo: { fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-main)' },
  links: { display: 'flex', gap: '20px', alignItems: 'center' },
  link: { textDecoration: 'none', color: 'var(--text-muted)', fontWeight: 500 },
  toggle: { background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem', display: 'flex', alignItems: 'center' }
};

export default Navbar;
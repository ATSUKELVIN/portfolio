import { motion } from 'framer-motion';

const Hero = () => {
  const techStack = ["React", "TypeScript", "JavaScript", "Node.js", "PostgreSQL"];

  return (
    <section style={styles.heroSection}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={styles.content}
      >
        <h1 style={styles.title}>
          Software Developer with <span style={styles.accentText}>2 Years Experience</span>
        </h1>
        
        <p style={styles.subtitle}>
          Building scalable, high-impact web applications and secure systems
        </p>

        <div style={styles.typingContainer}>
          {techStack.map((tech, index) => (
            <motion.span 
              key={tech}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.5, repeat: Infinity, repeatType: "reverse" }}
              style={styles.techBadge}
            >
              {tech} {index < techStack.length - 1 && " | "}
            </motion.span>
          ))}
        </div>

        <div style={styles.buttonContainer}>
          <a href="#projects" style={{ textDecoration: 'none' }}>
            <button style={styles.primaryBtn}>View Projects</button>
          </a>

          <a href="/resume.pdf" download="Kelvin_Djayouri_Resume.pdf" style={{ textDecoration: 'none' }}>
            <button style={styles.secondaryBtn}>Download Resume</button>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

const styles = {
  heroSection: { height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' as const },
  content: { maxWidth: '900px', padding: '0 20px' },
  title: { fontSize: '3.5rem', color: '#F1F5F9', marginBottom: '20px', lineHeight: '1.2' },
  accentText: { color: '#2563EB' },
  subtitle: { fontSize: '1.5rem', color: '#94A3B8', marginBottom: '40px' },
  typingContainer: { marginBottom: '40px', color: '#10B981', fontWeight: 'bold', fontSize: '1.2rem' },
  techBadge: { margin: '0 5px' },
  buttonContainer: { display: 'flex', gap: '20px', justifyContent: 'center' },
  primaryBtn: { padding: '12px 30px', backgroundColor: '#2563EB', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '1rem', fontWeight: 'bold' },
  secondaryBtn: { padding: '12px 30px', backgroundColor: 'transparent', color: '#F1F5F9', border: '2px solid #334155', borderRadius: '8px', cursor: 'pointer', fontSize: '1rem', fontWeight: 'bold' }
};

export default Hero;
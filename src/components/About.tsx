import { motion } from 'framer-motion';
import { FaReact, FaJs, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss } from 'react-icons/si';

const About = () => {
  const skills = [
    { name: "React & Ecosystem", level: "95%", icon: <FaReact color="#61DBFB" /> },
    { name: "JavaScript/TypeScript", level: "90%", icon: <SiTypescript color="#3178C6" /> },
    { name: "CSS/Tailwind", level: "95%", icon: <SiTailwindcss color="#38B2AC" /> },
    { name: "Performance Optimization", level: "85%", icon: <FaJs color="#F7DF1E" /> },
    { name: "System Architecture", level: "80%", icon: <FaDatabase color="#00758F" /> }
  ];

  return (
    <section id="about" style={styles.section}>
      <div style={styles.container}>
        {/* Professional Narrative Column */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={styles.textColumn}
        >
          <h2 style={styles.heading}>Professional Journey</h2>
          <p style={styles.paragraph}>
            I’m a <strong>Software Developer with 2 years of professional experience</strong> and a passion for building elegant, user-centric web applications. I’ve spent the past several years honing my skills in modern frontend technologies, with a strong focus on <strong>React</strong> and the broader JavaScript ecosystem.
          </p>
          <p style={styles.paragraph}>
            I believe that great software is born from the intersection of <strong>clean code, thoughtful design, and rigorous testing</strong>. Every component I build is designed for reusability, accessibility, and performance.
          </p>
          <p style={styles.paragraph}>
            When I'm not coding, you'll find me exploring new CSS techniques, contributing to open-source projects, or writing about frontend development best practices.
          </p>
        </motion.div>

        {/* Technical Skills Column */}
        <div style={styles.skillsColumn}>
          <h3 style={styles.subHeading}>Technical Expertise</h3>
          {skills.map((skill) => (
            <div key={skill.name} style={styles.skillBarContainer}>
              <div style={styles.skillLabel}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {skill.icon} {skill.name}
                </span>
                <span>{skill.level}</span>
              </div>
              <div style={styles.progressBarBg}>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  transition={{ duration: 1.5 }}
                  style={styles.progressBarFill}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: { padding: '100px 20px', backgroundColor: '#0B1120', color: '#F1F5F9' },
  container: { maxWidth: '1100px', margin: '0 auto', display: 'flex', flexWrap: 'wrap' as const, gap: '60px' },
  textColumn: { flex: '1 1 450px' },
  skillsColumn: { flex: '1 1 400px' },
  heading: { fontSize: '2.5rem', marginBottom: '1.5rem', color: '#2563EB' },
  subHeading: { fontSize: '1.8rem', marginBottom: '1.5rem' },
  paragraph: { fontSize: '1.1rem', lineHeight: '1.8', color: '#94A3B8', marginBottom: '1.2rem' },
  skillBarContainer: { marginBottom: '20px' },
  skillLabel: { display: 'flex', justifyContent: 'space-between', marginBottom: '8px' },
  progressBarBg: { height: '8px', backgroundColor: '#1E293B', borderRadius: '4px', overflow: 'hidden' },
  progressBarFill: { height: '100%', backgroundColor: '#2563EB' },
};

export default About;
import { motion } from 'framer-motion';
import { FaReact, FaJs, FaHtml5, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss } from 'react-icons/si';

const About = () => {
  const skills = [
    { name: "React & Hooks", level: "90%", icon: <FaReact color="#61DBFB" /> },
    { name: "TypeScript", level: "85%", icon: <SiTypescript color="#3178C6" /> },
    { name: "JavaScript", level: "90%", icon: <FaJs color="#F7DF1E" /> },
    { name: "HTML5/CSS3", level: "95%", icon: <FaHtml5 color="#E34F26" /> },
    { name: "Database Design", level: "80%", icon: <FaDatabase color="#00758F" /> }
  ];

  return (
    <section id="about" style={styles.section}>
      <div style={styles.container}>
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={styles.textColumn}
        >
          <h2 style={styles.heading}>Professional Journey</h2>
          <p style={styles.paragraph}>
            I’m a <strong>Software Developer with 2 years of professional experience</strong> specializing in building scalable web applications and secure system architectures. My expertise lies in bridging the gap between complex backend logic and seamless frontend experiences.
          </p>
          <p style={styles.paragraph}>
            Over the past two years, I have successfully delivered high-impact projects, including <strong>robust e-commerce platforms</strong> and <strong>enterprise-grade database systems</strong>. I am passionate about writing clean, maintainable code and staying at the forefront of modern web technologies.
          </p>
        </motion.div>

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
  progressBarFill: { height: '100%', backgroundColor: '#10B981' },
};

export default About;
import { motion } from 'framer-motion';
import { 
  FaShoppingCart, FaDatabase, FaBoxes, FaHeadset, 
  FaUserCheck, FaLock, FaCode, FaCloud 
} from 'react-icons/fa';
import { SiSocketdotio } from 'react-icons/si';

const Projects = () => {
  const projectData = [
    { title: "E-commerce System", status: "Upcoming", icon: <FaShoppingCart size={30} color="#2563EB" />, description: "Secure responsive online store with auth.", tech: ["React", "CSS Grid"], link: "#" },
    { title: "Nutrition Database", status: "Upcoming", icon: <FaDatabase size={30} color="#10B981" />, description: "System to track attendance and data.", tech: ["MS Access", "Database"], link: "#" },
    { title: "Inventory Manager", status: "In Development", icon: <FaBoxes size={30} color="#F59E0B" />, description: "Real-time tracking for stock levels.", tech: ["Node.js", "PostgreSQL"], link: "#" },
    { title: "IT Helpdesk Portal", status: "Upcoming", icon: <FaHeadset size={30} color="#6366F1" />, description: "Support request management platform.", tech: ["Firebase", "Tailwind"], link: "#" },
    { title: "Attendance Tracker", status: "Upcoming", icon: <FaUserCheck size={30} color="#EC4899" />, description: "Biometric-ready logging application.", tech: ["Express", "MongoDB"], link: "#" },
    { title: "Auth Gateway", status: "In Development", icon: <FaLock size={30} color="#EF4444" />, description: "JWT and 2FA security module.", tech: ["Node.js", "Bcrypt"], link: "#" },
    { title: "Portfolio CMS", status: "Upcoming", icon: <FaCode size={30} color="#8B5CF6" />, description: "Private dashboard for project updates.", tech: ["Sanity.io", "React"], link: "#" },
    { title: "Real-Time Editor", status: "Upcoming", icon: <SiSocketdotio size={30} color="#010101" />, description: "Collaborative platform with live cursors.", tech: ["Socket.io", "Redis"], link: "#" },
    { title: "Cloud Asset Manager", status: "In Development", icon: <FaCloud size={30} color="#0EA5E9" />, description: "AWS S3 asset management tool.", tech: ["AWS S3", "Cloudfront"], link: "#" }
  ];

  return (
    <section id="projects" style={styles.section}>
      <h2 style={styles.heading}>Professional Roadmap: Upcoming Projects</h2>
      <div style={styles.grid}>
        {projectData.map((project, index) => (
          <motion.div key={index} whileHover={{ y: -15, scale: 1.02 }} style={styles.card}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
              {project.icon}
              {project.status && (
                <span style={styles.statusBadge}>{project.status}</span>
              )}
            </div>
            <h3 style={styles.projectTitle}>{project.title}</h3>
            <p style={styles.projectDesc}>{project.description}</p>
            <div style={styles.badgeContainer}>
              {project.tech.map((t) => (
                <span key={t} style={styles.badge}>{t}</span>
              ))}
            </div>
            <a href={project.link} style={styles.link}>View Roadmap →</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: { padding: '100px 20px', backgroundColor: '#020617' },
  heading: { textAlign: 'center' as const, fontSize: '2.5rem', color: '#2563EB', marginBottom: '50px' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto' },
  card: { backgroundColor: '#1E293B', padding: '30px', borderRadius: '15px', border: '1px solid #334155' },
  statusBadge: { fontSize: '0.7rem', backgroundColor: '#2563EB22', color: '#2563EB', padding: '4px 10px', borderRadius: '12px', border: '1px solid #2563EB' },
  projectTitle: { fontSize: '1.5rem', color: '#F1F5F9', marginBottom: '15px' },
  projectDesc: { color: '#94A3B8', marginBottom: '20px', lineHeight: '1.6' },
  badgeContainer: { display: 'flex', flexWrap: 'wrap' as const, gap: '10px', marginBottom: '20px' },
  badge: { backgroundColor: '#2563EB22', color: '#2563EB', padding: '5px 12px', borderRadius: '20px', fontSize: '0.8rem', border: '1px solid #2563EB' },
  link: { color: '#10B981', textDecoration: 'none', fontWeight: 'bold' }
};

export default Projects;
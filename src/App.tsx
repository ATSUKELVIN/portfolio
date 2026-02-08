import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <main style={{ backgroundColor: '#020617', minHeight: '100vh', color: '#F1F5F9' }}>
      <Navbar />
      <div id="home"><Hero /></div>
      <div id="about"><About /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </main>
  );
}

export default App;
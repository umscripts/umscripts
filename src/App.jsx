import './App.css';
import About from './Pages/About';
import Home from './Pages/Home';
import Experience from './Pages/Experience';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Navbar from './Pages/Navbar';
import ScrollBtn from './Components/ScrollBtn/ScrollBtn';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Aos from 'aos';
import Footer from './Pages/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      // once: true
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className='max-w-[1400px] mx-auto'>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <ScrollBtn />
      </div>
      <Footer />
    </>
  );
}

export default App;
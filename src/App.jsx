import './App.css';
import About from './Pages/About';
import Home from './Pages/Home';
import Experience from './Pages/Experience';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Navbar from './Pages/Navbar';
import ScrollBtn from './Components/ScrollBtn/ScrollBtn';

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <ScrollBtn />
    </>
  );
}

export default App;
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import About from './Pages/About'
import Home from './Pages/Home'
import Experience from './Pages/Experience'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import Navbar from './Pages/Navbar';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
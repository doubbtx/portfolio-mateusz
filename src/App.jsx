import { useState } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import linkedin from './linkedin_logo.png';
import github from './github_logo.png';
import './App.css';
import aboutIcon from './about.png';
import contactIcon from './contact.png';
import homeIcon from './home.png';
import resumeIcon from './resume.png';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Resume from './Resume';
import menu from './menu.png'
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
  <Router>
      <nav>
        <div className="hamburger" onClick={toggleMenu}>
          <img src={menu} alt="" />
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <Link to="/home" onClick={handleLinkClick}>
              <button><img src={homeIcon} alt="Home" />Home</button>
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={handleLinkClick}>
              <button><img src={aboutIcon} alt="About" />About</button>
            </Link>
          </li>
          <li>
            <Link to="/resume" onClick={handleLinkClick}>
              <button><img src={resumeIcon} alt="Resume" />Resume</button>
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleLinkClick}>
              <button><img src={contactIcon} alt="Contact" />Contact</button>
            </Link>
          </li>
        </ul>
      </nav>

      <main>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </main>

      <footer>
        <div>
          <p>© 2024 Mateusz Kapel</p>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/mateusz-kapel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a
            href="https://github.com/doubbtx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="GitHub" />
          </a>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/about" onClick={handleLinkClick}>About</Link>
            </li>
            <li>
              <Link to="/resume" onClick={handleLinkClick}>Resume</Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
            </li>
          </ul>
        </div>
      </footer>
    </Router>
  );
}

export default App;

import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import linkedin from './linkedin_logo.png';
import github from './github_logo.png';
import './App.css';
import aboutIcon from './about.png';
import homeIcon from './home.png';
import resumeIcon from './resume.png';
import Home from './Home';
import About from './About';
import Resume from './Resume';
import menu from './menu.png';
import mail from "./mail.png"
import phone from "./phone.png"
import contactImage from './contact.png'
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleContact = () => {
    setIsContactOpen(!isContactOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        </ul>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>

      <div
        className={`contact-circle ${isContactOpen ? 'open' : ''}`}
        onClick={toggleContact}
        style={{ top: `${Math.min(20 + scrollPosition, window.innerHeight - 80)}px` }}
      >
        {isContactOpen ? (
          <div className="contact-details">
            <p><img src={mail} alt="" /> <a href="mailto:mateusz.kapel6@gmail.com">mateusz.kapel6@gmail.com</a></p>
            <p><img src={phone} alt="" />+48 695 695 066</p>
            <div className="contactIcons">
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
          </div>
        ) : (
          <span><img src={contactImage} alt="" /></span>
        )}
      </div>

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

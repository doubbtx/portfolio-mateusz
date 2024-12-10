import React from 'react';
import './App.css'
import linkedin from './linkedin_logo.png'
import mail from './mail.png'
function Contact() {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <p>You can reach me via:</p>
      <ul>
        <li><img src={mail} alt="" /><a href="mailto:mateusz.kapel6@gmail.com">mateusz.kapel6@gmail.com</a></li>
        <li><img src={linkedin} alt="" /><a href="https://www.linkedin.com/in/mateusz-kapel/" target="_blank" rel="noopener noreferrer">Mateusz Kapel</a></li>
      </ul>
    </div>
  );
}

export default Contact;

import React from 'react';
import resumeFile from './CV.pdf';
import download from './download.png';
import './App.css';

function Resume() {
  return (
    <div className="resume-container">
      <h1>My Resume</h1>
      <div className="resume-viewer">
        <iframe
          src={resumeFile}
          title="Resume"
          width="100%"
          style={{ border: 'none' }}
        ></iframe>
      </div>
      <div className="resume-download">
        <a href={resumeFile} download>
          <button className="download-btn">
            <img src={download} alt="Download Resume" /> Download Resume
          </button>
        </a>
      </div>
    </div>
  );
}

export default Resume;

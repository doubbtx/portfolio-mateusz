import React from 'react';
import photo from './photo.jpg';
import './App.css'
function About() {
  return (
    <div className="aboutMe">
      <div className="aboutMeContainer">
        <h1>About Me</h1>
        <p>
          Hi, I'm <strong>Mateusz Kapel</strong>, a 22-year-old self-taught{" "}
          <strong>Front-end developer</strong>.
        </p>
        <p>
          I enjoy creating websites that look good and work well, focusing
          on clean design and smooth user experiences.
        </p>
        <section className="myJourney">
          <h2>My Journey</h2>
          <p>
            I started my journey as a developer out of curiosity and a passion for problem-solving. Over time, I taught myself HTML, CSS, JavaScript, and React, and I continue to expand my skill set through online courses, projects, and collaboration with others.
          </p>
          <p>
            I'm constantly looking for ways to improve my craft, whether it's learning new frameworks or focusing on best practices in web performance and accessibility.
          </p>
        </section>

        <section className="whatIEnjoy">
          <h2>What I Enjoy</h2>
          <p>
            When I'm not coding, you can find me:
          </p>
          <ul>
            <li>🌱 Learning new technologies and exploring innovative ways to build websites</li>
            <li>🎮 Playing video games and testing my skills in problem-solving scenarios</li>
          </ul>
        </section>
        <p>
        I don't have any real projects, but you can check my mini game that i made in react <a href='https://doubbtx.github.io/game/'target="_blank"rel="noopener noreferrer">here</a>
        </p>
        <p>
        To learn more about me, head to my resume!
        </p>
        <p>
          Thanks for stopping by—I'd love to connect and learn!
        </p>
      </div>
<img src={photo} alt="Mateusz Kapel" />
    </div>
  );
}
export default About;

import React from 'react';
import photo from './photo.jpg';
import './App.css'
import html from './html.png'
import css from './css.png'
import react from './react.png'
import javascript from './javascript.png'
function About() {
  return (
    <>
    <div className="aboutMe">
      <div className="aboutMeContainer">
        <section className="myJourney">
          <h2>My Journey</h2>
          <p>
            I started my journey as a developer out of curiosity and a passion for problem-solving. I continue to expand my skill set through online courses, projects, and collaboration with others.
          </p>
          <p>
            I'm constantly looking for ways to improve my craft, whether it's learning new frameworks or focusing on best practices in web performance and accessibility.
          </p>
          <p>
        You can check my mini game that i made in react <strong><a href='https://doubbtx.github.io/game/'target="_blank"rel="noopener noreferrer">here</a></strong>
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
      </div>
  <img src={photo} alt="Mateusz Kapel" />
    </div>
      <h1>Technologies that i use </h1>
    <div className='cardsContainer'>
      <div className='Card'>
        <img src={javascript} alt="" />
      </div>
      <div className='Card'>
        <img src={css} alt="" />
      </div>
      <div className='Card'>
        <img src={html} alt="" />
      </div>
      <div className='Card'>
        <img src={react} alt="" />
      </div>
    </div>
    </>
  );
}
export default About;

import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './App.css';

function Home() {
  return (
    <div className="home">
      <div className="homeContainer">
        <h1>
        <TypeAnimation
      sequence={[
        1000,
        'Welcome to my portfolio!',
        2000,
        'I’m eager to learn and grow in coding.',
        2000,
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{display: 'inline-block' }}
    />
        </h1>
        <p>
          Hi, I’m <strong>Mateusz Kapel</strong>, a 22-year-old self-taught{" "}
          <strong>Front-end developer</strong> who enjoys building clean, responsive, and easy-to-use websites.
        </p>
        <p>
        I focus on creating great user interfaces with the latest web technologies. My goal is to make websites that look good and work smoothly on any device
        </p>

        <section className="getInTouch">
          <h2>Let's Connect!</h2>
          <p>
            If you want to collaborate or just talk about web development, feel free to {" "}
            <a href="mailto:mateusz.kapel6@gmail.com">reach out</a>. I’m always happy to connect with people who love creating cool things online!
          </p>
        </section>
      </div>
    </div>
  );
}

export default Home;

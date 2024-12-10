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
          <strong>Front-end developer</strong> with a passion for creating clean, responsive, and user-friendly websites.
        </p>
        <p>
          I specialize in building engaging user interfaces using the latest web technologies. My goal is to create
          seamless digital experiences that not only look good but also work flawlessly across devices.
        </p>

        <section className="getInTouch">
          <h2>Let's Connect!</h2>
          <p>
            Whether you're interested in collaborating or just want to chat about web development, feel free to{" "}
            <a href="mailto:mateusz.kapel6@gmail.com">get in touch</a>. I'm always excited to connect with like-minded individuals!
          </p>
        </section>
      </div>
    </div>
  );
}

export default Home;

import React from 'react';
import HeroSection from './components/HeroSection';
import about from './assets/about1.svg';
import './Styles/About.css';

const About = () => {
  const data = {
    name: "Shubham Yadav",
    image: about,
  };

  return (
    <>
      <HeroSection {...data} />
      <div className="about-content">
        <section className="about-info">
          <h2>Who Am I?</h2>
          <p>
            I'm Shubham Yadav, a passionate web developer with a focus on creating innovative, user-friendly digital solutions. With years of experience in web development, I specialize in building responsive, functional, and aesthetically pleasing websites.
          </p>

          <h2>Our Mission</h2>
          <p>
            At Shopping Mart, our mission is to deliver high-quality products and ensure customer satisfaction. We aim to provide a seamless and enjoyable shopping experience, focusing on trust, convenience, and reliability.
          </p>

          <h2>What We Offer</h2>
          <ul>
            <li>High-quality products</li>
            <li>Fast and reliable delivery</li>
            <li>24/7 customer support</li>
            <li>Secure payment options</li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default About;

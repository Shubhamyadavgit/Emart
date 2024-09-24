import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Styles/HeroSection.css'
const HeroSection = (props) => {
  return (
    <>
    <div className="hero-container">
        <div className="left-section">
            <p>THIS IS ME</p>
            <h1>{props.name}</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit deserunt neque maxime quia blanditiis aspernatur,! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem corporis sint obcaecati, non molestiae, perferendis aliquid minus, error inventore facere eveniet doloribus esse. Ullam quo facere animi velit magnam consectetur?</p>
            <button><NavLink to={"/contact"}>Contact Me</NavLink></button>
        </div>
        <div className="right-section">
            <img src={props.image} alt="hero" />
        </div>
    </div>
    </>
  )
}

export default HeroSection
import React from 'react'
import HeroSection from './components/HeroSection'
import about from './assets/about1.svg'
const About = () => {

  const data = {
    name:"Shubham Yadav",
    image:about
  }
  return (
    <>
    <HeroSection {...data}/>
    </>
  )
}

export default About
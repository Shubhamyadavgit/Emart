import React from 'react'
import HeroSection from './components/HeroSection'
import Hero from './assets/hero.svg'

const Home = () => {
  const data = {
    name:"MY TECHNICAL",
    image:Hero,
  }
  return (
    <div>
        <HeroSection {...data}/>
    </div>
  )
}

export default Home
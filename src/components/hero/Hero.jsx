import React from 'react';
import hero from '../assets/hero.jpg';
import heroDesign from '../assets/HeroDesign.png'
import {Section} from "../hero/styled.Hero";
 

const Hero = () => {
  return (
    <Section id='home'>
      <div className="background">
        <img src={hero} alt="Backgroung image" />
      </div>
      <div className="content">
        <div className="sale">
          <img src={heroDesign} alt="Hero Desing" />
          <h1>BIG SALE <span>50% OFF</span></h1>
        </div>
        <div className="info">
          <h2>RETAILER</h2>
          <em>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, earum!</em>
          <button>ORDER NOW</button>
        </div>
      </div>
    </Section>
  )
}



export default Hero

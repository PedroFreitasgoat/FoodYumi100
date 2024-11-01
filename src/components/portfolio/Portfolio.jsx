import React from 'react'
import { Section } from './style.Portfolio'
import background from '../assets/portfolio.jpg'

const Portfolio = () => {
  return (
    <Section id="portfolio">
      <div className='background'>
        <img src={background} alt="portfolio background image" />
      </div>
      <div className="content">
        <h1>Buy Premium Pan Free Hand Toast!</h1>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, suscipit?</h2>
        <button>Buy Now</button>
      </div>
    </Section>
  )
}

export default Portfolio

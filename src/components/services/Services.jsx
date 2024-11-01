import React from 'react'
import { Section } from './styled.Services.jsx'
import Services1 from '../assets/Services1.png';
import Services2 from '../assets/Services2.png';
import Services3 from '../assets/Services3.png';
import { TitleStyles } from '../ReusableStyles.jsx'

const Services = () => {
  return (
    <Section id='services'>
      <div className="title">
        <h1 className='yellow'>What we do ?</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Temporibus quam illo vel quos quaerat debitis similique reprehenderit iusto maiores a.</p>
      </div>
      <div className="services">
        <div className="service">
          <img src={Services2} alt="Service image" />
          <p>
            He Printing and Typesetting the industry. <span> Lorem Ipsum has been the Industry's</span>{" "}
          </p>
          <button>Read More</button>
        </div>
        <div className="service yellow">
          <img src={Services1} alt="Service image" />
          <p>
            He Printing and Typesetting the industry. <span> Lorem Ipsum has been the Industry's</span>{" "}
          </p> 
          <button>Read More</button>
        </div>
        <div className="service">
          <img src={Services3} alt="Service image" />
          <p>
            He Printing and Typesetting the industry. <span> Lorem Ipsum has been the Industry's</span>{" "}
          </p>
          <button>Read More</button>
        </div>
      </div>
    </Section>
  )
}

export default Services

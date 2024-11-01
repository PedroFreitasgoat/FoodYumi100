import React from 'react'
import { Section } from './styles.Newsletter'


const Newsletter = () => {
  return (
    <Section>
      <div className="title">
        <h1>
          <span>Subscribe</span> Newsletter
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus 
          nesciunt sequi excepturi vel ea itaque cum quos, reiciendis quaerat fugit!
        </p>
      </div>
      <div className="container">
        <input type="text" placeholder='Search for food ...' />
        <button>Search</button>
      </div>
    </Section>
  )
}

export default Newsletter

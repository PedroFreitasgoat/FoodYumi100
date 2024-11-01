import React from 'react'
import { Section } from './styles.Testimonials'
import avatar1 from '../assets/avatar1.jpeg';
import {imageZoomEffect, TitleStyles} from '../ReusableStyles'


const Testimonials = () => {
  return (
    <Section id="testimonials">
      <div className="container">
        <div className="title">
          <h1>
            <span>What</span> Customers Says
          </h1>
        </div>
        <div className="testimonials">
          <div className="testimonial">
            <div className="image">
              <img src={avatar1} alt="" />
            </div>
            <p>
              He Printing and Typesetting the industry. <span>Lorem Ipsum</span>{" "}
              has been the Industry's
            </p>
          </div>
          <div className="testimonial">
            <div className="image">
              <img src={avatar1} alt="" />
            </div>
            <p>
              He Printing and Typesetting the industry. <span>Lorem Ipsum</span>{" "}
              has been the Industry's
            </p>
          </div>
          <div className="testimonial">
            <div className="image">
              <img src={avatar1} alt="" />
            </div>
            <p>
              He Printing and Typesetting the industry. <span>Lorem Ipsum</span>{" "}
              has been the Industry's
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Testimonials

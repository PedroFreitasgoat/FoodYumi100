import React from 'react'
import { LowerFooter, Section } from './styles.Footer'
import logo from "../assets/FoodYummy.png";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="footer">
    <Section>
      <div className="brand container">
        <img src={logo} alt="logo"/>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, dolore!
        </p>
        <ul>
          <li><AiFillInstagram /></li>
          <li><FaFacebookF /></li>
          <li><GrLinkedinOption /></li>
          <li><BsTwitter /></li>
        </ul>
      </div>
      <div className="about container">
        <div className="title">
          <h3>About Us</h3>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis error 
          vero inventore corporis maiores nulla saepe doloribus, 
          porro, pariatur vitae illum, temporibus quod nesciunt odit ea.
          </p>
      </div>
      <div className="contact container">
        <div className="title">
          <h3>Contact Us</h3>
          <p>+55 1194109822</p>
          <p>kazenxpnc@gmail.com</p>
          <p>@pedroOMilior</p>
          <p>789, São Paulo, Brazil</p>
        </div>
      </div>
    </Section>
    <LowerFooter className="lowe_footer">
      <h2>
        Copyright &copy; 2024 <span>Pedro o Milior</span>
      </h2>
    </LowerFooter>
    </div>
  )
}

export default Footer

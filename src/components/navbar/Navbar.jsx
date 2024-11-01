import { useState } from 'react';
import React from "react";
import foodYumy from '../assets/FoodYummy.png' //importaçãa da imagem
import { Nav } from "../navbar/styled.Nav.jsx";
import { GiHamburgerMenu } from 'react-icons/gi'
import { VscChromeClose } from 'react-icons/vsc'


const Navbar = () => {
  const [navbarState, setNavbarState] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", () => setNavbarState(false));
  return (
    <Nav>
    <div className="brand">
      <img src={foodYumy} alt="Icon" />
      <div className="toggle">
        {navbarState ? (
          <VscChromeClose onClick={() => setNavbarState(false)} />
        ) : (
          <GiHamburgerMenu
            onClick={(e) => {
              e.stopPropagation();
              setNavbarState(true);
            }}
          />
        )}
        </div>
      </div>
      <ul className="links">
        <li>
          <a href="#home" className="active">
            Home
          </a>
        </li>
        <li>
          <a href="#services">Our Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#products">Products</a>
        </li>
        <li>
          <a href="#newsletter">Newsletter</a>
        </li>
      </ul>
    </Nav>
  );
};

export default Navbar; // Nome para exportar para ouros lugares

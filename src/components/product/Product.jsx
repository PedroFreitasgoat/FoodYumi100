import React from 'react'
import { Section } from './styles.Product';
import styled from "styled-components";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import { imageZoomEffect, TitleStyles } from "../ReusableStyles";

const data = [
  {
    image: product1,
    name: "Chicken Burger",
    price: "$22.4/pcs",
  },
  {
    image: product2,
    name: "Toasted Bread",
    price: "$5.5/pcs",
  },
  {
    image: product3,
    name: "Egg Sandwich",
    price: "$8/pcs",
  },

  {
    image: product4,
    name: "Raspberry Cake",
    price: "$12.5/pcs",
  },
];

const Product = () => {
  return (
    <Section>
      <div className="title">
        <h1>
          <span>Favourite</span> All the time!
        </h1>
      </div>
      <div className="products">
        {
          data.map((product) => {
            return (
              <div className="product">
                <div className="image">
                  <img src={product.image} alt="Product image" />
                </div>
                <h2>{product.name}</h2>
                <h3>{product.price}</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores!</p>
                <button>Buy Now</button>
              </div>
            )
          })
        }
      </div>
    </Section>
  )
}

export default Product

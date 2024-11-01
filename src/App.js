import React from 'react'
import ScrollToTop from './components/scrol/ScrollToTop'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Product from './components/product/Product'
import Newsletter from './components/newsletter/Newsletter'
import Footer from './components/footer/Footer'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Product />
      <Newsletter />
      <Footer />
    </>
  )
}

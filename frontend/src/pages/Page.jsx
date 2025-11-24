import React from 'react'

import Hero from '../components/hero/Hero'
import About from '../components/about/About'
import Portfolio from '../components/portfolio/Portfolio'
import Services from '../components/Services/Services'
import Contact from '../components/contact/Contact'
import Blog from '../components/blog/Blog'
import Footer from '../components/Footer/Footer'
import Header from '../components/header/Header'
export default function Page() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Contact />
      <Blog />
      <Footer />
    </div>
  )
}

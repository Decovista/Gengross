import React from 'react'
import Navigation from '../../Components/Navigation/Navigation'
import HeroSection from '../../Components/Hero-Section/HeroSection'
import About from '../../Components/About/About'
import Contact from '../../Components/Contact-form/Contact'
import Footer from '../../Components/Footer/Footer'

function Home() {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home

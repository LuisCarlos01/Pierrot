import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import Gallery from '../components/Gallery'
import FAQ from '../components/FAQ'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Gallery />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

export default Home

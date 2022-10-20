import React from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Services from './components/Services/Services'
import Poetries from './components/Poetries/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Services />

      <Poetries />
      <Contact />
      <Footer />
    </>
  )
}

export default App

import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'
import UIX from '../../assets/uiux.png'
import MOVIE from '../../assets/movie.jpg'
import LOGO from '../../assets/logo.png'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development and UI/UX Design</h3>
            <img src={UIX} alt='UIX' className='service-img' />
          </div>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>Film and Video Shooting</h3>
            <img src={MOVIE} alt='UIX' className='service-img movie' />
          </div>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>Logo & Branding</h3>
            <img src={LOGO} alt='UIX' className='service-img logo' />
          </div>
        </article>
      </div>
    </section>
  )
}

export default Services

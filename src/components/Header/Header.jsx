import React from 'react'
import './header.css'
import CTA from './CTA'
import SocialMedia from './SocialMedia'
import ME from '../../assets/kz.jpg'

const Header = () => {
  return (
    <header id='header'>
      <div className='container header__container'>
        <div className='info'>
          <h5>Hello I'm</h5>
          <h1>
            <span>Kreshnik Zab&euml;rgja</span>
          </h1>
          <h5 className='text-light border'>FullStack Developer</h5>
        </div>
        <div className='me'>
          <img src={ME} alt='' />
        </div>
        <a href='#about' className='scroll__down'>
          Scroll Down
        </a>
        <CTA />
        <SocialMedia />
      </div>
    </header>
  )
}

export default Header

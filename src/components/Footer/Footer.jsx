import React from 'react'
import './footer.css'
import LOGO from '../../assets/KZZZ2.png'
import { BsLinkedin } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'

const Footer = () => {
  return (
    <section id='footer'>
      <div className='container footer__container'>
        <div className='footer-content'>
          <div className='line'>
            <p>(c) All Rights Reserved</p>
          </div>
          <aside className='logo'>
            <img src={LOGO} alt='kreshnik' />
          </aside>
          <div className='footer-list'>
            <ul>
              <h3>Location</h3>
              <li>Kosova</li>
              <li>Vushtrri, Rr.Rrahim Zab&euml;rgja</li>
            </ul>
          </div>
          <div className='footer-list social-footer'>
            <ul>
              <h3>Social Links</h3>

              <li>
                <a
                  target='_blank'
                  href='https://www.facebook.com/kreshnik.zabergja'
                >
                  <BsFacebook />
                </a>
              </li>
              <li>
                <a
                  target='_blank'
                  href='https://www.instagram.com/kreshnikzabergja'
                >
                  <BsInstagram />
                </a>
              </li>
              <li>
                <a
                  target='_blank'
                  href='https://www.linkedin.com/in/kreshnikzabergja/'
                >
                  <BsLinkedin />
                </a>
              </li>
            </ul>
          </div>
          <div className='footer-list'>
            <ul>
              <li>
                <a href='#nav'>Home</a>
              </li>
              <li>
                <a href='#about'>About</a>
              </li>
              <li>
                <a href='#experience'>Experience</a>
              </li>
              <li>
                <a href='#services'>Services</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer

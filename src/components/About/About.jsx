import React from 'react'
import './about.css'
import ME from '../../assets/niku.jpg'
import { FaAward } from 'react-icons/fa'
import { IoIosSchool } from 'react-icons/io'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='about-image' />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ Years Working, and also university projects</small>
            </article>

            <article className='about__card'>
              <IoIosSchool className='about__icon' />
              <h5>Education</h5>

              <p>Computer Engineering Bachelor</p>
            </article>

            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Projects</h5>
              <small>
                20+ Projects, including Courses projects, and uni projects
              </small>
            </article>
          </div>
          <p>
            My name is Kreshnik Zab&euml;rgja, I am from Kosova and I live in
            Vushtrria. I study Computer Engineering in the University "Isa
            Boletini". I am a programer, oriented on JavaScript and React JS.
            <span className='poet'>
              I'm also a poet, I'm the author of the book
              <span className='poet_color'> "Lule Xhenneti"</span>.
            </span>
          </p>
          <a href='#contact' className='btn btn-primary'>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default About

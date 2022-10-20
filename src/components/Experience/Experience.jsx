import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>My Skills</h5>
      <h2>My Experience</h2>
      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Front-End Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>SASS</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>React JS</h4>
              <small className='text-light'>Experienced</small>
            </article>
          </div>
        </div>
        <div className='experience__backend'>
          <h3>Back-End Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>C#</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>MySQL</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>PHP</h4>
              <small className='text-light'>Basics</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>Microsoft SQL Server</h4>
              <small className='text-light'>Basics</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

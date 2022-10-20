import React, { useRef } from 'react'
import './contact.css'
import emailjs from 'emailjs-com'
import { MdOutlineEmail } from 'react-icons/md'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_ks7ulmg',
        'template_opje004',
        form.current,
        'NJ1nMweGnjr_SSeXK'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <div className='contact-info'>
            <article className='contact__option'>
              <MdOutlineEmail className='contact-icon' />
              <h4>Email</h4>
              <h5>kreshnik.zabergja@hotmail.com</h5>
              <a href='mailto:kreshnik.zabergja@hotmail.com' target='_blank'>
                Send a message
              </a>
            </article>
            <article className='contact__option'>
              <BsFacebook className='contact-icon' />
              <h4>Facebook</h4>
              <h5>Kreshnik Zab&euml;rgja</h5>
              <a
                href='https://www.facebook.com//kreshnik.zabergja'
                target='_blank'
              >
                Send a message
              </a>
            </article>
            <article className='contact__option'>
              <BsInstagram className='contact-icon' />
              <h4>Instagram</h4>
              <h5>kreshnikzabergja</h5>
              <a
                href='https://www.instagram.com//kreshnikzabergja'
                target='_blank'
              >
                Send a message
              </a>
            </article>
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <input
              type='text'
              name='name'
              placeholder='Your Full Name'
              required
            />
            <input
              type='email'
              name='email'
              placeholder='Your Email'
              required
            />
            <textarea
              name='message'
              rows='10'
              placeholder='Your Message'
              required
            ></textarea>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

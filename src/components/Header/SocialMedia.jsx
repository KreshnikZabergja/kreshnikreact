import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className='socialmedia'>
      <a href='https://www.linkedin.com/in/kreshnikzabergja/' target='_blank'>
        <BsLinkedin />
      </a>
      <a href='https://github.com/kreshnikzabergja' target='_blank'>
        <BsGithub />
      </a>
      <a href='https://www.facebook.com/kreshnik.zabergja' target='_blank'>
        <BsFacebook />
      </a>
    </div>
  )
}

export default SocialMedia

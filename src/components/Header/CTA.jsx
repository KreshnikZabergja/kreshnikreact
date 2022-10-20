import React from 'react'
// import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a
        href='https://www.facebook.com/kreshnik.zabergja/'
        target='_blank'
        className='btn cta'
        download
      >
        Facebook Profile
      </a>
      <a href='#contact' className='btn cta btn-primary'>
        Contact me
      </a>
    </div>
  )
}

export default CTA

import React from 'react'
import './testimonials.css'

import ReactVideo from './Video'
import ReactVideo1 from './Video1'
import ReactVideo2 from './Video2'
import ReactVideo3 from './Video3'
import ReactVideo4 from './Video4'
import ReactVideo5 from './Video5'
import ReactVideo6 from './Video6'
import ReactVideo7 from './Video7'

import { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// import required modules
import { Navigation } from 'swiper'
import { BsEmojiSmile } from 'react-icons/bs'

// const data = [
//   {
//     avatar: AVTR1,
//     name: 'Tina Snow',
//     review:
//       'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, laudantium tempora iusto, consequuntur nisi repellat nihil minus, asperiores autem ipsam dolor mollitia expedita aspernatur iste rerum odit atque nulla et?',
//   },

//   {
//     avatar: AVTR2,
//     name: 'Tina Snow',
//     review:
//       'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, laudantium tempora iusto, consequuntur nisi repellat nihil minus, asperiores autem ipsam dolor mollitia expedita aspernatur iste rerum odit atque nulla et?',
//   },
//   {
//     avatar: AVTR3,
//     name: 'Tina Snow',
//     review:
//       'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, laudantium tempora iusto, consequuntur nisi repellat nihil minus, asperiores autem ipsam dolor mollitia expedita aspernatur iste rerum odit atque nulla et?',
//   },
//   {
//     avatar: AVTR4,
//     name: 'Tina Snow',
//     review:
//       'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, laudantium tempora iusto, consequuntur nisi repellat nihil minus, asperiores autem ipsam dolor mollitia expedita aspernatur iste rerum odit atque nulla et?',
//   },
// ]

const Testimonials = () => {
  return (
    <section id='poetries'>
      <h5>
        I said I'm a poet, here are some of my poetries{' '}
        <BsEmojiSmile className='emojii' />
      </h5>
      <h2>Poetic Place</h2>
      <h5 className='rights'>
        (c) All Rights Are Reserved. Don't use my videos anywhere!!!
      </h5>

      <div className='video-container'>
        <Swiper navigation={true} modules={[Navigation]} className='mySwiper'>
          <SwiperSlide>
            <ReactVideo1 />
          </SwiperSlide>
          <SwiperSlide>
            <ReactVideo3 />
          </SwiperSlide>
          <SwiperSlide>
            <ReactVideo2 />
          </SwiperSlide>
          <SwiperSlide>
            <ReactVideo4 />
          </SwiperSlide>
          <SwiperSlide>
            <ReactVideo />
          </SwiperSlide>
          <SwiperSlide>
            <ReactVideo5 />
          </SwiperSlide>
          <SwiperSlide>
            <ReactVideo6 />
          </SwiperSlide>
          <SwiperSlide>
            <ReactVideo7 />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonials

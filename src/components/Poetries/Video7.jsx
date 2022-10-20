import React from 'react'
import { DefaultPlayer as Video } from 'react-html5video'
import 'react-html5video/dist/styles.css'
import Lule from '../../assets/Lule Xhenneti 1.mp4'

function ReactVideo7() {
  return (
    <Video>
      <source src={Lule} type='video/mp4' />
    </Video>
  )
}

export default ReactVideo7

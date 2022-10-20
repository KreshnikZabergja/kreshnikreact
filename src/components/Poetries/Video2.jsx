import React from 'react'
import { DefaultPlayer as Video } from 'react-html5video'
import 'react-html5video/dist/styles.css'
import DashniaeTij from '../../assets/Dashnia e Tij.mp4'

function ReactVideo2() {
  return (
    <Video>
      <source src={DashniaeTij} type='video/mp4' />
    </Video>
  )
}

export default ReactVideo2

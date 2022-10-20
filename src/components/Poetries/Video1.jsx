import React from 'react'
import { DefaultPlayer as Video } from 'react-html5video'
import 'react-html5video/dist/styles.css'
import FITUES from '../../assets/Fitues_final.mp4'

function ReactVideo1() {
  return (
    <Video>
      <source src={FITUES} type='video/mp4' />
    </Video>
  )
}

export default ReactVideo1

import React from 'react'
import { DefaultPlayer as Video } from 'react-html5video'
import 'react-html5video/dist/styles.css'
import DRITE from '../../assets/s.mp4'
import FITUES from '../../assets/Fitues_final.mp4'

function ReactVideo() {
  return (
    <Video>
      <source src={DRITE} type='video/mp4' />
    </Video>
  )
}

export default ReactVideo

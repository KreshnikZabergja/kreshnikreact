import React from 'react'
import { DefaultPlayer as Video } from 'react-html5video'
import 'react-html5video/dist/styles.css'
import NANE from '../../assets/NANË.mp4'

function ReactVideo3() {
  return (
    <Video>
      <source src={NANE} type='video/mp4' />
    </Video>
  )
}

export default ReactVideo3

import React from 'react'
import { DefaultPlayer as Video } from 'react-html5video'
import 'react-html5video/dist/styles.css'
import Drite from '../../assets/Dritë.mp4'

function ReactVideo6() {
  return (
    <Video>
      <source src={Drite} type='video/mp4' />
    </Video>
  )
}

export default ReactVideo6

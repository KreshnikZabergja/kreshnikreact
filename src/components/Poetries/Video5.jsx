import React from 'react'
import { DefaultPlayer as Video } from 'react-html5video'
import 'react-html5video/dist/styles.css'
import KRESHNIKU from '../../assets/Unë jam Kreshniku.mp4'

function ReactVideo5() {
  return (
    <Video>
      <source src={KRESHNIKU} type='video/mp4' />
    </Video>
  )
}

export default ReactVideo5

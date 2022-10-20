import React from 'react'
import { DefaultPlayer as Video } from 'react-html5video'
import 'react-html5video/dist/styles.css'
import VJESHTE from '../../assets/Vjeshtë.mp4'

function ReactVideo1() {
  return (
    <Video>
      <source src={VJESHTE} type='video/mp4' />
    </Video>
  )
}

export default ReactVideo1

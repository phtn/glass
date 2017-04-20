import React from 'react'
import SQUARE from './square'

export default props => (
  <Motion default
    defaultStyle={{x: 0}}
    style={{x: spring(props.x)}}>
    {i=>
      <SQUARE
        title={props.title}
        borderColor={'tomato'}
        width={props.width/2}
        height={props.height/2}
        color={props.color}
        left={props.left}
        />
      }
  </Motion>
)

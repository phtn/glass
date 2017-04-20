import React from 'react'

export default props => (
  <div
    style={{
      // border: `1px solid ${props.borderColor}`,
      height: props.height, width: props.width,
      backgroundColor: props.bgColor,
      position: 'absolute',
      left: props.left,
      top: props.top,
      borderColor: props.color,
      borderBottom: props.bottomBorder,
      border: `1px solid ${props.color}`,
      borderBottomWidth: props.borderBottom,
      borderTopWidth: props.borderTop,
      borderRightWidth: props.borderRight,
      borderLeftWidth: props.borderLeft,
      borderTopLeftRadius: `${props.borderRadiusTopLeft}px`,
      borderTopRightRadius: `${props.borderRadiusTopRight}px`,
      borderBottomRightRadius:`${props.borderRadiusBottomRight}px`,
      borderBottomLeftRadius:`${props.borderRadiusBottomLeft}px`,
      display: 'block',
      overflow: 'hidden',
      opacity: props.opacity,
      color: props.colorLabel,

    }}
    >
    <span style={{
      fontSize: 12,
      textTransform: 'upperCase',
      textShadow: '1px 1px 1px rgba(0,0,0, 0.2)',
      lineHeight: '30px',
      color: '#333'
    }}>
      {props.label}
    </span>
  </div>
)

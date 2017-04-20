import React from 'react'
import thinking from '../svg/thinking.svg'
import coil from '../svg/coil.svg'
import panel from '../svg/solar-panel.svg'
const styles = {
  panels: {
    opacity: 1
  }
}
const square = (n,l) => {
  switch(n){
    case 'tl':
      return (
        <div style={{textAlign: 'left', paddingLeft: 10}}>
          <img style={{}} src={ thinking } width={24} height={24} alt='none'/>

        </div>
      )
    case 'tr':
      return (
        <div style={{
          textAlign: 'left',
          paddingLeft: 5,
          paddingTop: 3,
          display: 'block',

        }}>
          <div style={{float: 'left'}}>
          <img src={ coil } width={22} height={22} alt='none'/>
          </div>
          <div style={{textAlign: 'center'}}>
          <span>

          </span>
          </div>
        </div>
      )
      case 'bl':
        return (
          <div style={{
            textAlign: 'left',
            paddingLeft: 5,
            paddingTop: 3,
            display: 'block',

          }}>
            <div style={{textAlign: 'center', paddingTop: 250}}>
            <img src={ panel } width={100} height={100} alt='none'/>
            </div>
            <div style={{textAlign: 'center'}}>

            </div>
          </div>
        )
  }
}
const label = (l) => {
  return l
}
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
      fontSize: props.fontSize,
      fontWeight: props.fontWeight,
    }}
    >
    <span style={{
      fontSize: 14,
      textTransform: 'upperCase',
      textShadow: '1px 1px 1px rgba(0,0,0, 0.2)',
      lineHeight: '24px',
      colorLabel: props.colorLabel,
      fontFamily: props.font,
      fontWeight: 'bold',
      letterSpacing: props.spacing,
      label: props.label
    }}>
      {square(props.name, props.label)}
      <span>
          {label(props.label)}
      </span>
    </span>
  </div>
)

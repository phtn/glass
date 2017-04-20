import React, { Component } from 'react'
//import colours from './colours.json'
// const cArray = colours[0].colors
// console.log(cArray.length)
// const  getColors = c => {
//   for ( let i=0; i<cArray.length; i++ ){
//     console.log(c[i])
//   }
// }
// eslint-disable-next-line
import { Motion, spring, presets } from 'react-motion'
import toast from 'pre-toast/lib/Toast'
import mojs from 'mo-js'

import MOUSE from './components/sandbox'
import SQUARE from './components/square'
const div = {
  // border: '1px solid gray',
  height: window.innerHeight,
  justtifyContent: 'space-around',
  alignItems: 'center',
  textAlign: 'center'
}
const width = window.innerWidth
const height = window.innerHeight
let config = {
  position: 'bottom-right',
  maxVisible: 1,
  timeBar: false
}
toast.configuration(config)

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      mouseX: 0,
      mouseY: 0,
      tlWidth: 0,
      energy: 1000000000,
    }
  }
  componentDidMount(){
    this.setState({tlWidth: width/2})
    setTimeout(t=> toast.success('1 Million MW', 'Gift from the Sun'), 1000)
    const burst = new mojs.Burst({
      radius: {0:100},
      children: {
        shape: 'polygon',
        radius: {0:20}
      },
      duration: 3000,
    })
    // eslint-disable-next-line
    const timeline = new mojs.Timeline().add(burst).play()
  }
  getMouseLocation(e){
    this.setState({mouseX: e.clientX})
    this.setState({mouseY: e.clientY})
  }
  render(){

    return(
      <div
        style={{...div}}
        onMouseMove={this.getMouseLocation.bind(this)}
        onMouseDown={(e)=>console.log('test')}>

        <Motion /* TOP - LEFT */
          defaultStyle={{w: 0, h: 25, s: -2}}
          style={{
            w: spring(width-150),
            h: spring(24),
            s: spring(2)
          }}
          >
          {i=>
            <SQUARE
            name={'tl'}
            title={i.w}
            width={i.w}
            height={i.h}
            color={'transparent'}
            left={0}
            alignItems='center'
            borderTop={0}
            borderBottom={0}
            borderLeft={0}
            borderRight={0}
            opacity={1}
            colorLabel={'#ccc'}
            label={''}
            bgColor={'#999'}
            font={'Roboto'}
            fontWeight={100}
            spacing={i.s}
            />
          }
        </Motion>

        <Motion /* TOP - RIGHT */
          defaultStyle={{
            w: width,
            h: height,
            l: 0,
            r: 500,
            o: 0,
            }}
          style={{
            w: spring(150),
            h: spring(45),
            l: spring(width-155),
            r: spring(5),
            o: spring(1)
          }}
          >
          {i=>
            <SQUARE
            name={'tr'}
            title={i.w}
            width={i.w}
            height={i.h}
            color={'rgba(0,0,0,0.6)'}
            left={i.l}
            alignItems='center'
            borderTop={0}
            borderBottom={5}
            borderLeft={1}
            borderRight={0}
            borderRadiusBottomLeft={i.r}
            borderRadiusBottomRight={0}
            borderRadiusTopLeft={0}
            borderRadiusTopRight={0}
            opacity={i.o}
            label={'$ 1,000,000.00'}
            bgColor={'#2dde98'}
            font={'Josefin Slab'}
            fontSize={14}
            />
          }
        </Motion>


        <Motion /* BOTTOM - RIGHT */
          defaultStyle={{
            w: width,
            h: height,
            t: height,
            l: 0,
            r: 0,
            }}
          style={{
            w: spring(0),
            h: spring(100),
            t: spring(100),
            l: spring(width-100),
            r: spring(1000),
          }}
          >
          {i=>
            <SQUARE
            title={i.w}
            width={i.w}
            height={i.h}
            color={'#222'}
            top={i.t}
            left={i.l}
            alignItems='center'
            borderTop={0}
            borderBottom={0}
            borderLeft={0}
            borderRight={0}
            opacity={0}
            borderRadiusTopLeft={i.r}
            borderRadiusTopRight={i.r}
            borderRadiusBottomLeft={i.r}
            borderRadiusBottomRight={i.r}
            />
          }
        </Motion>


        <Motion /* BOTTOM - LEFT */
          defaultStyle={{
            w: 0,
            h: height,
            t: height,
            r: 1000,
            o: 0,
          }}
          style={{
            w: spring(width-1),
            h: spring(height-25),
            t: spring(25),
            r: spring(10),
            o: spring(1),
          }}
          >
          {i=>
            <SQUARE
            top={i.t}
            title={i.w}
            width={i.w}
            height={i.h}
            color={'gray'}
            left={0}
            alignItems='center'
            borderTop={5}
            borderBottom={0}
            borderLeft={0}
            borderRight={1}
            borderRadiusTopLeft={0}
            borderRadiusTopRight={i.r}
            borderRadiusBottomLeft={0}
            borderRadiusBottomRight={0}
            opacity={1}
            bgColor={'rgba(0,0,0, 0.5)'}
            />
          }
        </Motion>








      </div>
    )
  }
}
export default App

import React, { Component } from 'react'

// eslint-disable-next-line
import { Motion, spring, presets } from 'react-motion'
import toast from 'pre-toast/lib/Toast'
import mojs from 'mo-js'
import Howl from 'howler'
import SQUARE from './components/square'

const width = window.innerWidth
const height = window.innerHeight
const div = {
  height: height-25,
  justtifyContent: 'space-around',
  alignItems: 'center',
  textAlign: 'center'
}

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      mouseX: 0,
      mouseY: 0,
      tlWidth: 0,
      energy: 0,
    }
  }
  componentDidMount(){
    setInterval(i=> {this.setState({energy: this.state.energy + 1})}, 100)
    this.setState({tlWidth: width/2})

    const burst = new mojs.Burst({
      radius: {800:0},
      count: 100,
      angle: 45,
      children: {
        shape: 'circle',
        fill: '#2dde98',
        radius: {2:2},
        delay: 'stagger(rand(200,350))',
      },

      duration: 2000,
    })
    const burst1 = new mojs.Burst({
      radius: {800:0},
      count: 108,
      angle: 45,
      children: {
        shape: 'circle',
        fill: '#2dde98',
        radius: {'rand(2-6)':2},
        delay: 'stagger(rand(200,350))',
      },

      duration: 2000,
    })
    const burst2 = new mojs.Burst({
      radius: {800:0},
      count: 36,
      angle: 45,
      children: {
        shape: 'circle',
        fill: '#eee',
        radius: {2:2},
        delay: 'stagger(rand(400,550))',
      },

      duration: 2000,
    })
    const burst3 = new mojs.Burst({
      radius: {800:0},
      count: 12,
      angle: 45,
      children: {
        shape: 'circle',
        fill: '#f47721',
        radius: {2:2},
        delay: 'stagger(rand(300,450))',
      },

      duration: 2000,
    })
    // eslint-disable-next-line
    const timeline = new mojs.Timeline({repeat: 99})
      .add(burst,burst1,burst,burst,burst2,burst3,burst3).play()
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
            label={this.state.energy}
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
            label={this.state.energy}
            bgColor={'#2dde98'}
            font={'Josefin Slab'}
            fontSize={14}
            click={this.click}
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
            name={'bl'}
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

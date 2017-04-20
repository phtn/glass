import React from 'react'

export default props => (
  <div>
    <div>
      w: <strong>{window.innerWidth}</strong> h: <strong>{window.innerHeight}</strong>
    </div>
    <div>
      x: <strong>{props.x}</strong> y: <strong>{props.y}</strong>
    </div>
  </div>

)

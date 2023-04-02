import React from 'react'

function NumberIndicator(props) {
  return (
    <div style={{color:'black',fontWeight:'bold',fontSize:'0.75em'}}>
        {props.number || 2}
    </div>
  )
}

export default NumberIndicator
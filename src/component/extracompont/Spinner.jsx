import React from 'react'
import './spinner.css'

function Spinner(props) {
  const style={
    width:props.width,
    height:props.height,
    borderTopColor:props.borderColor,
    borderBottomColor:props.borderColor,
    borderLeftColor:'transparent',
    borderRightColor:'transparent',
    
    
  }

  return (
    <div className="lds-dual-ring" style={style}></div>
  )
}

export default Spinner
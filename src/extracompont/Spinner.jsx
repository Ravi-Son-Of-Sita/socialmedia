import React from 'react'
import './spinner.css'

function Spinner(props) {
  const borderColorComb=props.borderColor+' transparent '+props.borderColor +' tansprant'
  const style={
    width:props.width,
    height:props.height,
  }

  return (
    <div className="lds-dual-ring" style={style}></div>
  )
}

export default Spinner
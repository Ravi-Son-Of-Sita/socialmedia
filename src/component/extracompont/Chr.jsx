import React from 'react'
import './chr.scss'

function Chr(props) {
  var min_hight=props.height ||'2px'
  return (
    <div className='hr' style={{minHeight:min_hight}}></div>
  )
}

export default Chr
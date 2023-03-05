import React from 'react'
import { useState } from 'react'

function ToggleButton(props) {
    var toggleOn=props.toggleOn ,toggleOff=props.toggleOff,toggle=props.toggle
  return (
    <>
        {!toggle?toggleOn:toggleOff}
    </>
  )
}

export default ToggleButton
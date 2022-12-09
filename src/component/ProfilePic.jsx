import React from 'react'
import { useState } from 'react';
import profilepic from '../assest/raviprofile.jpg'

function ProfilePic() {
 const [size ,setSize]=useState('40px')
  return (
    <div style={{width:size,height:size,borderRadius:'50%',overflow:'hidden'}}>
        <img src={profilepic} style={{objectFit:'cover', width:'100%'}}/></div>
  )
}

export default ProfilePic;
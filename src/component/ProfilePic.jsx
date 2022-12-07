import React from 'react'
import profilepic from '../assest/raviprofile.jpg'

function ProfilePic() {
  return (
    <div style={{width:'40px',height:'40px',borderRadius:'50%',overflow:'hidden'}}>
        <img src={profilepic} style={{objectFit:'cover', width:'100%'}}/></div>
  )
}

export default ProfilePic;
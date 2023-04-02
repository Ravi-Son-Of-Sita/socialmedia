import React from 'react'
import profilepic from '../../assest/raviprofile.jpg'

function ProfilePic(props) {
 var size=props.size ||'40px',imagelink=props.image || profilepic

  return (
    <div style={{width:size,height:size,borderRadius:'50%',overflow:'hidden'}}>
        <img src={imagelink} style={{objectFit:'cover', width:'100%'}}alt=''/></div>
  )
}

export default ProfilePic;
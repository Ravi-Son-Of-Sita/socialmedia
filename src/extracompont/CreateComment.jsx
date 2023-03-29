import React,{ useContext } from 'react'
import{RiFileGifFill,RiSendPlane2Fill} from "react-icons/ri"
import ProfilePic from './ProfilePic'
import { AuthContext } from '../auth/authContext';

function CreateComment() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div style={{display:'flex',flexDirection:'row',alignContent:'space-around'}}>
      <ProfilePic size={'50px'} image={currentUser.photoURL}/>
      <div>
        <input/>
      </div>
      <RiSendPlane2Fill/>
    </div>
  )
}

export default CreateComment
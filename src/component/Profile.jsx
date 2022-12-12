import React from 'react'
import { useContext } from 'react';
import{FiEdit} from 'react-icons/fi'
import {BiCamera} from 'react-icons/bi'
import { AuthContext } from '../auth/authContext';
import ProfilePic from "./ProfilePic"
function Profile() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div >
      <div>
        <div>
          <ProfilePic/>
          <BiCamera/>
        </div>
        <span>Ravi Ranjan Kumar</span>
        <FiEdit Style={currentUser?{display:'flex'}:{display:'none'}}/>
      </div>

    </div>
  )
}

export default Profile;
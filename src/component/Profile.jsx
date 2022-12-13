import React from 'react'
import { useContext } from 'react';
import{FiEdit} from 'react-icons/fi'
import {BiCamera} from 'react-icons/bi'
import { AuthContext } from '../auth/authContext';
import ProfilePic from "./ProfilePic"
import cover from "../assest/cover.jpg"
function Profile() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div  className='profile-page'>
      <div className='profile-container'>
        <div className='profile-name'>
          <div className='cover-pic'>
            <img src={cover} alt='cover'/>
          </div>
          <ProfilePic size={'150px'}/>
          <BiCamera/>
        </div>
        <span>Ravi Ranjan Kumar</span>
        <div className="profile-edit"  style={currentUser?{display:'flex'}:{display:'none'}}>
          <button> 
            <FiEdit/> 
            Edit Profile
          </button>
        </div>
        <div className="profile-option">
          <button>Posts</button>
          <button>About</button>
          <button>Friends</button>
          <button>Photos</button>
          <button>Videos</button>
          <button>More</button>
        </div>
      </div>
      <div className='option-display'>
        Option display
      </div>
      <div>

      </div>

    </div>
  )
}

export default Profile;
import React from 'react'
import { useContext } from 'react';
import{FiEdit} from 'react-icons/fi'
import {BiCamera} from 'react-icons/bi'
import { AuthContext } from '../auth/authContext';
import ProfilePic from "../extracompont/ProfilePic"
import cover from "../assest/cover.jpg"
import './profile.scss'
function Profile() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div  className='profile-page'>
      <div className='profile-container'>
        <div className='profile-name'>
          <div className='cover-pic'>
            <img src={cover} alt='cover'/>
          </div>
          <div className='profile-pic'>
          <ProfilePic size={'150px'} image={currentUser.photoURL}/>
            <div className='edit-icon'>
            <BiCamera size={'1.75em'} style={{alignSelf:'center'}}/>
            </div>
          
          </div>
          <span>{currentUser.displayName}</span>
        </div>
        
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
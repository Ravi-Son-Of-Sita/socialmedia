import React from 'react'
import { useContext } from 'react';
import{FiEdit} from 'react-icons/fi'
import {BiCamera} from 'react-icons/bi'
import { AuthContext } from '../auth/authContext';
import ProfilePic from "../extracompont/ProfilePic"
import cover from "../assest/cover.jpg"
import './profile.scss'
import Posts from './Posts';
function Profile() {
  const { currentUser } = useContext(AuthContext);
  const postslist=[1,2,3,4,5,6,7]

  const posts=postslist.map((k)=>

  <div key={k.toString()}>
      <Posts/>
      </div>

  );
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
        display
      </div>
      <div>
        {posts}
      </div>

    </div>
  )
}

export default Profile;
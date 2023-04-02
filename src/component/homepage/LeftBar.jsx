import React from 'react'
import { Link } from 'react-router-dom'
import {FaUserFriends,FaClock} from "react-icons/fa"
import {TiGroup} from "react-icons/ti"
import {BsFillCaretRightSquareFill} from "react-icons/bs"
import {AiFillDownCircle,AiFillRightCircle} from "react-icons/ai"

import "./leftbar.scss"
import ProfilePic from '../extracompont/ProfilePic'
import Chr from '../extracompont/Chr'
import ToggleButton from '../extracompont/ToggleButton'
import { AuthContext } from "../../auth/authContext"
import { useContext,useState } from "react"

function LeftBar() {
  const linkStyl={
    textDecoration:'none' ,color:'#ff7233'
  }
  const [toggle, setToggle]=useState(false)
  const {currentUser} = useContext(AuthContext);

  const toggleHandle=(e)=>{
    !toggle?setToggle(true):setToggle(false)
  }
  return (
    <div className="left-bar">
      <div className='left-bar-cont'>
        <div className="top-part">
          <div><Link   to='/profile' style={linkStyl}>
            <div className='link-con'>
            <div className='icon-con'><ProfilePic  size={'2em'} image={currentUser.photoURL}/></div>
          <span>{currentUser.displayName}</span>
            </div>
          
          </Link></div>
          <div> 
            <Link  to='/friends' style={linkStyl}>
              <div className='link-con'>
                <div className='icon-con'><FaUserFriends size={'1.75em'}/></div>
                <span>Friends</span>
              </div>
            
            </Link>
          </div>
          <div>
            <Link   to='' style={linkStyl}>
              <div className='link-con'>
                <div className='icon-con'><FaClock size={'1.5em'}/></div>
                <span>Most Recent</span>
              </div>
            
            </Link>
          </div>
          <div>
            <Link   to='' style={linkStyl}>
              <div className='link-con'>
                <div className='icon-con'><TiGroup size={'1.75em'}/></div>
                <span>Groups</span>
              </div>
            
            </Link>
          </div>
          <div>
            <Link   to='' style={linkStyl}>
            <div className='link-con'>
              <div className='icon-con'><BsFillCaretRightSquareFill size={'1.5em'}/></div>
              <span>Watch</span>
            </div>
            
            </Link>
          </div>
          <div>
            <Link   to='' style={linkStyl}>
              <div className='link-con'>
                <div className='icon-con' onClick={toggleHandle}><ToggleButton toggle={toggle} toggleOn={<AiFillRightCircle size={'1.75em'}/>} toggleOff={<AiFillDownCircle size={'1.75em'}/>}/></div>
                <span>More</span>
              </div>
            
            </Link>
          </div>


        </div>
        <Chr/>
        <div className="middle-part">middle</div>
        <Chr/>
        <div className="bottom-part">bottom</div>
      </div>
    </div>
    
  )
}

export default LeftBar
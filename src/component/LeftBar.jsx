import React from 'react'
import { Link } from 'react-router-dom'
import "./leftbar.scss"
import ProfilePic from './ProfilePic'
import {FaUserFriends,FaClock} from "react-icons/fa"
import {TiGroup} from "react-icons/ti"
import {BsFillCaretRightSquareFill} from "react-icons/bs"
import {AiFillDownCircle} from "react-icons/ai"

function LeftBar() {
  const linkStyl={
    textDecoration:'none' ,color:'#ff7233'
  }
  return (
    <div className="left-bar">
      <div className='left-bar-cont'>
        <div className="top-part">
          <div><Link   to='/profile' style={linkStyl}>
            <div className='link-con'>
            <div className='icon-con'><ProfilePic  size={'2em'}/></div>
          <span>Ravi Ranjan Kumar</span>
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
                <div className='icon-con'><AiFillDownCircle size={'1.75em'}/></div>
                <span>More</span>
              </div>
            
            </Link>
          </div>


        </div>
        <hr/>
        <div className="middle-part">middle</div>
        <hr/>
        <div className="bottom-part">bottom</div>
      </div>
    </div>
    
  )
}

export default LeftBar
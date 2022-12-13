import React from 'react'
import { Link } from 'react-router-dom'
import "./leftbar.scss"
import ProfilePic from './ProfilePic'
import {FaUserFriends,FaClock} from "react-icons/fa"
import {TiGroup} from "react-icons/ti"
import {BsFillCaretRightSquareFill} from "react-icons/bs"
import {AiFillDownCircle} from "react-icons/ai"

function LeftBar() {
  return (
    <div className="left-bar">
      <div className='left-bar-cont'>
        <div className="top-part">
          <Link  classNmae='links' to='/profile'>
          <ProfilePic />
          <span>Ravi Ranjan Kumar</span>
          </Link>
          <Link  classNmae='links' to='/friends'>
            <div><FaUserFriends size={'1.75em'}/></div>
            <span>Friends</span>
          </Link>
          <Link  classNmae='links' to=''>
            <div><FaClock size={'1.5em'}/></div>
            <span>Most Recent</span>
          </Link>
          <Link  classNmae='links' to=''>
            <div><TiGroup size={'1.75em'}/></div>
            <span>Groups</span>
          </Link>
          <Link  classNmae='links' to=''>
            <div><BsFillCaretRightSquareFill size={'1.5em'}/></div>
            <span>Watch</span>
          </Link>
          <Link  classNmae='links' to=''>
            <div><AiFillDownCircle size={'1.75em'}/></div>
            <span>More</span>
          </Link>


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
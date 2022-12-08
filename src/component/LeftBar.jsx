import React from 'react'
import "./leftbar.scss"
import ProfilePic from './ProfilePic'
import {FaUserFriends,FaClock} from "react-icons/fa"
import {TiGroup} from "react-icons/ti"
import {BsFillCaretRightSquareFill} from "react-icons/bs"
import {AiFillDownCircle} from "react-icons/ai"

function LeftBar() {
  return (
    <div className="left-bar">
        <div className="top-part">
          <div>
          <ProfilePic />
          <span>Ravi Ranjan Kumar</span>
          </div>
          <div>
            <div><FaUserFriends size={'1.75em'}/></div>
            <span>Friends</span>
          </div>
          <div>
            <div><FaClock size={'1.5em'}/></div>
            <span>Most Recent</span>
          </div>
          <div>
            <div><TiGroup size={'1.75em'}/></div>
            <span>Groups</span>
          </div>
          <div>
            <div><BsFillCaretRightSquareFill size={'1.5em'}/></div>
            <span>Watch</span>
          </div>
          <div>
            <div><AiFillDownCircle size={'1.75em'}/></div>
            <span>More</span>
          </div>


        </div>
        <hr/>
        <div className="middle-part">middle</div>
        <hr/>
        <div className="bottom-part">bottom</div>
    </div>
    
  )
}

export default LeftBar
import React from "react"
import "./navbar.scss"
import Profilepic from "../assest/profilepic.png"

import {AiFillHome,AiFillAppstore,AiOutlineSearch,AiFillNotification,AiFillMessage} from "react-icons/ai"
import{FaUserFriends,FaSearch} from "react-icons/fa"
const NavBar=()=>{
    return(
      <div className="navbar">
        <div className="left-part">
          <div>
            <span>
              samyojak
            </span>
            <AiFillHome size={'1.35em'}/>
            <AiFillAppstore size={'1.35em'}/>
          </div>
        </div>
        <div className="center-part">
          <div>
            <FaSearch/>
            <input placeholder="Search..."/>
          </div>
        </div>
        <div className="right-part">
            <div className="profilepic">
                <div >
                    <img src={Profilepic}/>
                </div>
                <span>Ravi Ranjan Kumar</span>
            </div>
            <div>
                <AiFillNotification size={'1.35em'}/>
            </div>
            <div>
                <AiFillMessage size={'1.35em'}/>
            </div>
            <div>
                <FaUserFriends size={'1.35em'}/>
            </div>
          
        </div>
      </div>
      )
    }
    export default NavBar;
import React from "react"
import { useNavigate } from "react-router-dom"
import "./navbar.scss"
import Profilepic from "../assest/profilepic.png"
import ProfilePic from "./ProfilePic"

import {AiFillHome,AiFillAppstore,AiFillNotification,AiFillMessage} from "react-icons/ai"
import{FaUserFriends,FaSearch} from "react-icons/fa"
const NavBar=()=>{

  const navigate = useNavigate()
  const handelProfile=(e)=>{
    e.preventDefault();
    navigate('/profile')
  }
  const handelFriends=(e)=>{
    e.preventDefault();
    navigate('/friends')
  }
  const handelHome=(e)=>{
    e.preventDefault();
    navigate('/')
  }
  const handelSearch=(e)=>{
    e.preventDefault();
    console.log('Searching ....')
  }
  const handelApp=(e)=>{
    e.preventDefault();
    console.log('Opening App ....')
  }
  const handelNotification=(e)=>{
    e.preventDefault();
    console.log('You Have notifiaction ....')
  }
  const handelMessage=(e)=>{
    e.preventDefault();
    console.log('opening Message ....')
  }

    return(
      <div className="navbar">
        <div className="left-part">
        <div className="icon-container">
              <div className="icon-mid-container">
                <span className="s">
                  s
                </span>
              </div>
            </div>
          <div className="logo-name">
            <span className="logo-text">
              samyojak
            </span>
            <div>
              <AiFillHome size={'1.35em'} onClick={handelHome}/>
            </div>
            <div>
              <AiFillAppstore size={'1.35em'} onClick={handelApp}/>
            </div>
          </div>
        </div>
        <div className="center-part">
          <div>
            <FaSearch  size={'1.20em'} onClick={handelSearch}/>
            <input placeholder="Search..."/>
          </div>
        </div>
        <div className="right-part">
            <div className="profilepic">
                <div  onClick={handelProfile}>
                    <ProfilePic size={'30px'} image={Profilepic}/>
                </div>
                <span>Ravi Ranjan Kumar</span>
            </div>
            <div>
                <AiFillNotification size={'1.35em'} onClick={handelNotification}/>
            </div>
            <div>
                <AiFillMessage size={'1.35em'} onClick={handelMessage}/>
            </div>
            <div>
                <FaUserFriends size={'1.35em'} onClick={handelFriends}/>
            </div>
          
        </div>
      </div>
      )
    }
    export default NavBar;
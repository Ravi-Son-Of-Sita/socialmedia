import React from "react"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import "./navbar.scss"
import { AuthContext } from "../auth/authContext"
import Profilepic from "../assest/profilepic.png"
import ProfilePic from "./ProfilePic"
import Messagebox from "./Messagebox"

import {AiFillCloseCircle,AiFillHome,AiFillAppstore,AiFillNotification,AiFillMessage} from "react-icons/ai"
import{FaUserFriends,FaSearch} from "react-icons/fa"
import { useState } from "react"
const NavBar=()=>{

  const [logoutDisply, setLogoutDisplay]= useState('logout-none')
  const [messageDisply, setMessageDisplay]= useState('message-box-none')

  const navigate = useNavigate()

  const {logout} = useContext(AuthContext);
  const handleLogout = async (e) => {
    try {
      await logout();
      navigate("/")
    } catch (err) {
      console.log("not logout")
    }
  };
  const handelProfile=(e)=>{
    e.preventDefault();
    if(logoutDisply==='logout-none'){
      setLogoutDisplay('logout-cont')
      console.log('logout-display')
    }else{ 
      setLogoutDisplay('logout-none')
      console.log('logout-hide')
    }
   
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
    if(logoutDisply==='message-box-none'){
      setMessageDisplay('message-box')
      console.log('message-box')
    }else{ 
      setMessageDisplay('message-box')
      console.log('message-box-none')
    }
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
            <div className="profilepic" onClick={handelProfile}>
                <div>
                    <ProfilePic size={'30px'} image={Profilepic}/>
                </div>
                <span>Ravi Ranjan Kumar</span>
            </div>
            <div className={logoutDisply}>
              <div className="logout-inner">
                <div><AiFillCloseCircle size={'1.35em'} onClick={handelProfile}/></div>
              <button onClick={handleLogout}>Logout</button>
              </div>

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
            <div className={messageDisply}>
            <Messagebox/>
            </div>
          
        </div>
      </div>
      )
    }
    export default NavBar;
import React from "react"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import "./navbar.scss"
import { AuthContext } from "../auth/authContext"
import Profilepic from "../assest/profilepic.png"
import ProfilePic from "../extracompont/ProfilePic"
import Messagebox from "../extracompont/Messagebox"
import MessageIcoOpt from "../extracompont/MessageIcoOpt"
import NumberIndicator from "../extracompont/NumberIndicator"
import {AiFillCloseCircle,AiFillHome,AiFillAppstore,AiFillNotification,AiFillMessage} from "react-icons/ai"
import{FaUserFriends,FaSearch} from "react-icons/fa"
import { useState } from "react"
const NavBar=()=>{

  const [logoutDisply, setLogoutDisplay]= useState('logout-none')
  const [messageDisplyList, setMessageDisplayList]= useState('message-box-none')
  const [messageDisplyBox, setMessageDisplayBox]= useState('message-box-none')
  const { currentUser} = useContext(AuthContext);


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
  const handleProfile=(e)=>{
    e.preventDefault();
    if(logoutDisply==='logout-none'){
      setLogoutDisplay('logout-cont')
      console.log('logout-display')
    }else{ 
      setLogoutDisplay('logout-none')
      console.log('logout-hide')
    }
   
  }
  const handleFriends=(e)=>{
    e.preventDefault();
    navigate('/friends')
  }
  const handleHome=(e)=>{
    e.preventDefault();
    navigate('/')
  }
  const handleSearch=(e)=>{
    e.preventDefault();
    console.log('Searching ....')
  }
  const handleApp=(e)=>{
    e.preventDefault();
    console.log('Opening App ....')
  }
  const handleNotification=(e)=>{
    e.preventDefault();
    console.log('You Have notifiaction ....')
  }
  const handleMessageBox=(e)=>{
    e.preventDefault();
      setMessageDisplayBox('message-box')
      setMessageDisplayList('message-box-none')
  }
  const handleMessageBoxClose=(e)=>{
    setMessageDisplayBox('message-box-none')
  }

  const handleMessageList=(e)=>{
    e.preventDefault();
    if(messageDisplyList==='message-box-none'){
      setMessageDisplayList('message-box-list')
    }else{ 
      setMessageDisplayList('message-box-none')
      console.log('message-box-none')
    }
  }

    return(
      <div className="navbar">
        <div className="left-part">
        <div className="icon-container">
              <div className="icon-mid-container">
                <span className="s">
                 स
                </span>
              </div>
            </div>
          <div className="logo-name">
            <span className="logo-text">
              samyojak
            </span>
            <div>
              <AiFillHome size={'1.7em'} onClick={handleHome}/>
            </div>
            <div>
              <AiFillAppstore size={'1.7em'} onClick={handleApp}/>
            </div>
          </div>
        </div>
        <div className="center-part">
          <div>
            <FaSearch  size={'1.20em'} onClick={handleSearch}/>
            <input placeholder="Search..."/>
          </div>
        </div>
        <div className="right-part">
            <div className="profilepic" onClick={handleProfile}>
                <div>
                    <ProfilePic size={'30px'} image={currentUser.photoURL}/>
                </div>
                <span>{currentUser.displayName}</span>
            </div>
            <div className={logoutDisply}>
              <div className="logout-inner">
                <div><AiFillCloseCircle size={'1.7em'} onClick={handleProfile}/></div>
              <button onClick={handleLogout}>Logout</button>
              </div>

            </div>
            <div className="icons-nav">
              <div style={{position:'absolute',left:'0px',top:'-2px'}}><NumberIndicator/></div>
              
              <AiFillNotification size={'1.7em'} onClick={handleNotification}/>
            </div>
            <div className="icons-nav">
              <div style={{position:'absolute',left:'0px',top:'-2px'}}><NumberIndicator/></div>
              <AiFillMessage size={'1.7em'} onClick={handleMessageList}/>
            </div>
            <div className={messageDisplyList}>
            <MessageIcoOpt handleMessageBox={handleMessageBox}/>
            </div >
            <div className="icons-nav">
              <div style={{position:'absolute',left:'0px',top:'-2px'}}><NumberIndicator/></div>
              <FaUserFriends size={'1.7em'} onClick={handleFriends}/>
            </div>
            
            <div className={messageDisplyBox}>
            <Messagebox handleMessage={handleMessageBoxClose}/>
            </div >
        </div>
      </div>
      )
    }
    export default NavBar;
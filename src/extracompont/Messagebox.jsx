import React,{useState} from 'react'
import{IoCall,IoVideocam,IoClose} from"react-icons/io5"
import{FaMinus,FaStickyNote} from "react-icons/fa"
import{AiFillPlusCircle,AiFillLike,AiFillCloseCircle} from "react-icons/ai"
import{GoFileMedia} from "react-icons/go"
import{RiFileGifFill,RiSendPlane2Fill} from "react-icons/ri"
import {BsEmojiSmileFill} from "react-icons/bs"
import ProfilePic from './ProfilePic'
import MessageDisplay from '../component/Messsage/MessageDisplay'
import "./messagebox.scss"

function Messagebox({handleMessage}) {
    const [messageText,setMessageText]=useState('')
    const [attachment,setAttachment]=useState('')
    const messageInputHandle=(e)=>{
        setMessageText(e.target.value)
        console.log(messageText)
    }

  return (
    <div className='message-box-container'>
        <div className="message-box-inner">
            <div className="event-option">
                <div className='top-options'>
                    <div className="user-detail">
                        <ProfilePic size={'32px'}/>
                        <div className='name-active'>
                            <span style={{fontWeight:'bolder',color:'#424271'}}>Ravi ranjan Kumar</span>
                            <span style={{fontSize:'0.8em',color:'#ffff',fontWeight:'bolder'}}>Active 11 hr ago</span>
                        </div> 
                    </div>
                    
                    <div className='option-items'>
                        <div className='div-top-msbox'>
                        <IoCall size={'1.45em'}/>
                        </div>
                        <div className='div-top-msbox'>
                        <IoVideocam size={'1.45em'}/>
                        </div >
                        <div className='div-top-msbox'>
                        <AiFillCloseCircle size={'1.45em'} onClick={handleMessage}/>
                        </div>
                    </div>
                    
                </div>
                <div className='msg-area'>
                    <MessageDisplay/>
                </div>
                <div className='buttom-options'>
                    <div className='buttom-options-items'>
                        <div>
                        <AiFillPlusCircle size={'1.45em'}/>
                        </div>
                        <div>
                        <GoFileMedia size={'1.45em'}/>
                        </div>
                        <div>
                        <FaStickyNote size={'1.45em'}/>
                        </div>
                        <div>
                        <RiFileGifFill size={'1.45em'}/>
                        </div>
                        
                        <div className='msg-input-cont'>
                            <input type="text" placeholder='Aa' onChange={messageInputHandle}/>
                            <BsEmojiSmileFill size={'1.25em'}/>

                        </div>
                        
                        <div>{
                            messageText?<RiSendPlane2Fill size={'1.45em'}/>:<AiFillLike size={'1.45em'}/>
                            
                            }
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default Messagebox
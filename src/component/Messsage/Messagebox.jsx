import React,{useState} from 'react'
import{IoCall,IoVideocam} from"react-icons/io5"
import{AiFillCloseCircle} from "react-icons/ai"



import ProfilePic from '../extracompont/ProfilePic'
import MessageDisplay from './MessageDisplay'
import MessageBotom from './MessageBotom'
import "./messagebox.scss"


function Messagebox({handleMessage}) {
    

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
                    <MessageBotom/>
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default Messagebox
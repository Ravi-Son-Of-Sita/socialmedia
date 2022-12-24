import React from 'react'
import{IoCall,IoVideocam,IoClose} from"react-icons/io5"
import{FaMinus,FaStickyNote} from "react-icons/fa"
import{AiFillPlusCircle,AiFillLike} from "react-icons/ai"
import{GoFileMedia} from "react-icons/go"
import{RiFileGifFill} from "react-icons/ri"
import {BsEmojiSmileFill} from "react-icons/bs"
import ProfilePic from './ProfilePic'

function Messagebox() {
  return (
    <div className='message-box-container'>
        <div className="message-box-inner">
            <div className="event-option">
                <div className='top-options'>
                    <ProfilePic/>
                    <div>
                    <span>Ravi ranjan Kumar</span>
                    <span>Active 11 hr ago</span>
                    </div>
                    <div>
                        <div>
                        <IoCall/>
                        </div>
                        <div>
                        <IoVideocam/>
                        </div>
                        <div>
                        <FaMinus/>
                        </div>
                        <div>
                        <IoClose/>
                        </div>
                    </div>
                    
                </div>
                <div>
                    message display
                </div>
                <div className='buttom-optins'>
                    <div>
                        <div>
                        <AiFillPlusCircle/>
                        </div>
                        <div>
                        <GoFileMedia/>
                        </div>
                        <div>
                        <FaStickyNote/>
                        </div>
                        <div>
                        <RiFileGifFill/>
                        </div>
                        <div>
                            <div>
                                <input type="text" />
                                <BsEmojiSmileFill/>

                            </div>
                        </div>
                        <div>
                        <AiFillLike/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default Messagebox
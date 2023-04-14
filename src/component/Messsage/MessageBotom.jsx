import React,{useState} from 'react'

import { AiFillPlusCircle,AiFillLike, } from 'react-icons/ai'
import { GoFileMedia } from 'react-icons/go'
import { FaStickyNote } from 'react-icons/fa'
import { RiFileGifFill,RiSendPlane2Fill } from 'react-icons/ri'
import { BsEmojiSmileFill } from 'react-icons/bs'

import SendMessageDb from '../../database/messageDB'

function MessageBotom() {

    const chatId='LKur9d9UK1bfPBD5fo4ugqnPejo2-6mJvijZwytYKTfA0jw8LvKW84M73'

    const [messageText,setMessageText]=useState('')
    const [attachment,setAttachment]=useState('')
    const messageInputHandle=(e)=>{
        setMessageText(e.target.value)
    }
    const SendMessage =()=>{
        SendMessageDb(chatId,messageText,attachment)
    }

  return (
    <>
        <div className='buttom-options-items'>
            <div>
            <AiFillPlusCircle size={'1.45em'}/>
            </div>
            {!messageText?(
            <>
            <div>
            <GoFileMedia size={'1.45em'}/>
            </div>
            <div>
            <FaStickyNote size={'1.45em'}/>
            </div>
            <div>
            <RiFileGifFill size={'1.45em'}/>
            </div>
            </>
            ):(null)
            }
            
            <div className='msg-input-cont' style={{display:'flex',flexGrow:1,margin:'auto'}}>
                <input type="text" placeholder='Aa' onChange={messageInputHandle} style={{flexGrow:'0.6',fontSize:'1em'}}/>
                <BsEmojiSmileFill size={'1.25em'}/>

            </div>
            
            <div>{
                messageText?<RiSendPlane2Fill size={'1.45em'} onClick={SendMessage}/>:<AiFillLike size={'1.45em'}/>
                
                }
            
            </div>
        </div>
    </>
  )
}

export default MessageBotom;
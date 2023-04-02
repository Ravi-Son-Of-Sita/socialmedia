import React ,{useRef}from 'react'
import { useEffect } from 'react'
import ProfilePic from '../extracompont/ProfilePic'
import './messagedisplay.scss'




function MessageDisplay() {
const currentUser='Shara'
const user = 'John'
const messages=[
{message:"Hello, how are you doing?", sendBy:'John', timeStamp:'2021-07-15 13:05:23'},
{message:"I'm doing well, thanks. How about you?", sendBy:'Sarah', timeStamp:'2021-07-15 13:07:08'},
{message:"Do you have any plans for the weekend?", sendBy:'John', timeStamp:'2021-07-15 13:10:17'},
{message:"I'm thinking about going hiking. What about you?", sendBy:'Sarah', timeStamp:'2021-07-15 13:13:22'},
{message:"That sounds like fun. I might go to the beach.", sendBy:'John', timeStamp:'2021-07-15 13:15:34'},
{message:"What kind of music do you like?", sendBy:'Sarah', timeStamp:'2021-07-15 13:20:01'},
{message:"I'm into rock and alternative. How about you?", sendBy:'John', timeStamp:'2021-07-15 13:22:12'},
{message:"I like pop and R&B.", sendBy:'Sarah', timeStamp:'2021-07-15 13:25:03'},
{message:"Have you seen any good movies lately?", sendBy:'John', timeStamp:'2021-07-15 13:30:17'},
{message:"Yes, I saw a great action movie last week. What about you?", sendBy:'Sarah', timeStamp:'2021-07-15 13:35:08'}

]
const scrolldownRef=useRef(null)
useEffect(()=>{
    scrolldownRef.current.scrollIntoView({behavior:'smooth',block:'end'})
},[])

const message=messages.map((msg)=>
<div className={msg.sendBy==user?'left_aling':'right_aling'} style={{display:'flex',flexDirection:'row',marginBottom:'10px'}}>
  {msg.sendBy==user?<ProfilePic size={'25px'}/>:null}
  <div style={{display:'flex',flexDirection:'column'}}>
    <p style={{fontSize:12,fontWeight:'bold',width:'90%',marginBottom:'5px'}}>{msg.message}</p>
    <span style={{alignSelf:'center',fontSize:11}}>{msg.timeStamp}</span>
  </div>
</div>

)

  return (
    <div ref={scrolldownRef} className='message-display-area' style={{overflow:'auto',height:'100%'}}>
      {message}
    </div>
  )
}

export default MessageDisplay
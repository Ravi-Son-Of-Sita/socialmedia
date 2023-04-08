import React ,{useRef, useState}from 'react'
import { useEffect } from 'react'
import {onSnapshot,collection,doc,query} from 'firebase/firestore'
import { dbfS } from '../../firebase';
import Spinner from '../extracompont/Spinner';

import ProfilePic from '../extracompont/ProfilePic'
import './messagedisplay.scss'
//import {ReadMessageDb} from '../../database/messageDB'
import { auth } from '../../firebase'



function MessageDisplay() {
  const chatId='LKur9d9UK1bfPBD5fo4ugqnPejo2-6mJvijZwytYKTfA0jw8LvKW84M73'

  const [messages,setMessages]=useState(null)
const currentUser=auth.currentUser.uid
const user =()=>{if(currentUser=='LKur9d9UK1bfPBD5fo4ugqnPejo2'){
    return '6mJvijZwytYKTfA0jw8LvKW84M73'
    }
    return 'LKur9d9UK1bfPBD5fo4ugqnPejo2'
}
const scrolldownRef=useRef(null)
const ReadMessageDb=()=>{
  const q = query(collection(dbfS, 'chats'))
  const unsubscribe = onSnapshot(doc(q, chatId), (snapshot) => {
    let pushmessage=[]

    for (const [id,b] of Object.entries(snapshot.data({ serverTimestamps: 'estimate' }))) {
      
      console.log(id,b.message,b.time, b.sendBy);
      pushmessage.push(
        {
          id:id,
          message:b.message,
          sendBy:b.sendBy,
          attachment:b.attechment,
          time:b.time
        }
      )
    }
  

  setMessages(pushmessage);
   console.log(messages);
  })
  return unsubscribe
}
useEffect(()=>{
  ReadMessageDb()
  console.log(messages)
},[messages])

const message=!messages?.map((msg)=>
<div className={msg.sendBy==user?'left_aling':'right_aling'} style={{display:'flex',flexDirection:'row',marginBottom:'10px'}}>
  {msg.sendBy==user?<ProfilePic size={'25px'}/>:null}
  <div style={{display:'flex',flexDirection:'column'}}>
    <p style={{fontSize:12,fontWeight:'bold',width:'90%',marginBottom:'5px'}}>{msg.message}</p>
    <span style={{alignSelf:'center',fontSize:11}}>{msg.time}</span>
  </div>
</div>

)

  return (
    <div ref={scrolldownRef} className='message-display-area' style={{overflow:'auto',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
      {!messages?(<Spinner width={'30px'} height={'30px'} borderColor={'#ff7233'}/>):(message)}
    </div>
  )
}

export default MessageDisplay
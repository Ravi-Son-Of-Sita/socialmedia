import React from 'react'
import {AiFillLike} from "react-icons/ai"
import {BiLike,BiComment,BiShare} from "react-icons/bi"

import ProfilePic from "../extracompont/ProfilePic"
import './posts.scss'
import Postimage from '../assest/postsimage.jpg'


function Posts() {
//demo-data



//demo-data ends
  return (
    <div className="post-show-container">
         <div className="post-upper">
          <div style={{marginRight:"10px"}}><ProfilePic/></div>
          <div style={{display:"flex",flexDirection:"column"}}>
            <span style={{fontWeight:"bolder",fontSize:"15px"}}>Ravi Ranjan Kumar <span style={{color:"rgb(101, 103, 107)"}}> is in </span>Bokaro</span>
            <span style={{fontWeight:"bold",color:"rgb(101, 103, 107)",fontSize:"12px"}}>
                16 December at 05:44
            </span>
          </div>
         </div>
         <div className='Post-content'>
            <p style={{margin:'10px',fontWeight:"bold",fontSize:"14px"}}>When something seems difficult, dare to do it anyway.</p>
            <div><img src={Postimage} alt=''/></div>
         </div>
         <div className="post-lower">
            <div className="like-comment-cont" >
                <div>
                    <div style={{marginRight:"5px",backgroundColor:"#ff7233",borderRadius:"12px",height:"22px",width:"22px",display:"flex",justifyContent:"center",alignItems:"center",color:"white"}}>
                        <AiFillLike/>
                    </div>
                    <div>
                        <span>4.7 K</span>
                    </div>
                </div>
                <div>
                    <div role={'button'}>
                        <span>300 comments</span>
                    </div>
                    <div role={'button'}>
                        <span>500 shares </span>
                    </div>
                </div>
            </div>
            <div className='hr'></div>
            <div className='l-c-s-button'>
                <div role={'button'}>
                    <BiLike size={'1.35em'}/>
                    <span>like</span>
                </div>
                <div role={'button'}>
                    <BiComment size={'1.35em'}/>
                    <span>comment</span>
                </div>
                <div role={'button'}>
                    <BiShare size={'1.35em'} transform={'scale(-1,1)'}/>
                    <span>share</span>
                </div>
            </div>
         </div>
      </div>
  )
}

export default Posts
import React from "react"
import {FaPhotoVideo} from 'react-icons/fa'
import ProfilePic from "../extracompont/ProfilePic"
import './createpost.scss'
import mediafile from "../../assest/upload.png"
import Chr from "../extracompont/Chr"


const CreatePost =()=>{
    return(
      <div className="post-container">
         <div className="post-upper">
          <div><ProfilePic/></div>
          <input type="text" placeholder="What is in your mind ?"/>
         </div>
         <Chr/>
         <div className="post-lower">
          
          <div style={{width:''}}>
            <label>
            <FaPhotoVideo size={'1.50em'}/>
            <input type="file" style={{visibility:'hidden'}}/>
            </label>
            <button>Post</button>
          </div>
         </div>
      </div>
    )
  
  }
  export default CreatePost;

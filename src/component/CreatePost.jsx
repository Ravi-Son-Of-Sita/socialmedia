import React from "react"
import ProfilePic from "./ProfilePic"
import './createpost.scss'
import mediafile from "../assest/upload.png"


const CreatePost =()=>{
    return(
      <div className="post-container">
         <div className="post-upper">
          <div><ProfilePic/></div>
          <input type="text" placeholder="What is in your mind ?"/>
         </div>
         <div className="post-lower">
          <hr/>
          <div>
            <label>
            <img src={mediafile} style={{width:'30px',height:'30px',color:'#ff7233'}}/>
            <input type="file" />
            </label>
            <button>Post</button>
          </div>
         </div>
      </div>
    )
  
  }
  export default CreatePost;

import React from "react"
import "./home.scss"
import Post from "../../component/Post"
import Story from "../../component/Story"


  const HomePage=()=>{
    return(
      <div className="bellow-navbar">
        <Story/>
        <Post/>
        <span>share</span>
      </div>
    )
  }
  export default HomePage;
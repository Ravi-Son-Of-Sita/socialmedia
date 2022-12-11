import React from "react"
import "./home.scss"
import CreatePost from "./CreatePost"
import Story from "./Story"


  const HomePage=()=>{
    return(
      <div className="bellow-navbar">
        <Story/>
        <CreatePost/>
        <span>Posts</span>
      </div>
    )
  }
  export default HomePage;
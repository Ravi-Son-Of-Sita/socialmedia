import React from "react"
import "./home.scss"
import CreatePost from "../../component/CreatePost"
import Story from "../../component/Story"


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
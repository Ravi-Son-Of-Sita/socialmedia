import React from "react"
import "./home.scss"
import Post from "../../component/Post"


  const HomePage=()=>{
    return(
      <div className="bellow-navbar">
        <span>story</span>
        <Post/>
        <span>share</span>
      </div>
    )
  }
  export default HomePage;
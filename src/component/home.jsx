import React from "react"
import "./home.scss"
import CreatePost from "./CreatePost"
import Story from "./Story"
import Posts from "./Posts"


  const HomePage=()=>{
    const postslist=[1,2,3,4,5,6,7]

    const posts=postslist.map((k)=>

    <div key={k.toString()}>
        <Posts/>
        </div>

    );
    return(
      <div className="bellow-navbar">
        <Story/>
        <CreatePost/>
        {posts}
      </div>
    )
  }
  export default HomePage;
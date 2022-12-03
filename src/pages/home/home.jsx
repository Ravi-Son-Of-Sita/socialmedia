import React from "react"
import "./home.scss"
import {AiFillHome,AiFillAppstore,AiOutlineSearch} from "react-icons/ai"

const NavBar=()=>{
    return(
      <div className="navbar">
        <div className="left-part">
          <div>
            <span>
              samyojak
            </span>
            <AiFillHome/>
            <AiFillAppstore/>
          </div>
        </div>
        <div className="centre-part">
          <div>
            <AiOutlineSearch/>
            <input placeholder="Search..."/>
          </div>
        </div>
        <div className="right_part">
            <span>profile</span>
          
        </div>
      </div>
      )
    }
  const HomePage=()=>{
    return(
      <div>
        <NavBar/>
      </div>
    )
  }
  export default HomePage;
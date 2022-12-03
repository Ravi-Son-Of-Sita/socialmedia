import React from "react"
import "./login.scss"
 import {FaFacebookF,FaTwitter } from "react-icons/fa"

const Login=()=>{
    return(
        <div className="login">
            <div className="card">
                <div className="left">
                    <div className="header">
                        <div>Sgin In</div>
                        
                        <div className="facebook-twitter">
                            <div>
                                <FaFacebookF/>
                            </div>
                            <div >
                                <FaTwitter/>
                            </div>
                        </div>
                    </div>
                    <div className="inputlogin">
                        <div >USERNAME</div>
                        <input type="text" placeholder="User Name"/>
                        <div>PASSWORD</div>
                        <input type="password" placeholder="Password"/>
                    </div>
                    <div className="loginbutton">
                        <button>Login</button>
                    </div>
                    <div className="footer">
                        <div className="remember">
                            <input type="checkbox"/>
                            <label>Remember Me</label>
                        </div>
                        <div className="forgot">
                            forgot password
                        </div>
                    </div>

                </div>
                <div className="right">
                  <div className="title">
                    <h1>Smayojak</h1>
                  </div>
                  <div className="connect">
                    <h3>Connecting Heart to Heart</h3> 
                  </div>
                </div>
            </div>
        </div>
    )
}
export default Login;

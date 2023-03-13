import React from "react"
import { useNavigate } from "react-router-dom"
import { useContext,useState } from "react"
import { AuthContext } from "../auth/authContext"
import "./login.scss"
 import {FaFacebookF,FaTwitter } from "react-icons/fa"


const Login=()=>{
    const [inputs, setInputs] = useState({
        username: "",
        password: "",
      });
    const [err, setErr] = useState(null);

    const navigate = useNavigate()

    const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        };
    const { login,error} = useContext(AuthContext);
    
    const handelForgot=()=>{
        navigate("/forgotpass")
    };
    const handelRegister=()=>{
        navigate("/register")
    }

  const handleLogin = async (e) => {
    
    try {
    e.preventDefault();
     await login(inputs);
     navigate('/')
      console.log("reach here");
    } catch (err) {
      setErr(err);
      console.log(err)
    }
  };

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
                        <input type="text" placeholder="User Name" name="username" onChange={handleChange}/>
                        <div>PASSWORD</div>
                        <input type="password" placeholder="Password"  name="password" onChange={handleChange}/>
                    </div>
                    <div className="loginbutton">
                        <button onClick={handleLogin}>Login</button>
                    </div>
                    <div className="footer">
                        <div className="remember">
                            <input type="checkbox" />
                            <label>Remember Me</label>
                        </div>
                        <div className="forgot" onClick={handelForgot}>
                            forgot password
                        </div>
                    </div>
                    <div style={{alignSelf:'center', color:'red'}}>
                            {error}
                    </div>

                </div>
                <div className="right">
                  <div className="title">
                    <h1>Smayojak</h1>
                  </div>
                  <div className="connect">
                    <h1>Better.</h1> 
                    <h2> Best.</h2>
                    <h3> Wow!</h3>
                  </div>
                  <button onClick={handelRegister}>Register</button>
                </div>
            </div>
        </div>
    )
}
export default Login;

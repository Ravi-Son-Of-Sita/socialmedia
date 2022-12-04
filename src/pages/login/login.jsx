import React from "react"
import { useContext,useState } from "react"
import { AuthContext } from "../../auth/authContext"
import "./login.scss"
 import {FaFacebookF,FaTwitter } from "react-icons/fa"


const Login=()=>{
    const [inputs, setInputs] = useState({
        username: "",
        password: "",
      });
      const [err, setErr] = useState(null);

    const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        };
    //const { login} = useContext(AuthContext);
    const login=()=>{
        const inputs={username: 'ravi',
        password: '1234',}
      }
    const handleLogin = async (e) => {
          e.preventDefault();
          console.log('printing')
          try {
            await login(inputs)
          } catch (err) {
            setErr(err.response.data);
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
                        <input type="text" placeholder="User Name" onChange={handleChange}/>
                        <div>PASSWORD</div>
                        <input type="password" placeholder="Password"  onChange={handleChange}/>
                    </div>
                    <div className="loginbutton">
                        <button onClick={handleLogin}>Login</button>
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

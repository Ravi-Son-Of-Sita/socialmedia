import React from "react"
import { useNavigate } from "react-router-dom"
import { useContext,useState } from "react"
import { AuthContext } from "../auth/authContext"
import "./register.scss"


const Register=()=>{
    const [inputs, setInputs] = useState({
        firstname:'',
        lastname:'',
        email: "",
        password: "",
      });
    //const [err, setErr] = useState(null);

    const navigate = useNavigate()

    const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        };
    const { signup} = useContext(AuthContext);
  
    const handeSignin=()=>{
        navigate("/login")
    }

    const handleSubmit =(e) => {
          console.log('submit')
        };

    return(
        <div className="login">
            <div className="card">
                <div className="left">
                    <div className="header">
                        <div>Sign Up</div>
                    </div>
                    <div className="inputlogin">

                        
                        <div>
                          <div >First Name</div>
                          <input type="text" placeholder="First Name" name="fnamr" onChange={handleChange}/>
                        </div>
                        <div>
                          <div>Last Name</div>
                          <input type="text" placeholder="Last Name"  name="lname" onChange={handleChange}/>
                        </div>
                        <div>
                          <div >Email Id</div>
                          <input type="text" placeholder="Email Id" name="email" onChange={handleChange}/>
                        </div>
                        <div>
                          <div>Password</div>
                          <input type="password" placeholder="Password"  name="password" onChange={handleChange}/>
                        </div>    
                    </div>
                    <div className="loginbutton">
                        <button onClick={handleSubmit}>Submit</button>
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
                  <button onClick={handeSignin}>Sign In</button>
                </div>
            </div>
        </div>
    )
}
export default Register;
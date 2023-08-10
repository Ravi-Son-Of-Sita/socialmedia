import React from 'react'
import { AuthContext } from '../../auth/authContext'
import { useContext,useState } from "react"


function ForgotPassword() {
  const [email, setEmail] = useState()
  const [err, setErr] = useState('');
  const [linksent,setLinksent]=useState(false)
  const { resetpassword} = useContext(AuthContext);
  const handleChange = (e) => {
    setEmail(e.target.value);
        };

    const handleSubmit=async (e) =>{
      try{
      await resetpassword(email)
        setLinksent(true)
      }catch (err){
        setErr(err)
      }
    }
  return (
    <div style={{display:"flex", flexDirection:"column",}}>
      <div>
      <h2>Reset Your Password</h2>
      <p>Please enter Your register email address below </p>
      <div style={{display:"flex",justifyContent:"space-around"}}>
        <label>
          Email Adress
        </label>
        <input type="text" placeholder='enter email here' onChange={handleChange}/>
      </div>
      
      <button onClick={handleSubmit}> Submit </button>
      </div>
      <label>Back To Login</label>
      <div>
        {!linksent?<p>{err.message}</p>:<p>Password Reset link has been sent to your Email.</p>}
      </div>
      

    </div>
  )
}

export default ForgotPassword;
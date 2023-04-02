import React from 'react'
import { useNavigate } from 'react-router-dom';

function RegConf() {
    const navigate = useNavigate()
  return (
    <div>
        <div>
        Account has been created 
        and 
        email verication link has been sent to your email

        Please verify email to use our servies

        </div>
        <button onClick={()=>navigate("/login")}>
            Login
        </button>
        
    </div>
  )
}

export default RegConf;
import React from 'react'

function ForgotPassword() {
  return (
    <div>
      <div>
      <h2>Reset Your Password</h2>
      <p>Please enter Your register email address below </p>
      <div>
        <label>
          Email Adress
        </label>
        <input type="text" placeholder='enter email here' />
      </div>
      <button> Submit </button>
      </div>
      <label>Back To Login</label>
      

    </div>
  )
}

export default ForgotPassword;
import React ,{useContext}from 'react'
import { AuthContext } from '../../auth/authContext';
import CommonProfile from './CommonProfile'

function Profile() {
    const { currentUser } = useContext(AuthContext);
    console.log('i am in profile')
  return (
    <>
        <CommonProfile user={currentUser}/>
    </>
  )
}

export default Profile
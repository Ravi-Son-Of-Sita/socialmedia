import { createContext, useEffect, useState } from "react";
import {browserSessionPersistence,setPersistence,sendPasswordResetEmail,signInWithEmailAndPassword,createUserWithEmailAndPassword,sendEmailVerification,updateProfile,signOut,onAuthStateChanged} from "@firebase/auth";
import { auth } from "../firebase";
import ProfileCreate from "../database/profileDB";



export const AuthContext = createContext('');

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState('');
  const [error, setError] = useState(null)
  const signup =async (inputs) => {
    var displayname=inputs.fname+' ' + inputs.lname
   const res =await createUserWithEmailAndPassword(auth, inputs.email, inputs.password)
       await updateProfile(auth.currentUser,{displayName:displayname,photoURL:'https://firebasestorage.googleapis.com/v0/b/samyojak-connecting.appspot.com/o/default%2Fprofilepic.png?alt=media&token=f58f2c55-e01e-4f88-8168-15760dfbfcf2'})
      console.log('after upadte')
      sendEmailVerification(auth.currentUser)
      await ProfileCreate(auth.currentUser.uid,auth.currentUser.displayName,auth.currentUser.email)
      console.log('profile added')

      
  }
  const login = async (inputs) => {
    await setPersistence(auth,browserSessionPersistence)
      .then(()=>{
        return signInWithEmailAndPassword(auth,inputs.username,inputs.password)
      }).then((res)=>{
        setCurrentUser(res.user)
        console.log(currentUser)
      }).catch((error) => {
    // Handle Errors here.
    setError(error.code)
    const errorCode = error.code;
    const errorMessage = error.message;
  })
  };

  const logout = async (inputs) => {
    await signOut(auth)
    setCurrentUser(null)
  }

  const resetpassword = async (email)=>{
     await sendPasswordResetEmail(auth,email)
     console.log(email)
    
  }
 /* auth.onAuthStateChanged((user)=>{
    setCurrentUser(user)
  })*/


  return (
    <AuthContext.Provider value={{error,resetpassword,setCurrentUser,currentUser,signup ,login,logout}}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;

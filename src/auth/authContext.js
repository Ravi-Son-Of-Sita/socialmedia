import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import {sendPasswordResetEmail,signInWithEmailAndPassword,createUserWithEmailAndPassword,sendEmailVerification,updateProfile,signOut} from "@firebase/auth";
export const AuthContext = createContext('');

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("users")) || null
  );
  const signup =async (inputs) => {
    var displayname=inputs.fname+' ' + inputs.lname
   const res =await createUserWithEmailAndPassword(auth, inputs.email, inputs.password)
       updateProfile(auth.currentUser,{displayName:displayname,photoURL:'https://firebasestorage.googleapis.com/v0/b/samyojak-connecting.appspot.com/o/default%2Fprofilepic.png?alt=media&token=f58f2c55-e01e-4f88-8168-15760dfbfcf2'})
      console.log('after upadte')
      sendEmailVerification(auth.currentUser)

      
  }
  const login = async (inputs) => {
    const res = await signInWithEmailAndPassword(auth,inputs.username,inputs.password)
    ;

    setCurrentUser(res.user)
    console.log(currentUser)
  };

  /* const login = async () => {
    console.log('im in loging')
    setCurrentUser(true)
    console.log(currentUser)
  } */
  const logout = async (inputs) => {
    await signOut(auth)
    //setCurrentUser(null)
  }

  const resetpassword = async (email)=>{
     await sendPasswordResetEmail(auth,email)
     console.log(email)
    
  }


  useEffect(() => {
    //localStorage.setItem("user", JSON.stringify(currentUser));
    console.log('useEffect is working');
  },[currentUser]);


  return (
    <AuthContext.Provider value={{resetpassword,currentUser,signup ,login,logout}}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;

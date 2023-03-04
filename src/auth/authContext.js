import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "@firebase/auth";

export const AuthContext = createContext('');

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("users")) || null
  );
  const login = async (inputs) => {
    const res = await signInWithEmailAndPassword(auth,inputs.username,inputs.password);

    setCurrentUser(res.user.uid)
    console.log(currentUser)
  };

  /* const login = async () => {
    console.log('im in loging')
    setCurrentUser(true)
    console.log(currentUser)
  } */
  const logout = async (inputs) => {
    
    setCurrentUser(false)
  }


  useEffect(() => {
    //localStorage.setItem("user", JSON.stringify(currentUser));
    console.log('useEffect is working');
    console.log(currentUser)
  },[currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login,logout}}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;

import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext('');

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("users")) || true
  );
  /*const login=()=>{
    const inputs={username: 'ravi',
    password: '1234',}
  }*/

 const login = async () => {
  console.log('im here')
  
    setCurrentUser(true)
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;

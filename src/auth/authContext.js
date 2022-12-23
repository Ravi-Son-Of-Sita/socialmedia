import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext('');

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("users")) || false
  );
  /*const login = async (inputs) => {
    const res = await axios.post("http://localhost:8000/api/auth/login", inputs, {
      withCredentials: true,
    });

    setCurrentUser(res.data)
  };*/

  const login = async (inputs) => {
    
    setCurrentUser(true)
  }
  const logout = async (inputs) => {
    
    setCurrentUser(false)
  }


  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login,logout}}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;

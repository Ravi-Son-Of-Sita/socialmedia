import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  console.log("try ling fetch")
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("users")) || null
  );
  const login=()=>{
    const inputs={username: 'ravi',
    password: '1234',}
  }

 /* const login = async (inputs) => {
    const res = await axios.post("https://localhost:3001/users", inputs, {
      withCredentials: true,
    });

    setCurrentUser(res.data)
  };*/

  useEffect(() => {
    localStorage.setItem("user", currentUser/*JSON.stringify(currentUser)*/);
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};

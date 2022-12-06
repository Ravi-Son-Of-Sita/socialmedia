import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext('');

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("users")) || null
  );
  /*const login=()=>{
    const inputs={username: 'ravi',
    password: '1234',}
  }*/

 const login = async (inputs) => {
  console.log('im here')
  
    const res = await axios.post("http://localhost:3001/users", {inputs
    });
    console.log(res.json)

    setCurrentUser(res.json)
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

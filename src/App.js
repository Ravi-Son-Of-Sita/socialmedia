import './App.scss'
import HomePage from './pages/home/home';
import NavBar from './component/Navbar';
import LeftBar from './component/LeftBar';
import RightBar from './component/RightBar';
import { AuthContext } from './auth/authContext';
import {Navigate} from "react-router-dom"
import { useContext } from 'react';
import Login from './pages/login/login';

function App() {
  console.log('hi im here')
  const currentUser=false;
  //const { currentUser } = useContext(AuthContext);
  /*const Islogin = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };*/
  if (!currentUser) {
    
    return <Login/>;
  }
  
  return ( 
    //<Islogin>
    <div className='full-layout'>
      <NavBar/>
      <div className='layout-home'>
        <LeftBar/>
        <HomePage/>
        <RightBar/>
      </div>
    </div>
    //</Islogin>

  );
}

export default App;

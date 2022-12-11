import { useContext } from 'react';
import {RouterProvider} from "react-router-dom"


import './App.scss'
import "./assest/SAMARO__.woff"
import HomePage from './component/home';
import NavBar from './component/Navbar';
import LeftBar from './component/LeftBar';
import RightBar from './component/RightBar';
import { AuthContext } from './auth/authContext';
import { midRoute } from './routes/route';

import Login from './component/login';

function App() {
  const { currentUser } = useContext(AuthContext);
  const Islogin = ({ children }) => {

    if (!currentUser) {
    
      return <Login/>;
    }

    return children;
  };
  
  
  return ( 
    <Islogin>
    <div className='full-layout'>
      <NavBar className='navbar'/>
      <div className='layout-home'>
        <LeftBar className='leftbar'/>
        <RouterProvider router={midRoute} />
        <RightBar className='rightbar'/>
      </div>
    </div>
    </Islogin>

  );
}

export default App;

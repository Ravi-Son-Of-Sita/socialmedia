import { useContext } from 'react';
import {createBrowserRouter,RouterProvider,Navigate,Outlet} from "react-router-dom"


import './App.scss'
import "./assest/SAMARO__.woff"
import HomePage from './component/home';
import NavBar from './component/Navbar';
import LeftBar from './component/LeftBar';
import RightBar from './component/RightBar';
import { AuthContext } from './auth/authContext';
import Profile from "./component/Profile";
import Friends from "./component/Friends";
import Register from "./component/Register";
import ForgotPassword from "./component/ForgotPassword";

import Login from './component/Login';

function App() {
  const { currentUser } = useContext(AuthContext);
  const MainPage=()=>{
    return(
      <div className='full-layout'>
      <NavBar className='navbar'/>
      <div className='layout-home'>
        <LeftBar className='leftbar'/>
        <Outlet/>
        <RightBar className='rightbar'/>
      </div>
    </div>
    )
  }
  const Islogin = ({ children }) => {

    if (!currentUser) {
    
      return <Navigate to='/login'/>;
    }

    return children;
  };
  const route=createBrowserRouter([
    {
        path:'/',
        element:(
          <Islogin><MainPage/></Islogin>
        )
    ,
    children:[
        {
          path:'/',
          element:<HomePage/>
        },
        {
            path:'/profile',
            element:<Profile/>
    
        },
        {
            path:'/friends',
            element:<Friends/>
        }
    ]
    
  },
  {
      path:'/login',
      element:<Login/>
  },
  {
      path:'forgotpass',
      element:<ForgotPassword/>

  },
  {
      path:'register',
      element:<Register/>
  }
]);
  
  
  return ( 
    
    <div>
      <RouterProvider router={route} />
    </div>

  );
}

export default App;

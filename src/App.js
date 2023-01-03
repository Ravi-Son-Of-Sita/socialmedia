import { useContext } from 'react';
import {createHashRouter,createBrowserRouter,RouterProvider,Navigate,Outlet} from "react-router-dom"


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
      <Outlet/>
      
    </div>
    )
  }
  const HomePageCont=()=>{
    return(
      <div className='layout-home'>
        <LeftBar className='leftbar'/>
        <Outlet/>
        <RightBar className='rightbar'/>
      </div>
    )
  }
  const Islogin = ({ children }) => {

    if (!currentUser) {
      console.log('i am stuck')
      return <Navigate to='/login'/>;
    }
    console.log('i am out')

    return children;
  };
  const route=createHashRouter([
    { 
      
        path:'/',
        element:(
          <Islogin><MainPage/></Islogin>
        ),
    children:[
      {
        path:'/profile',
        element:<Profile/>,
      },
      {
        path:'/',
        element:<HomePageCont/>,
        children:[
          {
            path:'/',
            element:<HomePage/>,
          },
          {
              path:'/friends',
              element:<Friends/>
          },
        ]
      }, 
    
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

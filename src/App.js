import { useContext, useEffect } from 'react';
import {createHashRouter,createBrowserRouter,RouterProvider,Navigate,Outlet} from "react-router-dom"
import { auth } from './firebase';
import {useAuthState} from "react-firebase-hooks/auth"

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
import RegConf from './component/RegConf';



function App() {
  const { setCurrentUser } = useContext(AuthContext);
  const [user,loading,error]=useAuthState(auth)
  useEffect(()=>{
  },[user])
  console.log(user)

  const UserLogged = ({ children }) => {

    if (user) {
      console.log('i am stuck')
      return <Navigate to='/'/>;
    }
    console.log('i am out')

    return children;
  };

  const MainPage=()=>{
    return(
      <div className='full-layout'>
      <NavBar className='navbar'/>
      <Outlet/>
      
    </div>
    )
  }
  const EmailVerified=()=>{
    return(
      <>
      {
        !user.emailVerified?(
          <div>
      <span>
      Please verify your email
      </span>
      
      </div>
        ):(
          <MainPage/>
        )
      }
      </>
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

    if (!user) {
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
          <Islogin><EmailVerified/></Islogin>
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
      element:(
      <Login/>
      )
  },
  {
      path:'/forgotpass',
      element:<ForgotPassword/>

  },
  {
      path:'/register',
      element:<Register/>
  },
  {
    path:'/registertion_conform',
    element:<RegConf/>
  }
]);
  
  
  return ( 
    
    <div>
      <RouterProvider router={route} />
    </div>

  );
}


export default App;

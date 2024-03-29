import { useContext, useEffect,useLayoutEffect ,useState} from 'react';
import {createHashRouter,createBrowserRouter,RouterProvider,Navigate,Outlet} from "react-router-dom"
import { auth } from './firebase';
import {useAuthState} from "react-firebase-hooks/auth"
import {onAuthStateChanged}from'firebase/auth'
import './App.scss'
import "./assest/SAMARO__.woff"
import HomePage from './component/homepage/home';
import NavBar from './component/navbar/Navbar';
import LeftBar from './component/homepage/LeftBar';
import RightBar from './component/homepage/RightBar';
import { AuthContext } from './auth/authContext';
import Profile from "./component/profile/Profile";
import Friends from "./component/friends/Friends";
import Register from "./component/auth/Register";
import ForgotPassword from "./component/auth/ForgotPassword";
import Login from './component/auth/Login';
import RegConf from './component/auth/RegConf';
import ErrorPage from './component/extracompont/ErrorPage';
import Spinner from './component/extracompont/Spinner';




function App() {
  //const {currentUser,setCurrentUser,loading} = useContext(AuthContext);
  const [user,loading,error]=useAuthState(auth)

useEffect(() => {
  /**const onAuthChange=async()=>{
   onAuthStateChanged(auth,(user) =>setCurrentUser(user))
  }
   onAuthChange()**/
   console.log(loading)
}, [loading]);


  const MainPage=()=>{
    return(
      <div className='full-layout'>
      <NavBar className='navbar'/>
      <Outlet />
      
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
        ):(<>
            <MainPage/>
          </>
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
  const Islogin = () => {
    return(
      <>
      {loading?(<div style={{display:'flex', minWidth:'100vw',minHeight:'100vh',justifyContent:"center",alignItems:"center"}}><Spinner width={'30px'} height={'30px'} borderColor={'#ff7233'}/></div>):(!user?(<Login/>):(<EmailVerified/>))}
      </>

    )
  }
/**const Islogin = ({ children }) => {

    if (!user) {
      console.log('i am stuck')
      console.log(user)
      return <Login/>;
    }
    
    console.log('i am out')

    return children;
  };**/
  const route=createHashRouter([
    { 
        element:<Islogin/>,
        errorElement:<ErrorPage/>,
    children:[
      {
        path:'/profile',
        element:<Profile/>,
        errorElement:<ErrorPage/>,
      },
      {
        element:<HomePageCont/>,
        errorElement:<ErrorPage/>,
        children:[
          {
            path:'/',
            element:<HomePage/>,
            errorElement:<ErrorPage/>,
          },
        ]
      },
      {
        path:'/friends',
        element:<Friends/>,
        errorElement:<ErrorPage/>,
    },   
  ]
    },
  {
      path:'/login',
      element:<Login/>,
      errorElement:<ErrorPage/>,
  },
  {
      path:'/forgotpass',
      element:<ForgotPassword/>,
      errorElement:<ErrorPage/>,

  },
  {
      path:'/register',
      element:<Register/>,
      errorElement:<ErrorPage/>,
  },
  {
    path:'/registertion_conform',
    element:<RegConf/>,
    errorElement:<ErrorPage/>,
  }
]);
  
  
  return ( 
    
    <div>
      <RouterProvider router={route} fallbackElement={<Spinner/>}/>
    </div>

  );
}
export default App;

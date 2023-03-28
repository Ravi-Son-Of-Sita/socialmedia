import { useContext, useEffect,useLayoutEffect ,useState} from 'react';
import {createHashRouter,createBrowserRouter,RouterProvider,Navigate,Outlet} from "react-router-dom"
import { auth } from './firebase';
import {useAuthState} from "react-firebase-hooks/auth"
import {onAuthStateChanged}from'firebase/auth'
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
import ErrorPage from './extracompont/ErrorPage';
import Spinner from './extracompont/Spinner';




function App() {
  const {currentUser,setCurrentUser} = useContext(AuthContext);
  //const [user,loading,error]=useAuthState(auth)
  const [loading,setLoading] =useState(true)
  useLayoutEffect(() => {
  onAuthStateChanged(auth, async(user) =>await setCurrentUser(user))
  setLoading(false)
}, []);


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
        !currentUser.emailVerified?(
          <div>
      <span>
      Please verify your email
      </span>
      
      </div>
        ):(<>
            {!loading?(<MainPage/>):(<Spinner/>)}
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
  const Islogin = ({ children }) => {

    if (!currentUser) {
      console.log('i am stuck')
      console.log(currentUser)
      return <Login/>;
    }
    
    console.log('i am out')

    return children;
  };
  const route=createHashRouter([
    { 
        element:(
          <Islogin><EmailVerified/></Islogin>
        ),
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

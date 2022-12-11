import { createBrowserRouter } from "react-router-dom";
import HomePage from "../component/home";
import Profile from "../component/Profile";
import Friends from "../component/Friends";

export const midRoute=createBrowserRouter([
    {
        path:'/',
        element:<HomePage/>
    },
    {
        path:'profile',
        element:<Profile/>

    },
    {
        path:'friends',
        element:<Friends/>
    }
])
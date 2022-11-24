import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard";
import MainLayout from "../layout/MainLayout";
import Blog from "../pages/Blog/Blog";
import Myorder from "../pages/Dashboard/MyOrder/Myorder";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    },
    {
        path:'/dashboard',
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:'/dashboard',
                element:<Myorder></Myorder>
            }
        ]
    }
])


export default router;
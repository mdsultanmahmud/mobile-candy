import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard";
import MainLayout from "../layout/MainLayout";
import Blog from "../pages/Blog/Blog";
import AddProducts from "../pages/Dashboard/AddProducts/AddProducts";
import AllBuyer from "../pages/Dashboard/AllBuyer/AllBuyer";
import AllSeller from "../pages/Dashboard/AllSeller/AllSeller";
import Myorder from "../pages/Dashboard/MyOrder/Myorder";
import MyProducts from "../pages/Dashboard/MyProducts/MyProducts";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Products from "../pages/Products/Products";
import Register from "../pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";

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
            },
            {
                path:'/categories/:id',
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`),
                element:<PrivateRoutes><Products></Products></PrivateRoutes>
            }
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children:[
            {
                path:'/dashboard',
                element:<Myorder></Myorder>
            },
            {
                path:'/dashboard/addProducts',
                element: <AddProducts></AddProducts>
            },
            {
                path:'/dashboard/myProducts',
                element:<MyProducts></MyProducts>
            },
            {
                path:'/dashboard/allsellers',
                element:<AllSeller></AllSeller>
            },
            {
                path:'/dashboard/allbuyers',
                element:<AllBuyer></AllBuyer>
            }
        ]
    }
])


export default router;
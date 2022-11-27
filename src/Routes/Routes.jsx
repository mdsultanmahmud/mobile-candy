import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard";
import MainLayout from "../layout/MainLayout";
import Blog from "../pages/Blog/Blog";
import AddProducts from "../pages/Dashboard/AddProducts/AddProducts";
import AllBuyer from "../pages/Dashboard/AllBuyer/AllBuyer";
import AllSeller from "../pages/Dashboard/AllSeller/AllSeller";
import Myorder from "../pages/Dashboard/MyOrder/Myorder";
import MyProducts from "../pages/Dashboard/MyProducts/MyProducts";
import Payment from "../pages/Dashboard/Payment/Payment";
import ReportedItem from "../pages/Dashboard/ReportedItem/ReportedItem";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Products from "../pages/Products/Products";
import Register from "../pages/Register/Register";
import AdminRoutes from "./AdminRoutes";
import PrivateRoutes from "./PrivateRoutes";
import SellerRoutes from "./SellerRoutes";
const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/categories/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`),
                element: <PrivateRoutes><Products></Products></PrivateRoutes>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children: [
            {
                path: '/dashboard',
                element:<Myorder></Myorder>

            },
            {
                path: '/dashboard/addProducts',
                element: <SellerRoutes><AddProducts></AddProducts></SellerRoutes>
            },
            {
                path: '/dashboard/myProducts',
                element: <SellerRoutes><MyProducts></MyProducts></SellerRoutes>
            },
            {
                path: '/dashboard/allsellers',
                element: <AdminRoutes><AllSeller></AllSeller></AdminRoutes>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AdminRoutes><AllBuyer></AllBuyer></AdminRoutes>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({params}) => fetch(`http://localhost:5000/booking/${params.id}`)
            },
            {
                path: '/dashboard/reported',
                element: <AdminRoutes><ReportedItem></ReportedItem></AdminRoutes>
            }
        ]
    }
])


export default router;
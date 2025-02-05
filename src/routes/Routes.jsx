import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

export const router = createBrowserRouter([
    {
    path: '/',
    element: <MainLayout/>,
    children:[
        {
            path: '/',
            element: <Home/>
        },
        {
            path: 'menu',
            element: <Menu/>
        },
        {
            path: 'order/:category',
            element: <Order/>
        },
    
        {
            path: 'login',
            element: <Login/>
        },
        {
            path: 'register',
            element: <Register/>
        },
    ]


}
])
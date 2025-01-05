import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home/Home";

export const router = createBrowserRouter([
    {
    path: '/',
    element: <MainLayout/>,
    children:[
        {
            path: '/',
            element: <Home/>
        }
    ]


}
])
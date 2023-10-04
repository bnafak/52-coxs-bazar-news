import { createBrowserRouter } from "react-router-dom";
import Root from "./src/layouts/Root";
import Home from "./src/pages/Home/Home";
import Login from "./src/pages/Login/Login";
import News from "./src/pages/News/News";
import Register from "./src/pages/Register/Register";


const router = createBrowserRouter([
    {
        path: '/',
        element:<Root></Root>,
        children:[
            {
            path:'/',
            element:<Home></Home>,
            loader:()=> fetch('news.json')
            },
            {
                path:'/news/:id',
                element:<News></News>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
]);
export default router;
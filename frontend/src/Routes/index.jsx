import { createBrowserRouter } from 'react-router-dom'
import Home from "../Pages/Home/Home"
import Root from "../Layout/Root"
import SignUp from "../Pages/SignUp/SignUp"
import Login from '../Pages/Login/Login'
import RegisterOK from '../Pages/RegisterOK/RegisterOK'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [
            {
                path: '',
                element: <Home/>,
            },
            {
                path: '/signup',
                element: <SignUp/>,
            },
            {
                path: '/login',
                element: <Login/>,
            },
            {
                path: '/signedup',
                element: <RegisterOK/>,
            },
        ],
    },
])

export default router;
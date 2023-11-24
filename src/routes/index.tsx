import { createBrowserRouter } from 'react-router-dom'
import Home from "../pages/home/Home"
import NotFound from '../pages/not-found'
import Perfil from '../pages/perfil'
import Sobre from '../pages/sobre'
import Login from '../pages/login'
import Register from '../pages/register'
import Ongs from '../pages/ongs'
  
const router = createBrowserRouter([
{path: '/', element: <Login />, errorElement: <NotFound />},
{path: '/cadastro', element: <Register />, errorElement: <NotFound />},
{path: '/ongs', element: <Ongs />, errorElement: <NotFound />},
{path: '/home', element: <Home />, errorElement: <NotFound />},
{path: '/sobre', element: <Sobre />},
{path: '/perfil', element: <Perfil />},
])

export default router
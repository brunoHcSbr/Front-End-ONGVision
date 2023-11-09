import { createBrowserRouter } from 'react-router-dom'
import Home from "../pages/home/Home"
import NotFound from '../pages/not-found'
import Perfil from '../pages/perfil'
import Sobre from '../pages/sobre'
import Tarefas from '../pages/tarefas'
import Login from '../pages/login'
  
const router = createBrowserRouter([
{path: '/', element: <Login />, errorElement: <NotFound />},
{path: '/home', element: <Home />, errorElement: <NotFound />},
{path: '/sobre', element: <Sobre />},
{path: '/perfil', element: <Perfil />},
{path: '/tarefas', element: <Tarefas />}
])

export default router
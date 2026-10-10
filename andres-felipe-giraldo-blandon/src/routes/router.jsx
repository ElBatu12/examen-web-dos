import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout'
import Inicio from '../pages/Inicio'
import Catalogo from '../pages/Catalogo'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Inicio /> },
      { path: 'catalogo', element: <Catalogo /> },
    ],
  },
])

import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout'
import Inicio from '../pages/Inicio'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Inicio /> },
    ],
  },
])

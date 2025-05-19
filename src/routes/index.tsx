import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '@/components/layout/mainLayout'
import Crypto from '@/pages/Crypto'
import CryptoDetail from '@/pages/CryptoDetail'
import Markets from '@/pages/Markets'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Crypto />,
      },
      {
        path: 'crypto',
        element: <Crypto />,
      },
      {
        path: 'markets',
        element: <Markets />,
      },
      {
        path: 'crypto/:id',
        element: <CryptoDetail />,
      },
    ],
  },
])

export default router

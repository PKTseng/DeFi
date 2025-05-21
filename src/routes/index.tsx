import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '@/components/layout/mainLayout'
import Crypto from '@/pages/Crypto'
import CryptoDetail from '@/pages/CryptoDetail'
import Markets from '@/pages/Market/index'
import Global from '@/pages/Global'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Markets />,
      },
      {
        path: 'markets',
        element: <Markets />,
      },
      {
        path: 'global',
        element: <Global />,
      },
      {
        path: 'crypto',
        element: <Crypto />,
      },
      {
        path: 'crypto/:id',
        element: <CryptoDetail />,
      },
    ],
  },
])

export default router

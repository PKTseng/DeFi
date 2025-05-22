import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '@/components/layout/mainLayout'
import Crypto from '@/pages/Crypto'
import CryptoDetail from '@/pages/CryptoDetail'
import Markets from '@/pages/Market/index'
import Portfolio from '@/pages/Portfolio/index'
import WatchList from '@/pages/WatchList/index'
import Coins from '@/pages/Coins/index'
import DetailCoins from '@/pages/DetailCoins/index'

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
        path: 'coins',
        element: <Coins />,
      },
      {
        path: 'coins/:id',
        element: <DetailCoins />,
      },
      {
        path: 'portfolio',
        element: <Portfolio />,
      },
      {
        path: 'watchList',
        element: <WatchList />,
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

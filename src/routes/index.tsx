import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '@/components/layout/mainLayout'
import Markets from '@/pages/Market/index'
import Coins from '@/pages/Coins/index'
import DetailCoins from '@/pages/DetailCoins/index'
import Trending from '@/pages/Trending/index'
import Exchanges from '@/pages/Exchanges/index'
import Nfts from '@/pages/Nfts/index'
import NftsDetail from '@/pages/NftsDetail/index'

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
        path: 'market',
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
        path: 'trending',
        element: <Trending />,
      },
      {
        path: 'exchanges',
        element: <Exchanges />,
      },
      {
        path: 'nfts',
        element: <Nfts />,
      },
      {
        path: 'nftsDetail/:id',
        element: <NftsDetail />,
      },
    ],
  },
])

export default router

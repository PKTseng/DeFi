import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '@/components/layout/mainLayout'
import Markets from '@/pages/Market/index'
import Trending from '@/pages/Trending/index'
import TrendingCoinDetail from '@/pages/Trending/CoinDetail/index'
import TrendingNftDetail from '@/pages/Trending/NftDetail/index'
import TrendingCategoryDetail from '@/pages/Trending/CategoryDetail/index'
import Exchanges from '@/pages/Exchanges/index'
import ExchangeDetail from '@/pages/Exchanges/Detail/index'
import Nfts from '@/pages/Nfts/index'
import NftsDetail from '@/pages/Nfts/Detail/index'

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
        path: 'trending',
        element: <Trending />,
      },
      {
        path: 'trending/coin/:id',
        element: <TrendingCoinDetail />,
      },
      {
        path: 'trending/nft/:id',
        element: <TrendingNftDetail />,
      },
      {
        path: 'trending/category/:id',
        element: <TrendingCategoryDetail />,
      },
      {
        path: 'exchanges',
        element: <Exchanges />,
      },
      {
        path: 'exchanges/:id',
        element: <ExchangeDetail />,
      },
      {
        path: 'nfts',
        element: <Nfts />,
      },
      {
        path: 'nfts/:id',
        element: <NftsDetail />,
      },
    ],
  },
])

export default router

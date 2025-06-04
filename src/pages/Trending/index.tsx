import { useQuery } from '@tanstack/react-query'
import { getTrendingSearchList } from '@/api/trending'
import TrendingCoins from './components/TrendingCoins'
import TrendingNFTs from './components/TrendingNFTs'
import TrendingCategories from './components/TrendingCategories'
import { trendingData as data } from '@/mock/trending/trending'

function Trending() {
  // const { data, isLoading, error } = useQuery({
  //   queryKey: ['trendingSearchList'],
  //   queryFn: getTrendingSearchList,
  // })

  // if (isLoading) {
  //   return <div>Loading...</div>
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>
  // }

  // if (!data) {
  //   return <div>暫無資料</div>
  // }

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-12">
      <TrendingCoins coins={data.coins} />
      <TrendingNFTs nfts={data.nfts} />
      <TrendingCategories categories={data.categories} />
    </div>
  )
}

export default Trending

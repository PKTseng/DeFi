import { CoinMarketOverview } from '@/pages/Market/components/overview'
import { CoinMarketTable } from '@/pages/Market/components/table'
import { CoinMarketStats } from '@/pages/Market/components/stats'
import { CoinMarketChart } from '@/pages/Market/components/chart'
import { useQuery } from '@tanstack/react-query'
import { getGlobalList } from '@/api/global'
import type { GlobalList } from '@/types/global'

export default function Home() {
  const { data, isLoading, error } = useQuery<GlobalList>({
    queryKey: ['globalList'],
    queryFn: getGlobalList,
  })

  // 處理加載狀態
  if (isLoading) {
    return <div>正在加載用戶資料...</div>
  }

  // 處理錯誤
  if (error) {
    return <div>獲取資料時發生錯誤: {(error as Error).message}</div>
  }

  // 確保 data 存在
  if (!data || !data.data) {
    return <div>沒有獲取到數據</div>
  }

  console.log(data)

  return (
    <main className="min-h-screen bg-[#171924] text-white">
      <div className="container mx-auto px-4 py-8">
        <CoinMarketOverview data={data.data} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-2">
            <CoinMarketTable data={data.data} />
          </div>
          <div className="space-y-6">
            <CoinMarketStats data={data.data} />
            <CoinMarketChart data={data.data} />
          </div>
        </div>
      </div>
    </main>
  )
}

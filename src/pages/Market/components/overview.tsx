import { ArrowDown, ArrowUp, Coins, DollarSign, Globe, TrendingUp, Clock, BarChart3 } from 'lucide-react'
import { formatNumber } from '@/utils/helper'
// import { useQuery } from '@tanstack/react-query'
// import { getGlobalList } from '@/api/global'
// import type { GlobalList } from '@/types/global'
import { globalList as data } from '@/mock/global/global'

export function CoinMarketOverview() {
  // const { data, isLoading, error } = useQuery<GlobalList>({
  //   queryKey: ['globalList'],
  //   queryFn: getGlobalList,
  // })

  // // 處理加載狀態
  // if (isLoading) {
  //   return <div>正在加載用戶資料...</div>
  // }

  // // 處理錯誤
  // if (error) {
  //   return <div>獲取資料時發生錯誤: {(error as Error).message}</div>
  // }

  // // 確保 data 存在
  // if (!data || !data.data) {
  //   return <div>沒有獲取到數據</div>
  // }

  const marketCapChangePositive = data.data.market_cap_change_percentage_24h_usd > 0

  return (
    <div className="rounded-xl">
      <h1 className="mb-4 text-4xl font-bold">加密貨幣市場總覽</h1>
      <div className="flex items-center gap-2 mt-2 mb-4">
        <Clock className="w-4 h-4 text-green-400" />
        <span className="text-sm text-green-400">即時更新</span>
        <span className="text-xs text-gray-500">• 最後更新: {new Date().toLocaleTimeString('zh-TW')}</span>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
        <div className="rounded-lg bg-gray-800 p-4 border border-gray-700 hover:border-purple-500 transition-colors">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <div className="p-2 bg-purple-500/20 rounded-lg">
              <Coins className="h-6 w-6 text-purple-400" />
            </div>
            <span>加密貨幣數量</span>
          </div>
          <p className="mt-2 text-xl font-bold">{formatNumber(data.data.active_cryptocurrencies)}</p>
        </div>

        <div className="rounded-lg bg-gray-800 p-4 border border-gray-700 hover:border-cyan-500 transition-colors">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <div className="p-2 bg-cyan-500/20 rounded-lg">
              <Globe className="h-6 w-6 text-cyan-400" />
            </div>
            <span>市場數量</span>
          </div>
          <p className="mt-2 text-xl font-bold">{formatNumber(data.data.markets)}</p>
        </div>

        <div className="rounded-lg bg-gray-800 p-4 border border-gray-700 hover:border-blue-500 transition-colors">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <DollarSign className="w-6 h-6 text-blue-400" />
            </div>
            <span>總市值</span>
          </div>
          <p className="mt-2 text-xl font-bold">${formatNumber(data.data.total_market_cap.usd)}</p>
        </div>

        <div className="rounded-lg bg-gray-800 p-4 border border-gray-700 hover:border-green-500 transition-colors">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <div className="p-2 bg-green-500/20 rounded-lg">
              <TrendingUp className="h-6 w-6  text-green-400" />
            </div>
            <span>24小時成交量</span>
          </div>
          <p className="mt-2 text-xl font-bold">${formatNumber(data.data.total_volume.usd)}</p>
        </div>

        <div className="rounded-lg bg-gray-800 p-4 border border-gray-700 hover:border-yellow-500 transition-colors">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <div className="p-2 bg-yellow-500/20 rounded-lg">
              <BarChart3 className="w-6 h-6 text-yellow-400" />
            </div>
            <span>24小時市值變化</span>
          </div>
          <p
            className={`mt-2 flex items-center text-xl font-bold ${
              marketCapChangePositive ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {marketCapChangePositive ? <ArrowUp className="mr-1 h-6 w-6" /> : <ArrowDown className="mr-1 h-6 w-6" />}
            {data.data.market_cap_change_percentage_24h_usd.toFixed(2)}%
          </p>
        </div>
      </div>
    </div>
  )
}

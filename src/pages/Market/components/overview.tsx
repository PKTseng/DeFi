
import { formatNumber } from '@/utils/helper'
// import { useQuery } from '@tanstack/react-query'
// import { getGlobalList } from '@/api/global'
// import type { GlobalList } from '@/types/global'
import { globalList as data } from '@/mock/global/global'
import Title from '@/components/Title'

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
      <Title>加密貨幣市場總覽</Title>
      <div className="flex items-center gap-2 mt-2 mb-4">
        <span className="text-sm text-[#8dc647]">即時更新</span>
        <span className="text-xs text-gray-500">• 最後更新: {new Date().toLocaleTimeString('zh-TW')}</span>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
        <div className="rounded-lg bg-gray-800 p-4 border border-gray-700 hover:border-[#8dc647] transition-colors">
          <div className="text-sm text-gray-400 mb-1">加密貨幣數量</div>
          <p className="mt-2 text-xl font-bold text-white">{formatNumber(data.data.active_cryptocurrencies)}</p>
        </div>

        <div className="rounded-lg bg-gray-800 p-4 border border-gray-700 hover:border-[#8dc647] transition-colors">
          <div className="text-sm text-gray-400 mb-1">市場數量</div>
          <p className="mt-2 text-xl font-bold text-white">{formatNumber(data.data.markets)}</p>
        </div>

        <div className="rounded-lg bg-gray-800 p-4 border border-gray-700 hover:border-[#8dc647] transition-colors">
          <div className="text-sm text-gray-400 mb-1">總市值</div>
          <p className="mt-2 text-xl font-bold text-white">${formatNumber(data.data.total_market_cap.usd)}</p>
        </div>

        <div className="rounded-lg bg-gray-800 p-4 border border-gray-700 hover:border-[#8dc647] transition-colors">
          <div className="text-sm text-gray-400 mb-1">24小時成交量</div>
          <p className="mt-2 text-xl font-bold text-white">${formatNumber(data.data.total_volume.usd)}</p>
        </div>

        <div className="rounded-lg bg-gray-800 p-4 border border-gray-700 hover:border-[#8dc647] transition-colors">
          <div className="text-sm text-gray-400 mb-1">24小時市值變化</div>
          <p
            className={`mt-2 text-xl font-bold ${
              marketCapChangePositive ? 'text-[#8dc647]' : 'text-red-500'
            }`}
          >
            {data.data.market_cap_change_percentage_24h_usd.toFixed(2)}%
          </p>
        </div>
      </div>
    </div>
  )
}

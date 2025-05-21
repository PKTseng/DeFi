import { ArrowDown, ArrowUp, Coins, DollarSign, Globe, TrendingUp } from 'lucide-react'
import type { GlobalListData } from '@/types/global'
import { formatNumber } from '@/utils/helper'

export function CoinMarketOverview({ data }: { data: GlobalListData }) {
  const marketCapChangePositive = data.market_cap_change_percentage_24h_usd > 0

  return (
    <div className="rounded-xl bg-[#222531] p-6">
      <h2 className="mb-4 text-xl font-bold">Market Overview</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
        <div className="rounded-lg bg-[#2c2f3b] p-4">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Coins className="h-4 w-4" />
            <span>Cryptocurrencies</span>
          </div>
          <p className="mt-2 text-xl font-bold">{formatNumber(data.active_cryptocurrencies)}</p>
        </div>
        <div className="rounded-lg bg-[#2c2f3b] p-4">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Globe className="h-4 w-4" />
            <span>Markets</span>
          </div>
          <p className="mt-2 text-xl font-bold">{formatNumber(data.markets)}</p>
        </div>
        <div className="rounded-lg bg-[#2c2f3b] p-4">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <DollarSign className="h-4 w-4" />
            <span>Market Cap</span>
          </div>
          <p className="mt-2 text-xl font-bold">${formatNumber(data.total_market_cap.usd)}</p>
        </div>
        <div className="rounded-lg bg-[#2c2f3b] p-4">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <TrendingUp className="h-4 w-4" />
            <span>24h Volume</span>
          </div>
          <p className="mt-2 text-xl font-bold">${formatNumber(data.total_volume.usd)}</p>
        </div>
        <div className="rounded-lg bg-[#2c2f3b] p-4">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>24h Change</span>
          </div>
          <p
            className={`mt-2 flex items-center text-xl font-bold ${
              marketCapChangePositive ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {marketCapChangePositive ? <ArrowUp className="mr-1 h-4 w-4" /> : <ArrowDown className="mr-1 h-4 w-4" />}
            {data.market_cap_change_percentage_24h_usd.toFixed(2)}%
          </p>
        </div>
      </div>
    </div>
  )
}

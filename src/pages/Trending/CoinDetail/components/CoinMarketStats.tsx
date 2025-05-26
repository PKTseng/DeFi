import React from 'react'

interface CoinMarketStatsProps {
  marketCap?: number
  totalVolume?: number
  circulatingSupply?: number
  totalSupply?: number
  symbol: string
  formatPrice: (price: number | undefined | null, currency?: string) => string
}

const CoinMarketStats: React.FC<CoinMarketStatsProps> = ({
  marketCap,
  totalVolume,
  circulatingSupply,
  totalSupply,
  symbol,
  formatPrice,
}) => (
  <div className="bg-gray-800 p-6 rounded-2xl shadow-xl">
    <h2 className="text-2xl font-bold text-[#8dc647] mb-4">市值資訊</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
      <div className="flex justify-between py-2 border-b border-gray-700/50">
        <span className="text-sm text-gray-400">市值 (USD):</span>
        <span className="text-sm font-semibold text-white">{formatPrice(marketCap)}</span>
      </div>
      <div className="flex justify-between py-2 border-b border-gray-700/50">
        <span className="text-sm text-gray-400">24h 交易量 (USD):</span>
        <span className="text-sm font-semibold text-white">{formatPrice(totalVolume)}</span>
      </div>
      <div className="flex justify-between py-2 border-b border-gray-700/50">
        <span className="text-sm text-gray-400">流通供給:</span>
        <span className="text-sm font-semibold text-white">
          {circulatingSupply?.toLocaleString() ?? 'N/A'} {symbol.toUpperCase()}
        </span>
      </div>
      <div className="flex justify-between py-2 border-b border-gray-700/50">
        <span className="text-sm text-gray-400">總供給:</span>
        <span className="text-sm font-semibold text-white">
          {totalSupply ? `${totalSupply.toLocaleString()} ${symbol.toUpperCase()}` : 'N/A'}
        </span>
      </div>
    </div>
  </div>
)

export default CoinMarketStats

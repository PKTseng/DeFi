import React from 'react'

interface CoinPriceInfoProps {
  currentPrice?: number
  priceChange24h?: number
  ath?: number
  atl?: number
  priceChangePercentages: { label: string; value?: number }[]
  formatPrice: (price: number | undefined | null, currency?: string) => string
  formatPercentage: (percentage: number | undefined | null) => React.ReactNode
}

const CoinPriceInfo: React.FC<CoinPriceInfoProps> = ({
  currentPrice,
  priceChange24h,
  ath,
  atl,
  priceChangePercentages,
  formatPrice,
  formatPercentage,
}) => (
  <div className="bg-gray-800 p-6 rounded-2xl shadow-xl">
    <h2 className="text-2xl font-bold text-[#8dc647] mb-4">價格資訊</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div>
        <p className="text-sm text-gray-400">現價 (USD)</p>
        <p className="text-3xl font-bold text-white">{formatPrice(currentPrice)}</p>
      </div>
      <div>
        <p className="text-sm text-gray-400">24h 漲跌幅</p>
        <p className="text-xl font-semibold">{formatPercentage(priceChange24h)}</p>
      </div>
      <div>
        <p className="text-sm text-gray-400">歷史最高 (USD)</p>
        <p className="text-xl text-white">{formatPrice(ath)}</p>
      </div>
      <div>
        <p className="text-sm text-gray-400">歷史最低 (USD)</p>
        <p className="text-xl text-white">{formatPrice(atl)}</p>
      </div>
    </div>
    <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
      {priceChangePercentages.map((item) => (
        <div key={item.label} className="bg-gray-700/50 p-3 rounded-lg">
          <p className="text-xs text-gray-400">{item.label} 漲跌</p>
          <p className="text-sm font-semibold">{formatPercentage(item.value)}</p>
        </div>
      ))}
    </div>
  </div>
)

export default CoinPriceInfo

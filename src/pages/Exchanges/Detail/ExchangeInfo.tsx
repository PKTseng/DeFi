import React from 'react'

interface Props {
  trade_volume_24h_btc_normalized: number
  coins: number
  pairs: number
  centralized: boolean
}

const ExchangeInfo: React.FC<Props> = ({ trade_volume_24h_btc_normalized, coins, pairs, centralized }) => (
  <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
    <h3 className="text-xl font-bold text-[#8dc647] mb-4">交易資訊</h3>
    <div className="space-y-4">
      <div className="flex justify-between items-center py-2 border-b border-gray-700">
        <span className="text-gray-400">正規化交易量</span>
        <span className="text-white font-mono">
          {trade_volume_24h_btc_normalized.toLocaleString(undefined, { maximumFractionDigits: 2 })} BTC
        </span>
      </div>
      <div className="flex justify-between items-center py-2 border-b border-gray-700">
        <span className="text-gray-400">支援幣種</span>
        <span className="text-white font-bold">{coins}</span>
      </div>
      <div className="flex justify-between items-center py-2 border-b border-gray-700">
        <span className="text-gray-400">交易對數量</span>
        <span className="text-white font-bold">{pairs}</span>
      </div>
      <div className="flex justify-between items-center py-2">
        <span className="text-gray-400">交易所類型</span>
        <span
          className={`px-2 py-1 rounded text-xs font-semibold ${
            centralized ? 'bg-blue-500/20 text-blue-300' : 'bg-purple-500/20 text-purple-300'
          }`}
        >
          {centralized ? '中心化' : '去中心化'}
        </span>
      </div>
    </div>
  </div>
)

export default ExchangeInfo

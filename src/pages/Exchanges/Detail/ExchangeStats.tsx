import React from 'react'
import { CheckCircle, TrendingUp, Users } from 'lucide-react'

interface Props {
  trust_score: number
  trust_score_rank: number
  trade_volume_24h_btc: number
  coins: number
  pairs: number
  getTrustScoreColor: (score: number) => string
}

const ExchangeStats: React.FC<Props> = ({
  trust_score,
  trust_score_rank,
  trade_volume_24h_btc,
  coins,
  pairs,
  getTrustScoreColor,
}) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
    {/* 信任分數卡片 */}
    <div className="bg-gradient-to-br from-green-900/60 to-gray-800 p-6 rounded-2xl shadow-xl flex flex-col justify-between h-full border border-green-700/30">
      <div className="flex items-center justify-between mb-2">
        <span className="text-gray-400 text-sm font-medium">信任分數</span>
        <span className="text-xs bg-green-700/20 text-green-300 px-2 py-0.5 rounded-full font-semibold">Trust</span>
      </div>
      <div className="flex items-center gap-3 mt-2">
        <span className={`text-4xl font-extrabold ${getTrustScoreColor(trust_score)}`}>{trust_score}</span>
        <span className="text-lg text-gray-400 font-bold">/10</span>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <CheckCircle className="text-green-400" size={22} />
        <span className="text-gray-300 text-xs">
          排名 <span className="font-bold text-green-300">#{trust_score_rank}</span>
        </span>
      </div>
    </div>
    {/* 24h 交易量卡片 */}
    <div className="bg-gradient-to-br from-lime-900/60 to-gray-800 p-6 rounded-2xl shadow-xl flex flex-col justify-between h-full border border-lime-700/30">
      <div className="flex items-center justify-between mb-2">
        <span className="text-gray-400 text-sm font-medium">24h 交易量</span>
        <span className="text-xs bg-lime-700/20 text-lime-300 px-2 py-0.5 rounded-full font-semibold">Volume</span>
      </div>
      <div className="flex items-end gap-2 mt-2">
        <span className="text-4xl font-extrabold text-[#8dc647]">
          {trade_volume_24h_btc.toLocaleString(undefined, { maximumFractionDigits: 2 })}
        </span>
        <span className="text-base text-gray-400 font-bold mb-1">BTC</span>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <TrendingUp className="text-[#8dc647]" size={22} />
        <span className="text-gray-300 text-xs">24小時內</span>
      </div>
    </div>
    {/* 幣種/交易對卡片 */}
    <div className="bg-gradient-to-br from-blue-900/60 to-gray-800 p-6 rounded-2xl shadow-xl flex flex-col justify-between h-full border border-blue-700/30">
      <div className="flex items-center justify-between mb-2">
        <span className="text-gray-400 text-sm font-medium">支援幣種/交易對</span>
        <span className="text-xs bg-blue-700/20 text-blue-300 px-2 py-0.5 rounded-full font-semibold">Markets</span>
      </div>
      <div className="flex items-end gap-2 mt-2">
        <span className="text-4xl font-extrabold text-blue-400">{coins}</span>
        <span className="text-base text-gray-400 font-bold mb-1">幣種</span>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Users className="text-blue-400" size={22} />
        <span className="text-gray-300 text-xs">{pairs} 交易對</span>
      </div>
    </div>
  </div>
)

export default ExchangeStats

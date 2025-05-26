import React from 'react'
import { Building2, Globe } from 'lucide-react'

interface Props {
  image: string
  name: string
  year_established?: number
  country?: string
  centralized: boolean
  has_trading_incentive?: boolean
}

const ExchangeHeader: React.FC<Props> = ({
  image,
  name,
  year_established,
  country,
  centralized,
  has_trading_incentive,
}) => (
  <div className="flex items-center gap-4">
    <img src={image} alt={name} className="w-20 h-20 rounded-full border-4 border-[#8dc647] shadow-lg" />
    <div>
      <h1 className="text-4xl font-bold text-white mb-2">{name}</h1>
      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400">
        {year_established && (
          <span className="flex items-center gap-1">
            <Building2 size={16} />
            成立於 {year_established}
          </span>
        )}
        {country && (
          <span className="flex items-center gap-1">
            <Globe size={16} />
            {country}
          </span>
        )}
        <span
          className={`px-2 py-1 rounded-full text-xs font-semibold ${
            centralized ? 'bg-blue-500/20 text-blue-300' : 'bg-purple-500/20 text-purple-300'
          }`}
        >
          {centralized ? '中心化交易所' : '去中心化交易所'}
        </span>
        {has_trading_incentive && (
          <span className="px-2 py-1 rounded-full text-xs font-semibold bg-orange-500/20 text-orange-300">
            交易獎勵
          </span>
        )}
      </div>
    </div>
  </div>
)

export default ExchangeHeader

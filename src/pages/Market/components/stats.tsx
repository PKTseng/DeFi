import type { GlobalListData } from '@/types/global'
import { formatNumber } from '@/utils/helper'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useState } from 'react'

export function CoinMarketStats({ data }: { data: GlobalListData }) {
  const [currency, setCurrency] = useState('usd')

  const currencies = [
    { value: 'usd', label: 'USD', symbol: '$' },
    { value: 'eur', label: 'EUR', symbol: '€' },
    { value: 'gbp', label: 'GBP', symbol: '£' },
    { value: 'btc', label: 'BTC', symbol: '₿' },
    { value: 'eth', label: 'ETH', symbol: 'Ξ' },
  ]

  const selectedCurrency = currencies.find((c) => c.value === currency) || currencies[0]

  return (
    <div className="rounded-xl bg-[#222531] p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Market Stats</h2>
        <Select value={currency} onValueChange={setCurrency}>
          <SelectTrigger className="w-24 h-8 bg-[#2c2f3b] border-0 text-sm">
            <SelectValue placeholder="Currency" />
          </SelectTrigger>
          <SelectContent className="bg-[#2c2f3b] border-[#3a3f50]">
            {currencies.map((c) => (
              <SelectItem key={c.value} value={c.value} className="text-sm">
                {c.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center border-b border-[#2c2f3b] pb-3">
          <span className="text-sm text-gray-400">Market Cap</span>
          <span className="font-medium">
            {selectedCurrency.symbol}
            {formatNumber(data.total_market_cap[currency])}
          </span>
        </div>

        <div className="flex justify-between items-center border-b border-[#2c2f3b] pb-3">
          <span className="text-sm text-gray-400">24h Volume</span>
          <span className="font-medium">
            {selectedCurrency.symbol}
            {formatNumber(data.total_volume[currency])}
          </span>
        </div>

        <div className="flex justify-between items-center border-b border-[#2c2f3b] pb-3">
          <span className="text-sm text-gray-400">BTC Dominance</span>
          <span className="font-medium">{data.market_cap_percentage.btc.toFixed(2)}%</span>
        </div>

        <div className="flex justify-between items-center border-b border-[#2c2f3b] pb-3">
          <span className="text-sm text-gray-400">ETH Dominance</span>
          <span className="font-medium">{data.market_cap_percentage.eth.toFixed(2)}%</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400">Active Cryptocurrencies</span>
          <span className="font-medium">{formatNumber(data.active_cryptocurrencies)}</span>
        </div>
      </div>
    </div>
  )
}

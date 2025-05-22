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
    <div className="rounded-xl bg-[#222531] p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-blue-300 flex items-center gap-2">
          <span className="inline-block w-2 h-6 bg-blue-400 rounded-sm mr-2"></span>
          市場統計
        </h2>
        <Select value={currency} onValueChange={setCurrency}>
          <SelectTrigger className="w-28 h-8 bg-[#2c2f3b] border-0 text-sm font-semibold text-blue-200">
            <SelectValue placeholder="選擇幣別" />
          </SelectTrigger>
          <SelectContent className="bg-[#2c2f3b] border-[#3a3f50]">
            {currencies.map((c) => (
              <SelectItem key={c.value} value={c.value} className="text-sm text-white">
                {c.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center border-b border-[#2c2f3b] pb-3">
          <span className="flex items-center gap-2 text-sm text-gray-400">
            <span className="inline-block w-2 h-2 bg-green-400 rounded-full"></span>
            總市值
          </span>
          <span className="font-bold text-lg text-green-300">
            {selectedCurrency.symbol}
            {formatNumber(data.total_market_cap[currency])}
          </span>
        </div>

        <div className="flex justify-between items-center border-b border-[#2c2f3b] pb-3">
          <span className="flex items-center gap-2 text-sm text-gray-400">
            <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full"></span>
            24小時成交量
          </span>
          <span className="font-bold text-lg text-yellow-300">
            {selectedCurrency.symbol}
            {formatNumber(data.total_volume[currency])}
          </span>
        </div>

        <div className="flex justify-between items-center border-b border-[#2c2f3b] pb-3">
          <span className="flex items-center gap-2 text-sm text-gray-400">
            <span className="inline-block w-2 h-2 bg-blue-400 rounded-full"></span>
            BTC 市佔率
          </span>
          <span className="font-bold text-lg text-blue-300">{data.market_cap_percentage.btc.toFixed(2)}%</span>
        </div>

        <div className="flex justify-between items-center border-b border-[#2c2f3b] pb-3">
          <span className="flex items-center gap-2 text-sm text-gray-400">
            <span className="inline-block w-2 h-2 bg-purple-400 rounded-full"></span>
            ETH 市佔率
          </span>
          <span className="font-bold text-lg text-purple-300">{data.market_cap_percentage.eth.toFixed(2)}%</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="flex items-center gap-2 text-sm text-gray-400">
            <span className="inline-block w-2 h-2 bg-pink-400 rounded-full"></span>
            活躍加密貨幣數量
          </span>
          <span className="font-bold text-lg text-pink-300">{formatNumber(data.active_cryptocurrencies)}</span>
        </div>
      </div>
    </div>
  )
}

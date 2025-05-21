import type { GlobalListData } from '@/types/global'
import { ArrowDown, ArrowUp, Star } from 'lucide-react'
import { formatNumber } from '@/utils/helper'

export function CoinMarketTable({ data }: { data: GlobalListData }) {
  const topCryptos = Object.entries(data.market_cap_percentage).map(([symbol, percentage]) => {
    return {
      symbol: symbol.toUpperCase(),
      percentage,
      marketCap: (data.total_market_cap.usd * percentage) / 100,
      // Mock data for demonstration
      price:
        symbol === 'btc'
          ? 67000
          : symbol === 'eth'
          ? 3200
          : symbol === 'usdt'
          ? 1
          : symbol === 'bnb'
          ? 570
          : symbol === 'sol'
          ? 150
          : symbol === 'usdc'
          ? 1
          : symbol === 'xrp'
          ? 0.5
          : symbol === 'steth'
          ? 3190
          : symbol === 'doge'
          ? 0.15
          : symbol === 'ada'
          ? 0.45
          : 0,
      change24h:
        symbol === 'btc'
          ? 2.5
          : symbol === 'eth'
          ? 1.8
          : symbol === 'usdt'
          ? 0.01
          : symbol === 'bnb'
          ? -0.5
          : symbol === 'sol'
          ? 3.2
          : symbol === 'usdc'
          ? 0.02
          : symbol === 'xrp'
          ? -1.2
          : symbol === 'steth'
          ? 1.7
          : symbol === 'doge'
          ? 5.4
          : symbol === 'ada'
          ? -0.8
          : 0,
    }
  })

  return (
    <div className="rounded-xl bg-[#222531] p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Top Cryptocurrencies</h2>
        <button className="text-sm text-[#8dc647] hover:underline">View All</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#2c2f3b] text-left text-sm text-gray-400">
              <th className="pb-4 pl-2">#</th>
              <th className="pb-4">Coin</th>
              <th className="pb-4 text-right">Price</th>
              <th className="pb-4 text-right">24h</th>
              <th className="pb-4 text-right">Market Cap</th>
              <th className="pb-4 text-right">Dominance</th>
            </tr>
          </thead>

          <tbody>
            {topCryptos.map((crypto, index) => (
              <tr key={crypto.symbol} className="border-b border-[#2c2f3b] hover:bg-[#2c2f3b]/30">
                <td className="py-4 pl-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span>{index + 1}</span>
                    <Star className="h-4 w-4 text-gray-500 hover:text-yellow-400 cursor-pointer" />
                  </div>
                </td>
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <div className="relative h-8 w-8 rounded-full bg-[#2c2f3b] overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center text-xs font-bold">
                        {crypto.symbol.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <p className="font-medium">{crypto.symbol}</p>
                      <p className="text-xs text-gray-400">{crypto.symbol}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 text-right font-medium">
                  ${crypto.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </td>
                <td
                  className={`py-4 text-right font-medium ${crypto.change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}
                >
                  <div className="flex items-center justify-end">
                    {crypto.change24h >= 0 ? (
                      <ArrowUp className="mr-1 h-3 w-3" />
                    ) : (
                      <ArrowDown className="mr-1 h-3 w-3" />
                    )}
                    {Math.abs(crypto.change24h).toFixed(2)}%
                  </div>
                </td>
                <td className="py-4 text-right font-medium">${formatNumber(crypto.marketCap)}</td>
                <td className="py-4 text-right font-medium">{crypto.percentage.toFixed(2)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

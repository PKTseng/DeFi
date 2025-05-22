import { useQuery } from '@tanstack/react-query'
import { ArrowDown, ArrowUp, Star, BarChart3 } from 'lucide-react'
import { getCoinsMarket } from '@/api/coins'
// import { getCoinsMarketData } from '@/mock/coins/coinList'

export function CoinMarketTable() {
  const { data: marketData } = useQuery({
    queryKey: ['coinsMarket'],
    queryFn: () => getCoinsMarket({ vs_currency: 'usd', order: 'market_cap_desc', page: 1, per_page: 100 }),
  })

  return (
    <div className="rounded-xl bg-gray-800 p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          <BarChart3 className="w-8 h-8 text-blue-400" />
          主流加密貨幣
        </h2>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="w-full min-w-[900px]">
          <thead>
            <tr className="border-b border-[#2c2f3b] text-left text-sm text-gray-400">
              <th className="pb-4 pr-4 text-right">#</th>
              <th className="pb-4">貨幣</th>
              <th className="pb-4 text-right">目前價格</th>
              <th className="pb-4 text-right">24小時漲跌幅</th>
              <th className="pb-4 text-right">24小時交易量</th>
              <th className="pb-4 text-right">24小時最高價</th>
              <th className="pb-4 text-right">24小時最低價</th>
              <th className="pb-4 text-right">總市值</th>
            </tr>
          </thead>

          <tbody>
            {marketData &&
              marketData.map((item) => (
                <tr key={item.id} className="border-b border-[#2c2f3b] hover:bg-[#2c2f3b]/30">
                  {/* 排名 */}
                  <td className="py-4 pl-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-gray-500 hover:text-yellow-400 cursor-pointer" />
                      <span>{item.market_cap_rank}</span>
                    </div>
                  </td>

                  {/* 貨幣 */}
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className="relative h-8 w-8 rounded-full bg-[#2c2f3b] overflow-hidden">
                        <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <p>
                          <span className="font-bold mr-2 text-white">{item.name}</span>
                          <span className="text-[14px] text-gray-400">{item.symbol.toLocaleUpperCase()}</span>
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* 目前價格 */}
                  <td className="py-4 text-right font-medium">${item.current_price.toLocaleString()}</td>

                  {/* 24小時漲跌幅 */}
                  <td
                    className={`py-4 text-right font-medium ${
                      item.price_change_percentage_24h >= 0 ? 'text-green-500' : 'text-red-500'
                    }`}
                  >
                    <div className="flex items-center justify-end">
                      {item.price_change_percentage_24h >= 0 ? (
                        <ArrowUp className="mr-1 h-6 w-6" />
                      ) : (
                        <ArrowDown className="mr-1 h-6 w-6" />
                      )}
                      {Math.abs(item.price_change_percentage_24h).toFixed(2)}%
                    </div>
                  </td>

                  {/* 24小時交易量 */}
                  <td className="py-4 text-right font-medium">${item.total_volume.toLocaleString()}</td>

                  {/* 24小時最高價 */}
                  <td className="py-4 text-right font-medium">${item.high_24h.toLocaleString()}</td>

                  {/* 24小時最低價 */}
                  <td className="py-4 text-right font-medium">${item.low_24h.toLocaleString()}</td>

                  {/* 總市值 */}
                  <td className="py-4 text-right font-medium">${item.market_cap.toLocaleString()}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

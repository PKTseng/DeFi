import { ArrowDown, ArrowUp, Star, BarChart3 } from 'lucide-react'
// import { useQuery } from '@tanstack/react-query'
// import { getCoinsMarket } from '@/api/coins'
import { getCoinsMarketData } from '@/mock/coins/coinList'
import { useNavigate } from 'react-router-dom'
import { Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'

export function CoinMarketTable() {
  const navigate = useNavigate()
  // const { data: marketData } = useQuery({
  //   queryKey: ['coinsMarket'],
  //   queryFn: () => getCoinsMarket({ vs_currency: 'usd', order: 'market_cap_desc', page: 1, per_page: 100 }),
  // })

  return (
    <div className="rounded-xl bg-gray-800 p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-extrabold mb-6 flex items-center gap-2 text-[#8dc647]">
          <BarChart3 className="w-8 h-8 text-blue-400" />
          主流加密貨幣
        </h2>
      </div>

      <Table>
        <TableCaption className="text-gray-400 text-base pb-4">全球主流加密貨幣市值排行</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-[#8dc647] text-base font-bold text-right">#</TableHead>
            <TableHead className="text-[#8dc647] text-base font-bold">貨幣</TableHead>
            <TableHead className="text-[#8dc647] text-base font-bold text-right">目前價格</TableHead>
            <TableHead className="text-[#8dc647] text-base font-bold text-right">24小時漲跌幅</TableHead>
            <TableHead className="text-[#8dc647] text-base font-bold text-right">24小時交易量</TableHead>
            <TableHead className="text-[#8dc647] text-base font-bold text-right">24小時最高價</TableHead>
            <TableHead className="text-[#8dc647] text-base font-bold text-right">24小時最低價</TableHead>
            <TableHead className="text-[#8dc647] text-base font-bold text-right">總市值</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {getCoinsMarketData && getCoinsMarketData.length > 0 ? (
            getCoinsMarketData.map((item) => (
              <TableRow
                key={item.id}
                className="border-b border-gray-700 hover:bg-[#8dc647]/10 hover:text-[#8dc647] transition-colors cursor-pointer group"
                onClick={() => navigate(`/coins/${item.id}`)}
              >
                {/* 排名 */}
                <TableCell className="py-4 pl-2 text-sm font-mono text-gray-400 font-bold text-right">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-gray-500 group-hover:text-yellow-400 cursor-pointer" />
                    <span>{item.market_cap_rank}</span>
                  </div>
                </TableCell>
                {/* 貨幣 */}
                <TableCell className="py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-full bg-white shadow group-hover:scale-110 transition-transform"
                    />
                    <div>
                      <p>
                        <span className="font-bold mr-2 text-white">{item.name}</span>
                        <span className="text-[14px] text-gray-400">{item.symbol.toLocaleUpperCase()}</span>
                      </p>
                    </div>
                  </div>
                </TableCell>
                {/* 目前價格 */}
                <TableCell className="py-4 text-right font-medium text-white">
                  ${item.current_price.toLocaleString()}
                </TableCell>
                {/* 24小時漲跌幅 */}
                <TableCell
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
                </TableCell>
                {/* 24小時交易量 */}
                <TableCell className="py-4 text-right font-medium text-white">
                  ${item.total_volume.toLocaleString()}
                </TableCell>
                {/* 24小時最高價 */}
                <TableCell className="py-4 text-right font-medium text-white">
                  ${item.high_24h.toLocaleString()}
                </TableCell>
                {/* 24小時最低價 */}
                <TableCell className="py-4 text-right font-medium text-white">
                  ${item.low_24h.toLocaleString()}
                </TableCell>
                {/* 總市值 */}
                <TableCell className="py-4 text-right font-medium text-white">
                  ${item.market_cap.toLocaleString()}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={8} className="text-center py-8 text-gray-400">
                暫無資料
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}

import { useQuery } from '@tanstack/react-query'
import { getCoinsMarket } from '@/api/coins'
import { useNavigate } from 'react-router-dom'
import { Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
// import { getCoinsMarketData as data } from '@/mock/coins/coinList'

export function CoinMarketTable() {
  const navigate = useNavigate()
  const { data } = useQuery({
    queryKey: ['coinsMarket'],
    queryFn: () => getCoinsMarket({ vs_currency: 'usd', order: 'market_cap_desc', page: 1, per_page: 100 }),
  })

  return (
    <div className="rounded-xl bg-gray-800 p-6">
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
          {data && data.length > 0 ? (
            data.map((item) => (
              <TableRow
                key={item.id}
                className="border-b border-gray-700 hover:bg-[#8dc647]/10 hover:text-[#8dc647] transition-colors cursor-pointer group"
                onClick={() => navigate(`/coins/${item.id}`)}
              >
                {/* 排名 */}
                <TableCell className="py-4 pl-2 text-sm font-mono text-gray-400 font-bold text-right">
                  {item.market_cap_rank}
                </TableCell>
                {/* 貨幣 */}
                <TableCell className="py-4">
                  <div className="flex items-center gap-2">
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
                    item.price_change_percentage_24h >= 0 ? 'text-[#8dc647]' : 'text-red-500'
                  }`}
                >
                  {Math.abs(item.price_change_percentage_24h).toFixed(2)}%
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

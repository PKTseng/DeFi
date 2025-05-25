import { useQuery } from '@tanstack/react-query'
import { getExchangesList } from '@/api/exchanges'
import { Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
import Title from '@/components/Title'
// import { exchangesList as data } from '@/mock/exchanges/list'

function Exchanges() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['exchangesList'],
    queryFn: getExchangesList,
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  if (!data) {
    return <div>暫無資料</div>
  }

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <Title>交易所列表</Title>

      <div className="rounded-xl bg-gray-800 p-6">
        <Table>
          <TableCaption>全球主流加密貨幣交易所</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[60px] text-[#8dc647] text-base font-bold">#</TableHead>
              <TableHead className="w-[80px] text-[#8dc647] text-base font-bold">Logo</TableHead>
              <TableHead className="text-[#8dc647] text-base font-bold">名稱</TableHead>
              <TableHead className="text-[#8dc647] text-base font-bold">國家</TableHead>
              <TableHead className="text-[#8dc647] text-base font-bold">成立年份</TableHead>
              <TableHead className="text-[#8dc647] text-base font-bold">信任分數</TableHead>
              <TableHead className="text-[#8dc647] text-base font-bold">24h交易量 (BTC)</TableHead>
              <TableHead className="text-[#8dc647] text-base font-bold">官網</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {data && data.length > 0 ? (
              data.map((item) => (
                <TableRow
                  key={item.id}
                  className="border-b border-gray-700 hover:bg-[#8dc647]/10 hover:text-[#8dc647] transition-colors cursor-pointer group"
                >
                  <TableCell className="font-mono text-md text-gray-400">{item.trust_score_rank}</TableCell>
                  <TableCell>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-full bg-white shadow group-hover:scale-110 transition-transform"
                    />
                  </TableCell>
                  <TableCell className="font-bold text-white text-md flex items-center gap-2">
                    {item.name}
                    {item.has_trading_incentive && (
                      <span className="ml-2 px-2 py-0.5 bg-yellow-400 text-xs text-gray-900 rounded-full font-semibold">
                        獎勵
                      </span>
                    )}
                  </TableCell>
                  <TableCell className="text-gray-300 text-base">{item.country}</TableCell>
                  <TableCell className="text-gray-300 text-base">{item.year_established}</TableCell>
                  <TableCell>
                    <span className="inline-block px-4 py-1 rounded-full bg-[#23272f] text-[#8dc647] font-bold text-lg shadow">
                      {item.trust_score}
                    </span>
                  </TableCell>
                  <TableCell className="text-gray-300 text-base font-mono">
                    <span className="text-white font-bold">{Number(item.trade_volume_24h_btc).toLocaleString()}</span>{' '}
                    <span className="text-xs text-gray-400">BTC</span>
                  </TableCell>
                  <TableCell>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-600 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors"
                      style={{ textDecoration: 'none' }}
                    >
                      官網
                    </a>
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
    </div>
  )
}

export default Exchanges

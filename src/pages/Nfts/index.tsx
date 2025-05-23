import { useQuery } from '@tanstack/react-query'
import { getNftsList } from '@/api/nfts'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
import Title from '@/components/Title'
// import { nftsList as data } from '@/mock/nfts/list'

function Nfts() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['nftsList'],
    queryFn: getNftsList,
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
      <Title>熱門 NFT 專案</Title>

      <div className="rounded-xl bg-gray-800 p-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[60px] text-[#8dc647] text-base font-bold">#</TableHead>
              <TableHead className="text-[#8dc647] text-base font-bold">名稱</TableHead>
              <TableHead className="text-[#8dc647] text-base font-bold">合約地址</TableHead>
              <TableHead className="text-[#8dc647] text-base font-bold">平台</TableHead>
              <TableHead className="text-[#8dc647] text-base font-bold">代號</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {data.map((item, idx) => (
              <TableRow
                key={item.id}
                className="border-b border-gray-700 hover:bg-[#8dc647]/10 hover:text-[#8dc647] transition-colors cursor-pointer group"
              >
                <TableCell className="font-mono text-gray-400 text-base">{idx + 1}</TableCell>
                <TableCell className="font-bold text-white text-base truncate max-w-[200px]">{item.name}</TableCell>
                <TableCell className="text-blue-400 font-mono truncate max-w-[260px]">
                  <a
                    href={`https://etherscan.io/address/${item.contract_address}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors"
                    style={{ textDecoration: 'none' }}
                  >
                    {item.contract_address}
                  </a>
                </TableCell>
                <TableCell className="text-gray-300 text-base">{item.asset_platform_id}</TableCell>
                <TableCell className="text-gray-300 text-base font-mono uppercase">{item.symbol}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default Nfts

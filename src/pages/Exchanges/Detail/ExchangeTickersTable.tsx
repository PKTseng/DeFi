import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { ExternalLink } from 'lucide-react'

interface Ticker {
  base: string
  target: string
  converted_last: { usd: number }
  volume: number
  converted_volume: { usd: number }
  trust_score: string
  trade_url?: string
}

interface Props {
  tickers: Ticker[]
  getTrustScoreBadgeColor: (trustScore: string) => string
}

const ExchangeTickersTable: React.FC<Props> = ({ tickers, getTrustScoreBadgeColor }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-[#8dc647] mb-4">熱門交易對</h2>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-gray-700">
              <TableHead className="text-[#8dc647] font-bold">交易對</TableHead>
              <TableHead className="text-[#8dc647] font-bold text-right">最新價格 (USD)</TableHead>
              <TableHead className="text-[#8dc647] font-bold text-right">交易量</TableHead>
              <TableHead className="text-[#8dc647] font-bold text-center">信任度</TableHead>
              <TableHead className="text-[#8dc647] font-bold text-center">操作</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tickers.map((ticker, index) => (
              <TableRow key={index} className="border-b border-gray-700 hover:bg-gray-700/50 transition-colors">
                <TableCell className="font-medium text-white">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{ticker.base}</span>
                    <span className="text-gray-400">/</span>
                    <span className="text-gray-300">{ticker.target}</span>
                  </div>
                </TableCell>
                <TableCell className="text-right font-mono">
                  <span className="text-white font-bold">
                    ${ticker.converted_last.usd.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                  </span>
                </TableCell>
                <TableCell className="text-right font-mono">
                  <div className="text-white">
                    {ticker.volume.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    <span className="text-gray-400 text-xs ml-1">{ticker.base}</span>
                  </div>
                  <div className="text-gray-400 text-xs">
                    ${ticker.converted_volume.usd.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <span
                    className={`px-2 py-1 text-xs rounded-full font-semibold ${getTrustScoreBadgeColor(
                      ticker.trust_score
                    )}`}
                  >
                    {ticker.trust_score}
                  </span>
                </TableCell>
                <TableCell className="text-center">
                  {ticker.trade_url && (
                    <a
                      href={ticker.trade_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1 bg-[#8dc647] text-gray-900 rounded-lg hover:bg-[#7bc142] transition-colors text-sm font-semibold"
                    >
                      交易
                      <ExternalLink size={12} />
                    </a>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default ExchangeTickersTable

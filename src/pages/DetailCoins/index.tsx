import { BarChart3 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useParams, useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getCoinsById } from '@/api/coins'
import InfoCard from './components/InfoCard'

function DetailCoins() {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const { data, isLoading, error } = useQuery({
    queryKey: ['coinsById', id],
    queryFn: () => getCoinsById(id as string),
  })

  if (isLoading) {
    return <div className="text-center text-gray-400">Loading...</div>
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error.message}</div>
  }

  if (!data) {
    return <div className="text-center text-gray-400">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="mx-auto max-w-4xl">
        <Button
          onClick={() => navigate(`/`)}
          className="group text-[#8dc647] hover:text-white hover:bg-[#8dc647]/90 border border-[#8dc647] bg-transparent px-4 py-2 rounded-full font-bold flex items-center gap-2 mb-8 shadow transition-all duration-200"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span> 返回列表
        </Button>

        <div className="flex items-center gap-8 mb-12 p-8 rounded-2xl bg-gradient-to-r from-[#23272f] via-gray-900 to-[#23272f] shadow-xl border border-[#8dc647]/30">
          <img
            src={data.image.large}
            alt={data.name}
            className="w-20 h-20 rounded-full shadow-2xl border-4 border-[#8dc647] bg-white p-2"
          />
          <div className="flex-1">
            <h1 className="text-4xl font-extrabold text-white tracking-wide flex items-center gap-3">
              {data.name}
              <span className="text-2xl font-semibold text-gray-400">({data.symbol.toUpperCase()})</span>
              <span className="ml-2 px-3 py-1 rounded-full bg-[#8dc647]/10 text-[#8dc647] text-base font-bold border border-[#8dc647] shadow">
                #{data.market_cap_rank}
              </span>
            </h1>
            <div className="flex flex-wrap items-center gap-3 mt-4">
              <span className="text-xs text-gray-300 bg-gray-700/80 px-3 py-1 rounded-full font-medium">
                創立 {data.genesis_date}
              </span>
              <span className="text-xs text-gray-300 bg-gray-700/80 px-3 py-1 rounded-full font-medium">
                技術規格 {data.hashing_algorithm || '—'}
              </span>
              <span className="text-xs text-gray-300 bg-gray-700/80 px-3 py-1 rounded-full font-medium">
                出塊 {typeof data.block_time_in_minutes === 'number' ? data.block_time_in_minutes + ' 分' : '—'}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <InfoCard
            label="市值"
            value={
              data.market_data.market_cap?.usd !== undefined
                ? `$${data.market_data.market_cap.usd.toLocaleString()}`
                : '—'
            }
            valueClassName="text-2xl font-bold text-white whitespace-nowrap overflow-x-auto scrollbar-thin scrollbar-thumb-[#8dc647]/40 scrollbar-track-transparent"
          />
          <InfoCard
            label="交易量"
            value={
              data.market_data.total_volume?.usd !== undefined
                ? `$${data.market_data.total_volume.usd.toLocaleString()}`
                : '—'
            }
            valueClassName="text-2xl font-bold text-white whitespace-nowrap overflow-x-auto scrollbar-thin scrollbar-thumb-[#8dc647]/40 scrollbar-track-transparent"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <InfoCard
            label="當前價格"
            value={
              data.market_data.current_price?.usd !== undefined
                ? `$${data.market_data.current_price.usd.toLocaleString()}`
                : '—'
            }
            valueClassName="text-3xl font-extrabold text-[#8dc647] truncate"
          />

          <InfoCard
            label="24h 漲跌"
            value={
              typeof data.market_data.price_change_percentage_24h === 'number'
                ? `${data.market_data.price_change_percentage_24h.toFixed(2)}%`
                : '—'
            }
            valueClassName={`text-2xl font-bold ${
              data.market_data.price_change_percentage_24h >= 0 ? 'text-green-400' : 'text-red-400'
            } truncate`}
          />

          <InfoCard
            label="歷史最高價"
            value={data.market_data.ath?.usd !== undefined ? `$${data.market_data.ath.usd.toLocaleString()}` : '—'}
            valueClassName="text-xl font-bold text-[#8dc647] truncate"
          />

          <InfoCard
            label="流通量"
            value={
              typeof data.market_data.circulating_supply === 'number'
                ? data.market_data.circulating_supply.toLocaleString()
                : '—'
            }
            valueClassName="text-xl font-bold text-white truncate"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <InfoCard
            label="技術規格"
            value={data.hashing_algorithm || '—'}
            valueClassName="text-xl font-bold text-white truncate"
          />
          <InfoCard
            label="7天價格趨勢"
            value={<div className="flex-1 flex items-center justify-center w-full h-16 text-gray-400">(7天小圖表)</div>}
          />
        </div>

        <div className="bg-gradient-to-br from-[#23272f] via-gray-800 to-[#23272f] rounded-2xl p-8 mb-10 shadow-lg border border-[#8dc647]/20">
          <div className="text-xs text-gray-400 mb-2 font-bold tracking-wider">項目描述</div>
          <div className="text-gray-200 text-base leading-relaxed font-medium">
            {data.description?.en ? data.description.en : '—'}
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#23272f] via-gray-800 to-[#23272f] rounded-2xl p-10 text-center shadow-lg border border-[#8dc647]/20">
          <BarChart3 className="w-20 h-20 mx-auto text-[#8dc647] mb-6 drop-shadow-lg" />
          <p className="text-gray-300 text-lg font-bold tracking-wide">價格圖表將在這裡顯示</p>
          <p className="text-xs text-gray-500 mt-2">（可用 Chart.js 或 Recharts 實作）</p>
        </div>
      </div>
    </div>
  )
}

export default DetailCoins

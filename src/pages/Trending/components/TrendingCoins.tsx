import React from 'react'
import type { TopCoin } from '@/types/trending'
import { ArrowDown, ArrowUp } from 'lucide-react'

interface TrendingCoinsProps {
  coins: TopCoin[]
}

const TrendingCoins: React.FC<TrendingCoinsProps> = ({ coins }) => (
  <section>
    <h2 className="text-2xl font-extrabold mb-6 text-[#8dc647] flex items-center gap-2">
      <span className="inline-block w-2 h-6 bg-[#8dc647] rounded mr-2"></span>熱門幣種
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {coins.map((coin) => (
        <div
          key={coin.item.id}
          className="flex items-center gap-4 p-5 bg-gradient-to-br from-[#23272f] via-gray-900 to-[#23272f] rounded-2xl shadow-lg border border-[#8dc647]/20 hover:scale-105 transition-transform cursor-pointer"
        >
          <img
            src={coin.item.thumb}
            alt={coin.item.name}
            className="w-14 h-14 rounded-full border-4 border-[#8dc647] bg-white shadow"
          />
          <div className="flex-1 min-w-0">
            <div className="font-bold text-lg text-white truncate">
              {coin.item.name}{' '}
              <span className="text-gray-400 text-base font-normal">({coin.item.symbol.toUpperCase()})</span>
            </div>
            <div className="text-gray-400 text-sm mt-1">
              市值排名 <span className="text-[#8dc647] font-bold">#{coin.item.market_cap_rank}</span>
            </div>
            <div className="flex flex-wrap gap-4 mt-2 items-center">
              <span className="text-xs text-gray-400">
                BTC價格: <span className="text-white font-semibold">{coin.item.price_btc.toFixed(8)}</span>
              </span>
              <span className="text-xs text-gray-400">
                分數: <span className="text-white font-semibold">{coin.item.score}</span>
              </span>
              {coin.item.data && (
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  24h漲跌:
                  {coin.item.data.price_change_percentage_24h?.btc > 0 ? (
                    <ArrowUp className="inline-block w-4 h-4 text-green-400" />
                  ) : (
                    <ArrowDown className="inline-block w-4 h-4 text-red-400" />
                  )}
                  <span
                    className={coin.item.data.price_change_percentage_24h?.btc > 0 ? 'text-green-400' : 'text-red-400'}
                  >
                    {coin.item.data.price_change_percentage_24h?.btc?.toFixed(2)}%
                  </span>
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
)

export default TrendingCoins

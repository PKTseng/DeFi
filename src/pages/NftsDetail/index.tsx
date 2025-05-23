import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import Title from '@/components/Title'
import { nftDetail as data } from '@/mock/nfts/detail'

function NftsDetail() {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <Button
        onClick={() => navigate(`/nfts`)}
        className="group text-[#8dc647] hover:text-white hover:bg-[#8dc647]/90 border border-[#8dc647] bg-transparent px-4 py-2 rounded-full font-bold flex items-center gap-2 mb-8 shadow transition-all duration-200"
      >
        <span className="group-hover:-translate-x-1 transition-transform">←</span> 返回列表
      </Button>

      <Title>{`${data.name} 詳細資訊`}</Title>
      <div className="rounded-2xl bg-gradient-to-br from-gray-900/90 to-gray-800/80 p-8 shadow-2xl flex flex-col md:flex-row gap-10 border border-[#8dc647]/10">
        {/* NFT 圖片與 Banner */}
        <div className="flex flex-col items-center gap-6 min-w-[200px]">
          <div className="relative">
            <img
              src={data.image?.small_2x || data.image?.small}
              alt={data.name}
              className="w-36 h-36 rounded-2xl border-4 border-[#8dc647] bg-white shadow-xl object-cover transition-transform duration-300 hover:scale-105"
            />
            {data.user_favorites_count > 0 && (
              <span className="absolute -top-3 -right-3 bg-[#8dc647] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-bounce">
                ♥ {data.user_favorites_count}
              </span>
            )}
          </div>
          {data.banner_image && (
            <img src={data.banner_image} alt="Banner" className="w-full h-20 object-cover rounded-lg shadow" />
          )}
        </div>
        {/* NFT 主要資訊 */}
        <div className="flex-1 space-y-6">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-3xl font-extrabold text-white tracking-tight drop-shadow">{data.name}</span>
            <span className="text-lg font-mono text-gray-400 bg-gray-900 px-3 py-1 rounded-full">{data.symbol}</span>
            <span className="px-3 py-1 rounded-full bg-[#23272f] text-[#8dc647] font-bold text-base shadow">
              #{data.market_cap_rank}
            </span>
          </div>
          <div className="text-gray-300 text-base leading-relaxed mb-2 whitespace-pre-line max-w-2xl">
            {data.description}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-400">合約地址：</span>
              <span className="text-white font-mono">{data.contract_address}</span>
            </div>
            <div>
              <span className="text-gray-400">平台：</span>
              <span className="text-white font-semibold">{data.asset_platform_id}</span>
            </div>
            <div>
              <span className="text-gray-400">原生貨幣：</span>
              <span className="text-white font-semibold">{data.native_currency_symbol?.toUpperCase()}</span>
            </div>
            <div>
              <span className="text-gray-400">總供應量：</span>
              <span className="text-white font-semibold">{data.total_supply?.toLocaleString()}</span>
            </div>
            <div>
              <span className="text-gray-400">唯一持有地址：</span>
              <span className="text-white font-semibold">{data.number_of_unique_addresses?.toLocaleString()}</span>
            </div>
            <div>
              <span className="text-gray-400">官網：</span>
              <a
                href={data.links.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600 font-semibold transition-colors"
                style={{ textDecoration: 'none' }}
              >
                {data.links.homepage}
              </a>
            </div>
            <div>
              <span className="text-gray-400">Twitter：</span>
              <span className="text-white">{data.links.twitter || '—'}</span>
            </div>
            <div>
              <span className="text-gray-400">Discord 社群：</span>
              <span className="text-white">{data.links.discord || '—'}</span>
            </div>
            <div>
              <span className="text-gray-400">地板價 24小時變化：</span>
              <span className="text-white">{data.floor_price_in_usd_24h_percentage_change?.toFixed(2)}%</span>
            </div>
            <div>
              <span className="text-gray-400">市值 24小時變化：</span>
              <span className="text-white">{data.market_cap_24h_percentage_change.usd?.toFixed(2)}%</span>
            </div>
            <div>
              <span className="text-gray-400">24小時成交量變化：</span>
              <span className="text-white">{data.volume_24h_percentage_change.usd?.toFixed(2)}%</span>
            </div>
            <div>
              <span className="text-gray-400">地板價 7日變化：</span>
              <span className="text-white">{data.floor_price_7d_percentage_change.usd?.toFixed(2)}%</span>
            </div>
            <div>
              <span className="text-gray-400">地板價 14日變化：</span>
              <span className="text-white">{data.floor_price_14d_percentage_change.usd?.toFixed(2)}%</span>
            </div>
            <div>
              <span className="text-gray-400">地板價 30日變化：</span>
              <span className="text-white">{data.floor_price_30d_percentage_change.usd?.toFixed(2)}%</span>
            </div>
            <div>
              <span className="text-gray-400">地板價 60日變化：</span>
              <span className="text-white">{data.floor_price_60d_percentage_change.usd?.toFixed(2)}%</span>
            </div>
            <div>
              <span className="text-gray-400">地板價 1年變化：</span>
              <span className="text-white">{data.floor_price_1y_percentage_change.usd?.toFixed(2)}%</span>
            </div>
            <div>
              <span className="text-gray-400">一工賣出量：</span>
              <span className="text-white">{data.one_day_sales}</span>
            </div>
            <div>
              <span className="text-gray-400">一工平均賣價：</span>
              <span className="text-white">{data.one_day_average_sale_price ?? '—'}</span>
            </div>
            <div>
              <span className="text-gray-400">一工平均賣價 24小時變化：</span>
              <span className="text-white">{data.one_day_average_sale_price_24h_percentage_change?.toFixed(2)}%</span>
            </div>
            <div>
              <span className="text-gray-400">用戶收藏數：</span>
              <span className="text-white">{data.user_favorites_count}</span>
            </div>
          </div>
          {/* 市場數據 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            <div className="bg-gradient-to-br from-[#23272f] to-gray-900 rounded-xl p-6 shadow flex flex-col items-center border border-[#8dc647]/10">
              <div className="text-gray-400 text-xs mb-1">地板價</div>
              <div className="text-2xl font-bold text-[#8dc647]">{data.floor_price.usd?.toLocaleString()} USD</div>
              <div className="text-sm text-gray-400">
                {data.floor_price.native_currency} {data.native_currency_symbol?.toUpperCase()}
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#23272f] to-gray-900 rounded-xl p-6 shadow flex flex-col items-center border border-[#8dc647]/10">
              <div className="text-gray-400 text-xs mb-1">市值</div>
              <div className="text-2xl font-bold text-[#8dc647]">{data.market_cap.usd?.toLocaleString()} USD</div>
              <div className="text-sm text-gray-400">
                {data.market_cap.native_currency} {data.native_currency_symbol?.toUpperCase()}
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#23272f] to-gray-900 rounded-xl p-6 shadow flex flex-col items-center border border-[#8dc647]/10">
              <div className="text-gray-400 text-xs mb-1">24h 交易量</div>
              <div className="text-2xl font-bold text-[#8dc647]">{data.volume_24h.usd?.toLocaleString()} USD</div>
              <div className="text-sm text-gray-400">
                {data.volume_24h.native_currency} {data.native_currency_symbol?.toUpperCase()}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 其他連結與數據 */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/70 rounded-xl p-6 shadow border border-[#8dc647]/10">
          <div className="font-bold text-lg text-[#8dc647] mb-3 flex items-center gap-2">
            <svg
              className="w-5 h-5 text-[#8dc647]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-3-3v6m9 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            區塊鏈瀏覽器
          </div>
          <ul className="space-y-2">
            {data.explorers?.map((exp) => (
              <li key={exp.link}>
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600 font-semibold transition-colors"
                  style={{ textDecoration: 'none' }}
                >
                  {exp.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/70 rounded-xl p-6 shadow border border-[#8dc647]/10">
          <div className="font-bold text-lg text-[#8dc647] mb-3 flex items-center gap-2">
            <svg
              className="w-5 h-5 text-[#8dc647]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            ATH（歷史最高價）
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <span className="text-gray-400">USD：</span>
              <span className="text-white font-semibold">{data.ath.usd?.toLocaleString()} USD</span>
              <span className="ml-2 text-xs text-gray-400">({data.ath_date.usd?.slice(0, 10)})</span>
            </div>
            <div>
              <span className="text-gray-400">{data.native_currency_symbol?.toUpperCase()}：</span>
              <span className="text-white font-semibold">
                {data.ath.native_currency?.toLocaleString()} {data.native_currency_symbol?.toUpperCase()}
              </span>
              <span className="ml-2 text-xs text-gray-400">({data.ath_date.native_currency?.slice(0, 10)})</span>
            </div>
            <div>
              <span className="text-gray-400">距今跌幅：</span>
              <span className="text-red-400 font-semibold">{data.ath_change_percentage.usd?.toFixed(2)}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NftsDetail

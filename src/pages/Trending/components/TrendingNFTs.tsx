import React from 'react'
import type { NftDetail } from '@/types/trending'
import Title from '@/components/Title'
import { useNavigate } from 'react-router-dom'

interface TrendingNFTsProps {
  nfts: NftDetail[]
}

const TrendingNFTs: React.FC<TrendingNFTsProps> = ({ nfts }) => {
  const navigate = useNavigate()

  return (
    <section>
      <Title>熱門 NFT</Title>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {nfts.map((nft) => (
          <div
            key={nft.id}
            className="flex flex-col items-center p-4 bg-gradient-to-br from-[#23272f] via-gray-900 to-[#23272f] rounded-2xl shadow-lg border border-[#8dc647]/20 hover:scale-105 transition-transform cursor-pointer"
            onClick={() => navigate(`/trending/nft/${nft.id}`)}
          >
            <img
              src={nft.thumb}
              alt={nft.name}
              className="w-12 h-12 rounded-full border-2 border-[#8dc647] bg-white shadow mb-2"
            />
            <div className="font-bold text-white text-base truncate w-full text-center max-w-[120px]" title={nft.name}>
              {nft.name}
            </div>
            <div className="text-gray-400 text-xs mt-1 truncate w-full max-w-[120px] text-center" title={nft.symbol}>
              {nft.symbol}
            </div>
            <div className="flex flex-col items-center mt-2 w-full">
              <span
                className="text-xs text-gray-400 truncate w-full max-w-[120px] text-center"
                title={nft.native_currency_symbol}
              >
                幣別: {nft.native_currency_symbol}
              </span>
              <span
                className="text-xs text-gray-400 truncate w-full max-w-[120px] text-center"
                title={String(nft.floor_price_in_native_currency)}
              >
                地板價: <span className="text-white font-semibold">{nft.floor_price_in_native_currency}</span>
              </span>
              <span
                className="text-xs text-gray-400 truncate w-full max-w-[120px] text-center"
                title={String(nft.floor_price_24h_percentage_change)}
              >
                24h變化:
                <span className={nft.floor_price_24h_percentage_change > 0 ? 'text-[#8dc647]' : 'text-red-400'}>
                  {nft.floor_price_24h_percentage_change.toFixed(2)}%
                </span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrendingNFTs

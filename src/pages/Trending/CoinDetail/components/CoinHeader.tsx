import React from 'react'

interface CoinHeaderProps {
  image: string
  name: string
  symbol: string
  marketCapRank?: number
}

const CoinHeader: React.FC<CoinHeaderProps> = ({ image, name, symbol, marketCapRank }) => (
  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8 p-6 bg-gray-800 rounded-2xl shadow-xl">
    <img src={image} alt={name} className="w-20 h-20 rounded-full border-2 border-[#8dc647] bg-white shadow-lg" />
    <div>
      <h1 className="text-4xl font-bold text-white flex items-center">
        {name}
        <span className="ml-3 text-xl font-medium text-gray-400 bg-gray-700 px-3 py-1 rounded-lg">
          {symbol.toUpperCase()}
        </span>
      </h1>
      <div className="mt-2 text-sm text-gray-400">
        Market Cap Rank: <span className="font-semibold text-[#8dc647]">#{marketCapRank ?? 'N/A'}</span>
      </div>
    </div>
  </div>
)

export default CoinHeader

import React from 'react'
import { useParams } from 'react-router-dom'

const TrendingNftDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-6">趨勢 NFT 詳細資訊</h1>
      <div className="bg-[#1a1d29] rounded-lg p-6">
        <p className="text-gray-300">NFT ID: {id}</p>
        <p className="text-gray-400 mt-4">這裡將顯示趨勢 NFT 的詳細資訊，包括地板價走勢、交易量、持有者分析等。</p>
      </div>
    </div>
  )
}

export default TrendingNftDetail

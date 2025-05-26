import React from 'react'
import { useParams } from 'react-router-dom'

const TrendingCoinDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-6">趨勢幣種詳細資訊</h1>
      <div className="bg-[#1a1d29] rounded-lg p-6">
        <p className="text-gray-300">幣種 ID: {id}</p>
        <p className="text-gray-400 mt-4">這裡將顯示趨勢幣種的詳細資訊，包括價格走勢、技術分析、新聞等。</p>
      </div>
    </div>
  )
}

export default TrendingCoinDetail

import React from 'react'
import { useParams } from 'react-router-dom'

const TrendingCategoryDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-6">趨勢分類詳細資訊</h1>
      <div className="bg-[#1a1d29] rounded-lg p-6">
        <p className="text-gray-300">分類 ID: {id}</p>
        <p className="text-gray-400 mt-4">這裡將顯示趨勢分類的詳細資訊，包括該分類下的所有幣種、表現分析等。</p>
      </div>
    </div>
  )
}

export default TrendingCategoryDetail

import React from 'react'

interface CoinCategoriesProps {
  categories: string[]
}

const CoinCategories: React.FC<CoinCategoriesProps> = ({ categories }) => (
  <div className="bg-gray-800 p-6 rounded-2xl shadow-xl">
    <h2 className="text-xl font-bold text-[#8dc647] mb-4">分類</h2>
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <span key={category} className="bg-gray-700 text-xs text-gray-300 px-2.5 py-1 rounded-full">
          {category}
        </span>
      ))}
    </div>
  </div>
)

export default CoinCategories

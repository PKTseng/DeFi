import React from 'react'
import type { CoinCategory } from '@/types/trending'

interface TrendingCategoriesProps {
  categories: CoinCategory[]
}

const TrendingCategories: React.FC<TrendingCategoriesProps> = ({ categories }) => (
  <section>
    <h2 className="text-2xl font-extrabold mb-6 text-[#8dc647] flex items-center gap-2">
      <span className="inline-block w-2 h-6 bg-[#8dc647] rounded mr-2"></span>熱門分類
    </h2>
    <div className="flex flex-wrap gap-3">
      {categories.map((cat) => (
        <span
          key={cat.id}
          className="px-5 py-2 bg-[#8dc647] text-white rounded-full text-base font-semibold shadow hover:bg-[#7ab33a] transition-colors cursor-pointer"
        >
          {cat.name}
        </span>
      ))}
    </div>
  </section>
)

export default TrendingCategories

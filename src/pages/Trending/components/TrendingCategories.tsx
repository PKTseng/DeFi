import React from 'react'
import type { CoinCategory } from '@/types/trending'
import Title from '@/components/Title'

interface TrendingCategoriesProps {
  categories: CoinCategory[]
}

const TrendingCategories: React.FC<TrendingCategoriesProps> = ({ categories }) => (
  <section>
    <Title>熱門分類</Title>
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

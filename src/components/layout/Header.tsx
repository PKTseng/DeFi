import React from 'react'
import { Link } from 'react-router-dom'
import { Search, Flame, DollarSign, Coins, ArrowUpDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Header: React.FC = () => {
  const headerItems = [
    { path: '/coins', label: '幣種列表', icon: Coins },
    { path: '/search', label: '搜尋', icon: Search }, // 搜尋功能 - 使用 Search API
    { path: '/trending', label: '熱門', icon: Flame }, // 熱門幣種 - 使用 Trending API
    { path: '/prices', label: '價格追蹤', icon: DollarSign }, // 價格追蹤 - 使用 Simple API
    { path: '/converter', label: '匯率轉換', icon: ArrowUpDown }, // 匯率轉換 - 使用 Exchange Rates API
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-b from-gray-900/95 via-gray-800/90 to-gray-900/80 backdrop-blur-md shadow-md">
      <div className="container mx-auto py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to={`/`} className="flex items-center gap-2">
              <span className="text-xl font-bold text-[#8dc647] drop-shadow-sm tracking-wide">CoinGecko</span>
            </Link>
            <nav className="hidden md:flex">
              <ul className="flex items-center gap-6">
                {headerItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`flex items-center gap-2 text-sm font-medium text-gray-200 hover:text-[#8dc647]`}
                      style={{ transitionProperty: 'color, font-weight, transform' }}
                    >
                      <item.icon className="inline-block h-4 w-4 text-inherit transition-colors duration-200" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="h-10 w-64 rounded-full bg-[#222531] pl-10 pr-4 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8dc647]/50"
              />
            </div>
            <Button className="rounded-full bg-[#8dc647] px-4 py-2 text-sm font-medium text-white hover:bg-[#7ab33a] focus:outline-none focus:ring-2 focus:ring-[#8dc647]/50">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

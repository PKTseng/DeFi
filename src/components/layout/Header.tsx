import React from 'react'
import { Link } from 'react-router-dom'
import { Search, TrendingUp, Wallet, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Header: React.FC = () => {
  const headerItems = [
    { path: '/market', label: '市場總覽', icon: TrendingUp },
    { path: '/coins', label: '幣種詳情', icon: Search }, // 點擊幣種進入詳情
    { path: '/portfolio', label: '投資組合', icon: Wallet }, // 個人持倉追蹤
    { path: '/watchlist', label: '關注清單', icon: Star }, // 收藏幣種
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

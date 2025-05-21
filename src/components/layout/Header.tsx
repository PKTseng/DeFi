import React from 'react'
import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Header: React.FC = () => {
  const headerItems = [
    { path: '/Cryptocurrencies', name: '加密貨幣' },
    { path: '/Exchanges', name: '交易所' },
    { path: '/NFT', name: 'NFT' },
    { path: '/Portfolio', name: '投資組合' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#222531] bg-[#171924]/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to={`/`} className="flex items-center gap-2">
              <span className="text-xl font-bold text-[#8dc647]">CoinGecko</span>
            </Link>
            <nav className="hidden md:flex">
              <ul className="flex items-center gap-6">
                {headerItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`text-sm font-medium text-gray-300 hover:text-white hover:text-green-100 transition-colors `}
                    >
                      {item.name}
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

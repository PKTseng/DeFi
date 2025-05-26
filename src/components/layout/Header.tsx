import React from 'react'
import { Link } from 'react-router-dom'
import { Flame, DollarSign, BarChart3, Landmark } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Header: React.FC = () => {
  const headerItems = [
    { path: '/market', label: '市場總覽', icon: BarChart3 },
    { path: '/exchanges', label: '交易所列表', icon: Landmark },
    { path: '/trending', label: '趨勢與分析', icon: Flame },
    { path: '/nfts', label: 'NFTs', icon: DollarSign },
  ]

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-gradient-to-b from-gray-900/95 via-gray-800/90 to-gray-900/80 backdrop-blur-md shadow-md">
        <div className="container mx-auto py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <Link to={`/`} className="flex items-center gap-2">
                <span className="text-2xl font-extrabold text-[#8dc647] drop-shadow-sm tracking-wide flex items-center gap-2">
                  CoinGecko
                </span>
              </Link>
              <nav className="hidden md:flex">
                <ul className="flex items-center gap-2">
                  {headerItems.map((item) => (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        className="flex items-center gap-2 text-base font-semibold text-gray-200 hover:text-[#8dc647] px-3 py-2 rounded-lg transition-all duration-150 hover:bg-[#8dc647]/10 focus:bg-[#8dc647]/20 focus:text-[#8dc647]"
                        style={{ transitionProperty: 'color, font-weight, transform' }}
                      >
                        <item.icon className="inline-block h-5 w-5 text-inherit transition-colors duration-200" />
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <Button className="rounded-full bg-[#8dc647] px-6 py-2 text-base font-semibold text-white hover:bg-[#7ab33a] focus:outline-none focus:ring-2 focus:ring-[#8dc647]/50 shadow-md">
                登入
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header

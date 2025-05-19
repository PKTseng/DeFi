import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header: React.FC = () => {
  const location = useLocation()

  const navItems = [
    { path: '/crypto', name: '加密貨幣' },
    { path: '/markets', name: '市場' },
  ]

  // 檢查是否在首頁或加密貨幣頁面
  const isActivePath = (path: string) => {
    if (path === '/crypto') {
      return location.pathname === '/crypto' || location.pathname === '/'
    }
    return location.pathname === path
  }

  return (
    <header className="w-full py-4 bg-gray-800 text-green-300 shadow">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold">CoinMarketCap</div>
        <nav>
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`hover:text-green-100 transition-colors ${
                    isActivePath(item.path) ? 'font-bold border-b-2 border-green-300' : ''
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

import React from 'react'
import { Link } from 'react-router-dom'
const Header: React.FC = () => {
  const headerItems = [
    { path: '/market', label: '市場總覽' },
    { path: '/exchanges', label: '交易所列表' },
    { path: '/trending', label: '趨勢與分析' },
    { path: '/nfts', label: 'NFTs' },
  ]

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-gradient-to-b from-gray-900/95 via-gray-800/90 to-gray-900/80 backdrop-blur-md shadow-md">
        <div className="container mx-auto py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
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
                        className="flex items-center text-base font-semibold text-gray-200 hover:text-[#8dc647] px-3 py-2 rounded-lg transition-colors hover:bg-[#8dc647]/10 focus:bg-[#8dc647]/20 focus:text-[#8dc647]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header

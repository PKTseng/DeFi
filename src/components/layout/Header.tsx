import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Search, Flame, DollarSign, BarChart3, ExternalLink, Landmark } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { useQuery } from '@tanstack/react-query'
import { searchCryptoData } from '@/api/search'
import type { Coin } from '@/types/search'

const Header: React.FC = () => {
  const [isSearchDialogOpen, setIsSearchDialogOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()
  // 使用 React Query 載入搜尋資料
  const {
    data: searchData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['searchCrypto'],
    queryFn: searchCryptoData,
    staleTime: 5 * 60 * 1000, // 5分鐘內不重新請求
    gcTime: 10 * 60 * 1000, // 快取10分鐘
  })

  // 搜尋過濾
  const searchResults = searchData?.coins || []
  const filteredCoins = searchResults
    .filter(
      (coin: Coin) =>
        coin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .slice(0, 8) // 只顯示前8個結果

  const handleCoinClick = (coinId: string) => {
    setIsSearchDialogOpen(false)
    setSearchQuery('')
    navigate(`/coins/${coinId}`)
  }

  const handleViewAllResults = () => {
    setIsSearchDialogOpen(false)
    navigate(`/search?q=${searchQuery}`)
  }

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
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="搜尋幣種、交易所..."
                  className="h-11 w-72 rounded-full bg-[#222531] pl-12 pr-4 text-base text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8dc647]/50 cursor-pointer shadow-md border border-[#8dc647]/20 hover:border-[#8dc647] transition-all"
                  onClick={() => setIsSearchDialogOpen(true)}
                  readOnly
                />
              </div>
              <Button className="rounded-full bg-[#8dc647] px-6 py-2 text-base font-semibold text-white hover:bg-[#7ab33a] focus:outline-none focus:ring-2 focus:ring-[#8dc647]/50 shadow-md">
                登入
              </Button>
            </div>
          </div>
        </div>
      </header>
      <Dialog open={isSearchDialogOpen} onOpenChange={setIsSearchDialogOpen}>
        <DialogContent className="max-w-2xl bg-[#181b23] border border-[#8dc647]/30 rounded-2xl shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-[#8dc647]">搜尋加密貨幣</DialogTitle>
            <DialogDescription className="text-gray-400">輸入加密貨幣名稱或代號進行搜尋</DialogDescription>
          </DialogHeader>
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="搜尋幣種..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-12 w-full rounded-lg bg-gray-100 pl-12 pr-4 text-base text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#8dc647]/50 shadow"
              autoFocus
            />
          </div>
          {/* 搜尋結果 */}
          {searchQuery && (
            <div className="mt-2 max-h-96 overflow-y-auto">
              {isLoading ? (
                <div className="text-center py-8 text-gray-500 text-lg">載入中...</div>
              ) : error ? (
                <div className="text-center py-8 text-red-500 text-lg">載入失敗，請稍後再試</div>
              ) : (
                <div className="space-y-2">
                  {filteredCoins.length > 0 ? (
                    <>
                      {filteredCoins.map((coin) => (
                        <div
                          key={coin.id}
                          onClick={() => handleCoinClick(coin.id)}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#8dc647]/10 cursor-pointer transition-colors group"
                        >
                          <img
                            src={coin.thumb}
                            alt={coin.name}
                            className="w-9 h-9 rounded-full border-2 border-[#8dc647] bg-white shadow group-hover:scale-110 transition-transform"
                          />
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-gray-900 truncate">{coin.name}</div>
                            <div className="text-sm text-gray-500">{coin.symbol.toUpperCase()}</div>
                          </div>
                          <div className="text-sm text-gray-400 font-mono">#{coin.market_cap_rank || '—'}</div>
                        </div>
                      ))}
                      {/* 查看更多結果按鈕 */}
                      <div className="pt-2 border-t border-[#8dc647]/20">
                        <button
                          onClick={handleViewAllResults}
                          className="w-full flex items-center justify-center gap-2 p-3 text-[#8dc647] hover:bg-[#8dc647]/10 rounded-lg transition-colors font-semibold"
                        >
                          <ExternalLink className="w-4 h-4" />
                          查看更多結果
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-8 text-gray-500 text-lg">找不到相關的加密貨幣</div>
                  )}
                </div>
              )}
            </div>
          )}
          {/* 無搜尋時顯示熱門建議 */}
          {!searchQuery && !isLoading && (
            <div className="mt-2">
              <div className="text-sm font-semibold text-gray-700 mb-3">熱門搜尋</div>
              {error ? (
                <div className="text-center py-4 text-red-500 text-sm">載入失敗，請稍後再試</div>
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  {searchResults.slice(0, 6).map((coin: Coin) => (
                    <button
                      key={coin.id}
                      onClick={() => handleCoinClick(coin.id)}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-[#8dc647]/10 transition-colors text-left"
                    >
                      <img
                        src={coin.thumb}
                        alt={coin.name}
                        className="w-7 h-7 rounded-full border border-[#8dc647] bg-white shadow"
                      />
                      <span className="text-base font-medium text-gray-900 truncate">{coin.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

export default Header

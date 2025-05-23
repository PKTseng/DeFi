import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function CryptoDetail() {
  const { id } = useParams<{ id: string }>()
  const [cryptoData, setCryptoData] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    // 這裡可以根據 id 獲取特定加密貨幣的詳細資訊
    // 例如: 從 API 獲取數據
    const fetchCryptoDetail = async () => {
      try {
        setLoading(true)
        // 模擬 API 請求
        // const response = await fetch(`https://api.example.com/crypto/${id}`)
        // const data = await response.json()

        // 假數據示例
        const mockData = {
          id: id,
          name: `加密貨幣 ${id}`,
          price: Math.random() * 10000,
          marketCap: Math.random() * 1000000000,
          volume24h: Math.random() * 500000000,
          change24h: Math.random() * 20 - 10,
        }

        setCryptoData(mockData)
      } catch (error) {
        console.error('獲取數據失敗:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCryptoDetail()
  }, [id])

  if (loading) {
    return <div className="p-4">資料載入中...</div>
  }

  if (!cryptoData) {
    return <div className="p-4">找不到該加密貨幣的資訊</div>
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{cryptoData.name}</h1>
      <div className="bg-gray-100 p-4 rounded-lg shadow">
        <div className="mb-2">
          <span className="font-semibold">價格: </span>
          <span>${cryptoData.price.toFixed(2)}</span>
        </div>
        <div className="mb-2">
          <span className="font-semibold">市值: </span>
          <span>${cryptoData.marketCap.toLocaleString()}</span>
        </div>
        <div className="mb-2">
          <span className="font-semibold">24小時交易量: </span>
          <span>${cryptoData.volume24h.toLocaleString()}</span>
        </div>
        <div>
          <span className="font-semibold">24小時變化: </span>
          <span className={cryptoData.change24h >= 0 ? 'text-green-500' : 'text-red-500'}>
            {cryptoData.change24h.toFixed(2)}%
          </span>
        </div>
      </div>
    </div>
  )
}

export default CryptoDetail

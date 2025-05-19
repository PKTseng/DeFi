import { useState, useEffect } from 'react'
// import { getCoinsMarket } from '@/api/coins'

// 假資料：加密貨幣排行榜
const mockRanking = [
  { rank: 1, name: 'Bitcoin', symbol: 'BTC' },
  { rank: 2, name: 'Ethereum', symbol: 'ETH' },
  { rank: 3, name: 'Tether', symbol: 'USDT' },
  { rank: 4, name: 'BNB', symbol: 'BNB' },
  { rank: 5, name: 'Solana', symbol: 'SOL' },
]

function Crypto() {
  // 假設的錢包狀態
  const [walletConnected, setWalletConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState('0x1234...abcd')
  const [balance, setBalance] = useState(3.14)

  // useEffect(() => {
  //   getCoinsMarket()
  //     .then((data) => {
  //       console.log(data)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }, [])

  // 假連接錢包
  const connectWallet = () => {
    setWalletConnected(true)
  }

  // 假存款/提領功能
  const deposit = () => {
    setBalance(balance + 1)
  }
  const withdraw = () => {
    if (balance > 0) setBalance(balance - 1)
  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-gray-900 rounded-2xl shadow-2xl p-10 text-gray-100 font-sans">
      {/* 加密貨幣排行榜區塊 */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-yellow-300 mb-4 text-center">加密貨幣排行榜</h2>
        <table className="w-full text-left border-separate border-spacing-y-2">
          <thead>
            <tr className="text-green-200">
              <th className="px-2">排名</th>
              <th className="px-2">名稱</th>
              <th className="px-2">代號</th>
            </tr>
          </thead>
          <tbody>
            {mockRanking.map((coin) => (
              <tr key={coin.rank} className="bg-gray-800 rounded-lg">
                <td className="px-2 py-1 font-bold">{coin.rank}</td>
                <td className="px-2 py-1">{coin.name}</td>
                <td className="px-2 py-1 text-blue-300">{coin.symbol}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h1 className="text-center text-3xl mb-7 tracking-wide font-bold text-green-300">DeFi 體驗頁面</h1>
      {!walletConnected ? (
        <button
          className="w-full py-3 bg-gradient-to-r from-green-300 to-blue-500 text-gray-900 font-bold text-lg rounded-lg hover:from-blue-500 hover:to-green-300 hover:text-white transition mb-2"
          onClick={connectWallet}
        >
          連接錢包
        </button>
      ) : (
        <div className="bg-gray-800 rounded-xl p-6 mt-2 shadow-md">
          <p className="mb-2 text-base break-all">
            地址：<span className="text-green-200">{walletAddress}</span>
          </p>
          <p className="mb-4 text-lg">
            餘額：<span className="text-blue-300 font-semibold">{balance} ETH</span>
          </p>
          <div className="flex gap-4 mt-2">
            <button
              className="flex-1 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition"
              onClick={deposit}
            >
              存款 +1 ETH
            </button>
            <button
              className="flex-1 py-2 bg-green-400 hover:bg-green-500 text-gray-900 rounded-lg font-medium transition disabled:bg-gray-500 disabled:text-gray-300"
              onClick={withdraw}
              disabled={balance <= 0}
            >
              提領 -1 ETH
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Crypto

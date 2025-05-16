import { useState } from 'react'
import './App.css'

function App() {
  // 假設的錢包狀態
  const [walletConnected, setWalletConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState('0x1234...abcd')
  const [balance, setBalance] = useState(3.14)

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
    <div className="defi-container">
      <h1>DeFi 體驗頁面</h1>
      {!walletConnected ? (
        <button className="connect-btn" onClick={connectWallet}>
          連接錢包
        </button>
      ) : (
        <div className="wallet-info">
          <p>地址：{walletAddress}</p>
          <p>餘額：{balance} ETH</p>
          <div className="actions">
            <button onClick={deposit}>存款 +1 ETH</button>
            <button onClick={withdraw} disabled={balance <= 0}>
              提領 -1 ETH
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App

# DeFi 加密貨幣數據平台

使用 React、TypeScript 和現代網頁技術構建的綜合性加密貨幣數據平台。該應用程式提供即時市場數據、詳細幣種資訊、NFT 追蹤、交易所排名和趨勢分析，由 CoinGecko API 驅動。

## 🌟 功能特色

### 📊 市場總覽

- 即時全球加密貨幣市場統計
- 市值和交易量追蹤
- 價格變化指標與視覺化圖表
- 加密貨幣市佔率圖表

### 💰 幣種資訊

- 完整的幣種列表與市場數據
- 詳細的幣種頁面包含價格歷史
- 迷你線圖顯示價格趨勢
- 市值、交易量和供應量資訊
- 歷史價格數據（ATH/ATL）

### 🎨 NFT 追蹤

- 熱門 NFT 收藏品列表
- 詳細的 NFT 專案資訊
- 地板價追蹤和變化
- 市場統計和分析

### 🏢 交易所數據

- 加密貨幣交易所排名
- 交易量和信任評分
- 交易所資訊和詳細內容

### 🔥 趨勢分析

- 熱門幣種和代幣
- 人氣 NFT 收藏品
- 市場類別表現

### 🔍 搜尋功能

- 全域搜尋幣種、交易所和 NFT
- 即時搜尋建議
- 完整的篩選選項

## 🛠️ 技術棧

- **前端框架**: React 19, TypeScript
- **樣式設計**: Tailwind CSS
- **狀態管理**: React Query (TanStack Query)
- **路由管理**: React Router DOM
- **圖表組件**: Recharts
- **UI 組件**: Radix UI primitives
- **圖標庫**: Lucide React
- **建構工具**: Vite
- **API 接口**: CoinGecko API

## 📦 安裝說明

1. 複製專案

```bash
git clone https://github.com/PKTseng/DeFi.git
cd DeFi
```

2. 安裝依賴

```bash
npm install
```

3. 啟動開發伺服器

```bash
npm run dev
```

4. 開啟瀏覽器並前往 `http://localhost:5173`

## 🚀 可用指令

- `npm run dev` - 啟動開發伺服器
- `npm run build` - 建構生產版本
- `npm run preview` - 預覽生產版本
- `npm run lint` - 執行 ESLint 檢查

## 📁 專案結構

```
src/
├── api/                 # API 服務函數
├── components/          # 可重用 UI 組件
│   ├── ui/             # 基礎 UI 組件
│   └── layout/         # 佈局組件
├── pages/              # 頁面組件
│   ├── Market/         # 市場總覽頁面
│   ├── DetailCoins/    # 幣種詳情頁面
│   ├── Nfts/          # NFT 列表頁面
│   ├── NftsDetail/    # NFT 詳情頁面
│   ├── Exchanges/     # 交易所列表頁面
│   ├── Search/        # 搜尋頁面
│   └── Trending/      # 趨勢頁面
├── types/              # TypeScript 型別定義
├── utils/              # 工具函數
├── mock/               # 開發用模擬數據
└── routes/             # 應用程式路由
```

## 🎨 UI 特色

- **深色主題**: 現代深色主題配綠色強調色
- **響應式設計**: 行動裝置優先的響應式佈局
- **互動圖表**: 即時價格圖表和市場數據
- **流暢動畫**: Framer Motion 驅動的動畫效果
- **現代介面**: 簡潔直觀的使用者介面

## 📱 響應式設計

應用程式完全響應式，針對以下設備優化：

- 桌面端 (1024px+)
- 平板端 (768px - 1023px)
- 行動端 (320px - 767px)

## 🔧 開發

### 環境需求

- Node.js 16+
- npm 或 yarn

### 開發指南

- 啟用 TypeScript 嚴格模式
- ESLint 程式碼品質檢查
- 組件化架構
- React Query 伺服器狀態管理
- Tailwind CSS 樣式設計

## 🌐 API 整合

本專案整合 CoinGecko API 提供：

- 即時加密貨幣價格
- 市場數據和統計資料
- NFT 收藏品資訊
- 交易所數據和排名
- 熱門加密貨幣

## 📄 授權條款

本專案為開源專案，採用 [MIT License](LICENSE) 授權。

## 🤝 貢獻

歡迎貢獻！請隨時提交 Pull Request。

## 📞 聯絡資訊

- 線上展示: [https://de-fi-v3q8.vercel.app/](https://de-fi-v3q8.vercel.app/)
- 專案倉庫: [https://github.com/PKTseng/DeFi](https://github.com/PKTseng/DeFi)

## 🙏 致謝

- [CoinGecko API](https://coingecko.com/api) 提供加密貨幣數據
- [React](https://reactjs.org/) UI 框架
- [Tailwind CSS](https://tailwindcss.com/) 樣式設計
- [Vite](https://vitejs.dev/) 建構工具

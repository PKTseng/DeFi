export interface Coin {
  id: string
  name: string
  api_symbol: string
  symbol: string
  market_cap_rank: number
  thumb: string
  large: string
}

export interface Exchange {
  id: string
  name: string
  market_type: string // e.g. "spot", "futures"
  thumb: string
  large: string
}

export interface Category {
  id: string
  name: string
}

export interface Nft {
  id: string
  name: string
  symbol: string
  thumb: string
}

export interface BitcoinData {
  coins: Coin[]
  exchanges: Exchange[]
  icos: [] // 根據資料為空陣列，可保留為 any[] 或定義 interface 如果之後有資料型別
  categories: Category[]
  nfts: Nft[]
}

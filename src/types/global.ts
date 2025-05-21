export interface CurrencyData {
  [key: string]: number
}

export interface MarketCapPercentage {
  [key: string]: number
}

export interface GlobalListData {
  active_cryptocurrencies: number
  upcoming_icos: number
  ongoing_icos: number
  ended_icos: number
  markets: number
  total_market_cap: CurrencyData
  total_volume: CurrencyData
  market_cap_percentage: MarketCapPercentage
  market_cap_change_percentage_24h_usd: number
  updated_at: number
}

export interface GlobalList {
  data: GlobalListData
}

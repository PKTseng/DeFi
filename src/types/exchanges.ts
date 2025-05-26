export type ExchangeItemResponse = {
  id: string
  name: string
  year_established: number
  country: string | null
  description: string | null
  url: string
  image: string
  has_trading_incentive: boolean | null
  trust_score: number
  trust_score_rank: number
  trade_volume_24h_btc: number
  trade_volume_24h_btc_normalized: number
}

export interface ExchangeDetail {
  name: string
  year_established: number | null
  country: string | null
  description: string
  url: string
  image: string
  facebook_url: string | null
  reddit_url: string | null
  telegram_url: string | null
  slack_url: string | null
  other_url_1: string | null
  other_url_2: string | null
  twitter_handle: string | null
  has_trading_incentive: boolean | null
  centralized: boolean
  public_notice: string | null
  alert_notice: string | null
  trust_score: number
  trust_score_rank: number
  trade_volume_24h_btc: number
  trade_volume_24h_btc_normalized: number
  // Added based on typical exchange data, assuming these might be present
  coins?: number
  pairs?: number
  tickers?: Ticker[]
  status_updates?: StatusUpdate[]
  maker_fee?: number // Often part of exchange details
  taker_fee?: number // Often part of exchange details
}

export interface Ticker {
  base: string
  target: string
  market: {
    name: string
    identifier: string
    has_trading_incentive: boolean
  }
  last: number
  volume: number
  converted_last: {
    btc: number
    eth: number
    usd: number
  }
  converted_volume: {
    btc: number
    eth: number
    usd: number
  }
  trust_score: string // e.g., "green", "yellow", "red"
  bid_ask_spread_percentage: number | null
  timestamp: string // ISO8601 datetime string
  last_traded_at: string // ISO8601 datetime string
  last_fetch_at: string // ISO8601 datetime string
  is_anomaly: boolean
  is_stale: boolean
  trade_url: string | null
  token_info_url: string | null
  coin_id: string
  target_coin_id?: string // Optional, for pairs like BTC/USDT, target_coin_id would be 'tether'
}

export interface StatusUpdate {
  description: string
  category: string // e.g., "general", "market", "exchange"
  created_at: string // ISO8601 datetime string
  user: string
  user_title: string
  pin: boolean
  project: {
    type: string // e.g., "Coin", "Market"
    id: string
    name: string
    image: {
      thumb: string
      small: string
      large: string
    }
  }
}

export interface ExchangeTickers {
  name: string
  tickers: Ticker[]
}

export type ExchangeVolumeChartDataPoint = [number, string]

export type ExchangeVolumeChart = ExchangeVolumeChartDataPoint[]

export interface CoinsResponse {
  id: string // ID：幣種識別碼
  symbol: string // 代號：交易代碼
  name: string // 名稱：加密貨幣名稱
  platforms?: {
    [key: string]: string
  }
}

export interface CryptoCurrency {
  id: string // ID：幣種識別碼
  symbol: string // 代號：交易代碼
  name: string // 名稱：加密貨幣名稱
  image: string // 圖片：幣種圖示網址
  current_price: number // 目前價格：當前市價（美元）
  market_cap: number // 市值：總市值（美元）
  market_cap_rank: number // 市值排名：在所有加密貨幣中的排名
  fully_diluted_valuation: number // 完全稀釋估值：假設所有代幣都流通時的總價值
  total_volume: number // 總交易量：24小時交易量（美元）
  high_24h: number // 24小時最高價：過去24小時內最高價格
  low_24h: number // 24小時最低價：過去24小時內最低價格
  price_change_24h: number // 24小時價格變動：絕對價格變化（美元）
  price_change_percentage_24h: number // 24小時價格變動百分比：相對價格變化
  market_cap_change_24h: number // 24小時市值變動：絕對市值變化（美元）
  market_cap_change_percentage_24h: number // 24小時市值變動百分比：相對市值變化
  circulating_supply: number // 流通供應量：目前市場上流通的代幣數量
  total_supply: number // 總供應量：已發行的代幣總數
  max_supply: number | null // 最大供應量：理論上能發行的最大代幣數量（可能為空）
  ath: number // 歷史最高價：有史以來的最高價格
  ath_change_percentage: number // 距離歷史最高價變動百分比：相對於最高價的變化
  ath_date: string // 歷史最高價日期：達到最高價的時間
  atl: number // 歷史最低價：有史以來的最低價格
  atl_change_percentage: number // 距離歷史最低價變動百分比：相對於最低價的變化
  atl_date: string // 歷史最低價日期：達到最低價的時間
  roi: null | {
    // 投資報酬率：投資回報率（可能為空或包含以下資料）
    times: number // 倍數：投資回報倍數
    currency: string // 貨幣：計算基準貨幣
    percentage: number // 百分比：投資回報百分比
  }
  last_updated: string // 最後更新時間：資料最後更新的時間戳
}

export interface PlatformAddresses {
  [platform: string]: string
}

export interface DetailPlatformInfo {
  decimal_place: number
  contract_address: string
}

export interface DetailPlatforms {
  [platform: string]: DetailPlatformInfo
}

export interface CoinDetail {
  id: string
  symbol: string
  name: string
  web_slug: string
  asset_platform_id: string | null
  platforms: PlatformAddresses
  detail_platforms: DetailPlatforms
  block_time_in_minutes: number
  hashing_algorithm: string | null
  categories: string[]
  preview_listing: boolean
  public_notice: string | null
  additional_notices: string[]
  description: { [lang: string]: string }
  links: CoinLinks
  image: CoinImages
  country_origin: string
  genesis_date: string | null
  contract_address: string
  sentiment_votes_up_percentage: number
  sentiment_votes_down_percentage: number
  watchlist_portfolio_users: number
  market_cap_rank: number
  market_data: MarketData
  community_data: CommunityData
  status_updates: any[]
  last_updated: string
}

export interface CoinLinks {
  homepage: string[]
  whitepaper: string
  blockchain_site: string[]
  official_forum_url: string[]
  chat_url: string[]
  announcement_url: string[]
  snapshot_url: string | null
  twitter_screen_name: string
  facebook_username: string
  bitcointalk_thread_identifier: string | null
  telegram_channel_identifier: string
  subreddit_url: string
  repos_url: {
    github: string[]
    bitbucket: string[]
  }
}

export interface CoinLinks {
  homepage: string[]
  whitepaper: string
  blockchain_site: string[]
  official_forum_url: string[]
  chat_url: string[]
  announcement_url: string[]
  snapshot_url: string | null
  twitter_screen_name: string
  facebook_username: string
  bitcointalk_thread_identifier: string | null
  telegram_channel_identifier: string
  subreddit_url: string
  repos_url: {
    github: string[]
    bitbucket: string[]
  }
}

export interface CoinImages {
  thumb: string
  small: string
  large: string
}

export interface MarketData {
  current_price: { [currency: string]: number }
  // ...以下欄位均依你需要可擴充
  total_value_locked: number | null
  market_cap: { [currency: string]: number }
  fully_diluted_valuation: { [currency: string]: number }
  market_cap_rank: number
  total_supply: number
  max_supply: number | null
  max_supply_infinite: boolean
  circulating_supply: number
  // 省略部分詳細欄位（如有需要再細拆）
  [key: string]: any
}

export interface CommunityData {
  facebook_likes: number | null
  reddit_average_posts_48h: number
  reddit_average_comments_48h: number
  reddit_subscribers: number
  reddit_accounts_active_48h: number
  telegram_channel_user_count: number | null
}

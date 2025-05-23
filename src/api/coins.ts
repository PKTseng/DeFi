import axiosIns from '@/utils/request'
import type { CoinsResponse, CryptoCurrency } from '@/types/coins'

export const getCoinsList = (): Promise<CoinsResponse[]> => {
  return axiosIns.get('/coins/list')
}

export const getCoinsMarket = (
  params: { vs_currency: string; order?: string; page?: number; per_page?: number } = {
    vs_currency: 'usd',
    order: 'market_cap_desc',
    page: 1,
    per_page: 10,
  }
): Promise<CryptoCurrency[]> => {
  return axiosIns.get('/coins/markets', { params })
}

export const getCoinsById = (
  id: string,
  params: {
    localization?: boolean // 不需要多語言
    tickers?: boolean // 不需要交易所價格（太多了）
    market_data?: boolean // 需要市場數據
    community_data?: boolean // 需要社群數據
    developer_data?: boolean // 不需要開發者數據
    sparkline?: boolean
  } = {
    localization: false, // 不要多語言
    tickers: false, // 不要交易所資料
    market_data: true, // 要市場資料
    community_data: false, // 不要社群資料
    developer_data: false, // 不要開發者資料
    sparkline: true, // 要小圖表
  }
): Promise<any> => {
  return axiosIns.get(`/coins/${id}`, { params })
}

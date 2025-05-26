import axiosIns from '@/utils/request'
import type { ExchangeItemResponse, ExchangeDetail, ExchangeTickers } from '@/types/exchanges'

export const getExchangeList = (): Promise<ExchangeItemResponse[]> => {
  return axiosIns.get('/exchanges')
}

// 查詢單一交易所的詳細資訊，交易所的介紹、數據、連結、Logo、交易量等
export const getExchangeById = (id: string): Promise<ExchangeDetail> => {
  return axiosIns.get(`/exchanges/${id}`)
}

// 查詢該交易所目前支援的所有幣種交易對，例如 BTC/USDT、ETH/USDT 的價格、成交量
export const getExchangeTickersById = (id: string): Promise<ExchangeTickers> => {
  return axiosIns.get(`exchanges/${id}/tickers`)
}

// 取得該交易所的歷史成交量數據（可畫圖表），一段時間內的每日/每小時成交量資料
export const getVolumeChartById = (id: string, params: { days: number }): Promise<ExchangeItemResponse> => {
  return axiosIns.get(`exchanges/${id}/volume_chart`, { params })
}

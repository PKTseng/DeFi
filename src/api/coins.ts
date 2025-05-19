import axiosIns from '@/utils/request'
import type { CoinsResponse, CryptoCurrency } from '@/types/coins'

export const getCoinsList = () => {
  return axiosIns.get<CoinsResponse[]>('/api/v3/coins/list')
}

export const getCoinsMarket = () => {
  return axiosIns.get<CryptoCurrency[]>('/api/v3/coins/markets')
}

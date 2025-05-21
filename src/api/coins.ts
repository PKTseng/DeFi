import axiosIns from '@/utils/request'
import type { CoinsResponse, CryptoCurrency } from '@/types/coins'

export const getCoinsList = async (): Promise<CoinsResponse[]> => {
  return await axiosIns.get('/coins/list')
}

export const getCoinsMarket = async (): Promise<CryptoCurrency[]> => {
  return await axiosIns.get('/coins/markets')
}

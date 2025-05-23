import axiosIns from '@/utils/request'
import type { ExchangeItemResponse } from '@/types/exchanges'

export const getExchangesList = (): Promise<ExchangeItemResponse[]> => {
  return axiosIns.get('/exchanges')
}

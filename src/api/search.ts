import axiosIns from '@/utils/request'
import type { BitcoinData } from '@/types/search'
import type { CoinOverviewData } from '@/types/trending'

export const searchCryptoData = (): Promise<BitcoinData> => {
  return axiosIns.get('/search')
}

export const fetchTrendingCryptos = (): Promise<CoinOverviewData> => {
  return axiosIns.get('/search/trending')
}

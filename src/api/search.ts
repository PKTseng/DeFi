import axiosIns from '@/utils/request'
import type { BitcoinData } from '@/types/search'
import type { CoinOverviewData } from '@/types/trending'

export const searchCryptoData = async (): Promise<BitcoinData> => {
  return await axiosIns.get('/search')
}

export const fetchTrendingCryptos = async (): Promise<CoinOverviewData> => {
  return await axiosIns.get('/search/trending')
}

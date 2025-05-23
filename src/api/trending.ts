import axiosIns from '@/utils/request'
import type { CoinOverviewData } from '@/types/trending'

export const getTrendingSearchList = (): Promise<CoinOverviewData> => {
  return axiosIns.get('/search/trending')
}

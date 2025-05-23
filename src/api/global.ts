import axiosIns from '@/utils/request'
import type { GlobalList } from '@/types/global'

export const getGlobalList = (): Promise<GlobalList> => {
  return axiosIns.get('/global')
}

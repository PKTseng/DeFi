import axiosIns from '@/utils/request'
import type { GlobalList } from '@/types/global'

export const getGlobalList = async (): Promise<GlobalList> => {
  return await axiosIns.get('/global')
}

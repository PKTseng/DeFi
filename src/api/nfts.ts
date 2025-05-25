import axiosIns from '@/utils/request'
import type { NftItemResponse, NftDetailResponse } from '@/types/nfts'

export const getNftsList = (): Promise<NftItemResponse[]> => {
  return axiosIns.get('/nfts/list')
}

export const getNftsById = (id: string): Promise<NftDetailResponse> => {
  return axiosIns.get(`/nfts/${id}`)
}

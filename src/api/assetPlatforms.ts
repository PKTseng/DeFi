import axiosIns from '@/utils/request'
import type { AssetPlatformsItemResponse } from '@/types/assetPlatforms'

export const fetchAssetPlatforms = (params: { filter: string }): Promise<AssetPlatformsItemResponse> => {
  return axiosIns.get('/asset_platforms', { params })
}

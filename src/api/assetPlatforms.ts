import axiosIns from '@/utils/request'
import type { AssetPlatformsItemResponse } from '@/types/assetPlatforms'

export const fetchAssetPlatforms = async (params: { filter: string }): Promise<AssetPlatformsItemResponse> => {
  return await axiosIns.get('/asset_platforms', { params })
}

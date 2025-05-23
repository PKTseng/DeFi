export interface AssetPlatformsItemResponse {
  id: string
  chain_identifier: null | number
  name: string
  shortname: string
  native_coin_id: string
  image: {
    thumb: string
    small: string
    large: string
  }
}

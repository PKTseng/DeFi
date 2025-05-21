import axiosIns from '@/utils/request'

export const fetchSimplePricesByIds = (params: { vs_currencies: string }) => {
  return axiosIns.get('/simple/price', { params })
}

export const fetchTokenPricesByAddress = (
  id: string, // e.g. 'ethereum'
  params: {
    contract_addresses: string // e.g. '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'
    vs_currencies: string // e.g. 'usd'
  }
) => {
  return axiosIns.get(`/simple/token_price/${id}`, { params })
}

export const fetchSupportedVsCurrencies = (): Promise<string[]> => {
  return axiosIns.get('/simple/supported_vs_currencies')
}

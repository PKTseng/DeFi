import axiosIns from '@/utils/request'

export const getSupportedCurrenciesList = () => {
  return axiosIns.get<string[]>('/api/v3/simple/supported_vs_currencies')
}

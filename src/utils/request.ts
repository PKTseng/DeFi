import axios, { type AxiosResponse } from 'axios'
import type { InternalAxiosRequestConfig } from 'axios'

const axiosIns = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 10000,
})

axiosIns.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    config.headers.set('accept', 'application/json')
    config.headers.set('x-cg-demo-api-key', import.meta.env.VITE_APP_API_KEY)
    return config
  },
  (error: unknown) => {
    return Promise.reject(error)
  }
)

axiosIns.interceptors.response.use(
  (response: AxiosResponse) => {
    // 可統一處理回應資料
    return response.data
  },
  (error: unknown) => {
    // 可統一處理錯誤
    return Promise.reject(error)
  }
)

export default axiosIns

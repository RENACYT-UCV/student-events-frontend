import { getAccessToken } from '@store/auth.store'
import axios from 'axios'

export const client = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL_DEVELOP}/api`,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const authClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL_DEVELOP}/api`,
  headers: {
    'Content-Type': 'application/json'
  }
})

client.interceptors.request.use(
  config => {
    const token = getAccessToken()
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

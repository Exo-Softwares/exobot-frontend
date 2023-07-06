import axios from 'axios'
import { parseCookies } from 'nookies'

const api = axios.create({
  baseURL: process.env.BACKEND_URL,
})

api.interceptors.request.use((config) => {
  const { 'exobot.access_token': accessToken } = parseCookies()
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }
  return config
})

export default api

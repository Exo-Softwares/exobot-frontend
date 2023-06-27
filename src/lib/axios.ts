import axios from 'axios'
import { parseCookies } from 'nookies'

const api = axios.create({
  baseURL: 'https://e83d-179-42-134-74.ngrok-free.app/',
})

api.interceptors.request.use((config) => {
  const { 'exobot.access_token': accessToken } = parseCookies()
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }
  return config
})

export default api

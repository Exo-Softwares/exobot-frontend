import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3001',
  withCredentials: true,
})

api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('exobot.access_token')
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }
  return config
})

export default api

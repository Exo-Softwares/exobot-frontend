import { Application } from './application'

interface Guild {
  icon?: string
  id: string
  name: string
  owner: boolean
  permissions: number
}

export interface User {
  id: string
  username: string
  discriminator: string
  guilds: Guild[]
  applications: Application[]
  avatar?: string
  email?: string
  accessToken: string
}

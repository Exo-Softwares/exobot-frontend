export interface User {
  id: string
  username: string
  discriminator: string
  avatar?: string
  email?: string
  accessToken: string
}

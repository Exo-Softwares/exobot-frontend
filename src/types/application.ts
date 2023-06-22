export interface Application {
  id?: string
  expiredAt?: Date
  createdAt?: Date
  guildId?: string
  name?: string
  stockId?: string
  botId: string
  ownerId: string
}

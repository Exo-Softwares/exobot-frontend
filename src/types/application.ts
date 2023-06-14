export interface Application {
  id?: string
  expiredAt?: Date
  createdAt?: Date
  guildId?: string
  stockId?: string
  botId: string
  ownerId: string
}

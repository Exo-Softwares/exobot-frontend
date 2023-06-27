export interface Benefit {
  id: string
  botId?: string
  benefit: string
}

export interface BotProps {
  id: string
  name: string
  color: string
  price: number
  description: string
  benefits: Benefit[]
  modulesId?: string[]
}

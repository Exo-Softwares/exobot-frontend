import { Snowflake } from './snowflake'

export interface Role {
  color: number
  id: Snowflake
  name: string
  position: number
}

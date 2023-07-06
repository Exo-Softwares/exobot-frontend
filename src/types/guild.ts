import { Channel } from './channel'
import { Role } from './roles'
import { Snowflake } from './snowflake'

export interface DiscordGuild {
  channels: Channel[]
  icon: string | null
  id: Snowflake
  name: string
  roles: Role[]
}

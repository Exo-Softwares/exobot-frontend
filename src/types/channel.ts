import { Snowflake } from './snowflake'

/* eslint-disable no-unused-vars */
export enum ChannelType {
  GuildText,
  GuildVoice = 2,
  GuildAnnouncement = 5,
  GuildForum = 15,
}

export interface Channel {
  id: Snowflake
  name: string
  type: ChannelType
}

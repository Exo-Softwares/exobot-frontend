import { Models } from '@rematch/core'

import { user } from './user'
import { guilds } from './guilds'
import { applications } from './applications'
import { notifications } from './notifications'
import { bots } from './bots'

export interface RootModel extends Models<RootModel> {
  user: typeof user
  guilds: typeof guilds
  bots: typeof bots
  applications: typeof applications
  notifications: typeof notifications
}

export const models: RootModel = {
  user,
  guilds,
  applications,
  notifications,
  bots,
}

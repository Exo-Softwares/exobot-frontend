import { Models } from '@rematch/core'

import { user } from './user'
import { guilds } from './guilds'
import { applications } from './applications'
import { notifications } from './notifications'

export interface RootModel extends Models<RootModel> {
  user: typeof user
  guilds: typeof guilds
  applications: typeof applications
  notifications: typeof notifications
}

export const models: RootModel = { user, guilds, applications, notifications }

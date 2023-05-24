import { Models } from '@rematch/core'

import { user } from './user'
import { guilds } from './guilds'

export interface RootModel extends Models<RootModel> {
    user: typeof user,
    guilds: typeof guilds,
}

export const models: RootModel = { user, guilds }
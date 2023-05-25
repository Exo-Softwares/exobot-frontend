import { Models } from "@rematch/core";

import { user } from "./user";
import { guilds } from "./guilds";
import { applications } from "./applications";

export interface RootModel extends Models<RootModel> {
  user: typeof user;
  guilds: typeof guilds;
  applications: typeof applications;
}

export const models: RootModel = { user, guilds, applications };

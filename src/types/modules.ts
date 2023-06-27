import { Command } from './commands'

export interface Module {
  id: string
  name: string
  preview: string

  commands: Command[]
}

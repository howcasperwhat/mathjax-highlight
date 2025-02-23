import { defineConfigObject } from 'reactive-vscode'
import * as Meta from './generated/meta'

export const config = defineConfigObject<
  Meta.NestedScopedConfigs
>(
  Meta.scopedConfigs.scope,
  Meta.scopedConfigs.defaults,
)

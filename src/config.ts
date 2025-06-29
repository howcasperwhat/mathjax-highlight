import type { CommentFormulaConfig, MathJaxHighlightConfig } from './types'
import { defineConfigObject } from 'reactive-vscode'
import * as Meta from './generated/meta'
import { COMMENT_FORMULA_CONFIG_DEFAULTS, COMMENT_FORMULA_NAME } from './store/constant'

export const PluginConfig = defineConfigObject<
  MathJaxHighlightConfig
>(
  Meta.scopedConfigs.scope,
  Meta.scopedConfigs.defaults,
)

export const MainConfig = defineConfigObject<
  CommentFormulaConfig
>(
  COMMENT_FORMULA_NAME,
  COMMENT_FORMULA_CONFIG_DEFAULTS,
)

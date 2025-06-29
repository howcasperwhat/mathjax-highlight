import type * as Meta from './generated/meta'

export interface NormedRegExpOptions {
  prefix: string
  suffix: string
  strict: boolean
  breakable: boolean
}

export interface AdaptedRegExpOptions {
  begin: string
  breakable?: boolean
  end: string
}
export interface BaseRegExpOptions {
  strict?: boolean
  breakable?: boolean
}

export interface MinuteRegExpOptions extends BaseRegExpOptions {
  prefix: string
  suffix: string
}

export interface UnshapedRegExpOptions extends BaseRegExpOptions {
  marker: string
}

export type RegExpOptions =
  MinuteRegExpOptions | UnshapedRegExpOptions

export type ConfigCapture = Record<string, RegExpOptions[]>

export type ReplaceKeyType<T, K extends keyof T, N> =
  Omit<T, K> & { [P in K]: N }

export type MathJaxHighlightConfig = ReplaceKeyType<
  Meta.NestedScopedConfigs,
  'map',
  Record<string, string>
>

export interface CommentFormulaConfig {
  languages: string[]
  capture: Record<string, RegExpOptions[]>
}

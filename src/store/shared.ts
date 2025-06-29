import { computed, extensionContext as context, useActiveTextEditor } from 'reactive-vscode'
import { MainConfig, PluginConfig } from '../config'
import { duplicate, normRegExpOption } from '../utils'
import { DEFAULT_CAPTURE } from './constant'

export const editor = useActiveTextEditor()
export const doc = computed(() => editor.value?.document)

export const captures = computed(() => {
  const raw = MainConfig.capture
  const langs = MainConfig.languages

  return Object.fromEntries(
    langs.map(lang => [
      lang,
      duplicate((
        raw[lang] ?? raw.default ?? DEFAULT_CAPTURE
      ).map(normRegExpOption)),
    ]),
  )
})

export const exposed = computed(() => {
  return Object.fromEntries(
    Object.entries(captures.value).map(([lang, opts]) => [
      PluginConfig.map[lang] ?? lang,
      opts.map(opt => ({
        begin: opt.prefix,
        breakable: opt.breakable,
        end: (opt.strict ? '(?<!\\\\)' : '') + opt.suffix,
      })),
    ]),
  )
})

export const base = computed(() =>
  context.value?.extension.extensionUri,
)

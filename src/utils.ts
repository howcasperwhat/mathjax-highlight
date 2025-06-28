import type { AdaptedRegExpOptions, MinuteRegExpOptions, RegExpOptions } from './types'
import { Buffer } from 'node:buffer'
import { Uri } from 'vscode'
import { CHARACTERS_NEED_ESCAPING } from './store/constant'
import { base } from './store/shared'

export function join(...paths: string[]) {
  const baseUri = base.value!
  return Uri.joinPath(baseUri, ...paths)
}

// constructs a TextMate Language definition object
export function createTextMateLanguage(lang: string, options: AdaptedRegExpOptions[]) {
  return {
    scopeName: `formula.injection.${lang}`,
    injectionSelector: `source.${lang} -meta.embedded.litemath.markdown`,
    patterns: options.map((_, idx) => ({ include: `#formula${idx}` })),
    repository: Object.fromEntries(options.map((opt, idx) => ([
      `formula${idx}`,
      opt.breakable
        ? {
          // name: 'markup.litemath',
          begin: opt.begin,
          end: opt.end,
          beginCaptures: {
            0: { name: 'punctuation.definition.litemath.begin' },
          },
          endCaptures: {
            0: { name: 'punctuation.definition.litemath.end' },
          },
          patterns: [
            {
              include: 'text.html.markdown.litemath#litemath',
            }
          ]
        }
        : {
        // name: 'markup.litemath.markdown',
        match: `(${opt.begin})(.+?)(${opt.end})`,
        captures: {
          1: { name: 'punctuation.definition.litemath.begin.markdown' },
          2: {
            name: 'meta.embedded.litemath.markdown',
            patterns: [{ include: 'text.html.markdown.litemath#litemath' }],
          },
          3: { name: 'punctuation.definition.litemath.end.markdown' },
        },
      },
    ]))),
  }
}

// package.contributes.grammar
export function createGrammarRegister(lang: string) {
  return {
    path: `./syntaxes/formula.${lang}.json`,
    scopeName: `formula.injection.${lang}`,
    injectTo: [`source.${lang}`],
    embeddedLanguages: {
      'meta.embedded.litemath.markdown': 'latex',
    },
  }
}

export function createGrammars(langs: string[]) {
  return [
    {
      language: 'markdown-litemath',
      scopeName: 'text.html.markdown.litemath',
      path: './syntaxes/litemath.json',
    },
    ...langs.map(lang => createGrammarRegister(lang)),
  ]
}

export function JSONBuffer<T>(obj: T) {
  return new Uint8Array(Buffer.from(`${JSON.stringify(obj, null, 2)}\n`, 'utf8'))
}

export function duplicate<T>(arr: T[]): T[] {
  const seen = new Set<string>()
  const result: T[] = []
  for (const item of arr) {
    const key = JSON.stringify(item)
    if (!seen.has(key)) {
      seen.add(key)
      result.push(item)
    }
  }
  return result
}

export function escapeRegExpKeywords(str: string) {
  const ans: string[] = []
  for (const char of str) {
    CHARACTERS_NEED_ESCAPING.has(char)
      ? ans.push(`\\${char}`)
      : ans.push(char)
  }
  return ans.join('')
}

export function normRegExpOption(
  options: RegExpOptions,
): Required<MinuteRegExpOptions> {
  return {
    prefix: escapeRegExpKeywords(
      'marker' in options
        ? options.marker
        : options.prefix,
    ),
    suffix: escapeRegExpKeywords(
      'marker' in options
        ? options.marker
        : options.suffix,
    ),
    strict: options.strict ?? true,
    breakable: options.breakable ?? true,
  }
}

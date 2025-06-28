export const COMMENT_FORMULA_AUTHOR = 'howcasperwhat'
export const COMMENT_FORMULA_NAME = 'comment-formula'
export const COMMENT_FORMULA_EXTENSION_DOMAIN = `${COMMENT_FORMULA_AUTHOR}.${COMMENT_FORMULA_NAME}`
export const COMMENT_FORMULA_CONFIG_DEFAULTS = {
  languages: ['c', 'cpp', 'java', 'python'],
  capture: {},
}
export const CHARACTERS_NEED_ESCAPING = new Set([
  '.',
  '^',
  '$',
  '*',
  '+',
  '?',
  '|',
  '(',
  ')',
  '[',
  ']',
  '{',
  '}',
  '\\',
])
export const DEFAULT_CAPTURE = [
  { marker: '$$', breakable: true },
  { marker: '$', breakable: false },
]
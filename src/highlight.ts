import { watch } from 'reactive-vscode'
import { workspace } from 'vscode'
import { base, exposed } from './store/shared'
import { createGrammars, createTextMateLanguage, join, JSONBuffer } from './utils'

export function useHighlight() {
  if (!base.value)
    return

  watch(
    exposed,
    async () => {
      const dir = 'syntaxes'
      const files = await workspace.fs.readDirectory(join(dir))
      for (const [file, type] of files) {
        if (type === 1 && file !== 'litemath.json') {
          workspace.fs.delete(join(dir, file))
        }
      }

      for (const [lang, opt] of Object.entries(exposed.value!)) {
        const tml = createTextMateLanguage(lang, opt)
        workspace.fs.writeFile(
          join(dir, `formula.${lang}.json`),
          JSONBuffer(tml),
        )
      }

      const pack = JSON.parse((await workspace.fs.readFile(join('package.json'))).toString())
      pack.contributes.grammars = createGrammars(Object.keys(exposed.value!))
      workspace.fs.writeFile(
        join('package.json'),
        JSONBuffer(pack),
      )
    },
    { immediate: true }
  )
}

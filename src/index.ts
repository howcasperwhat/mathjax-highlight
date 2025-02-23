import type { ExtensionContext } from 'vscode'
import { defineExtension } from 'reactive-vscode'
import { useHighlight } from './highlight'

const { activate, deactivate } = defineExtension(
  (context: ExtensionContext) => {
    useHighlight(context)
  },
)
export { activate, deactivate }

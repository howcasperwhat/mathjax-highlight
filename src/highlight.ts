import type { ExtensionContext } from 'vscode'
import { Buffer } from 'node:buffer'
import { watch } from 'reactive-vscode'
import { commands, Uri, window, workspace } from 'vscode'
import { config } from './config'

export function useHighlight(context: ExtensionContext) {
  watch(() => config.scopes, () => {
    workspace.fs.readFile(
      Uri.joinPath(
        context.extension.extensionUri,
        'syntaxes',
        'formula.json',
      ),
    ).then((data) => {
      const o = JSON.parse(data.toString())
      const os = o._scopes.toSorted()
      const ns = config.scopes.toSorted()
      if (os.toString() !== ns.toString()) {
        const n = {
          ...o,
          _scopes: ns,
          injectionSelector: ns.length ? `L:${ns.join(',')} -meta.embedded.litemath.markdown` : '',
        }
        workspace.fs.writeFile(
          Uri.joinPath(context.extension.extensionUri, 'syntaxes', 'formula.json'),
          new Uint8Array(Buffer.from(`${JSON.stringify(n, null, 2)}\n`)),
        ).then(() => {
          window.showInformationMessage(
            'You have updated the scopes should be highlighted, please reload the window to take effect.',
            'Reload Window',
          ).then((value) => {
            if (value === 'Reload Window') {
              commands.executeCommand('workbench.action.reloadWindow')
            }
          })
        })
      }
      else {
        config.debug && window.showInformationMessage('No changes detected.')
      }
    })
  }, { immediate: true })
}

import { defineExtension } from 'reactive-vscode'
import { useHighlight } from './highlight'

const { activate, deactivate } = defineExtension(useHighlight)
export { activate, deactivate }

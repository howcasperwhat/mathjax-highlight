<br>

<p align="center">
<img src="https://github.com/howcasperwhat/mathjax-highlight/blob/main/assets/logo.png?raw=true" width="120" alt="logo" />
</p>

<h1 align="center">MathJax Highlight</h1>

<p align="center">
<a href="https://marketplace.visualstudio.com/items?itemName=howcasperwhat.mathjax-highlight" target="__blank"><img src="https://img.shields.io/visual-studio-marketplace/v/howcasperwhat.mathjax-highlight.svg?color=blue&amp;label=VS%20Code%20Marketplace&logo=visual-studio-code" alt="Visual Studio Marketplace Version" /></a>
<a href="https://marketplace.visualstudio.com/items?itemName=howcasperwhat.mathjax-highlight" target="__blank"><img src="https://img.shields.io/visual-studio-marketplace/i/howcasperwhat.mathjax-highlight.svg?color=63ba83" alt="Visual Studio Marketplace Installs" /></a>
<br/>
<a href="https://github.com/howcasperwhat/mathjax-highlight" target="__blank"><img src="https://img.shields.io/github/last-commit/howcasperwhat/mathjax-highlight.svg?color=c977be" alt="GitHub last commit" /></a>
<a href="https://github.com/howcasperwhat/mathjax-highlight/issues" target="__blank"><img src="https://img.shields.io/github/issues/howcasperwhat/mathjax-highlight.svg?color=a38eed" alt="GitHub issues" /></a>
<a href="https://github.com/howcasperwhat/mathjax-highlight" target="__blank"><img alt="GitHub stars" src="https://img.shields.io/github/stars/howcasperwhat/mathjax-highlight?style=social"></a>
</p>

## Introduction
A VSCode Extensions to highlight MathJax formulas.

## Feature and Usage
<p align="center">
<img src="https://github.com/howcasperwhat/mathjax-highlight/blob/main/assets/feature.png?raw=true" alt="feature" />
<font color="gray"> syntax color is based on theme </font>
</p>

## Configurations

Set the scopes in your **User Settings** (not workspace) to avoid repeated reload prompts. Use the command `Developer: Inspect Editor Tokens and Scopes` to determine the global scope for your language (e.g., 'source.python' for `python`, 'source.js' for `javascript`, 'source' for all source languages).

**Default `scopes`:**

```json
{
  "mathjax-highlight.scopes": [
    "source.c",
    "source.cpp",
    "source.java",
    "source.python"
  ]
}
```

> [!WARNING]
> Changes take effect after reloading the editor due to VS Code limitations.
>
> `Reload Window` Message Trigger:
> 1. Change `scopes` to different value.
> 2. Update this extension when `scopes` have been changed before.

> Feel free to [open an issue](https://github.com/howcasperwhat/mathjax-highlight/issues/new) if you encounter any problem or have any suggestion.

## Reference
[VSCode Markdown](https://github.com/yzhang-gh/vscode-markdown) | [VSCode Markdown Math](https://github.com/microsoft/vscode/tree/main/extensions/markdown-math)

## License
Code is under the [MIT License](https://github.com/howcasperwhat/mathjax-highlight/blob/main/LICENSE).

Logo using [carbon:function](https://github.com/carbon-design-system/carbon) as an element is under the [Apache License 2.0](https://github.com/carbon-design-system/carbon/blob/main/LICENSE).

Fonts used in feature image are `Dancing Script` (for `Before` and `After`) under the [Open Font License](https://openfontlicense.org/open-font-license-official-text/) and `Input` (for code) under the [Input Font License](https://input.djr.com/license/)

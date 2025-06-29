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
</p>

## Configurations

> [!WARNING]
> Reload the Window to make the highlight work when update `comment-formula.languages` or `comment-formula.capture`.

Some language ids are not the same as the scope names, so you should set `mathjax-highlight.map` to map the language ids to the scope names.

For example:
```json
{
  "mathjax-highlight.map": {
    "javascript": "js"
  }
}
```

> Feel free to [open an issue](https://github.com/howcasperwhat/mathjax-highlight/issues/new) if you encounter any problem or have any suggestion.

## Reference
[VSCode Markdown](https://github.com/yzhang-gh/vscode-markdown) | [VSCode Markdown Math](https://github.com/microsoft/vscode/tree/main/extensions/markdown-math)

## License
Code is under the [MIT License](https://github.com/howcasperwhat/mathjax-highlight/blob/main/LICENSE).

Logo using [carbon:function](https://github.com/carbon-design-system/carbon) as an element is under the [Apache License 2.0](https://github.com/carbon-design-system/carbon/blob/main/LICENSE).

Fonts used in feature image are `Dancing Script` (for `Before` and `After`) under the [Open Font License](https://openfontlicense.org/open-font-license-official-text/) and `Input` (for code) under the [Input Font License](https://input.djr.com/license/)

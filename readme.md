# electron-load-devtool

[![Build Status](https://travis-ci.org/akameco/electron-load-devtool.svg?branch=master)](https://travis-ci.org/akameco/electron-load-devtool)
[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors)

> Easily Load devtools-extension for electron

## why?

Electron supports the Chrome DevTools Extension.
But, it's a [very bother](https://github.com/electron/electron/blob/master/docs/tutorial/devtools-extension.md).
This module can load simply for your development environment.
And, support some devtool-extensions like redux-devtools by default.

## Install

```
$ npm install --save-dev electron-load-devtool
```

## Usage

```js
const electron = require('electron')
const loadDevtool = require('electron-load-devtool')

electron.app.on('ready', () => {
  const win = new electron.BrowserWindow({ width: 400, height: 400 })
  win.loadURL(`file://${__dirname}/index.html`)

  loadDevtool(loadDevtool.REDUX_DEVTOOLS)

  win.openDevTools()
})
```

## API

### `loadDevtool(devtoolId, [options])`

#### devtoolId

Type: `string`

#### options

##### enabled

Type: `boolean`<br>

Only runs when in development, unless overridden by the enabled option.
So no need to guard it for production.

##### name

Type: `string`<br>
Default: `google-chrome`

If you using chromium on Linux, set `chromium`.

##### profile

Type: `string`<br>
Default: `Default`

Specific Chrome Profile name.

##### version

Type: `string`<br>
Default: `latest`

Specific devtools-extension version.

### `loadDevtool.REDUX_DEVTOOLS`

### `loadDevtool.EMBER_INSPECTOR`

### `loadDevtool.REACT_DEVELOPER_TOOLS`

### `loadDevtool.BACKBONE_DEBUGGER`

### `loadDevtool.JQUERY_DEBUGGER`

### `loadDevtool.ANGULARJS_BATARANG`

### `loadDevtool.VUEJS_DEVTOOLS`

### `loadDevtool.VUEJS_DEVTOOLS_BETA`

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars2.githubusercontent.com/u/4002137?v=4" width="100px;"/><br /><sub><b>akameco</b></sub>](http://akameco.github.io)<br />[💻](https://github.com/akameco/electron-load-devtool/commits?author=akameco "Code") [📖](https://github.com/akameco/electron-load-devtool/commits?author=akameco "Documentation") [🚇](#infra-akameco "Infrastructure (Hosting, Build-Tools, etc)") | [<img src="https://avatars2.githubusercontent.com/u/178418?v=4" width="100px;"/><br /><sub><b>mactkg</b></sub>](http://mactkg.hateblo.jp)<br />[💻](https://github.com/akameco/electron-load-devtool/commits?author=mactkg "Code") | [<img src="https://avatars3.githubusercontent.com/u/65505?v=4" width="100px;"/><br /><sub><b>Jasper Poppe</b></sub>](https://github.com/jpoppe)<br />[💻](https://github.com/akameco/electron-load-devtool/commits?author=jpoppe "Code") | [<img src="https://avatars0.githubusercontent.com/u/5965113?v=4" width="100px;"/><br /><sub><b>Yoshiyuki Kinjo</b></sub>](https://github.com/yskkin)<br />[💻](https://github.com/akameco/electron-load-devtool/commits?author=yskkin "Code") |
| :---: | :---: | :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## License

MIT © [akameco](http://akameco.github.io)

# electron-load-devtool [![Build Status](https://travis-ci.org/akameco/electron-load-devtool.svg?branch=master)](https://travis-ci.org/akameco/electron-load-devtool)

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
const electron = require('electron');
const loadDevtool = require('electron-load-devtool');

electron.app.on('ready', () => {
	const win = new electron.BrowserWindow({width: 400, height: 400});
	win.loadURL(`file://${__dirname}/index.html`);

	loadDevtool(loadDevtool.REDUX_DEVTOOLS);

	win.openDevTools();
});
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

## License

MIT © [akameco](http://akameco.github.io)

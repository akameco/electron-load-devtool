# electron-load-devtool [![Build Status](https://travis-ci.org/akameco/electron-load-devtool.svg?branch=master)](https://travis-ci.org/akameco/electron-load-devtool)

> Easily Load devtools-extension for electron

See [electron/devtools-extension.md](https://github.com/electron/electron/blob/master/docs/tutorial/devtools-extension.md)

## Install

```
$ npm install --save electron-load-devtool
```


## Usage

```js
'use strict';
const electron = require('electron');
const electronLoadDevtool = require('electron-load-devtool');

const reduxDevtool = 'lmhkpmbekcpmknklioeibfkpmmfibljd';

electron.app.on('ready', () => {
	const win = new electron.BrowserWindow({width: 400, height: 400});
	win.loadURL(`file://${__dirname}/index.html`);

	electronLoadDevTool(reduxDevtool);

	win.openDevTools();
});
```


## API

### electronLoadDevtool(devtoolId, [options])

#### devtoolId

Type: `string`

#### options

##### name

Type: `string`<br>
Default: `google-chrome`

If you using chromium, set `chromium`.

##### version

Type: `string`<br>
Default: `latest`

Specific devtools-extension version.

## devtools-extension ids table

name | id
--- | ---
react-developer-tools | fmkadmapgofadopljbjfkapdkoienihi
redux-devtools | lmhkpmbekcpmknklioeibfkpmmfibljd
angularjs-batarang | ighdmehidhipcmcojjgiloacoafjmpfk
vuejs-devtools | nhdogjmejiglipccpnnnanhbledajbpd
vuejs-devtools | nhdogjmejiglipccpnnnanhbledajbpd
ember-inspector | bmdblncegkenkacieihfhpjfppoconhi

## License

MIT © [akameco](http://akameco.github.io)

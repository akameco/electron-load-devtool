'use strict';
const fs = require('fs');
const os = require('os');
const path = require('path');
const electron = require('electron');
const isDev = require('electron-is-dev');

const BrowserWindow = electron.BrowserWindow;

const env = process.env;
const homedir = os.homedir();

const macos = () => path.join(homedir, 'Library/Application Support/Google/Chrome/Default/Extensions');

const windows = () => {
	const appData = env.LOCALAPPDATA || path.join(homedir, 'AppData', 'Local');
	return path.join(appData, 'Google', 'Chrome', 'User Data', 'Default', 'Extensions');
};

const linux = chrome => {
	chrome = chrome || 'google-chrome';
	return path.join(homedir, '.config', chrome, 'Default', 'Extensions');
};

const extensionPath = name => {
	if (process.platform === 'darwin') {
		return macos();
	}

	if (process.platform === 'win32') {
		return windows();
	}

	return linux(name);
};

const x = module.exports = (target, opts) => {
	opts = Object.assign({
		enabled: null
	}, opts);

	if (opts.enabled === false && (opts.enabled === null && isDev)) {
		return;
	}

	if (typeof target === 'string') {
		target = {id: target};
	}

	const alredyAdded = target.name &&
		BrowserWindow.getDevToolsExtensions &&
		{}.hasOwnProperty.call(BrowserWindow.getDevToolsExtensions(), target.name);

	if (alredyAdded) {
		return;
	}

	opts = opts || {};

	if (!opts.name) {
		opts.name = 'google-chrome';
	}

	const extension = extensionPath();

	if (!opts.version || opts.version === 'latest') {
		try {
			const versions = fs.readdirSync(path.join(extension, target.id)).sort();
			opts.version = versions.pop();
		} catch (err) {
			console.warn(`Skip loading '${target.name}' because it can't be found. Please install at Chrome Web Store.`);
			return;
		}
	}

	BrowserWindow.addDevToolsExtension(path.join(extension, target.id, opts.version));
};

x.REDUX_DEVTOOLS = {
	id: 'lmhkpmbekcpmknklioeibfkpmmfibljd',
	name: 'Redux DevTools'
};

x.EMBER_INSPECTOR = {
	id: 'bmdblncegkenkacieihfhpjfppoconhi',
	name: 'Ember Inspector'
};

x.REACT_DEVELOPER_TOOLS = {
	id: 'fmkadmapgofadopljbjfkapdkoienihi',
	name: 'React Developer Tools'
};

x.BACKBONE_DEBUGGER = {
	id: 'bhljhndlimiafopmmhjlgfpnnchjjbhd',
	name: 'Backbone Debugger'
};

x.JQUERY_DEBUGGER = {
	id: 'dbhhnnnpaeobfddmlalhnehgclcmjimi',
	name: 'jQuery Debugger'
};

x.ANGULARJS_BATARANG = {
	id: 'ighdmehidhipcmcojjgiloacoafjmpfk',
	name: 'AngularJS Batarang'
};

x.VUEJS_DEVTOOLS = {
	id: 'nhdogjmejiglipccpnnnanhbledajbpd',
	name: 'Vue.js devtools'
};

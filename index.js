'use strict';
const fs = require('fs');
const os = require('os');
const path = require('path');
const electron = require('electron');

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

module.exports = (id, opts) => {
	if (typeof id !== 'string') {
		throw new TypeError('Expected a string');
	}

	opts = opts || {};

	if (!opts.name) {
		opts.name = 'google-chrome';
	}

	const extension = extensionPath();

	if (!opts.version || opts.version === 'latest') {
		const versions = fs.readdirSync(path.join(extension, id)).sort();
		opts.version = versions.pop();
	}

	electron.BrowserWindow.addDevToolsExtension(path.join(extension, id, opts.version));
};

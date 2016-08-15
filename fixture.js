'use strict';
const electron = require('electron');
const electronLoadDevTool = require('./');

const reduxDevtool = 'lmhkpmbekcpmknklioeibfkpmmfibljd';

electron.app.on('ready', () => {
	const win = new electron.BrowserWindow({width: 400, height: 400});
	win.loadURL(`file://${__dirname}/fixture.html`);

	electronLoadDevTool(reduxDevtool);

	win.openDevTools();
});

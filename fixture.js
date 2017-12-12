'use strict'
const electron = require('electron')
const devtool = require('./')

electron.app.on('ready', () => {
  const win = new electron.BrowserWindow({ width: 400, height: 400 })
  win.loadURL(`file://${__dirname}/fixture.html`)

  devtool(devtool.REDUX_DEVTOOLS)
  devtool(devtool.VUEJS_DEVTOOLS)

  win.openDevTools()
})

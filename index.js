'use strict'
const fs = require('fs')
const os = require('os')
const path = require('path')
const electron = require('electron')
const isDev = require('electron-is-dev')

const BrowserWindow = electron.BrowserWindow

const homedir = os.homedir()

const macos = profile =>
  path.join(
    homedir,
    'Library',
    'Application Support',
    'Google',
    'Chrome',
    profile,
    'Extensions'
  )

const windows = profile => {
  const appData =
    process.env.LOCALAPPDATA || path.join(homedir, 'AppData', 'Local')
  return path.join(
    appData,
    'Google',
    'Chrome',
    'User Data',
    profile,
    'Extensions'
  )
}

const linux = (chrome, profile) => {
  chrome = chrome || 'google-chrome'
  const configPath = path.join('.config', chrome, profile, 'Extensions')
  const candidates = [
    path.join(homedir, configPath),
    path.join(homedir, 'snap', chrome, 'current', configPath)
  ]
  return candidates.find(candidate => fs.existsSync(candidate))
}

const extensionPath = (name, profile) => {
  if (process.platform === 'darwin') {
    return macos(profile)
  }

  if (process.platform === 'win32') {
    return windows(profile)
  }

  return linux(name, profile)
}

module.exports = (target, opts) => {
  opts = {
    enabled: null,
    name: 'google-chrome',
    profile: 'Default',
    ...opts
  }

  if (opts.enabled === false || (opts.enabled === null && !isDev)) {
    return
  }

  if (typeof target === 'string') {
    target = { id: target }
  }

  const alredyAdded =
    target.name &&
    BrowserWindow.getDevToolsExtensions &&
    {}.hasOwnProperty.call(BrowserWindow.getDevToolsExtensions(), target.name)

  if (alredyAdded) {
    return
  }

  const extension = extensionPath(opts.name, opts.profile)

  if (!opts.version || opts.version === 'latest') {
    try {
      const versions = fs.readdirSync(path.join(extension, target.id)).sort()
      opts.version = versions.pop()
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn(
        `Skip loading '${
          target.name
        }' because it can't be found. Please install at Chrome Web Store.`
      )
      return
    }
  }

  BrowserWindow.addDevToolsExtension(
    path.join(extension, target.id, opts.version)
  )
}

const x = module.exports

x.REDUX_DEVTOOLS = {
  id: 'lmhkpmbekcpmknklioeibfkpmmfibljd',
  name: 'Redux DevTools'
}

x.EMBER_INSPECTOR = {
  id: 'bmdblncegkenkacieihfhpjfppoconhi',
  name: 'Ember Inspector'
}

x.REACT_DEVELOPER_TOOLS = {
  id: 'fmkadmapgofadopljbjfkapdkoienihi',
  name: 'React Developer Tools'
}

x.BACKBONE_DEBUGGER = {
  id: 'bhljhndlimiafopmmhjlgfpnnchjjbhd',
  name: 'Backbone Debugger'
}

x.JQUERY_DEBUGGER = {
  id: 'dbhhnnnpaeobfddmlalhnehgclcmjimi',
  name: 'jQuery Debugger'
}

x.ANGULARJS_BATARANG = {
  id: 'ighdmehidhipcmcojjgiloacoafjmpfk',
  name: 'AngularJS Batarang'
}

x.VUEJS_DEVTOOLS = {
  id: 'nhdogjmejiglipccpnnnanhbledajbpd',
  name: 'Vue.js devtools'
}

x.VUEJS_DEVTOOLS_BETA = {
  id: 'ljjemllljcmogpfapbkkighbhhppjdbg',
  name: 'Vue.js devtools beta channel'
}

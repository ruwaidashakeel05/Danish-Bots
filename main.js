const { app, BrowserWindow, session } = require('electron')
const path = require('path')

app.commandLine.appendSwitch('disable-http2')

function createWindow() {
  const win = new BrowserWindow({
    width: 1100,
    height: 700,
    backgroundColor: '#0d0c16',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      sandbox: false,
      webviewTag: true
    }
  })

  win.loadFile('index.html')
}

app.on('web-contents-created', (event, contents) => {
  if (contents.getType() === 'webview') {
    contents.setWindowOpenHandler(({ url }) => {
      contents.loadURL(url)
      return { action: 'deny' }
    })
  }
})

app.whenReady().then(async () => {
  try {
    await session.defaultSession.extensions.loadExtension(
      path.join(__dirname, 'extensions', 'myloft')
    )
    console.log('MyLoft extension loaded successfully')
  } catch (err) {
    console.error('Failed to load extension:', err)
  }

  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
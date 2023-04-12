// eslint-disable-next-line no-undef
const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  })

  win.loadURL('index.html')
}

app.whenReady().then(() => {
  createWindow()
})
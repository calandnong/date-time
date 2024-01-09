import { join } from 'path';
import { app, shell, BrowserWindow, ipcMain } from 'electron';
import { electronApp, optimizer, is } from '@electron-toolkit/utils';
import icon from '../../resources/icon.png?asset';
import { startDataSourceService } from './data-source/core/applicaiton';
import { getUserCount } from './data-source/services/user.service';

function createWindow(): void {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false,
      devTools: true,
    },
    // ---隐藏默认导航栏
    frame: false, // win
    // titleBarStyle: 'hidden', // mac
    // ---隐藏默认导航栏
  });

  mainWindow.webContents.openDevTools();

  mainWindow.on('ready-to-show', () => {
    mainWindow.show();
  });

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url);
    return { action: 'deny' };
  });

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env.ELECTRON_RENDERER_URL) {
    mainWindow.loadURL(process.env.ELECTRON_RENDERER_URL);
  }
  else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'));
  }

  ipcMain.on('min', () => {
    console.log('缩小了');
    mainWindow.minimize();
  });
  ipcMain.on('max', () => {
    if (mainWindow.isFullScreen()) {
      console.log('缩小');
      mainWindow.fullScreen = false;
    }
    else {
      console.log('放大');
      mainWindow.fullScreen = true;
    }
  });
  ipcMain.on('window-all-closed', () => app.quit());
}

app.whenReady().then(() => {
  electronApp.setAppUserModelId('com.electron');
  startDataSourceService();

  getUserCount().then((res) => {
    console.log('数据来了', res);
  });

  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window);
  });

  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

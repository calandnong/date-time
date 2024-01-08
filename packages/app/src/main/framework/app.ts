import { join } from 'path';
import { BrowserWindow } from 'electron';
import type { FrameWork } from './core';

/**
 * 应用框架
 */
export class Application {
  mainWindow!: BrowserWindow;

  constructor(private framework: FrameWork) {
    console.log('执行应用', this.framework);
    this.createMainWindow();
  }

  createMainWindow() {
    this.mainWindow = new BrowserWindow({
      width: 900,
      height: 670,
      show: false,
      autoHideMenuBar: true,
      ...(process.platform === 'linux' ? { icon: '' } : {}),
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
  }
}

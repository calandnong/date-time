export enum WinStatus {
  MAX = 'max',
  MIN = 'min',
  CLOSE = 'window-all-closed',
}

export function setWinStatus(type: WinStatus) {
  console.log(type);
  console.log(window.electron);
  window.electron.ipcRenderer.send(type);
}

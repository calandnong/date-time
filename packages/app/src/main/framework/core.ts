export interface FrameWork {
  /**
   * 应用打开前
   */
  beforeReady?(): Promise<void> | void;
  /**
   * 应用打开时
   */
  ready?(): Promise<void> | void;
  /**
   * 应用退出前
   */
  beforeQuit?(): Promise<void> | void;
  /**
   * 创建窗口
   */
  createWindow?(): Promise<void> | void;
}

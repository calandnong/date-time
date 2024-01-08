import type { FrameWork } from './framework';
import { App } from './framework';

@App
export class DateTimeApplication implements FrameWork {
  beforeReady(): void | Promise<void> {
    console.log('你好');
  }

  beforeQuit(): void | Promise<void> {

  }
}

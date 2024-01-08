import type { FrameWork } from '../core';
import { Application } from '../app';

export function App<T extends new (...args: any[]) => FrameWork>(constructor: T) {
  const framework = new constructor();
  // eslint-disable-next-line no-new
  new Application(framework);
}

import { MODULE_DEFINE_DECORATOR, MODULE_DEFINE_DECORATOR_MODULE_DATA } from '../constant';

export type Constructor = new (...args: any[]) => any;

export interface Module {
  module?: Module[];
  entity?: object[];
  service?: Constructor[];
  dao?: Constructor[];
}

/**
 * 定义模块
 * @param module
 * @returns
 */
export function defineModule(module: Module) {
  return module;
}

/**
 * 定义模块装饰器
 * @param module
 * @returns
 */
export function DefineModule(module: Module) {
  return <T extends Constructor>(target: T) => {
    Reflect.defineMetadata(MODULE_DEFINE_DECORATOR, true, target);
    Reflect.defineMetadata(MODULE_DEFINE_DECORATOR_MODULE_DATA, module, target);
  };
}

export type Constructor = new (...args: any[]) => any;

export type ModuleImport = Module | Constructor;

export interface Module {
  module?: ModuleImport[];
  entity?: object[];
  service?: Constructor[];
  dao?: Constructor[];
}

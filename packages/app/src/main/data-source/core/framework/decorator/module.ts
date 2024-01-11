export type Constructor = new (...args: any[]) => any;

export interface Module {
  module?: Module[];
  entity?: object[];
  service?: Constructor[];
  dao?: Constructor[];
}

// export function Module(module: Module): Module {
//   return new class {

//   }
// }

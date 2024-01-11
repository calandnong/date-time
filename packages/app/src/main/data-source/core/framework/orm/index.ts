import { Container, Token } from 'typedi';
import type { DBDriver } from '../driver';
import { type Module } from '../module';

export interface ORMConfig {
  appModule: Module;
}

export class $__PrivateDBDriver {
  getName() {
    return '$__PrivateDBDriver';
  }
}
export const KK = new Token('SECRET_VALUE_KEY');

export class ORMFactory<Entity, Repository, DBDriverType extends DBDriver<Entity, Repository>> {
  constructor(
    private dbDriver: DBDriverType,
  ) {}

  create(appModule: Module) {
    // 初始化数据库驱动
    this.dbDriver.init();
    Container.set({
      id: 'xxxRepo',
      type: $__PrivateDBDriver,
      factory(...args: any[]) {
        console.log('Container----', args[0].services);
      },
      value: $__PrivateDBDriver,
    });
    console.log('appModule', appModule);
  }
}

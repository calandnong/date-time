import type { DBDriver } from '../driver';
import { ormContainer } from '../ioc';
import type { Constructor, Module } from '../decorator';
import { INJECT_KEYS, META_TAGS, MODULE_DEFINE_DECORATOR, MODULE_DEFINE_DECORATOR_MODULE_DATA } from '../constant';
import type { ModuleImport } from '../decorator/module';

export interface ORMConfig {
  appModule: Module;
}

function isConstructor(value: unknown): value is Constructor {
  if (typeof value === 'function' && Reflect.getMetadata(MODULE_DEFINE_DECORATOR, value as Object)) {
    return true;
  }
  return false;
}

export class ORMFactory<Entity, Repository, DBDriverType extends DBDriver<Entity, Repository>> {
  constructor(
    private dbDriver: DBDriverType,
  ) { }

  extractEntities(module: ModuleImport): object[] {
    const entities: object[] = [];

    if (isConstructor(module)) {
      const constructorModule = Reflect.getMetadata(MODULE_DEFINE_DECORATOR_MODULE_DATA, module);
      if (constructorModule.entity) {
        entities.push(...constructorModule.entity);
      }

      if (constructorModule.module) {
        for (const subModule of constructorModule.module) {
          entities.push(...this.extractEntities(subModule));
        }
      }
    }
    else {
      if (module.entity) {
        entities.push(...module.entity);
      }

      if (module.module) {
        for (const subModule of module.module) {
          entities.push(...this.extractEntities(subModule));
        }
      }
    }

    return entities;
  }

  async create(appModule: ModuleImport) {
    const entities = this.extractEntities(appModule) as unknown as Entity[];
    console.log('entities', entities);

    // 初始化数据库驱动
    await this.dbDriver.init({
      entities,
    });

    ormContainer.bind(INJECT_KEYS.REPOSITORY)
      .toDynamicValue((context) => {
        const metadata = context.currentRequest.target.metadata;
        let entity: unknown;
        metadata.forEach((item) => {
          if (item.key === META_TAGS.REPOSITORY_ENTITY_TAG) {
            entity = item.value;
          }
        });
        console.log(entity);
        return this.dbDriver.getRepository(entity as Entity);
      });
    console.log('appModule', appModule);
  }
}

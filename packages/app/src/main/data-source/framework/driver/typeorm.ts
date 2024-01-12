import path from 'path';
import { DataSource } from 'typeorm';
import type { EntitySchema, EntityTarget, Repository } from 'typeorm';
import { app } from 'electron';
import type { BetterSqlite3ConnectionOptions } from 'typeorm/driver/better-sqlite3/BetterSqlite3ConnectionOptions';
import type { InitConfig } from './core';
import { DBDriver } from './core';

export class TypeOrmDBDriver extends DBDriver<EntityTarget<object>, Repository<object>> {
  dataSource!: DataSource;

  async init(config: InitConfig<EntityTarget<object>>) {
    const database = 'user';
    // 使用该方法获取缓存目录从而实现软件升级或卸载数据保留
    // 例：windows下文件存储位置
    // C:\Users\WHWAN\AppData\Roaming\pc-client\data\message.db
    const basePath = path.join(
      app.getPath('appData'),
      app.getName(),
      `./data/${database}.db`,
    );
    console.log('basePath', basePath);

    console.log('config.entities', config.entities);

    const options: BetterSqlite3ConnectionOptions = {
      type: 'better-sqlite3',
      entities: [
        ...config.entities as EntitySchema[],
      ],
      database: basePath,
      synchronize: true,
    };
    this.dataSource = new DataSource(options);
    await this.dataSource.initialize();
  }

  getRepository(entity: EntityTarget<object>): Repository<object> {
    console.log('entity', entity);
    return this.dataSource.getRepository(entity);
    // return {} as Repository<object>;
  }
}

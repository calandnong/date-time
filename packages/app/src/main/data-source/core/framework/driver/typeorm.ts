import path from 'path';

import { DataSource } from 'typeorm';
import type { EntityTarget, Repository } from 'typeorm';
import { app } from 'electron';
import type { BetterSqlite3ConnectionOptions } from 'typeorm/driver/better-sqlite3/BetterSqlite3ConnectionOptions';
import { DBDriver } from './core';

export class TypeOrmDBDriver extends DBDriver<EntityTarget<object>, Repository<object>> {
  // dataSource!: DataSource;

  init(): void {
    // const database = 'user';
    // // 使用该方法获取缓存目录从而实现软件升级或卸载数据保留
    // // 例：windows下文件存储位置
    // // C:\Users\WHWAN\AppData\Roaming\pc-client\data\message.db
    // const basePath = path.join(
    //   app.getPath('appData'),
    //   app.getName(),
    //   `./data/${database}.db`,
    // );
    // console.log('basePath', basePath);

    // const options: BetterSqlite3ConnectionOptions = {
    //   type: 'better-sqlite3',
    //   entities: [],
    //   database: basePath,
    //   synchronize: true,
    // };
    // this.dataSource = new DataSource(options);
  }

  getRepository(entity: EntityTarget<object>): Repository<object> {
    console.log('entity', entity);
    // return this.dataSource.getRepository(entity);
    return {} as Repository<object>;
  }
}

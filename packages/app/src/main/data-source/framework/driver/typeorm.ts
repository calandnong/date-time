import { DataSource } from 'typeorm';
import type { EntitySchema, EntityTarget, Repository } from 'typeorm';
import type { BetterSqlite3ConnectionOptions } from 'typeorm/driver/better-sqlite3/BetterSqlite3ConnectionOptions';
import type { InitConfig } from './core';
import { DBDriver } from './core';

export interface TypeOrmDBDriverConfig extends Omit<BetterSqlite3ConnectionOptions, 'type'> {
}

export class TypeOrmDBDriver extends DBDriver<EntityTarget<object>, Repository<object>> {
  dataSource!: DataSource;
  config: TypeOrmDBDriverConfig;

  constructor(
    config: TypeOrmDBDriverConfig,
  ) {
    super();
    this.config = config;
  }

  async init(config: InitConfig<EntityTarget<object>>) {
    const options: BetterSqlite3ConnectionOptions = {
      type: 'better-sqlite3',
      entities: [
        ...config.entities as EntitySchema[],
      ],
      ...(this.config || {}),
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

import path from 'path';
import { app } from 'electron';
import { DataSource } from 'typeorm';
import type { BetterSqlite3ConnectionOptions } from 'typeorm/driver/better-sqlite3/BetterSqlite3ConnectionOptions';
import User from '../entities/user.entity';

let dataSource!: DataSource;

export function getDataSource() {
  return dataSource;
}

const database = 'user';

/**
 * 启动数据库服务
 */
export function startDataSourceService() {
  // 使用该方法获取缓存目录从而实现软件升级或卸载数据保留
  // 例：windows下文件存储位置
  // C:\Users\WHWAN\AppData\Roaming\pc-client\data\message.db
  const basePath = path.join(
    app.getPath('appData'),
    app.getName(),
      `./data/${database}.db`,
  );
  console.log('basePath', basePath);

  const options: BetterSqlite3ConnectionOptions = {
    type: 'better-sqlite3',
    entities: [
      User,
    ],
    database: basePath,
    synchronize: true,
  };
  dataSource = new DataSource(options);
}

import 'reflect-metadata';
import path from 'path';
import { app } from 'electron';
import { ORMFactory } from './framework';
import { TypeOrmDBDriver } from './framework/driver';
import { ormContainer } from './framework/ioc';
import { AppModule } from './modules/app.module';
import type { UserService } from './modules/user/user.service';

/**
 * 启动数据库服务
 */
export async function startDBService() {
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
  const ormFactory = new ORMFactory(new TypeOrmDBDriver({
    database: basePath,
    synchronize: true,
  }));
  await ormFactory.create(AppModule);
  console.log(await ormContainer.get<UserService>('UserService').getList());
}

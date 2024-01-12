import 'reflect-metadata';
import { ORMFactory } from './framework';
import { TypeOrmDBDriver } from './framework/driver';
import { ormContainer } from './framework/ioc';
import { AppModule } from './modules/app.module';
import type { UserService } from './modules/user/user.service';

/**
 * 启动数据库服务
 */
export async function startDBService() {
  const ormFactory = new ORMFactory(new TypeOrmDBDriver());
  await ormFactory.create(AppModule);
  console.log(await ormContainer.get<UserService>('UserService').getList());
}

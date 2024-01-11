import 'reflect-metadata';
import { Container } from 'typedi';
import { ORMFactory } from '../framework';
import { TypeOrmDBDriver } from '../framework/driver';
import appModule from './modules/app.module';
import type { UserService } from './modules/user/user.service';

function run() {
  const ormFactory = new ORMFactory(new TypeOrmDBDriver());
  ormFactory.create(appModule);

  console.log(Container.get<UserService>('UserService').getList());
}

run();

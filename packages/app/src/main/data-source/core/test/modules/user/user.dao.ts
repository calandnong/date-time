import type { Repository } from 'typeorm';

import { Service } from 'typedi';

import { Repo } from '../../../framework';

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { $__PrivateDBDriver } from '../../../framework/orm/index';
import UserEntity from './user.entity';

@Service('UserDao')
export default class UserDao {
  @Repo(UserEntity)
  // @Inject()
  userRepository!: $__PrivateDBDriver;

  getUserList(userId: number) {
    console.log('userid', userId);
    console.log('getUserList', this.userRepository);
  }
}

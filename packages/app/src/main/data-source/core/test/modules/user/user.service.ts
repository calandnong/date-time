import { Inject, Service } from 'typedi';
import type UserDao from './user.dao';

@Service('UserService')
export class UserService {
  @Inject('UserDao')
  userDao!: UserDao;

  getList() {
    return this.userDao.getUserList(11);
  }
}

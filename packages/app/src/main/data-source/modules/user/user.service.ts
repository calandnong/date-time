import { inject } from 'inversify';
import { Service } from '../../framework/decorator/service';
import type UserDao from './user.dao';

@Service()
export class UserService {
  @inject('UserDao')
  userDao!: UserDao;

  getList() {
    return this.userDao.getUserList(11);
  }
}

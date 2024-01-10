import type { Repository } from 'typeorm';
import type User from '../entities/user.entity';
import type { IUserRepository } from './user.repository.interface';

export default class UserRepository implements IUserRepository {
  userDao!: Repository<User>;

  getUserList(userId: number) {
    return this.userDao.findOne({
      where: {
        id: userId,
      },
    });
  }
}

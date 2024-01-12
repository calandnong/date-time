import type { Repository } from 'typeorm';
import { Repo } from '../../framework';
import { Service } from '../../framework/decorator/service';
import UserEntity from './user.entity';

@Service()
export default class UserDao {
  @Repo(UserEntity)
  userRepository!: Repository<UserEntity>;

  getUserList(userId: number) {
    console.log('userid', userId);
    console.log('getUserList', this.userRepository);
    return this.userRepository.find();
  }
}

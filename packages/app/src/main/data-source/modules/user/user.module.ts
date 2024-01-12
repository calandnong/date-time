import { defineModule } from '../../framework';
import UserDao from './user.dao';
import UserEntity from './user.entity';
import { UserService } from './user.service';

export default defineModule({
  entity: [
    UserEntity,
  ],
  service: [
    UserService,
  ],
  dao: [
    UserDao,
  ],
});

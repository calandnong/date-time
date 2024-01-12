import { DefineModule } from '../../framework';
import UserDao from './user.dao';
import UserEntity from './user.entity';
import { UserService } from './user.service';

@DefineModule({
  entity: [
    UserEntity,
  ],
  service: [
    UserService,
  ],
  dao: [
    UserDao,
  ],
})
export class UserModule {
}

import { DefineModule } from '../framework';
import { UserModule } from './user/user.module';

@DefineModule({
  module: [
    UserModule,
  ],
})
export class AppModule {
}

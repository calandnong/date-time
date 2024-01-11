import type { Constructor, Module } from '../../framework';

// import { defineModule } from '../../framework';
import UserModule from './user/index';

function ChangeApp() {
  return <T extends Constructor>(target: T) => {
    console.log('AppModule', target);
  };
}

@ChangeApp()
class AppModule implements Module {
  module?: Module[] | undefined = [UserModule];
  dao?: Constructor[] | undefined;
}

export default new AppModule();

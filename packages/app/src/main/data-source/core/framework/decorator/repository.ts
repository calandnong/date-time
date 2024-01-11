// import { Inject, Token } from 'typedi';
import { Container } from 'inversify';
import UserEntity from '../../test/modules/user/user.entity';

export function Repo<T extends new (...args: any[]) => any>(entity: T) {
  return (...args: any[]) => {
    console.log(entity.name);
    console.log('1111', Reflect.getMetadata('design:type', args[0], args[1]));
    Inject('xxxRepo')(...args);
  };
}

export class Repository<T extends object> {
  entity!: T;
}

export class UserEntity {
  constructor() {}
}

export class ARepository extends Repository<UserEntity> {

}

function inject() {
  return (target: object, propertyKey: string) => {
    console.log('target', target);
    console.log('target', propertyKey);
    const paramTypes = Reflect.getMetadata('design:type', target, propertyKey);
    // eslint-disable-next-line new-cap
    console.log('paramTypes', new paramTypes());
  };
}

function Test() {
  return <T extends new (...args: any[]) => any>(target: T) => {
    console.log('Test', target);
  };
}

@Test()
export class Service {
  @inject()
  userRepository!: ARepository;
}

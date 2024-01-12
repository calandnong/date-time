import { injectable } from 'inversify';
import { ormContainer } from '../ioc';

export function Service() {
  return <T extends new (...args: any[]) => any>(target: T) => {
    injectable()(target);
    ormContainer.bind(target.name).to(target);
    console.log(`注册了-${target.name}`);
  };
}

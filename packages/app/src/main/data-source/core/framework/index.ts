export abstract class DBDriver {

}

export class ORM {
  start() {

  }
}

export function Repo() {
  return (target: object, propertyKey: string) => {
    console.log('target', target, propertyKey);
    // 替换为数据链接
  };
}

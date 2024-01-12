import { inject, tagged } from 'inversify';
import { INJECT_KEYS, META_TAGS } from '../constant';

export function Repo<T extends new (...args: any[]) => any>(entity: T) {
  return (...args: any[]) => {
    // 标志注入的仓储
    inject(INJECT_KEYS.REPOSITORY)(args[0], args[1], args[2]);
    // 存储实体
    tagged(META_TAGS.REPOSITORY_ENTITY_TAG, entity)(args[0], args[1], args[2]);
  };
}

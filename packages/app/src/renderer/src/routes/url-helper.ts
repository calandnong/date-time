import { RouteNames } from './constants';

/**
 * 通过路由名称获取路由路径
 * @param name
 * @returns
 */
export function getRoutePathByRouteName(name: RouteNames) {
  if (name === RouteNames.ROOT) {
    return '/';
  }
  return `/${name}`;
}

import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHashHistory } from 'vue-router';
import { RouteNames } from './constants';
import { getRoutePathByRouteName } from './url-helper';

const routes: readonly RouteRecordRaw[] = [
  {
    path: getRoutePathByRouteName(RouteNames.ROOT),
    name: RouteNames.ROOT,
    component: () => import('@renderer/layout/index.vue'),
    redirect: RouteNames.HOME,
    children: [
      {
        path: getRoutePathByRouteName(RouteNames.HOME),
        name: RouteNames.HOME,
        component: () => import('@renderer/pages/home/index.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

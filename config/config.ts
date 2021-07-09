// config/config.ts

import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  // 路由配置
  routes: routes,
  // ant-design-pro 的布局
  layout: {},
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {}
});

import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    { path: '/', component: '@/pages/index' },
    // exact表示是否严格匹配，即 location 是否和 path 完全对应上 默认true
    { exact: true, 
      path: '/user', 
      component: '@/pages/user/index', 
      routes: [
        {path: '/user/info', component: '@/pages/user/info/index'}
      ] 
    },
    { exact: true, path: '/home', component: '@/pages/home/index' },
    { component: '@/pages/404'}
  ],
});
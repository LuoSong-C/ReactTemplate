const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: '首页',
    path: '/home',
    component: './Home',
  },
  {
    name: '权限演示',
    path: '/access',
    component: './Access',
  },
  {
    name: ' CRUD 示例',
    path: '/table',
    routes: [
      {
        path: '/table',
        redirect: '/table/hello',
      },
      {
        name: 'Hello World',
        path: '/table/hello',
        component: './Table',
      },
      {
        component: './404'
      }
    ]
  },
];

export default routes;
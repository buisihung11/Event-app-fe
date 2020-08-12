const routes = [
  {
    path: '/',
    component: '../layouts/index',
    routes: [{ path: '/', component: '../pages/home/index' }],
  },
];

export default routes;

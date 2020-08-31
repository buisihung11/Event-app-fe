// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  disableCSSModules: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', redirect: '/events', exact: true },
        { path: '/events', component: '../pages/events-list/index' },
        { path: '/events/:id', component: '../pages/event/event-detail/EventDetail' },
      ],
    },
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        pwa: true,
        dynamicImport: { webpackChunkName: true, loadingComponent: './components/Loading.js' },
        title: 'Event Application',
        dll: false,
        locale: {
          enable: true,
          default: 'vi-VN',
          baseNavigator: true,
          antd: true,
          baseSeparator: '-',
        },
        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
};

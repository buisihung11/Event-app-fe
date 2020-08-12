const config = {
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [{ path: '/', component: '../pages/index' }],
    },
  ],
  define: {
    TITLE: 'Event application',
  },
};
export default config;

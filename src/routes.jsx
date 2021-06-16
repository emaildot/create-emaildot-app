import IndexPage from './EmailBuilder/IndexPage';
import userDefinedRoutes from './add-routes-here';

export default [
  {
    id: 'index',
    path: '/',
    component: IndexPage,
    exact: true,
  },
  ...userDefinedRoutes,
];

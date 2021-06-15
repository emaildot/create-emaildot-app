import IndexPage from './EmailBuilder/IndexPage';
import Welcome from './pages/Welcome';
import Goodbye from './pages/Goodbye';

export default [
  {
    id: 'index',
    path: '/',
    component: IndexPage,
    exact: true,
  },
  {
    id: 'welcome',
    path: '/welcome',
    component: Welcome,
    exact: true,
  },
  {
    id: 'goodbye',
    path: '/goodbye',
    component: Goodbye,
    exact: true,
  },
];

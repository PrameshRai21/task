import Dashboard from '@Views/Dashboard';
import { IRoute } from './types';
import About from '@Views/About';

const appRoutes: IRoute[] = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    authenticated: false,
  },
   {
    path: '/about',
    name: 'About',
    component: About,
    authenticated: false,
  },
];

export default appRoutes;

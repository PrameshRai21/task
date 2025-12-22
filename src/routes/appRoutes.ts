import Dashboard from '@Views/Dashboard';
import { IRoute } from './types';
import About from '@Views/About';
import Weather from '@Views/weather';

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
  {
    path: '/weather',
    name: 'Weather',
    component: Weather,
    authenticated: false,
  },
];

export default appRoutes;

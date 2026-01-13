import Dashboard from '@Views/Dashboard';
import About from '@Views/About';
import Weather from '@Views/weather';
import UserData from '@Views/UserData';
import Charts from '@Views/Charts';
import { IRoute } from './types';
import OpenLayer from '@Views/Openlayer';
import Maplibre from '@Views/Maplibre';

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
  {
    path: '/user_data',
    name: 'UserData',
    component: UserData,
    authenticated: false,
  },
  {
    path: '/charts',
    name: 'Charts',
    component: Charts,
    authenticated: false,
  },
  {
    path: '/openlayer',
    name: 'Openlayer',
    component: OpenLayer,
    authenticated: false,
  },
  {
    path: '/maplibre',
    name: 'Maplibre',
    component: Maplibre,
    authenticated: false,
  },
];

export default appRoutes;

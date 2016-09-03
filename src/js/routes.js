import Main from './Main';
import Home from './components/Home';
import NotFound from './components/NotFound';

export default {
  path: '/',
  component: Main,
  indexRoute: { component: Home },
  childRoutes: [
    { path: '*', component: NotFound }
  ]
};

import Main from './Main';
import Home from './components/Home';
import NotFound from './components/NotFound';
import About from './components/About';

export default {
  path: '/',
  component: Main,
  indexRoute: { component: Home },
  childRoutes: [
    { path: 'about', component: About },
    { path: '*', component: NotFound }
  ]
};

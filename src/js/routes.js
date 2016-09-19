import Main from './Main';
import Home from './components/Home';
import NotFound from './components/NotFound';
import About from './components/About';
import Contact from './components/Contact';
import DemoLayer from './components/DemoLayer';

export default {
  path: '/',
  component: Main,
  indexRoute: { component: Home },
  childRoutes: [
    { path: 'about', component: About },
    { path: 'contact', component: Contact },
    { path: 'trip/:id', component: DemoLayer },
    { path: '*', component: NotFound }
  ]
};

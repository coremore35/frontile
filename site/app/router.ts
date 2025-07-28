import EmberRouter from '@embroider/router';
import config from 'site/config/environment';
import { addDocfyRoutes } from '@docfy/ember';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  addDocfyRoutes(this);
  this.route('not-found', { path: '/*path' });
});

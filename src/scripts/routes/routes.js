import Home from '../views/pages/restaurant-list';
import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';

const routes = {
  '/': Home, // default page
  '/restaurant-list': Home,
  '/my-favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;

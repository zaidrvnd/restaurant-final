import RestaurantListSource from '../../data/restaurantlist-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Daftar Restaurant & Cafe</h2>
        <div id="restaurant-grid" class="restaurant-grid">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantListSource.restaurantList();
    const restaurantContainer = document.querySelector('.restaurant-grid');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
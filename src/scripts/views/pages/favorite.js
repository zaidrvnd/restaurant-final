import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Restaurant Favorite Anda</h2>
        <div id="restaurant-grid" class="restaurant-grid">
        </div>
        <div id="no-favorites" class="no-favorites" style="display: none;">
          <p>Belum ada restoran yang disukai.</p>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantContainer = document.querySelector('#restaurant-grid');
    const noFavoritesMessage = document.querySelector('#no-favorites');

    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#mainContent').focus();
    });

    if (restaurants.length === 0) {
      noFavoritesMessage.style.display = 'block'; // Tampilkan pesan jika tidak ada restoran
    } else {
      restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
      noFavoritesMessage.style.display = 'none'; // Sembunyikan pesan jika ada restoran
    }
  },
};

export default Favorite;
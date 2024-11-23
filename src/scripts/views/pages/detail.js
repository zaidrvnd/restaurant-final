import RestaurantListSource from '../../data/restaurantlist-source';
import UrlParser from '../../routes/url-parser';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import LikeButtonInitiator from '../../utils/like-button-presenter';

const Detail = {
  async render() {
    return `
      <div id="detail-restaurant" class="detail-restaurant"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    let restaurant = await RestaurantListSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#detail-restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);


    // Menyembunyikan element hero ketika halaman detail dibuka
    const heroSection = document.getElementById('heroSection');
    if (heroSection) {
      heroSection.style.display = 'none';
    }

    // fungsi skip element pada halaman detail
    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#mainContent').focus();
    });

    // Inisialisasi tombol like
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurant: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating,
        description: restaurant.description,
      },
    });

    // membuat review
    const reviewForm = document.getElementById('reviewForm');
    reviewForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const name = document.getElementById('name').value;
      const review = document.getElementById('review').value;

      try {
        await RestaurantListSource.createReview({
          id: restaurant.id,
          name,
          review,
        });

        // Ambil detail restoran lagi untuk memperbarui tampilan
        restaurant = await RestaurantListSource.detailRestaurant(url.id);
        restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
        location.reload();
      } catch (error) {
        console.error('Error adding review:', error);
        alert('Failed to add review. Please try again.');
      }
    });
  }
};

export default Detail;
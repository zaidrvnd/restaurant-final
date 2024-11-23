const createRestaurantDetailTemplate = (restaurant) => `
<div class="restaurant-info">
    <div class="header">
        <h2 class="restaurant-title">${restaurant.name}</h2>
        <div class="rating">⭐️${restaurant.rating}</div>
    </div>
    <img class="lazyload restaurant-poster" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="https://restaurant-api.dicoding.dev/images/large/${restaurant.pictureId}" alt="${restaurant.name}" />
    
    <div class="info-section">
        <h3>Informasi Restoran</h3>
        <div class="info-item">
            <h4>Alamat</h4>
            <p>${restaurant.address}</p>
        </div>
        <div class="info-item">
            <h4>Kota</h4>
            <p>${restaurant.city}</p>
        </div>
        <div class="info-item">
            <h4>Deskripsi</h4>
            <p>${restaurant.description}</p>
        </div>
        <div class="info-item">
            <h4>Menu Makanan</h4>
            <ul class="menu-list">
                ${restaurant.menus?.foods?.map((food) => `<li>${food.name}</li>`).join('')}
            </ul>
        </div>
        <div class="info-item">
            <h4>Menu Minuman</h4>
            <ul class="menu-list">
                ${restaurant.menus?.drinks?.map((drink) => `<li>${drink.name}</li>`).join('')}
            </ul>
        </div>
    </div>
</div>
<div class="review-section">
    <h3>Customer Reviews</h3>
    <div class="review-grid">
        ${restaurant.customerReviews?.length > 0
    ? restaurant.customerReviews.map((review) => `
                <div class="review-card">
                    <h4>${review.name}</h4>
                    <p>${review.review}</p>
                    <p class="review-date">${review.date}</p>
                </div>
            `).join('')
    : '<p>No reviews available.</p>'
}
    </div>
    <h4>Add a Review</h4>
    <form id="reviewForm">
        <input type="text" id="name" placeholder="Your Name" required />
        <textarea id="review" placeholder="Your Review" required></textarea>
        <button type="submit" aria-label="submit to review">Submit Review</button>
    </form>
</div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurants-item" tabindex="0">
    <div class="restaurants-item__header">
      <div class="location">Kota: ${restaurant.city}</div>
      <img class="lazyload restaurants-item__header__poster" 
           alt="Gambar Restoran ${restaurant.name}" 
           src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
           data-src="https://restaurant-api.dicoding.dev/images/large/${restaurant.pictureId}">
      <div class="restaurants-item__header__rating">
        <p>⭐️<span class="restaurants-item__header__rating__score">${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="restaurants-item__content">
      <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p>${restaurant.description}</p>
    </div>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};

import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantListSource {
  static async restaurantList() {
    try {
      const response = await fetch(API_ENDPOINT.RESTAURANT_LIST);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const responseJson = await response.json();
      return responseJson.restaurants;
    } catch (error) {
      console.error('Error fetching restaurant list:', error);
      return [];
    }
  }

  static async detailRestaurant(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (!data.restaurant) {
        throw new Error('Invalid response format: Missing "restaurant" property');
      }
      return {
        id: data.restaurant.id,
        name: data.restaurant.name,
        pictureId: data.restaurant.pictureId,
        address: data.restaurant.address,
        city: data.restaurant.city,
        description: data.restaurant.description,
        categories: data.restaurant.categories,
        menus: data.restaurant.menus,
        rating: data.restaurant.rating,
        customerReviews: data.restaurant.customerReviews,
      };
    } catch (error) {
      console.error('Error fetching restaurant details:', error);
      return null;
    }
  }
  static async createReview(review) {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Auth-Token': '12345',
        },
        body: JSON.stringify(review),
      };

      const response = await fetch(API_ENDPOINT.REVIEW, options);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseJson = await response.json();

      return responseJson.restaurants;
    } catch (error) {
      console.error('Error fetching restaurant list:', error);
      return [];
    }
  }
}

export default RestaurantListSource;

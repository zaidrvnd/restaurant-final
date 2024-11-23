/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

describe('Menyukai Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });


  it('seharusnya muncul tombol like ketika restaurant belum di sukai sebelumnya', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 'rqdv5juczeskfw1e867' });

    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy();
  });

  it('seharusnya tombol unlike tidak muncul ketika restaurant belum disukai sebelumnya', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 'rqdv5juczeskfw1e867' });

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
  });

  it('seharusnya bisa meng-like restaurant', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 'rqdv5juczeskfw1e867' });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    // Memastikan Restaurant berhasil disukai
    const restaurant = await FavoriteRestaurantIdb.getRestaurant('rqdv5juczeskfw1e867');
    expect(restaurant).toEqual({ id: 'rqdv5juczeskfw1e867' });


    await FavoriteRestaurantIdb.deleteRestaurant('rqdv5juczeskfw1e867');
  });

  it('seharusnya tidak menambahkan restaurant lagi ketika telah disukai', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 'rqdv5juczeskfw1e867' });

    // Tambahkan restaurant  dengan ID "rqdv5juczeskfw1e867" ke daftar restaurant yang disukai
    await FavoriteRestaurantIdb.putRestaurant({ id: 'rqdv5juczeskfw1e867' });

    // Simulasikan pengguna menekan tombol suka restaurant
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));


    // Tidak ada Restaurant yang ganda
    expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([{ id: 'rqdv5juczeskfw1e867' }]);

    await FavoriteRestaurantIdb.deleteRestaurant('rqdv5juczeskfw1e867');
  });

  it('seharusnya tidak dapat menambahkan restaurant ketika id tidak ada', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
  });
});
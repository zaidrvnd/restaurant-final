/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

describe('batal menyukai restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestaurantIdb.putRestaurant({ id: 'rqdv5juczeskfw1e867' });
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant('rqdv5juczeskfw1e867');
  });

  it('seharusnya muncul unlike widget ketika restaurant telah disukai', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 'rqdv5juczeskfw1e867' });

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeTruthy();
  });

  it('seharusnya like widget tidak tampil ketika restaurant telah disukai', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 'rqdv5juczeskfw1e867' });

    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeFalsy();
  });

  it('seharusnya bisa menghapus restaurant yang disukai dari daftar', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 'rqdv5juczeskfw1e867' });

    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
  });

  it('seharusnya tidak melemparkan kesalahan saat pengguna mengklik widget unlike jika restaurant yang tidak disukai tidak ada dalam daftar', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 'rqdv5juczeskfw1e867' });

    // Hapus dulu restaurant dari daftar restaurant yang disukai
    await FavoriteRestaurantIdb.deleteRestaurant('rqdv5juczeskfw1e867');

    // Kemudian, simulasikan pengguna menekan widget batal menyukai restaurant
    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
  });
});
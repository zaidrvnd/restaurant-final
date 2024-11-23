const assert = require('assert');

Feature('Liking and Unliking Restaurant');

Before(({ I }) => {
    I.amOnPage('/#/my-favorite');
})

Scenario('menampilkan restaurant yang disukai kosong',  ({ I }) => {
    I.see('Belum ada restoran yang disukai', '.no-favorites');
  });

Scenario('menyukai dan membatal sukai satu restaurant', async ({ I }) => {
    // mengecek bahwa belum ada restaurant yang disukai
    I.see('Belum ada restoran yang disukai', '.no-favorites');

    // menuju halaman root untuk memulai uji liking restaurant
    I.amOnPage('/')

    // membuka detail restaurant
    I.seeElement('.restaurants-item__content h3 a');
    const firstRestaurant = locate('.restaurants-item__content h3 a').first();
    const fistRestaurantName = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);

    // menekan tombol like
    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/my-favorite');
    I.seeElement('.restaurant-grid');
    const likedRestaurantName = await I.grabTextFrom('.restaurants-item__content h3');

    //Membuka halaman Favorite dan mengecek apakah sudah ada restoran yang disukai 
    I.amOnPage('/#/my-favorite');
    I.seeElement('.restaurant-grid');

    //jika sudah ada , maka melakukan membuka detail restaurant
    I.click(firstRestaurant);

    //menekan tombol unlike
    I.seeElement('#likeButton');
    I.click('#likeButton');

    // mengecek apakah sudah tidak ada restaurant yang disukai
    I.amOnPage('/#/my-favorite');
    I.see('Belum ada restoran yang disukai', '.no-favorites');

    assert.strictEqual(fistRestaurantName,likedRestaurantName);

});

import FavoriteRestaurantIdb from "../src/scripts/data/restaurant-favorite-idb";
import itActsAsFavoriteRestaurantModel from "./contracts/favoriteRestaurantIdb";

describe("Favorite Restaurant Idb Test Implementation", () => {
  afterEach(async () => {
    const restaurants = await FavoriteRestaurantIdb.getAll();
    restaurants.forEach(async (restaurant) => {
      await FavoriteRestaurantIdb.deleteById(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantIdb);
});

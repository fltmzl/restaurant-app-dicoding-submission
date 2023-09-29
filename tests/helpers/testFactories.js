import FavoriteRestaurantIdb from "../../src/scripts/data/restaurant-favorite-idb";
import FavoriteRestaurantPresenter from "../../src/scripts/views/components/detail/favorite-restaurant-presenter";

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await FavoriteRestaurantPresenter.init({
    favoriteRestaurantModel: FavoriteRestaurantIdb,
    likeButtonContainer: document.getElementById("favoriteButtonContainer"),
    restaurant,
  });
};

export { createLikeButtonPresenterWithRestaurant };

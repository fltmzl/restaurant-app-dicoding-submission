import FavoriteRestaurantIdb from "../src/scripts/data/restaurant-favorite-idb";
import * as TestFactories from "./helpers/testFactories";

describe("Liking a Restaurant", () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = "<div id='favoriteButtonContainer'></div>";
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it("should show the like button when the restaurant has not been liked before", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector("[aria-label='add to favorite']")).toBeTruthy();
  });

  it("should not show the unlike button when the restaurant has not been liked before", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector("[aria-label='remove from favorite']")).toBeFalsy();
  });

  it("should be able to like the restaurant", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector("#favoriteButton").dispatchEvent(new Event("click"));

    const restaurant = await FavoriteRestaurantIdb.getById(1);
    expect(restaurant).toEqual({ id: 1 });

    await FavoriteRestaurantIdb.deleteById(1);
  });

  it("should not add a restaurant again when its already added", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    // tambahkan restaurant, untuk simulasi restaurant sudah ada di dalam IDB
    await FavoriteRestaurantIdb.add({ id: 1 });

    // simulasikan menekan button like
    document.querySelector("#favoriteButton").dispatchEvent(new Event("click"));

    const restaurant = await FavoriteRestaurantIdb.getAll();
    expect(restaurant).toEqual([{ id: 1 }]);

    await FavoriteRestaurantIdb.deleteById(1);
  });

  it("should not add a restaurant that has no ID", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({});

    document.querySelector("#favoriteButton").dispatchEvent(new Event("click"));

    expect(await FavoriteRestaurantIdb.getAll()).toEqual([]);
  });
});

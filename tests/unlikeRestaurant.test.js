import FavoriteRestaurantIdb from "../src/scripts/data/restaurant-favorite-idb";
import * as TestFactories from "./helpers/testFactories";

describe("Unlike a Restaurant", () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = "<div id='favoriteButtonContainer'></div>";
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestaurantIdb.add({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteById(1);
  });

  it("should show unlike button when the restaurant has been liked", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector("[aria-label='remove from favorite']")).toBeTruthy();
  });

  it("should not show like button when the restaurant has been liked", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector("[aria-label='add to favorite']")).toBeFalsy();
  });

  it("should be able to remove liked restaurant from the list", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector("#favoriteButton").dispatchEvent(new Event("click"));

    expect(await FavoriteRestaurantIdb.getAll()).toEqual([]);
  });

  it("should not throw error when user click unlike widget if the unliked restaurant is not in the list", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    await FavoriteRestaurantIdb.deleteById(1);

    document.querySelector("#favoriteButton").dispatchEvent(new Event("click"));

    expect(await FavoriteRestaurantIdb.getAll()).toEqual([]);
  });
});

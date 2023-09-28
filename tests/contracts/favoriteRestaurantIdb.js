const itActsAsFavoriteRestaurantModel = (favoriteRestaurant) => {
  // Get Favorite Restaurant
  it("should return the restaurant that has been added", async () => {
    favoriteRestaurant.add({ id: 1 });
    favoriteRestaurant.add({ id: 2 });

    expect(await favoriteRestaurant.getById(1)).toEqual({ id: 1 });
    expect(await favoriteRestaurant.getById(2)).toEqual({ id: 2 });
    expect(await favoriteRestaurant.getById(3)).toEqual(undefined);
  });

  it("should return all of the restaurant that have been added", async () => {
    favoriteRestaurant.add({ id: 1 });
    favoriteRestaurant.add({ id: 2 });
    favoriteRestaurant.add({ id: 3 });

    expect(await favoriteRestaurant.getAll()).toEqual([
      { id: 1 },
      { id: 2 },
      { id: 3 },
    ]);
  });

  // Add Favorite Restaurant
  it("should refuse a restaurant from being added if it does not have the correct property", async () => {
    favoriteRestaurant.add({ unknownProperty: "random property" });

    expect(await favoriteRestaurant.getAll()).toEqual([]);
  });

  // Delete Favorite Restaurant
  it("should delete favorite restaurant", async () => {
    favoriteRestaurant.add({ id: 1 });
    favoriteRestaurant.add({ id: 2 });
    favoriteRestaurant.add({ id: 3 });

    await favoriteRestaurant.deleteById(3);

    expect(await favoriteRestaurant.getAll()).toEqual([
      { id: 1 },
      { id: 2 },
    ]);
  });

  it("should handle request to remove a restaurant even though the restaurant has not been added", async () => {
    favoriteRestaurant.add({ id: 1 });
    favoriteRestaurant.add({ id: 2 });
    favoriteRestaurant.add({ id: 3 });

    await favoriteRestaurant.deleteById(5);

    expect(await favoriteRestaurant.getAll()).toEqual([
      { id: 1 },
      { id: 2 },
      { id: 3 },
    ]);
  });
};

export default itActsAsFavoriteRestaurantModel;

describe("Liking a Restaurant", () => {
  const addLikeButtonElement = () => {
    const restaurantId = 1;
    document.body.innerHTML = `<favorite-button data-restaurant-id="${restaurantId}"></favorite-button>`;
  };

  beforeEach(() => {
    addLikeButtonElement();
  });

  it("should show the like button when the restaurant has not been liked before", () => {
    expect(document.querySelector("[aria-label='add to favorite']")).toBeTruthy();
  });
});

Feature("Liking Restaurant");

Before(({ I }) => {
  I.amOnPage("/#/favorite");
});

Scenario("showing empty liked restaurant", ({ I }) => {
  I.seeElement("favorite-list");

  I.see("Belum ada restoran yang ditambahkan ke favorite", ".restaurant-item__not__found");
});

Scenario("liking one restaurant", async ({ I }) => {
  I.see("Belum ada restoran yang ditambahkan ke favorite", ".restaurant-item__not__found");

  I.amOnPage("/");

  I.seeElement(".restaurant-item__name");

  const firstRestaurant = locate(".restaurant-item__name").first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);

  const firstRestaurantDetailButton = locate(".restaurant-item__cta").first();
  I.click(firstRestaurantDetailButton);

  I.seeElement("#favoriteButton");
  I.click("#favoriteButton");

  I.amOnPage("/#/favorite");

  I.seeElement(".restaurant-item");
  I.see(firstRestaurantName, ".restaurant-item__name");
});

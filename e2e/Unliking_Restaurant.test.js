Feature("Unliking Restaurant");

Before(async ({ I }) => {
  I.amOnPage("/");

  I.seeElement(".restaurant-item");
  const restaurantDetailButton = locate(".restaurant-item__cta").first();
  I.click(restaurantDetailButton);

  I.seeElement("#favoriteButton");
  I.click("#favoriteButton");

  I.amOnPage("/#/favorite");
});

Scenario("Unliking one restaurant", ({ I }) => {
  I.seeElement(".restaurant-item");
  I.click("Detail", ".restaurant-item__cta");

  I.seeElement("#favoriteButton");
  I.click("#favoriteButton");

  I.amOnPage("/#/favorite");

  I.see("Belum ada restoran yang ditambahkan ke favorite", ".restaurant-item__not__found");
});

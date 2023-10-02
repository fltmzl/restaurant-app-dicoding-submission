Feature("Add Customer Review");

Before(async ({ I }) => {
  I.amOnPage("/");

  I.seeElement(".restaurant-item");
  const restaurantDetailButton = locate(".restaurant-item__cta").first();
  I.click(restaurantDetailButton);
});

Scenario("Adding a Review", async ({ I }) => {
  I.seeElement("#reviewsForm");

  const bodyFieldText = "Restoran nya sangat bagus";
  I.fillField("username", "Admin");
  I.fillField("body", bodyFieldText);

  I.click(".reviews__form__submit");

  I.see("Review berhasil ditambahkan", "#reviewsFormError");
  I.see(bodyFieldText, ".review__text");
});

Scenario("Should reject form submit when the form input still empty", ({ I }) => {
  I.seeElement("#reviewsForm");

  I.fillField("username", "");
  I.fillField("body", "");

  // simulasi langsung submit tanpa mengisi input
  I.click(".reviews__form__submit");

  I.dontSee("Review berhasil ditambahkan", "#reviewsFormError");
});

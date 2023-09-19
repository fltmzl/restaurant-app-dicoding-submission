import RestaurantApi from "../../../data/restaurant-api";
import CONFIG from "../../../globals/config";
import { arrayOfObjectToString } from "../../../helpers";
import UrlParser from "../../../routes/url-parser";
import { createCustomerReviewCard, createListComponent } from "../../templates/template-creator";
import "./favorite-button";

class DetailSection extends HTMLElement {
  constructor() {
    super();
    this._data = null;
  }

  async getInitialData() {
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();

      const data = await RestaurantApi.getOneById(url.id);
      this._data = data;

      if (this._data.error) {
        this.fallbackError();
      }

      this.render();
    } catch (error) {
      this.fallbackError();
      console.error(error.message);
    }
  }

  fallbackError() {
    this.innerHTML = `
      <div>Something went wrong, check your connection</div>
    `;
  }

  fallbackLoading() {
    this.innerHTML = `
      <div>Loading</div>
    `;
  }

  connectedCallback() {
    this.getInitialData();
  }

  render() {
    const {
      pictureId,
      name,
      address,
      city,
      categories,
      description,
      menus: {
        foods,
        drinks,
      },
      customerReviews,
      rating,
      id,
    } = this._data.restaurant;

    this.innerHTML = `
      <div class="detail container">
        <favorite-button data-restaurant-id="${id}"></favorite-button>

        <div class="detail__picture">
          <div class="picture">
            <img class="picture__image" src="${CONFIG.BASE_LARGE_IMAGE_URL}/${pictureId}" alt="${`${name} restaurant`}" />
          </div>
        </div>

        <div class="detail__body">
          <div class="body">
            <h1 class="body__title">${name}</h1>

            <div class="body__meta">
              <section class="body__location">
                <img class="icon" src="/icons/location.svg" alt="location icon" />
                <span>${address}, ${city}</span>
              </section>

              <section class="body__category">
                <img class="icon" src="/icons/resto.svg" alt="category  restaurant icon" />
                <span>${arrayOfObjectToString(categories)}</span>
              </section>
              
              <section class="body__rating">
                <img class="icon" src="/icons/rating.svg" alt="rating icon" />
                <span>${rating}</span>
              </section>
            </div>

            <div class="body__description">
              <h2 class="body__description__title">Deskripsi Restoran</h2>
              <p class="body__description__content">
               ${description}
              </p>
            </div>
          </div>

          <div class="menu">
            <section class="menu__foods">
              <img class="menu__icon" src="/icons/foods.svg" alt="foods icon" />
              <h2 class="menu__title">Foods</h2>
              <div class="menu__content">
                <ol id="foodsContainer">
                </ol>
              </div>
            </section>

            <section class="menu__drinks">
              <img class="menu__icon" src="/icons/drinks.svg" alt="drinks icon" />
              <h2 class="menu__title">Drinks</h2>
              <div class="menu__content">
                <ol id="drinksContainer">
                </ol>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div class="reviews container">
        <h2 class="reviews__title">Customer Reviews</h2>
        <div id="reviewsContainer" class="reviews__container">
        </div>
      </div>
    `;

    const foodsContainer = this.querySelector("#foodsContainer");
    const drinksContainer = this.querySelector("#drinksContainer");
    const reviewsContainer = this.querySelector("#reviewsContainer");

    foods.forEach((food) => {
      foodsContainer.innerHTML += createListComponent(food.name);
    });

    drinks.forEach((drink) => {
      drinksContainer.innerHTML += createListComponent(drink.name);
    });

    customerReviews.forEach((review) => {
      reviewsContainer.innerHTML += createCustomerReviewCard(review);
    });
  }
}

customElements.define("detail-section", DetailSection);

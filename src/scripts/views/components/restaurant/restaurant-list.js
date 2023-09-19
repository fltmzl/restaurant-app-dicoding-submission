import RestaurantApi from "../../../data/restaurant-api";
import { createRestaurantItemComponent } from "../../templates/template-creator";

class RestaurantList extends HTMLElement {
  constructor() {
    super();
    this._data = null;
  }

  async getInitialData() {
    try {
      const data = await RestaurantApi.getAll();
      this._data = data;

      if (this._data.error) {
        this.fallbackError();
      } else {
        this.render();
      }
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

  render() {
    this.innerHTML = "";

    this._data.restaurants.forEach((restaurant) => {
      const restaurantItem = createRestaurantItemComponent(restaurant);
      this.innerHTML += restaurantItem;
    });
  }

  connectedCallback() {
    this.fallbackLoading();
    this.getInitialData();
  }
}

customElements.define("restaurant-list", RestaurantList);

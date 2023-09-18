import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.scss";
import App from "./views/app";

// eslint-disable-next-line no-unused-vars
const app = new App({
  button: document.querySelector(".hamburger"),
  drawer: document.querySelector(".nav"),
  content: document.querySelector("#mainContent"),
});

window.addEventListener("load", async () => {
  app.renderPage();
});

// // Load and render Restaurant data
// const restaurantContainer = document.querySelector(".restaurant");

// const renderRestaurantList = () => {
//   restaurantContainer.innerHTML = "";
//   data.restaurants.forEach((restaurant) => {
//     const restaurantItemComponent = createRestaurantItemComponent(restaurant);
//     restaurantContainer.innerHTML += restaurantItemComponent;
//   });
// };

// document.addEventListener("DOMContentLoaded", renderRestaurantList);

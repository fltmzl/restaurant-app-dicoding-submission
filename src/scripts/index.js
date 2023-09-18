import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.scss";
import data from "../public/data/DATA.json";


// Load and render Restaurant data
const restaurantContainer = document.querySelector(".restaurant");

const renderRestaurantList = () => {
  restaurantContainer.innerHTML = "";
  data.restaurants.forEach((restaurant) => {
    const restaurantItemComponent = makeRestaurantItemComponent(restaurant);
    restaurantContainer.innerHTML += restaurantItemComponent;
  });
}

const makeRestaurantItemComponent = (data) => {
  return `
    <article class="restaurant-item">
      <div class="restaurant-item__thumbnail">
        <img class="restaurant-item__img" src="${data.pictureId}" alt="Foto Restoran ${data.name}" />

        <div class="restaurant-item__rating">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="restaurant-item__rating-icon">
            <path
              fill-rule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clip-rule="evenodd"
            />
          </svg>
          <span class="restaurant-item__rating-text">${data.rating}</span>
        </div>

        <div class="restaurant-item__city">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="restaurant-item__city-icon">
            <path
              fill-rule="evenodd"
              d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
              clip-rule="evenodd"
            />
          </svg>
          <span>${data.city}</span>
        </div>
      </div>
      <div class="restaurant-item__body">
        <h3 class="restaurant-item__name">${data.name}</h3>
        <p class="restaurant-item__desc">
          ${data.description}
        </p>
      </div>
    </article>
  `;
}

document.addEventListener("DOMContentLoaded", renderRestaurantList)

// Toggle drawer menu
const hamburgerButton = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburgerButton.addEventListener("click", (e) => {
  nav.classList.toggle("nav-open");
  e.stopPropagation();
})

// Close drawer when user click outside the drawer

document.body.addEventListener("click", (e) => {
  if (!nav.contains(e.target)) {
    nav.classList.remove("nav-open");
  }
})
import { createLikeButton, createLikedButton } from "../../templates/template-creator";

const FavoriteRestaurantPresenter = {
  async init({ likeButtonContainer, favoriteRestaurantModel, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._favoriteRestaurantModel = favoriteRestaurantModel;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExistInFavorite(id)) {
      this._renderUnlikeButton();
    } else {
      this._renderLikeButton();
    }
  },

  async _isRestaurantExistInFavorite(id) {
    const restaurant = await this._favoriteRestaurantModel.getById(id);
    return !!restaurant;
  },

  _renderLikeButton() {
    this._likeButtonContainer.innerHTML = createLikeButton();

    const likeButton = document.querySelector("#favoriteButton");
    likeButton.addEventListener("click", async () => {
      await this._favoriteRestaurantModel.add(this._restaurant);
      this._renderButton();
    });
  },

  _renderUnlikeButton() {
    this._likeButtonContainer.innerHTML = createLikedButton();

    const likeButton = document.querySelector("#favoriteButton");
    likeButton.addEventListener("click", async () => {
      await this._favoriteRestaurantModel.deleteById(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default FavoriteRestaurantPresenter;

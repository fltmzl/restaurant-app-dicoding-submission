import "../components/favorite/favorite-list";

const Favorite = {
  render() {
    return `
      <div class="favorites container">
        <h1 class="favorites__title">Favorite Restaurant</h1>
        <div class="favorites__container">
          <favorite-list></favorite-list>
        </div>
      </div>
    `;
  },
};

export default Favorite;

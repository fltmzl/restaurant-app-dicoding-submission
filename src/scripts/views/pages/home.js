import "../components/restaurant/restaurant-list";
import "../components/hero/hero-section";

const Home = {
  render() {
    return `
      <hero-section></hero-section>

      <div id="katalog" class="restaurants container">
        <h2 class="restaurants__title">Katalog Restoran</h2>
        <restaurant-list class="restaurant"></restaurant-list>
      </div>
    `;
  },
};

export default Home;

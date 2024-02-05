import "../components/restaurant/restaurant-list";
import "../components/hero/hero-section";
import "../components/newsletter/newsletter-section";
import "../components/testimonial/testimonial-section";
import { resetTabIndexFromStart } from "../../helpers";

const Home = {
  render() {
    return `
      <hero-section></hero-section>
      
      <div id="katalog" class="restaurants container">
        <h2 class="restaurants__title">Daftar Restoran</h2>
        <restaurant-list class="restaurant"></restaurant-list>
      </div>
      
      <testimonial-section></testimonial-section>
      <newsletter-section></newsletter-section>
    `;
  },

  afterRender() {
    resetTabIndexFromStart();

    // const linkImageMedium = document.createElement("link");
    // linkImageMedium.as = "image";
    // linkImageMedium.href = "/images/heros/hero-image-medium.webp";
    // linkImageMedium.rel = "preload";
    // document.head.appendChild(linkImageMedium);

    // const linkImageLarge = document.createElement("link");
    // linkImageLarge.as = "image";
    // linkImageLarge.href = "/images/heros/hero-image-large.webp";
    // linkImageLarge.rel = "preload";
    // document.head.appendChild(linkImageLarge);
  },
};

export default Home;

import routes from "../routes/routes";
import UrlParser from "../routes/url-parser";
import DrawerInitiator from "../utils/drawer-initiator";

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = page.render();
    page.afterRender();

    const skipLinkElem = document.querySelector(".skip-link");
    skipLinkElem.addEventListener("click", (event) => {
      event.preventDefault();
      document.querySelector("#mainContent").focus();
    });
  }
}

export default App;

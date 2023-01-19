import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Zaloguj");
  }

  async getHtml() {
    return `#index`;
    // `
    //   <nav class="nav-logged">
    //     <p>User name</p>
    //     <button class="nav-logged-button" type="button">
    //       <a class="nav-logged-link" href="./index.html" data-link>Wyloguj</a>
    //     </button>
    //   </nav>
    // `
  }
}

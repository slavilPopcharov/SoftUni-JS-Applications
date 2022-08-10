import { createView } from "./create.js";
import { homeView } from "./home.js";
import { loginView } from "./login.js";
import { logoutView } from "./logout.js";
import { registerView } from "./register.js";

const pages = document.querySelectorAll('main section')

const paths = {
  "/": homeView,
  "/create": createView,
  "/login": loginView,
  "/register": registerView,
  '/logout': logoutView
};

export function router(path) {
  pages.forEach(p => p.style.display = 'none');
  const render = paths[path]//its a function
  render()
}

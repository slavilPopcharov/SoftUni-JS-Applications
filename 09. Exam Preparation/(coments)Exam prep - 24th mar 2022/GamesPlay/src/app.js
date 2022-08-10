import { logout } from './api/users.js'
import { page, render} from './lib.js'
import { getUserData } from './util.js'
import { catalogView } from './views/catalog.js'
import { createView } from './views/create.js'
import { gameDetailsView } from './views/details.js'
import { editView } from './views/edit.js'
import { homeView } from './views/home.js'
import { loginView } from './views/login.js'
import { registerView } from './views/rejister.js'

//CHECK IF ELEMENTS ARE CORECT !!!
const main = document.querySelector('main')
const logOutBtn = document.getElementById("logoutBtn");
logOutBtn.addEventListener("click", onLogout);

page(decorateContext)
page('/', homeView)
page('/catalog', catalogView)
page('/catalog/:id', gameDetailsView);
page('/edit/:id', editView)
page('/create', createView)
page('/login', loginView)
page('/register', registerView)

uppdateNav()
page.start()

function decorateContext(ctx, next) {
  ctx.uppdateNav = uppdateNav;
  ctx.render = renderMain;
  next();
}

function renderMain(templateResult) {
  render(templateResult, main)
}


export function uppdateNav() {
  const userData = getUserData();

  if (userData) {
    document.querySelector("#user").style.display = "block";
    document.querySelector("#guest").style.display = "none";
    // document.querySelector(
    //   ".user span"
    // ).textContent = `Welcome ${userData.email}`;
  } else {
    document.querySelector("#user").style.display = "none";
    document.querySelector("#guest").style.display = "block";
  }
}

function onLogout() {
  logout()
  uppdateNav();
  page.redirect("/");
}

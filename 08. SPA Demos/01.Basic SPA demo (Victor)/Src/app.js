import { showRegister } from "./register.js";
import { showAbout } from "./about.js";
import { showCatalog } from "./catalog.js";
import { showHome } from "./home.js";
import { showLogin } from "./login.js";
import { checkUser, onLogout } from "./util.js";
import { showCreate } from "./create.js";


const sectionElement = document.querySelectorAll("section");
document.querySelector("nav").addEventListener("click", onNavigate);
document.getElementById("logoutBtn").addEventListener("click", onLogout);

checkUser()
// Start app in Home view
showHome()

// 01.Правим си речник в който hrev === view
const sections = {
  'homeBtn': showHome,
  'catalogBtn': showCatalog,
  'aboutBtn': showAbout,
  'loginBtn': showLogin,
  'registerBtn':showRegister,
  'createBtn': showCreate,
};

// 02. За смяна на вю-то подаваме viewID, отговарящо на ид-то на желаната страница като параметър
function onNavigate(ev) {
  if (ev.target.tagName === "A") {

    //Когато стойностите в речника са функции, променливата view става функция
    const view = sections[ev.target.id];
    if (typeof view == "function") {
      ev.preventDefault();

      // Ако използваме displayByReferention долния ред става излишен
      sectionElement.forEach((s) => (s.style.display = "none"));
      view();
    }
  }
}




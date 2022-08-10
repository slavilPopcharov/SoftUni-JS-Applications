import { render } from "./router.js";

const navbar = document.getElementById('nav');
navbar.addEventListener('click', manageViews);
const views = document.querySelectorAll('section').forEach(s => s.style.display = 'none')

function manageViews (e){
  e.preventDefault();

  if (e.target.tagName === 'A'){
    let url = new URL(e.target.href).pathname
    render(url)
  }
}

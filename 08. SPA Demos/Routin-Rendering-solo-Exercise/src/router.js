import { homeView } from "./home.js"
import { listView } from "./list.js"
import { loginView } from "./login.js"

let paths = {
  '/home': homeView,
  '/list': listView,
  '/login': loginView,
}

export function render (path){
  const views = document.querySelectorAll('section').forEach(s => s.style.display = 'none')

  let view = paths[path]
  view()
}
import { getToken } from "./auth.js";

const create = document.querySelector(".create");
const form = create.querySelector("form");
form.addEventListener("submit", createRecipie);

const url = `http://localhost:3030/data/recipes`;

export function createView() {
  create.style.display = "block";
}

async function createRecipie(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const name = formData.get("name");
  const img = formData.get("img");
  const ingredients = formData.get("ingredients").split('\n'); //Part of requiments
  const steps = formData.get("steps").split('\n');
  const recipe = { name, img, ingredients, steps };
  //const user = localStorage.getItem("user");
  //const token = JSON.parse(user)
  if (name == "" || img == "" || ingredients == "" || steps == "") return;

  const res = await fetch(url, {
    method: "post",
    headers: {
      "content-type": "application/json",
      "X-Authorization": getToken(),//token.accessToken
    },
    body: JSON.stringify(recipe),
  });
  const data = await res.json();
  
}

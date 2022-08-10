const home = document.querySelector(".home");
const resipieList = home.querySelector(".recipe-list");
const url = `http://localhost:3030/data/recipes`;

export async function homeView() {
  let res = await fetch(url);
  let data = await res.json();

  
  //Подаваме обработения респонс кат аргумент на функцията
  renderRecipies(data);
  home.style.display = "block";
}

// Параметърът recipe  е респонса от по-горе, който идва под ф-та на масив
function renderRecipies(recipe) {
  //recipe = масив с обекти
  const fragment = document.createDocumentFragment();

  // Can use any loop
  //ел = всеки един обект
  recipe.forEach((el) => {
    fragment.appendChild(createRecipe(el));
  });

  resipieList.innerHTML = "";
  resipieList.appendChild(fragment);
}

function createRecipe(el) {

  const recipeElement = document.createElement("article");
  recipeElement.classList.add("preview");

  const divHeader = document.createElement("div");
  divHeader.classList.add("title");
  const header = document.createElement("h2");
  header.textContent = `${el.name}`;
  

  const divImg = document.createElement("div");
  divImg.classList.add("small");
  const img = document.createElement("img");
  img.setAttribute("src", el.img);

  divHeader.append(header);
  divImg.append(img);
  recipeElement.append(divHeader, divImg);

  return recipeElement;

  //еl.name, el.img са свойства на обектите
  // пишем ги тук и ги използваме горе, където знаем какво ще подадем като арг. на ф-та.
}
//ingredients, steps
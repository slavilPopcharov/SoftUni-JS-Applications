async function solution() {
  const main = document.getElementById("main");
  const url = `http://localhost:3030/jsonstore/advanced/articles/list`;

  const response = await fetch(url);
  const data = await response.json();
  data.forEach((e) => {
    const divAccordion = createElement("div", "", ["class", "accordion"]);
    const divHead = createElement("div", "", ["class", "head"]);
    const spanElement = createElement("span", e.title);
    const btnElement = createElement('btn','More', ['class', 'button', 'id', e._id])
    const divExtra = createElement("div", "", ["class", "extra"])
    const paragraph = createElement('p')

    btnElement.addEventListener('click',showMore)

    divExtra.appendChild(paragraph)
    divHead.appendChild(spanElement);
    divHead.appendChild(btnElement);
    divAccordion.appendChild(divHead);
    divAccordion.appendChild(divExtra)
    main.appendChild(divAccordion);
  });

 async function showMore(e){
    const articleId = e.target.id;
    const url = `http://localhost:3030/jsonstore/advanced/articles/details/${articleId}` 
    const response = await fetch(url)
    const data = await response.json()
    
    const curentP = e.target.parentElement.parentElement.children[1].children[0];
    const curendHidenDiv = e.target.parentElement.parentElement.children[1]
    curentP.textContent = data.content

    //Вмест иф проверка. хиден е бульонски флаг, който е тру, когата бутона е "Моre"
    const hidden = e.target.textContent === 'More'
    curendHidenDiv.style.display = hidden ? 'block' : 'none'
    e.target.textContent = hidden ? 'Less' : 'More'
    
  }

  function createElement(type, content, attributes = []) {
    const element = document.createElement(type);

    if (content) {
      element.textContent = content;
    }

    if (attributes.length > 0) {
      for (let i = 0; i < attributes.length; i+=2) {
        element.setAttribute(attributes[i], attributes[i+1]);
      }
    }

    return element;
  }
}
solution();

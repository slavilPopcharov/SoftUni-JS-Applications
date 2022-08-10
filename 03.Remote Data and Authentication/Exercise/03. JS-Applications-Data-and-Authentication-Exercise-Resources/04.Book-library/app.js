const listOfBooks = document.querySelector("tbody");
const inputs = document.querySelectorAll("input");
const [title, author] = inputs;
const submitBtn = document.querySelector("form button");
const formHeader = document.querySelector("h3");
const url = `http://localhost:3030/jsonstore/collections/books`;

submitBtn.addEventListener("click", addBook);

async function addBook(ev) {
  ev.preventDefault();

  if (title == "" && author == "") return;

  const newBook = { author: author.value, title: title.value };
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newBook),
  });
  const data = await response.json();
  author.value = "";
  title.value = "";

  const tr = document.createElement("tr");
  const titleTd = document.createElement("td");
  const authorTd = document.createElement("td");
  const btnsTd = document.createElement("td");
  const editBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");
  editBtn.addEventListener("click", editBook);
  deleteBtn.addEventListener("click", deleteBook);
  editBtn.textContent = "Edit";
  deleteBtn.textContent = "Delete";

  titleTd.textContent = data.title;
  authorTd.textContent = data.author;
  tr.setAttribute("id", data._id);

  btnsTd.append(editBtn, deleteBtn);
  tr.append(titleTd, authorTd, btnsTd);
  listOfBooks.append(tr);
}

async function editBook(ev) {
  const id = ev.target.parentElement.parentElement.id;
  const curentTitle =
    ev.target.parentElement.parentElement.children[0].textContent;
  const curentAuthor =
    ev.target.parentElement.parentElement.children[1].textContent;

  title.value = curentTitle;
  author.value = curentAuthor;
  formHeader.textContent = "Edit FORM";
  ev.target.parentElement.parentElement.remove();

  const bookDetails = { author: author.value, title: title.value };

  const updateRequest = await fetch(`${url}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bookDetails),
  });
  const data = await updateRequest.json();
}

async function deleteBook(ev) {
  const id = ev.target.parentElement.parentElement.id;
  ev.target.parentElement.parentElement.remove();

  const deleteRequest = await fetch(`${url}/${id}`, {
    method: "DELETE",
  });
}

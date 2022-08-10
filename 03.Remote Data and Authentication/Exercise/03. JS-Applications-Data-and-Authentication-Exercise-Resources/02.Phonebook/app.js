const url = `http://localhost:3030/jsonstore/phonebook`;
const phoneBook = document.getElementById("phonebook");
const loadBtn = document.getElementById("btnLoad");

//Не слагаш .валю тук, а ЧАК в ПОСТ ЗАЯВКАТА
const personName = document.getElementById("person");
const personPhone = document.getElementById("phone");
const createBtn = document.getElementById("btnCreate");

loadBtn.addEventListener("click", loadPhoneBook);
createBtn.addEventListener("click", createContact);

async function createContact() {
  const contact = { person: personName.value, phone: personPhone.value };
  // Или мойе обекта да се подаде директно долу на бодито

  const responce = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contact),
  });
  personName.value = ''
  personPhone.value = ''

}

async function loadPhoneBook() {
 // Clear the UL everytime before new request
  phoneBook.innerHTML = ''

  //get data
  let responce = await fetch(url);
  let data = await responce.json();

  //Create li and display recieved data
  Object.values(data).map((p) => {
    let newContact = document.createElement("li");
    let delBtn = document.createElement("button")
    delBtn.addEventListener('click', deleteContact)
    delBtn.textContent ='Delete'
    delBtn.setAttribute('id', p._id)
    newContact.textContent = `${p.person}, ${p.phone}`;
    newContact.append(delBtn)
    phoneBook.append(newContact);
  });
  
}

async function deleteContact(ev) {
    const id = ev.target.id;
    ev.target.parentElement.remove()
    const response = await fetch(`${url}/${id}`, {
        method: 'DELETE',
        // headers: {
        //     'Content-type': 'application/json'
        // }
    });


}

// function attachEvents() {}
//attachEvents();

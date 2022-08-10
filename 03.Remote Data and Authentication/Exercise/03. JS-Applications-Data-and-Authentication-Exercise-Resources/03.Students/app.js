const url = `http://localhost:3030/jsonstore/collections/students`
const studentsTable = document.querySelector('tbody')
const inputFields = document.querySelectorAll('input')
const [firstName, lastName, facNum, grade] = inputFields
const addBtn = document.getElementById('submit')
addBtn.addEventListener('click', addStudent)

async function addStudent(ev){
  ev.preventDefault()
if (firstName.value == '' || lastName.value == '' || facNum.value == ''){
 return alert ('All fields are required!')
}

const data = {
  FirstName: firstName.value,
  LastName: lastName.value,
  FacultyNumber: facNum.value,
  Grade: grade.value,
}

const request = fetch(url,{
  method: "Post",
  headers: {"Content-Type": "application/json"},
  body: JSON.stringify(data)
})

//Adding ne student to the table
let tr = document.createElement('tr')
let student = Object.values(data);
for (let i = 0; i < student.length; i++) {
  tr.insertCell(i).textContent = student[i] 
}
studentsTable.append(tr)
inputFields.forEach(f => f.value = '')
}


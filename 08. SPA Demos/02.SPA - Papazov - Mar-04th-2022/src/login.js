import { updateAuth } from "./auth.js"

const login = document.querySelector('.login')
const form = login.querySelector('form')
const url = `http://localhost:3030/users/login`

export function loginView() {
  login.style.display = 'block'
}

// Login POST request
form.addEventListener('click', async(e) =>{
  e.preventDefault()

  const formData = new FormData(form)
  const email = formData.get('email');
  const password = formData.get('password')
  const userData = {email, password}

  if(email == '' || password == '') return
  const res = await fetch(url,{
    method: 'post',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(userData),
  });
  const data = await res.json()
  console.log(data);
  
  updateAuth()
  alert('Welcome!')
  
  // const logedUser = {
  //   email,
  //   password,
  //   username: data.username,
  //   id: data._id,
  //   accessToken: data.accessToken,
  // }
  localStorage.setItem('user', JSON.stringify(data))
})




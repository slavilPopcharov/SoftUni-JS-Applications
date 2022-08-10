import { showHome } from "./home.js"
import { checkUser } from "./util.js"

const section = document.getElementById('registerView')
const form = document.getElementById('reg')

form.addEventListener('submit', onRegister)

export function showRegister() {
  section.style.display = "block"
}

async function onRegister (ev){
  ev.preventDefault()
  
const formData = new FormData(form);
const email = formData.get('email').trim()
const password = formData.get('password').trim()
const repass = formData.get('repass').trim();

try{
  if(email == '' || password == ''){
    throw new Error('All fields are required!');
  }
  if(password != repass){
    throw new Error('Passwords dont match')
  }

  const res = await fetch('http://localhost:3030/users/register',{
    method: 'POST',
    headers:{ 'content-type': 'application/json'},
    body: JSON.stringify({ email, password })
  });

  if (res.ok == false){
    const error = await res.json();
    throw new Error (error.message)
  }

  //Using destructuring:
  const { accessToken, _id} = await res.json()
  const userData= {
    email,
    accessToken,
    id: _id
  };
  sessionStorage.setItem('userData', JSON.stringify(userData));
  checkUser()
  showHome()
  section.style.display = 'none'
}catch(err){
alert (err.message)
}
}
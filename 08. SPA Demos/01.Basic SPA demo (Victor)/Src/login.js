import { showHome } from "./home.js";
import { checkUser } from "./util.js";

  const section = document.getElementById('loginView')
  const form = document.getElementById('log')
  form.addEventListener('submit',onSubmit)


export function showLogin() {
  section.style.display = "block"
}

async function onSubmit (ev){
  ev.preventDefault();
  const formData = new FormData(form);
  const email = formData.get('email').trim();
  const password = formData.get('password').trim()
  

  try{
    const res = await fetch('http://localhost:3030/users/login',{
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({email, password})
    })

    if (res.ok == false){
      //Вадим грешката от бодито на респонса, който има свойство message.
      const error = await res.json();
      throw Error(error.message)
    }

    const data = await res.json()

    //Съхраняваме данните на юзъра
    const userData = {
      email: data.email,
      accessToken: data.accessToken,
      id: data._id
    };


    sessionStorage.setItem('userData', JSON.stringify(userData))

    // redirecting: import and call showHome()
    showHome()
    checkUser()
    section.style.display = 'none'


  } catch (err){
    alert(err.message)
  }
}
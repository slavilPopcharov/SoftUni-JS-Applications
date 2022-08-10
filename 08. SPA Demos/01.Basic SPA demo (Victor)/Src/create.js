import { showCatalog } from "./catalog.js"

const section = document.getElementById('createView')
const form = document.getElementById('create')

form.addEventListener('submit', onCreate)

export function showCreate() {
  section.style.display = "block"
}

async function onCreate(ev) {
  ev.preventDefault()
  const formData = new FormData(form);
  const title = formData.get('title').trim();
  const movieTitle = document.getElementById('createMovieTitle')
  movieTitle.value = ''
  if(movieTitle.value === ''){
    return
  }
  try{
  const res = await fetch('http://localhost:3030/data/movies',{
    method:'post',
    headers:{
    'Content-type': 'application/json',
    "X-Authorization": JSON.parse(sessionStorage.getItem('userData')).accessToken
  },
    body: JSON.stringify({title})
  });

  if(res.ok == false){
    const err = await res.json()
    throw new Error (err.message)
  }
 // const data = await res.json() Това са данните от респонса, които в случая не ни интерсуват, 
 // вместо това викаме каталог вюто и скриваме createView:
 section.style.display = 'none'
 showCatalog()
}catch (err){
  alert(err.message)
}
  
}
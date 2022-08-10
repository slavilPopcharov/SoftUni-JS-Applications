import { updateAuth } from "./auth.js";
import { router } from "./router.js";

updateAuth();




const navigationElement = document.querySelector('.navigation');
navigationElement.addEventListener('click', (e) =>{
    e.preventDefault()
    if(e.target.tagName == 'A'){
        document.querySelector('.active').classList.remove('active')
        e.target.classList.add('active')
        const url = new URL (e.target.href).pathname
       router(url) 
    }
})



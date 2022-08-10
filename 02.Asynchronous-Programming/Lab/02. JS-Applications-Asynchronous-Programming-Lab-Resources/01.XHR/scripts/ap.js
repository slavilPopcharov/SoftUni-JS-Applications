const btn = document.querySelector('button')
   btn.addEventListener('click', Repos)

function Repos() {
   
   const res = fetch('https://api.github.com/users/testnakov/repos')
     .then ((responce)=>responce.json())
     .then((data)=>console.log(data))
return res
}
Repos()
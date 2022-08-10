import { showHome } from "./home.js";

// visualize corect nav for user or guest:
export function checkUser() {
  const userData = JSON.parse(sessionStorage.getItem('userData'))
  if (userData != null){
    document.getElementById('greeting').textContent = `Welcome, ${userData.email}!`
    document.getElementById('userNav').style.display = 'inline-block';
    document.getElementById('guestNav').style.display = 'none'
  }else{
    document.getElementById('userNav').style.display = 'none';
    document.getElementById('guestNav').style.display = 'inline-block'
  }
}// Now call func at the start of the app 

//Logout Трием безусловно сесията на потребителя и не ни интерсува отг от сървъра.
export function onLogout() {
  const userData = JSON.parse(sessionStorage.getItem('userData'))

  fetch ('http://localhost:3030/users/logout',{
    method: "get",
    headers: { "X-Authorization": userData.accessToken },
    
  });

  sessionStorage.removeItem('userData');
  checkUser();
  showHome()
}



//Моя версия. липсва заявка!!!
 function Logout(ev){
  if (ev.target.tagName === "A" && ev.target.textContent == 'Logout'){
  ev.preventDefault();
  document.getElementById('userNav').style.display = 'none';
  document.getElementById('guestNav').style.display = 'inline-block'
  sessionStorage.clear()
  }
}


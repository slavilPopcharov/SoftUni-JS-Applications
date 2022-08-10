const guestNavigation = document.getElementById("guest");
const userNavigation = document.getElementById("user");

// Change the App view depending on user/guest
export function updateAuth (){

  // 'user' го имаме вече сет-ннато при заявката за логин
  let serializedUser = localStorage.getItem('user');

  if(serializedUser){
    //let user = JSON.parse(serializedUser);
    guestNavigation.style.display = 'none';
    userNavigation.style.display = 'inline';
  }else{
    guestNavigation.style.display = 'inline';
    userNavigation.style.display = 'none';
  }
}

export function getToken(){
  let serializedUser = localStorage.getItem('user');

  if(serializedUser){
    let user = JSON.parse(serializedUser)
    return user.accessToken
  }
}
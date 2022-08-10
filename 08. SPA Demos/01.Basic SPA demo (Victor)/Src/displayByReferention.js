const section = document.getElementById('homeView')
section.remove()

function showHome (){
  // Хващаме родителя и подменяме предишната секция с текущата
  document.querySelector('main').replaceChildren(section)
}

//Same code for other views
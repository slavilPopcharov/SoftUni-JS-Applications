// Cleaner in two separated funcs instead of one.
export async function showCatalog() {
  document.getElementById('catalogView').style.display = "block"

  document.getElementById('movies').replaceChildren('Loading...')

  const res = await fetch('http://localhost:3030/data/movies')
  const movies = await res.json()

  const ul = document.getElementById('movies')
  const fragment = document.createDocumentFragment()
  movies.map(createMovieItem).forEach(children => fragment.appendChild(children))
  ul.replaceChildren(fragment)

  

  //ul.replaceChildren(...movies.map(createMovieItem))
 
}

function createMovieItem(movie) {
  const li = document.createElement('li');
  li.textContent = movie.title;
  return li;
}

  // Маp операцията: Всяко movie отива като параметър в createMovieItem по референция. 
  //movies.map(createMovieItem) === movies.map(item => createMovieItem(item))

  // const ul = document.getElementById('movies')
  // movies.map(m => {
  //   const li = document.createElement('li')
  //   li.textContent = m.title;
  //   ul.append(li)
  // }) // TO DO: clear content everytime befor new request
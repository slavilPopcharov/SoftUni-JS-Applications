import { del, get, post, put } from "./requests.js";

//RENAME FUCNTIONS
export async function getAllGames() {
  return get('/data/games?sortBy=_createdOn%20desc')
  /////data/games?sortBy=_createdOn%20desc&distinct=category
}

export async function getTopGames() {
  return get('/data/games?sortBy=_createdOn%20desc&distinct=category')
}

export async function getGameByID(id) {
  return get('/data/games/' + id)
}

export async function createNewGame(meme){
  return post('/data/games/' , meme)
}

export async function deleteThisGame(id) {
  return del('/data/games/' + id )
 
  
}

export async function uppdateGame (id, meme){
    return put('/data/games/' + id, meme)
  }

  export async function getUserMemes(userId) {
    return get(`/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
    
  }

//RENAME FUCNTIONS

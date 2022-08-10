import { updateAuth } from "./auth.js"

export function logoutView() {
  localStorage.removeItem('user')
  updateAuth()
  alert('You logged out')
}
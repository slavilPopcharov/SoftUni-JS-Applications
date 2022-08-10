import { html } from '../lib.js'

const homeTemplate = () => html `

`;

export function homeView (ctx){
  ctx.render(homeTemplate())
}
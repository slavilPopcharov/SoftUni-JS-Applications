import { deleteThisGame, getGameByID } from "../api/getGames.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

const gameDetailsTemplate = (details, isOwner, onDel) => html`
 <section id="game-details">
  <h1>Game Details</h1>
  <div class="info-section">

      <div class="game-header">
          <img class="game-img" src=${details.imageUrl} />
          <h1>${details.title}</h1>
          <span class="levels">MaxLevel: ${details.maxLevel} </span>
          <p class="type">${details.category}</p>
      </div>

      <p class="text">
         ${details.summary}
      </p>

      <!-- Bonus ( for Guests and Users ) -->
      <div class="details-comments">
          <h2>Comments:</h2>
          <ul>
              <!-- list all comments for current game (If any) -->
              <li class="comment">
                  <p>Content: I rate this one quite highly.</p>
              </li>
              <li class="comment">
                  <p>Content: The best game.</p>
              </li>
          </ul>
          <!-- Display paragraph: If there are no games in the database -->
          <p class="no-comment">No comments.</p>
      </div>

      <!-- Edit/Delete buttons ( Only for creator of this game )  -->
    ${isOwner ?
    html` <div class="buttons">
          <a href="/edit/${details._id}" class="button">Edit</a>
          <a @click=${onDel} href="javascript:void(0)" class="button">Delete</a>
      </div>
  </div>`
  : ''
    }

  <!-- Bonus -->
  <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
  <article class="create-comment">
      <label>Add new comment:</label>
      <form class="form">
          <textarea name="comment" placeholder="Comment......"></textarea>
          <input class="btn submit" type="submit" value="Add Comment">
      </form>
  </article>

</section>
`;

export async function gameDetailsView(ctx) {

  const id = ctx.params.id;
  const userData = getUserData();
  const details = await getGameByID(id);
  const isOwner = userData?.id == details._ownerId;
 
  async function onDel() {
    const choice = confirm('Are you shure?')
    if(choice){
       await deleteThisGame(id)
       ctx.page.redirect('/')
    }
  }
  
  ctx.render(gameDetailsTemplate(details, isOwner, onDel));
}

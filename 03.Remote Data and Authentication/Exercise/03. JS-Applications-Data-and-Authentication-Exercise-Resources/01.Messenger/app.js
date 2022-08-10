const url = `http://localhost:3030/jsonstore/messenger`;
const chatBox = document.getElementById("messages");
const [user, userMessage, sendBtn, refreshBtn] = document.querySelectorAll("input");

function attachEvents() {
  sendBtn.addEventListener("click", sendMsg);
  refreshBtn.addEventListener("click", resiveMsg);
}

 function sendMsg() {
    // 01. create obj with the data we want to send. Put it as arg. to the .stringify method.
    const sentMsg = {
        author: user.value, 
        content: userMessage.value
    }
 const data = fetch(url,{
    method: 'post',
    headers:{
        'Content-Type': 'application/json',
      },
    body: JSON.stringify(sentMsg)
    
})
}

async function resiveMsg() {
  const responce = await fetch(url);
  const data = await responce.json();
  chatBox.textContent = Object.values(data)
    .map((m) => `${m.author}: ${m.content}`)
    .join("\n");
}

attachEvents();

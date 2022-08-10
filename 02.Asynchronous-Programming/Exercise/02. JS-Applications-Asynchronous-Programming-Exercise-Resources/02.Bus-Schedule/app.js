function solve() {
  const curentStopElement = document.querySelector("#info span");
  const departBtnElement = document.getElementById("depart");
  const arriveBtnElement = document.getElementById("arrive");

  let stop = {
    name: "depot",
    next: "depot",
  };
  
  async function depart() {
    const url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`;

    const responce = await fetch(url);
    stop = await responce.json();
    curentStopElement.textContent = `Next stop: ${stop.name}`;
    departBtnElement.disabled = true;
    arriveBtnElement.disabled = false;
    
  }

  function arrive() {
    curentStopElement.textContent = `Arriving at ${stop.name}`;

    departBtnElement.disabled = false;
    arriveBtnElement.disabled = true;
  }


  return {
    depart,
    arrive,
  };
}

let result = solve();

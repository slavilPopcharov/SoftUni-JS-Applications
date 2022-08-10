async function getInfo() {
  // Valid bus IDs 1287, 1308, 1327 and 2334.
  const stopId = document.getElementById("stopId").value;
  const busStop = document.getElementById("stopName");
  const listOfBuses = document.getElementById("buses");
  const url = ` http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

  try {
    // Преди всяка нова заявка изчистваме съд-то на UL-a
    listOfBuses.replaceChildren()


    const res = await fetch(url);

    //проверката е тук, преди респонса на се преработи в дата
    // if (res.status !== 200) {
    //   alert("Error!");
    // }

    const data = await res.json();

    busStop.textContent = data.name;

    Object.entries(data.buses).forEach((b) => {
      const arivingBuses = document.createElement("li");
      arivingBuses.textContent = `Bus ${b[0]} arrives in ${b[1]} minutes`;
      listOfBuses.appendChild(arivingBuses);
    });
  } catch (error) {
    busStop.textContent = 'Error!'
  }
}

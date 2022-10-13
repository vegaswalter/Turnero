const turnos = document.querySelector(".turnos-container");

function fetchTurnos(id){
    fetch(`http://localhost:3001/api/turnos/${id}`)
    .then((res) => res.json())
    .then((data) => console.log(data))
}

fetchTurnos(1);